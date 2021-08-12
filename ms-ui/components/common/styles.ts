import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  font-weight: 400;
`;

export const Logo = styled.div`
  width: 150px;
  height: 50px;
  margin-right: auto;
  margin-left: 1rem;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
`;