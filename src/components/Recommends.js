import styled from "styled-components";
import { Link } from "react-router-dom";

const Recommends = () => {
  const recommendedBanners = [
    {
      image:
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4725/1731416764725-v",
      alt: "Banner 1",
      link: "/banner1"
    },
    {
      image:
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4725/1731416764725-v",
      alt: "Banner 2",
      link: "/banner2"
    },
    {
      image:
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4725/1731416764725-v",
      alt: "Banner 3",
      link: "/banner3"
    },
    {
      image:
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4725/1731416764725-v",
      alt: "Banner 4",
      link: "/banner4"
    },
   
  ];

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {recommendedBanners.map((banner, index) => (
          <Wrap key={index}>
            <Link to={banner.link}>
              <img src={banner.image} alt={banner.alt} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.48);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -16px;
  }
`;

export default Recommends;
