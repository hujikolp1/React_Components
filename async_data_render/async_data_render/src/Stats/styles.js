import styled from 'styled-components';
import { Link } from 'react-router-dom';




export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #541516;
  background-image: url("/images/background.png");
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
  padding: 38px 30px;

  @media only screen and (min-width: 768px) {
    padding: 38px 70px;
  }
`;

export const TopBar = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
`; 

export const TwoByOne = styled.div`
  display: grid; 
  grid-template-columns: 2fr 2fr; 
`; 


export const Logo = styled.h1`
  background-image:url("/images/logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  width: 150px;
  height: 60px;
  font-size: 0;
  text-indent: -9999;
  overflow: hidden;
  margin-bottom: 38px;
`;

export const Inner = styled.div`
  background-color: #ffffff;
  max-width: 800px;
  margin: 0 auto;
  padding: 38px 30px;

  @media only screen and (min-width: 768px) {
    padding: 38px 70px;
  }
`;

export const Title = styled.h2`
  font-family: "AppleGothic";
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  margin: 0 0 40px;
  padding-bottom: 15px;
  border-bottom: 4px #D8D8D8 solid;

  @media only screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 60px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "AppleGothic";
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  display: inline-block;
  padding: 0 8px;
  @media only screen and (max-width:768px){
    font-size: 14px;
    font-weight:600;
  }
  @media only screen and (max-width:375px){
    font-size: 10px;
    font-weight: 600;
  }
`;

export const Footer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const FooterLink = styled.a`
  font-family: "AppleGothic";
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  text-decoration: underline;
`;
