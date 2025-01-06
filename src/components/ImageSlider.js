import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;

  .slick-slider {
    .slick-list {
      display: flex;
      align-items: center;
    }
    .slick-track {
      display: flex;
      align-items: center;
    }
    .slick-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.5s ease, opacity 0.5s ease;
      opacity: 0.8;
      transform-origin: center;
    }

    .slick-slide.slick-active {
      z-index: 3;
      transform: scale(1);
      opacity: 1;
    }

    .slick-slide.slick-prev, 
    .slick-slide.slick-next {
      z-index: 2;
      transform: scale(0.9);
      opacity: 0.8;
    }
    
    .slick-prev, 
    .slick-next {
      color: transparent; /* Hides default arrows */
    }

    .slick-dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 5;
      padding: 0;
      list-style: none;
      display: flex;
    }

    .slick-dots li {
      margin: 0 5px;
    }

    .slick-dots li button {
      font-size: 0;
      border: none;
      outline: none;
      background: transparent;
    }

    .slick-dots li button:before {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #333;
    }

    .slick-dots li.slick-active button:before {
      background-color: #fff;
      width: 12px;
      height: 12px;
    }

    .slick-slide:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }
  }

  a{
  border-radius:4px;
  box-shadow:rgb(0 0 0/69%) 0px 26px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor:pointer;
  display:block;
  position:relative;
  padding:4px;
  }

  &:hover{
  padding:0;
  border:4px solid rgba(249,249,249,0.8);
  transition-duration:300ms;
  
  }
`;

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <div style={{ width: '80%', margin: '0 auto' }}>
           <a>
              <img src="/images/slider-badag.jpg" alt="slide 1"/>
           </a>
          </div>
        </div>
        <div>
          <div style={{ width: '85%', margin: '0 auto' }}>
          <a>
              <img src="/images/slider-badging.jpg" alt="slide 2"/>
           </a>
          </div>
        </div>
        <div>
          <div style={{ width: '80%', margin: '0 auto' }}>
          <a>
              <img src="/images/slider-scale.jpg" alt="slide 3"/>
           </a>
          </div>
        </div>
        <div>
          <div style={{ width: '80%', margin: '0 auto' }}>
          <a>
              <img src="/images/slider-scales.jpg" alt="slide 4"/>
           </a>
          </div>
        </div>
      </Slider>
      
    </SliderWrapper>
  );
};

export default ImgSlider;
