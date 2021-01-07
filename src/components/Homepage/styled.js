import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Window = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column; 
  width: 300px;
  height: 500px;
  background-color: #ede8d7;
  border: solid 6px #24346c;
`;

export const LoginWindowTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 312px;
  height: 48px;
  border-radius: 8px 8px 0 0;
  background-color: #2163f3;
`;

export const SignInLabel = styled.div`
  margin-left: 30px; 
  font-family: W95FA;
  font-size: 23px;
  margin-top: 5px;
  color: #ffffff;
`;

export const SignInExitSymbol = styled.img`
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-top: 3px;
`;

export const SignInExitButton = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 7px;
  border: solid 1px #fff7f7;
  background-color: #d5542f;
  margin-right: 10px; 
`;

export const LoginWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 180px;
  color: white;
  border: solid 1px #26335e;
  background-color: #000e8a;
  margin-top: 10px;
  margin-left: 19px;
  margin-right: 19px;
`;

export const KimLogoDiv = styled.div`
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 17vw;
  margin-top: 15px;
`;

export const KimLogo = styled.img`
  height: 120px;
  width: 120px;
  margin-top: 5px;
`;

export const LoginWindowText = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 17vw;
  margin-top: 10px;
`;

export const Kim = styled.p`
  font-family: TheSansBlack-Caps;
  font-size: 22px;
`;

export const InstantMessenger = styled.p`
  font-family: TheSans-Italic;
  font-size: 22px;
  margin-left: 6px;
`;

export const Line = styled.hr`
  width: 270px;
  border: solid 0.5px #707070;
  margin: 10px 15px 0;
`;

export const ScreeName = styled.div`
  font-family: TheSans-B7BoldItalic;
  font-size: 16px;
  margin: 10px 91px 0 25px;
  text-align: left;
  color: #343153;
`;

export const ScreenNameBox = styled.div`
  display: flex;
  align-items: flex-end;
  border: solid 1px #707070;
  margin: 2px 0 0 25px;
  `;

export const ScreenNameOption = styled.select`
  width: 253px;
  height: 30px;
  font-family: W95FA;
  font-size: 15px;
  color: #343153
  backdrop-filter: blur(30px);
  border: 1px #707070;
`;

export const Password = styled.div`
  width: 102px;
  height: 17px;
  margin: 15px 10px 0 25px;
  font-family: TamilSangamMN;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: #343153;
`;

export const PasswordBox = styled.div`
  display: flex;
  width: 253px;
  height: 30px;
  margin: 0 0 0 25px;
  border: solid 1px #707070;
  background-color: #ffffff;
`;

export const PasswordSet = styled.p`
  font-family: W95FA;
  font-size: 25px;
  margin-top: 12px;
  margin-left: 5px;
`;

export const StaticStuff = styled.div`
  display: flex;
  margin-top: 7px;
  margin-left: 26px;
`;

export const Checkbox = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 5px;
  border: solid 1px #707070;
  background-color: #ffffff;
`;

export const SavePassworddiv = styled.div`
  display: flex;
  align-items: flex-end;
  opacity: 0.25;
`;

export const SavePassword = styled.div`
  font-family: W95FA;
  font-size: 13px;
  text-align: left;
  color: #000000;
`;

export const AutoLogindiv = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 35px;
  opacity: 0.25;
`;

export const AutoLogin = styled.div`
  margin: 2px 0 0 0px;
  font-family: W95FA;
  font-size: 13px;
  text-align: left;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 30px;
`;

export const HelpButton = styled.div`
  width: 20px;
  height: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 3px #707070;
  background-color: #ffffff;
  margin-left: 26px;
`;

export const Helpimg = styled.img`
  width: 15px;
  height: 12px;
  margin-top: 5px;
`;

export const ToolButton = styled.div`
  width: 20px;
  height: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 3px #707070;
  background-color: #ffffff;
  margin-left: 18px;
`;

export const Toolimg = styled.img`
  width: 15px;
  height: 12px;
  margin-top: 5px;
`;

export const ButtonLabels = styled.div`
  display: flex;
`;

export const Help = styled.div`
  width: 35px;
  height: 18px;
  margin-top: 3px;
  margin-left: 22px;
  font-family: W95FA;
  font-size: 15px;
`;

export const Setup = styled.div`
  width: 35px;
  height: 18px;
  margin-top: 3px;
  margin-left: 10px;
  font-family: W95FA;
  font-size: 15px;
`;

export const SignInButton = styled.div`
  width: 35px;
  height: 35px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 3px #707070;
  background-color: #ffffff;
  margin-left: 110px;
`;

export const SignInimg = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 3px;
`;

export const SignIn = styled(Link)`
  width: 80px;
  height: 18px;
  margin-top: 3px;
  margin-left: 85px;
  font-family: W95FA;
  font-size: 15px;

  &.active {
    color: red;
  }
`;

export const Footer = styled.div`
  align-self: center;
  width: 110px;
  margin-top: 30px;
  font-family: W95FA;
  font-size: 17px;
  color: #000000;
`;