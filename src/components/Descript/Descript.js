import {
    FunctionsText,
    SoftwareEnginerDiv,
    FnBText,
    SoftwareEngineerText,
    Character,
    Amateur,
    SecondLineTexts,
    Avid,
    AndChar,
    LifeLong
} from './styled';

const Descript = () => {
    return(
        <FunctionsText>
        <SoftwareEnginerDiv>
          <FnBText>frontend & backend</FnBText>
          <SoftwareEngineerText>Software Engineer</SoftwareEngineerText>
          <Character>/</Character>
          <Amateur>Amateur Web Designer</Amateur>
        </SoftwareEnginerDiv>
        <SecondLineTexts>
          <Avid>Avid Baker</Avid>
          <AndChar>&</AndChar>
          <LifeLong>Lifelong Learner</LifeLong>
        </SecondLineTexts>
      </FunctionsText>
    )
}

export default Descript;