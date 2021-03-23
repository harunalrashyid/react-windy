import React, { useState, useEffect } from "react"
import axios from "axios";
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import bgMorning from "../images/morning.svg";
import bgDay from "../images/day.svg";
import bgEvening from "../images/evening.svg";
import sun from "../images/sun.svg";
import moon from "../images/moon.svg";

import { Container, Row } from "../styles/common"

// markup
const IndexPage = () => {

  const [ weatherData, setWeatherData ] = useState({})
  const [ currentHour, setCurrentHour ] = useState('')

  const MORNING_HOUR = 12
  const DAY_HOUR = 18
  const EVENING_HOUR = 24

  const today = new Date()
  const cityName = 'Jakarta'

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

  useEffect(() => {
    
    axios({
      url: `${ process.env.OWM_URL }/weather`,
      params: {
        q: `${ cityName }`,
        units: `metric`,
        appid: `${ process.env.OWM_KEY }`
      }
    }).then(result => {
      setWeatherData(result.data)
    }).catch(error => {
      if (error.response) {
        console.log(error.response.data)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error ', error.message)
      }
    })

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
      <SEO title="Home" />
      <MainIndex type={ currentHour }>
        <Container>
          <ContentRow>
            <ContentColumn>
              <ContentTitle>{ weatherData.name || 'Jakarta' }</ContentTitle>
              <ContentTemperature>{ (weatherData.main && Math.round( weatherData.main.temp )) || '0' } °C</ContentTemperature>
              <ContentStatus>{ (weatherData.weather && weatherData.weather[0].description) || 'Cloudly' }</ContentStatus>
            </ContentColumn>
            <ContentColumnRight>
              <img src={ currentHour === 'evening' ? moon : sun } alt="moon or sun" width="150" />
              <ContentInfo>
                <ContentInfoLabel>Humidity</ContentInfoLabel>
                <ContentInfoValue>{ (weatherData.main && weatherData.main.humidity) || '0' } %</ContentInfoValue>
              </ContentInfo>
              <ContentInfo>
                <ContentInfoLabel>Wind</ContentInfoLabel>
                <ContentInfoValue>{ (weatherData.wind && weatherData.wind.speed) || '0.0' } K/M</ContentInfoValue>
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
  text-transform: capitalize;
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
