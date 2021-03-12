import React, { DOMElement, useState, useRef } from 'react';
import styled from 'styled-components';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

// components

// styles
const Wrapper = styled.main`
  height: 600vh;
  background-color: #222222;
`;

const Main = styled.section`
  width: 100%;
  border: 1px solid white;
`;

const ArrowButton = styled.button`
  bottom: 0;
  width: 100%;
  height: 40px;
  display: flex;
  position: absolute;
  border: none;
  background-color: transparent;
  color: #f2f2f2;
  justify-content: center;
  align-items: flex-end;
`;

// logic
const Home = () => {
  const main = useRef<HTMLElement | null>(null);

  return (
    <Wrapper>
      <Main ref={main}>
        <ArrowButton>
          <ArrowDropDown />
        </ArrowButton>
      </Main>
    </Wrapper>
  );
};

export default Home;
