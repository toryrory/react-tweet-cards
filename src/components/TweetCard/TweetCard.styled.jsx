import styled from "styled-components";
import dialog from "../../img/dialog.png"
import logo from "../../img/logo.png";
import circle from "../../img/circle.png";
import circleBg from "../../img/circle-bg.png";
import line from "../../img/line.png";
import avatar from "../../img/Hansel.png";

export const Container = styled.div`
position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const Images = styled.div`
  max-width: 100%;
  height: 100%;
  background-image: url(${logo}), url(${dialog}), url(${circle}), 
    url(${avatar}) , url(${circleBg}), url(${line});
  background-repeat: no-repeat;
  background-position: 20px 20px, 28px 36px, center, center,
    center, center;
`;

export const InfoContainer = styled.div`
  padding-top: 284px;
`;
export const Text = styled.p`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;
  :first-child {
    margin-bottom: 16px;
  }
  :nth-child(2) {
    margin-bottom: 26px;
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;

  width: 196px;
  height: 50px;

  background: ${({ subscription }) =>
    subscription ? "#5CD3A8" : "#ebd8ff"}; //

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
  transition: all 135ms ease-in-out;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }
`;

export const Avatar = styled.img`
    position: absolute;
    top: 193px;
    left: 159px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
`