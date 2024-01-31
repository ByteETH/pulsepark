import Image from "next/image";
import { Slide } from "react-awesome-reveal";

export default function FirstSection({id}) {

  return (
    <>
      <div className="fsContainer" id={id}>
        <Slide direction="up" duration='450' cascade>
        <div className='title'><span>ABOUT US</span></div>
        <div className='subtitle'><span>{`Pulse Trailer Park ($PTP), is a token dedicated to the exceptional Pulsechain and Hex community.`}</span></div>
        </Slide>

        <Slide direction="left" duration='800'>
        <div className='descTop'>
          <div className='leftSideTop'><div className='imgContainer'><Image src='/about1.png' fill='responsive' alt=''/></div></div>
          <div className='rightSideTop'>
            <span>{`As an homage to this spirited group, our coin’s mission is to highlight the unshakeable camaraderie that has fortified us against all odds. Often, the wider crypto world labels us as outsiders — as misfits or rednecks, even cultists.`}</span>
            <span>{`They disparagingly liken us to inhabitants of a trailer park. They laugh, mock, and dismiss us. But to us, these are not insults. They are badges of honour, emblematic of the resilience, conviction, and defiance we embody every day as a strong community that we are.`}</span>
          </div>

        </div>
        </Slide>
        <div className='midContent'><span>{`To celebrate our unity, our victories, and our indomitable spirit, we are excited to launch Pulse Trailer Park.`}</span></div>
        <Slide direction="right" duration='800'>
        <div className='descBottom'>
          <div className='leftSideBottom'>
            <span>{`Our goal is simple: to be the first meme coin on Pulsechain, that our entire community can all rally behind. Sure we tend to get under each others skin from time to time. But in the end we will always have eachothers back and enjoy our successes togehter as a community.`}</span>
            <span>{`So yes its true, we are a trailer park. The most balling trailer park in all of crypto!`}</span>
          </div>
          <div className='rightSideBottom'><div className='imgContainer'><Image src='/about2.png' fill='responsive' alt=''/></div></div>
        </div>
        </Slide>
      </div>

      <style jsx>{`
          .fsContainer{
            width: 100%;
            min-height: 100vh;
            background-image: linear-gradient(90deg, #F3146D 35%, #DB1ADA);
            z-index: 1;
            text-align: center;
            color: white;
            padding-bottom: 50px;
          }

          .title{
            width: 100%;
            height: min-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 40px;
          }

          .title span{
            font-family: var(--Archivo);
            font-size: 5rem;
          }

          .subtitle{
            width: 100%;
            height: min-content;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--Saira);
            font-weight: bold;
            font-size: 1.5rem;
          }

          .descTop, .descBottom{
            width: 100%;
            min-height: 350px;
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 50px;
          }

          .leftSideTop .imgContainer, .rightSideBottom .imgContainer{
            width: 300px;
            height: 300px;
            position: relative;
          }

          .rightSideTop, .leftSideBottom{
            width: 20%;
            text-align: center;
            font-family: var(--Saira);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px;
          }
          

          .midContent{
            width: 100%;
            height: min-content;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--Saira);
            background-color: rgba(0,0,0,0.1);
            padding: 10px;
            margin-top: 60px;
            margin-bottom: 60px;
          }

          @media screen and (max-width: 1700px){
            .rightSideTop, .leftSideBottom{
              width: 30%;
            }
          }

          @media screen and (max-width: 1300px){
            .rightSideTop, .leftSideBottom{
              width: 40%;
            }
          }

          @media screen and (max-width: 1000px){

            .rightSideTop, .leftSideBottom{
              width: 90%;
            }

            .descTop, .descBottom{
              flex-direction: column;
              padding-bottom: 50px;
            }

            .fsContainer{
              padding-bottom: 50px;
            }
          }

          @media screen and (max-width: 500px){
            .title span{
              font-size: 3.5rem;
            }

            .subtitle span{
              font-size: 1rem;
              width: 80%;
            }
          }
        `}</style>
    </>
  );
}
