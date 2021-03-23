import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import bgMorning from "../images/morning.svg";
import bgDay from "../images/day.svg";
import bgEvening from "../images/evening.svg";
import sun from "../images/sun.svg";
import moon from "../images/moon.svg";

import { Container, Row } from "../styles/common"

// markup
const IndexPage = () => {

  const [ currentHour, setCurrentHour ] = useState('')

  const today = new Date()
  const MORNING_HOUR = 12
  const DAY_HOUR = 18
  const EVENING_HOUR = 24

  useEffect(() => {
    /* eslint-disable */
    if ( today.getHours() < MORNING_HOUR ) {
      setCurrentHour('morning')
    } else if ( today.getHours() < DAY_HOUR ) {
      setCurrentHour('day')
    } else if ( today.getHours() < EVENING_HOUR ) {
      setCurrentHour('evening')
    } else {
      setCurrentHour('morning')
    }

  }, [])

  /*
  const changeIndexBackground = () => {
    if (currentHour === '') {
      return setCurrentHour('evening')
    }

    return setCurrentHour('')
  }
  */

  return (
    <Layout>
      <MainIndex type={ currentHour }>
        <Container>
          <ContentRow>
            <ContentColumn>
              <ContentTitle>Jakarta</ContentTitle>
              <ContentTemperature>24 °C</ContentTemperature>
              <ContentStatus>Cloudly</ContentStatus>
            </ContentColumn>
            <ContentColumnRight>
              <img src={ currentHour === 'evening' ? moon : sun } alt="moon or sun" width="150" />
              <ContentInfo>
                <ContentInfoLabel>Humidity</ContentInfoLabel>
                <ContentInfoValue>58%</ContentInfoValue>
              </ContentInfo>
              <ContentInfo>
                <ContentInfoLabel>Wind</ContentInfoLabel>
                <ContentInfoValue>2.57 K/M</ContentInfoValue>
              </ContentInfo>
            </ContentColumnRight>
          </ContentRow>
        </Container>
      </MainIndex>
    </Layout>
  )
}

export default IndexPage

// styles
const MainIndex = styled.main`
  background-image: url( ${props => {
    switch(props.type) {
      case 'morning':
        return bgMorning
      case 'day':
        return bgDay
      case 'evening':
        return bgEvening
      default:
        return bgMorning
    }
  }} );

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  min-height: 100vh;
`
const ContentRow = styled(Row)`
  padding-top: 160px;
`

const ContentColumn = styled.div`
  flex: 50%;
  max-width: 50%;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  width: 100%;
`

const ContentColumnRight = styled(ContentColumn)`
  flex: 25%;
  max-width: 25%;
  margin-left: auto;
  text-align: right;
`

const ContentTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  margin: 3.75rem 0 0 0;
`

const ContentTemperature = styled.h3`
  font-weight: bold;
  font-size: 144px;
  margin: 0;
`

const ContentStatus = styled.p`
  font-size: 18px;
  margin: 0;
`

const ContentInfo = styled.div`
  display: flex;
  align-items: center;  
  justify-content: flex-end;
  color: #ffffff;
  margin-top: 1rem;
`

const ContentInfoLabel = styled.span`
  margin-right: 1rem;
  display: inline-block;
  color: #E0E5E9;
`

const ContentInfoValue = styled.span`
  width: 75px;
  text-align: left;
`
