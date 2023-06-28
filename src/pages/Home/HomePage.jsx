import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(to bottom, #333333, #ffffff);
  color: #333333;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
`;



const ContainerFooter = styled.div`
  margin-top: 20px;
`;

const TextFooter = styled.p`
  color: #444444;
  font-size: 14px;
`;

const LinkItem = styled.a`
  color: #0099ff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #0077cc;
  }
`;

const Home = () => {
  return (
    <Container>
      <>
     
          <Title>Welcome</Title>
          
   
        <footer>
          <ContainerFooter>
            <TextFooter>
              &copy;{' '}
              <LinkItem href="https://github.com/Andrey-EOFF">
                Created by Andrii Evsiykov
              </LinkItem>{' '}
              2023.
            </TextFooter>
          </ContainerFooter>
        </footer>
      </>
    </Container>
  );
};

export default Home;
