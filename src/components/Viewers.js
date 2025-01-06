import { useState } from "react";
import styled from "styled-components";

const Viewer = () => {
  return (
    <Container>
      {videoData.map((data, index) => (
        <Wrap key={index}>
          <video autoPlay loop playsInline muted>
            <source src={data.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={data.image} alt={data.alt} />
        </Wrap>
      ))}
    </Container>
  );
};

const videoData = [
  { image: "/images/viewers-disney.png", alt: "Disney viewers", video: "/videos/1564674844-disney.mp4" },
  { image: "/images/viewers-marvel.png", alt: "Marvel viewers", video: "/videos/1564676115-marvel.mp4" },
  { image: "/images/viewers-national.png", alt: "National Geographic viewers", video: "/videos/1564676296-national-geographic.mp4" },
  { image: "/images/viewers-pixar.png", alt: "Pixar viewers", video: "/videos/1564676714-pixar.mp4" },
  { image: "/images/viewers-starwars.png", alt: "Star Wars viewers", video: "/videos/1608229455-star-wars.mp4" },
];

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  position: relative;
  padding-top: 56.26%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    transition: opacity 500ms ease-in-out;
  }

  &:hover img {
    opacity: 0;
  }

  &:hover video {
    opacity: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -16px;
    transform: scale(1.05);
  }
`;

export default Viewer;
