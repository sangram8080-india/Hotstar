import styled from "styled-components";
import ImgSlider from "./ImageSlider";
import Viewer from "./Viewers";
import Recommends from "./Recommends";
import NewDesieny from "./NewDesieny";
import Original from "./Original";
import Tranding from "./Tranding";
import Detail from "./Detail";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
       <Viewer/>
       <Recommends/>
       <NewDesieny/>
       <Original/>
       <Tranding/>
       
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  background: url("c") no-repeat center center;
  background-size: cover;
  transition: background 0.3s ease;

  &:hover {
    background: url("/images/home-background.png") no-repeat center center;
    background-size: cover;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/images/home-background.png") no-repeat center center;
    background-size: cover;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export default Home;
