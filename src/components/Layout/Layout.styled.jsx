import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-image: linear-gradient(
    to bottom,
    rgba(53, 34, 128, 0.871),
    rgba(24, 26, 91, 0.892)
  );
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  padding: 0 20px;
  box-shadow: 7px 1px 24px -7px rgba(0, 0, 0, 0.75);
  min-height: 80px;
 margin-bottom: 20px;
`;
export const StyledLink = styled(Link)`
  padding: 5px 15px;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #ebd8ff;
  transition: all 35ms ease-in-out;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.2) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }
`;


export const Content = styled.main`
    min-height: 100vh - 80px;
`
