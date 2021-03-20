import React from "react"
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components"

import { Btn, Container, Row } from "../../styles/common"

const Header = () => (
  <HeaderSection id="Header">
    <HeaderContainer>
      <HeaderRow>
        <HeaderColumnLogo>
          <HeaderLogo to="/about">Windy</HeaderLogo>
        </HeaderColumnLogo>
        <HeaderColumnBtn>
          <HeaderBtn as="a" href="https://github.com/harunalrashyid/react-windy" rel="noopener noreferrer" target="_blank">GitHub</HeaderBtn>
        </HeaderColumnBtn>
      </HeaderRow>
    </HeaderContainer>
  </HeaderSection>
)

export default Header

const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
`

const HeaderContainer = styled(Container)``

const HeaderRow = styled(Row)`
  align-items: center;
`

const HeaderColumnLogo = styled.div`
  flex: 0 0 200px;
  max-width: 200px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  width: 100%;
`

const HeaderColumnBtn = styled.div`
  flex: 1;
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  width: 100%;
`

const HeaderLogo = styled(GatsbyLink)`
  display: inline-block;
  padding: 1.5rem 1rem;
`

const HeaderBtn = styled(Btn)``
