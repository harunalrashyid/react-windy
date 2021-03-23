import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props => props.fluid && `max-width: 100% !important;`}
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

export const Btn = styled.button`
  display: inline-block;
  font-size: 1rem;
  min-width: 175px;
  height: 44px;
  line-height: 28px;
  padding: 0.5rem 1rem;
  box-shadow: none;
  text-align: center;
  outline: 0;
  border: none;
  background: #fab800;
  transition: all .2s ease-in-out;

  &:hover {
    background: #ffc82e;
  }

  &:focus,
  &:active {
    box-shadow: none;
  }
`
