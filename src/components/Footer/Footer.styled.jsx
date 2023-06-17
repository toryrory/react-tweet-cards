import styled from "styled-components";

export const FooterBox = styled.footer`
  background-image: linear-gradient(
    to bottom,
    rgba(24, 26, 91, 0.892),
    rgba(53, 34, 128, 0.871)
  );
  box-shadow: 7px 1px 24px -7px rgba(0, 0, 0, 0.75);
  text-align: center;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  min-height: 80px;
  width: 100%;
  margin-top: 20px;
`;
export const Container = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
export const SocialLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #ebd8ff;
`;