import { socials } from "../../dataSocials/socials";
import { FooterBox, Container, SocialLink } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterBox>
      <Container>
        {socials.map(({ id, social, path }) => (
          <li key={id}>
            <SocialLink href={path} target='_blank' rel='noopener noreferrer'>
              {social}
            </SocialLink>
          </li>
        ))}
      </Container>
    </FooterBox>
  );
};
export default Footer;
