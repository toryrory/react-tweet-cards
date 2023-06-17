import {
  Container,
  Images,
  Text,
  InfoContainer,
  Button,
  Avatar,
} from "./TweetCard.styled";
import { useState, useEffect } from "react";

const TweetCard = ({ followers, avatar, tweets, id }) => {
  const [subscription, setSubscription] = useState(
    JSON.parse(localStorage.getItem(`tweet-subscr-${id}`)) || false
  );
  const [followersQuantity, setFollowersQuantity] = useState(
    JSON.parse(localStorage.getItem(`tweet-followers-${id}`)) || followers
  );
  const [isMount, setIsMount] = useState(true);

    const handleSubscription = async () => {
    setSubscription((prevState) => !prevState);
  };

  useEffect(() => {
    if (isMount) {
      setIsMount(false);
      return;
    }
    subscription
      ? setFollowersQuantity((prevState) => prevState + 1)
      : setFollowersQuantity((prevState) => prevState - 1);
  }, [isMount, subscription]);

  useEffect(() => {
    if (isMount) {
      setIsMount(false);
      return;
    }
    localStorage.setItem(`tweet-subscr-${id}`, JSON.stringify(subscription));
    localStorage.setItem(
      `tweet-followers-${id}`,
      JSON.stringify(followersQuantity)
    );
   
  }, [subscription, followersQuantity, isMount, id]);

  return (
    <Container>
      <Images>
        <Avatar src={avatar} alt='avatar' />
        <InfoContainer>
          <Text>{tweets} Tweets</Text>
          <Text>
            {new Intl.NumberFormat("en").format(followersQuantity)} followers
          </Text>
          <Button type="button" subscription={subscription} onClick={handleSubscription} id={id}>
            {subscription ? "Following" : "Follow"}
          </Button>
        </InfoContainer>
      </Images>
    </Container>
  );
};
export default TweetCard;
