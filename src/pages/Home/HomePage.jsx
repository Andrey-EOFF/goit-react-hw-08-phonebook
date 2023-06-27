import { MainWrapper, Heading } from "./HomePage.styled";
  
  export default function Home() {
    return (
      <MainWrapper >
        <Heading >
          Contacts manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </Heading>
      </MainWrapper>
    );
  }