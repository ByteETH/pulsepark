import { Bounce, Slide } from "react-awesome-reveal";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi2";

export default function MainScreen({id}) {
  return (
    <>
      <div className="mainContainer" id={id}>
        <div className="name">
          <Bounce duration="600" cascade>
            <span className="s1">PULSE</span>
            <span className="s2">TRAILER</span>
            <span className="s3">PARK</span>
          </Bounce>
        </div>
        <div className="socialsContainer">
          <Slide direction="up" duration="600" cascade>
            <div className="circle c1">
              <Image src="/tg.png" width="40" height="40" alt="" />
            </div>
            <div className="circle c2">
              <Image src="/x.png" width="50" height="50" alt="" />
            </div>
            <div className="circle c3">
              <Image src="/dx.png" width="35" height="40" alt="" />
            </div>
          </Slide>
        </div>
        <div className="arrow">
          <HiChevronDown size="60" color="white" />
        </div>

      </div>

      <style jsx>{`
        .mainContainer {
          width: 100%;
          height: 92vh;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background: url('/bg.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .mainContainer::before{
          content: '';
          width: 100%;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          background-color: rgba(0,0,0,0.6);
        }

        .name {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        .name span {
          font-size: 8rem;
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
          margin-top: 20px;
        }

        .socialsContainer .circle {
          width: 70px;
          height: 70px;
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

        .arrow {
          margin-top: 50px;
          animation: movimiento 2s linear infinite;
        }

        @keyframes movimiento {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(15px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @media screen and (max-width: 1500px) {
          .name span {
            font-size: 6rem;
            font-family: var(--Archivo);
          }
        }

        @media screen and (max-width: 1000px){
        .name span {
          font-size: 4rem;
        }
        }

        @media screen and (max-width: 700px){
        .name{
          flex-direction: column;
        }

        .name span{
          font-size: 5rem;
        }
        }
      `}</style>
    </>
  );
}
