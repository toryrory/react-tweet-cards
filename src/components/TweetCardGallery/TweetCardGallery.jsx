import TweetCard from "../TweetCard/TweetCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Gallery, Button} from "./TweetCardGallery.styled";
import Loader from "../Loader/Loader";
import BtnBack from "../BtnBack/BtnBack";

axios.defaults.baseURL = "https://648b167917f1536d65ea5418.mockapi.io";

const TweetCardGallery = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  let initialized = true;

  useEffect(() => {
    if (initialized) {
      initialized = false;

      const fetchData = async () => {
        const params = new URLSearchParams({
          limit: 3,
          page: page,
        });
        try {
          setIsLoading(true);
          const { data } = await axios.get(`/users?${params}`);

          setTweets((prevState) => [...prevState, ...data]);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [page]);

  return (
    <>
      <BtnBack/>
      <Gallery>
        {tweets &&
          tweets.map(({ id, followers, tweets, avatar }) => (
            <li key={id}>
              <TweetCard
                followers={followers}
                tweets={tweets}
                avatar={avatar}
                id={id}
              />
            </li>
          ))}
      </Gallery>
      {tweets.length < 18 && !isLoading && (
        <Button onClick={() => setPage((prevState) => prevState + 1)}>
          Load More
        </Button>
      )}
      {isLoading && <Loader />}
    </>
  );
};
export default TweetCardGallery;
