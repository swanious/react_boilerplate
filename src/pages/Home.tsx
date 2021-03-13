import React, {
  DOMElement,
  useState,
  useEffect,
  useRef,
  SyntheticEvent,
} from 'react';
import styled from 'styled-components';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

// components

// styles
const Wrapper = styled.main`
  height: 600vh;
  overflow-x: hidden;
  background-color: #222222;
`;

const Main = styled.section`
  top: 0;
  width: 100%;
  height: 100vh;
  position: relative;
  border: 1px solid white;
  color: #f2f2f2;
`;

const SectionOne = styled.section`
  top: 0;
  width: 100%;
  height: 100vh;
  position: relative;
  border: 1px solid white;
  color: #f2f2f2;
`;

const SectionTwo = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  border: 1px solid white;
  h1 {
    color: #fff;
  }
`;

const SectionThree = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  border: 1px solid white;
  h1 {
    color: #fff;
  }
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
  // scroll 이벤트를 위해 useRef로 DOM을 가져옵니다.
  const wrapper = useRef<HTMLElement | null>(null);
  const main = useRef<HTMLElement | null>(null);
  const sectionOne = useRef<HTMLElement | null>(null);
  const sectionTwo = useRef<HTMLElement | null>(null);
  const sectionThree = useRef<HTMLElement | null>(null);

  useEffect(() => {});

  const onClickButton = (e: SyntheticEvent) => {
    // console.log(e.currentTarget.parentElement?.clientHeight);
    let sectionHeight = sectionOne.current?.clientHeight;

    window.scrollTo(
      sectionHeight ? { top: sectionHeight, behavior: 'smooth' } : { top: 0 },
    );
  };

  return (
    <Wrapper ref={wrapper}>
      <Main ref={main}>
        <h1>MainPage</h1>
        <ArrowButton onClick={onClickButton}>
          <ArrowDropDown />
        </ArrowButton>
      </Main>
      <SectionOne ref={sectionOne}>
        <h1>section_1</h1>
      </SectionOne>
      <SectionTwo ref={sectionTwo}>
        <h1>section_2</h1>
      </SectionTwo>
      <SectionThree ref={sectionThree}>
        <h1>section_3</h1>
      </SectionThree>
    </Wrapper>
  );
};

export default Home;
