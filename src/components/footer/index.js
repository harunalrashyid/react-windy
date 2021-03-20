import React from "react"
import styled from "styled-components";
import { Container } from "../../styles/common";

const Footer = () => (
  <FooterSection>
    <FooterContainer>&copy; 2021 Windy</FooterContainer>
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
