import React from 'react';
import styled from 'styled-components';
import exit from '../images/exit.svg'
import help from '../images/help.svg'
import tool from '../images/tool.svg'
import signin from '../images/sign-in.svg'
import {
  HomepageContainer,
  LoginWindowTopBar,
  SignInLabel,
  SignInExitButton,
  SignInExitSymbol,
  LoginWindow,
  Window,
  LoginWindowText,
  Kim,
  InstantMessenger,
  Line,
  ScreeName,
  ScreenNameBox,
  ScreenNameOption,
  Password,
  PasswordBox,
  PasswordSet,
  Checkbox,
  SavePassworddiv,
  SavePassword,
  StaticStuff,
  AutoLogindiv,
  AutoLogin,
  Buttons,
  HelpButton,
  Helpimg,
  ToolButton,
  Toolimg,
  SignInButton,
  SignInimg,
  ButtonLabels,
  Help,
  Setup,
  SignIn,
  Footer
} from './styled';

const Homepage = () => {

  return(
    <HomepageContainer>
      <LoginWindowTopBar>
          <SignInLabel>
            <p>Sign In</p>
          </SignInLabel>
          <SignInExitButton>
            <SignInExitSymbol src={exit} alt='exit'></SignInExitSymbol>
          </SignInExitButton>
        </LoginWindowTopBar>
      <Window>
        <LoginWindow>
          <LoginWindowText>
            <Kim>KIM</Kim>
            <InstantMessenger>Instant Messenger</InstantMessenger>
          </LoginWindowText>
        </LoginWindow>
        <Line />
        <ScreeName>
          ScreenName
        </ScreeName>
        <ScreenNameBox>
          <form>
            <ScreenNameOption id='screenname' name='screenname'>
              <option value='none' selected disabled hidden>
              </option>
              <option value='kim_the_engineer'>
                kim_the_engineer
              </option>
            </ScreenNameOption>
          </form>
        </ScreenNameBox>
        <Password>
          Password
        </Password>
        <PasswordBox>
          <PasswordSet>***********</PasswordSet>
        </PasswordBox>
        <StaticStuff>
          <SavePassworddiv>
            <Checkbox/>
            <SavePassword>
                Save Password
            </SavePassword>
          </SavePassworddiv>
          <AutoLogindiv>
            <Checkbox/>
            <AutoLogin>Auto-login</AutoLogin>
          </AutoLogindiv>
        </StaticStuff>
        <Buttons>
          <HelpButton>
            <Helpimg src={help} alt='help' />
          </HelpButton>
          <ToolButton>
            <Toolimg src={tool} alt='tool' />
          </ToolButton>
          <SignInButton>
            <SignInimg src={signin} alt='signin' />
          </SignInButton>
        </Buttons>
        <ButtonLabels>
          <Help>
            Help
          </Help>
          <Setup>
            Setup
          </Setup>
          <SignIn to="/loadingpage">
            Sign In
          </SignIn>
        </ButtonLabels>
        <Footer>
          Version 1.0.0.1
        </Footer>
      </Window>
    </HomepageContainer>
  );
}

export default Homepage;