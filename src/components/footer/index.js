import React from "react"
import styled from "styled-components";
import { Container } from "../../styles/common";

const Footer = () => (
  <FooterSection>
    <FooterContainer>
      <FooterCopyright>© { new Date().getFullYear() } Windy. API by OpenWeather</FooterCopyright>
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
