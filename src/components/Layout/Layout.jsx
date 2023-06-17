import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import {
  Header,
  StyledLink,
  Content,
} from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <Header>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='tweets'>Tweets</StyledLink>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer/>
    </>
  );
};
export default Layout;
