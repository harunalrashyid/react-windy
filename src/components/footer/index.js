import React from "react"
import styled from "styled-components";
import { Container } from "../../styles/common";

const Footer = () => (
  <FooterSection>
    <FooterContainer>
      <FooterCopyright>
        <span>© { new Date().getFullYear() } Windy. API by </span> 
        <FooterCopyrightLink 
          href="https://openweathermap.org/" 
          target="_blank" 
          rel="noopener noreferrer"
        >OpenWeather</FooterCopyrightLink>
      </FooterCopyright>
    </FooterContainer>
  </FooterSection>
)

export default Footer

const FooterSection = styled.footer`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
`
const FooterContainer = styled(Container)``

const FooterCopyright = styled.p`
  color: #ffffff;
  font-size: 0.75rem;
  padding: 1.25rem 0;
  margin: 0;
`

const FooterCopyrightLink = styled.a`
  color: inherit;
  transition: color .2s ease;

  &:hover {
    color: #f5f5f5;
  }
`
