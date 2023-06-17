import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  StyledLink,
  Button,
} from "../TweetCardGallery/TweetCardGallery.styled";

const BtnBack = () => {
  return (
    <StyledLink to='/'>
      <Button
        style={{
          marginLeft: "40px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <AiOutlineArrowLeft color={"black"} /> Back
      </Button>
    </StyledLink>
  );
};
export default BtnBack;
