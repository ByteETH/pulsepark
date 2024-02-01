import Image from "next/image";
import { Bounce, Slide } from "react-awesome-reveal";

export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="customShapeDividerTopFirstSection">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shapeFill"
            ></path>
          </svg>
        </div>
        <div className='footerImage'><Image src='/team/64.png' alt='' width='150' height='300'/></div>
        <div className="title">
          <span>The SEC is my bitch</span>
        </div>
        <div className="name">
          <Bounce duration="600" cascade>
            <span className="s1">PULSE</span>
            <span className="s2">TRAILER</span>
            <span className="s3">PARK</span>
          </Bounce>
        </div>

        <div className="socialsContainer">
            <div className="circle c1">
              <Image src="/tg.png" width="30" height="30" alt="" />
            </div>
            <a href='https://twitter.com/plstrailerpark' target="_BLANK" rel='noreferrer'>
            <div className="circle c2">
              <Image src="/x.png" width="40" height="40" alt="" />
            </div>
            </a>
            <div className="circle c3">
              <Image src="/dx.png" width="25" height="30" alt="" />
            </div>
        </div>
        <div className='copy'>Copyright 2024. All Right Reserved.<span></span></div>
      </div>

      <style jsx>{`
        .footerContainer {
          width: 100%;
          min-height: 340px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          background: url("/bg.jpeg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          text-align: center;
          padding-bottom: 30px;
          padding-top: 160px;
        }

        .footerContainer::before {
          content: "";
          width: 100%;
          min-height: 340px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          background-color: rgba(0, 0, 0, 0.8);
        }

        .footerImage{
          z-index: 1;
          position: absolute;
          top: 100px;
          margin: auto;
          left: -20px;
          right: 0;
        }

        .customShapeDividerTopFirstSection {
          position: absolute;
          top: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(0deg);
        }

        .customShapeDividerTopFirstSection svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 100px;
        }

        .customShapeDividerTopFirstSection .shapeFill {
          fill: #db1ada;
        }

        .title {
          z-index: 2;
          margin-top: 130px;
        }

        .title span{
          font-size: 2rem;
          font-family: var(--Archivo);
          color: white;
        }

        .name {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          z-index: 2;
        }

        .name span {
          font-size: 4rem;
          font-family: var(--Archivo);
        }

        .name .s1 {
        background-image: linear-gradient(0deg, #F3146D 35%, #DB1ADA);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        -moz-background-clip: text;
        }

        .name .s2 {
          background-image: linear-gradient(0deg, #DB1ADA 35%, #782CFB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
          -moz-background-clip: text;
        }

        .name .s3 {
          background-image: linear-gradient(0deg, #782CFB 35%, #2895FE 50%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
          -moz-background-clip: text;
        }

        .socialsContainer {
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          z-index: 1;
        }

        .socialsContainer .circle {
          width: 50px;
          height: 50px;
          border-radius: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .socialsContainer .circle:hover {
          margin-top: -10px;
          transition: 0.2s ease-out;
          cursor: pointer;
        }

        .c3 {
          background-image: linear-gradient(0deg, #782CFB 35%, #2895FE);
        }

        .c2 {
          background-image: linear-gradient(0deg, #DB1ADA 35%, #782CFB);
        }

        .c1 {
          background-image: linear-gradient(0deg, #F3146D 35%, #DB1ADA);
        }

        .copy{
          width: 100%;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          color: white;
          font-family: Arial;
        }

        @media screen and (max-width: 700px){
        
        .footerContainer{
          padding-bottom: 50px;
        }

        .title{
          margin-bottom: 20px;
        }
        .title span{
          font-size: 1.5rem;
        }
        .name{
          flex-direction: column;
        }

        .name span{
          font-size: 4rem;
        }

      `}</style>
    </>
  );
}
