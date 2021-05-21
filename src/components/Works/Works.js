import React from 'react';
import informus from './informusv2-01.png';
import bestneighbor from './BestNeighbor.png';
import tracysbday from './tracysbday.png';
import {
  WorksContainer,
  WorksTitle,
  WorksDiv,
  WorksImg,
  InformUsImg,
  WorksTextDiv,
  WorkTitle,
  PositionTitle,
  WorkDescrip,
  BestNeighborImg,
  TracysbdayImg
} from './styled'

const Works = () => {
  return(
    <WorksContainer id='works'>
      <WorksTitle>
        Works
      </WorksTitle>
      <WorksDiv>
        <WorksImg><InformUsImg src={informus} alt='informus'/></WorksImg>
        <WorksTextDiv>
          <WorkTitle href='https://github.com/kmchuc/InformUS'>
            InformUs
          </WorkTitle>
          <PositionTitle>
            Head Engineer
          </PositionTitle>
          <WorkDescrip>
            Voter suppression is an ongoing problem within our democratic system. InformUS is a fullstack web application with a backend written in Python using a Flask framework and a database structured using 
            PostgreSQL. Users can submit an address and view nearby polling centers using Google Maps API and Google Civic Information API. To view comments left by other users for polling centers, double clicking the polling center's marker on the map will open a table at the bottom of the page. For users to leave comments for a specific polling center, they must create an account. Once logged in, users can submit comments in the pop-up window by double clicking the polling center's marker.
          </WorkDescrip>
        </WorksTextDiv>
      </WorksDiv>
      <WorksDiv>
        <WorksTextDiv>
          <WorkTitle href='https://github.com/Hackbright-Covid-19-Hackathon/hack-covid-19'>
            Best Neighbor
          </WorkTitle>
          <PositionTitle>
            Frontend & Backend Engineer
          </PositionTitle>
          <WorkDescrip>
            Through the trials and tribulations that have been brought on by the COVID-19 pandemic, the current environment has made it difficult for at-risk people to leave their homes. Best Neighbor, created for the COVID-19 GLobal Hackathon, is a full stack application built using Python as the backend language along with a Flask backend framework. The database was created using PostgreSQL with a front end framework using jQuery.The front end was styled using Bootstrap, HTML, and CSS.
          </WorkDescrip>
        </WorksTextDiv>
        <WorksImg><BestNeighborImg src={bestneighbor} alt='bestneighbor'/></WorksImg>
      </WorksDiv>
      <WorksDiv>
        <WorksImg><TracysbdayImg src={tracysbday} alt='tracysbday'/></WorksImg>
        <WorksTextDiv>
          <WorkTitle href='https://tracybday.herokuapp.com/#/'>Happy Birthday Tracy</WorkTitle>
          <PositionTitle>Head Engineer</PositionTitle>
          <WorkDescrip>
            Since I couldn't see my sister for her birthday this year, I decided to use my newfound skills to create a message board for all of her loved ones to leave a message for her on her special day. Happy Birthday Tracy is a full stack web application using a Flask backend framework written in Python and a front end framework using ReactJS and styled using the styled components React library. 
          </WorkDescrip>
        </WorksTextDiv>
      </WorksDiv>
    </WorksContainer>
  )
}

export default Works;