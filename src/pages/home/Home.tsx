import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {}

const Home = (props: Props) => {
  return (
    <StyledHome className="">
      <div className="relative pt-[250px]">
        <div className="box-img absolute">
          <img
            src="/watermark.png"
            alt=""
            className="max-w-[687px] max-h-[832px] mx-auto"
          />
        </div>
        <div className="text max-w-[1497px] mx-auto">
          <p className="text-bonkcrash 2xl:text-[230px] lg:text-[180px]">
            BONKCRASH
          </p>
          <button>Buy a BonkCrash</button>
        </div>
      </div>
    </StyledHome>
  );
};

const Ani = keyframes`
 0% {
    color: rgba(253, 235, 171, 1)

    
  }
  20% {
    color: rgba(127, 222, 245, 1)

  }
  40% {
    color: rgba(157, 127, 245, 1)
  }
  60% {
    color: #fc679d;
  }
  80%{
    color: rgba(168, 255, 174, 1);

  }
`;

const StyledHome = styled.div`
  .box-img {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .text {
    button {
      background: #fdebab;
      border: 2px solid #000000;
      border-radius: 22px;
      padding: 17px 60px;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      transition: 0.3s ease;
      margin-left: auto;
      margin-right: auto;
      display: block;
      :hover {
        background: none;
      }
    }
    .text-bonkcrash {
      font-weight: 700;
      line-height: 310px;
      text-align: center;
      /* text-shadow: 0px 4px 4px rgb(230 141 123), 0 0 0 #000,
        0px 4px 4px rgb(230 141 123); */
      animation: ${Ani} 5s step-end infinite;
    }
  }
`;

export default Home;
