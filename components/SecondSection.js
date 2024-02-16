import { Slide } from "react-awesome-reveal";
import Image from "next/image";

export default function SecondSection({id}) {
  return (
    <>
      <div className="sndSection" id={id}>
        <Slide direction="up" duration="450" cascade>
          <div className="title">
            <span>TOKENOMICS</span>
          </div>
        </Slide>
        <Slide direction="left" duration='800'>
        <div className="bodyTokenomics">
          <div className="leftSideTkn">
            <div className="imgContainer"><Image src='/tokenomics.png' fill='responsive' alt=''/></div>
          </div>
          <div className="rightSideTkn">
            <div className="boxTxt">
              <span>Total Supply: 555,555,555,555,555</span>
            </div>
            <div className="boxTxt">
              <span>Chain: PULSECHAIN</span>
            </div>
            <div className="boxTxt">
              <span>Symbol: $PTP</span>
            </div>
            <div className="boxTxt lastBox">
              <span>Total Supply: 555,555,555,555,555</span>
              <span>70% Liquidity Pool</span>
              <span>30% Team/Partnerships (Locked)</span>
            </div>
          </div>
        </div>
        </Slide>

        <Slide direction="right" duration='800'>
        <div className="addInfoContainer">
          <div className="rowInfo">
            <div className="rowLeft">
              <span>0/5 TAX</span>
            </div>
            <div className="rowRight">
              <span>{`Taxes go to a wallet that you should have no expectations from`}</span>
            </div>
          </div>

          <div className="rowInfo">
            <div className="rowLeft">
              <span>70% SUPPLY</span>
            </div>
            <div className="rowRight">
              <span>{`70% of the circulating tokens were sent to the liquidity pool`}</span>
            </div>
          </div>

          <div className="rowInfo lastRow">
            <div className="rowLeft">
              <span>30% Partnerships/Team</span>
            </div>
            <div className="rowRight">
              <span>{`30% of the supply is being held in a secure wallet only to be used for future opportunities that will benefit the community`}</span>
            </div>
          </div>
        </div>
        </Slide>
      </div>

      <style jsx>{`
        .sndSection {
          width: 100%;
          min-height: 100vh;
          background-image: linear-gradient(90deg, #DB1ADA 35%, #782CFB);
          z-index: 1;
          text-align: center;
          color: white;
          padding-bottom: 50px;
        }

        .title {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 40px;
        }

        .title span {
          font-family: var(--Archivo);
          font-size: 5rem;
          color: white;
        }

        .bodyTokenomics {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 100px;
          margin-top: 50px;
        }

        .leftSideTkn .imgContainer {
          width: 450px;
          height: 450px;
          position: relative;
        }

        .rightSideTkn {
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          gap: 20px;
        }

        .boxTxt {
          border: 2px solid rgba(255, 255, 255, 0.5);
          padding: 10px;
          border-radius: 10px;
          font-family: var(--Saira);
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          padding-left: 20px;
          padding-right: 20px;
        }

        .lastBox {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
        }

        .addInfoContainer {
          width: 100%;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-top: 100px;
          flex-direction: column;
          gap: 20px;
        }

        .rowInfo {
          width: 880px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 2px solid white;
          font-family: var(--Saira);
          font-size: 1.1rem;
        }

        .rowInfo .rowLeft {
          width: 50%;
          height: 100%;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 2rem;
          font-family: var(--Archivo);
        }

        .rowInfo .rowRight {
          width: 50%;
          height: 100%;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 20px;
          text-align: left;
          border-radius: 0px 0px 10px 10px;
          color: purple;
          font-weight: bold;
        }

        .rowRight span {
          width: 90%;
        }

        @media screen and (max-width: 1700px) {
          .rowRight span {
            width: 95%;
            font-size: 0.95rem;
          }
        }

        @media screen and (max-width: 1000px) {
          .bodyTokenomics {
            flex-direction: column;
          }

          .boxTxt {
            width: 350px;
          }

          .rightSideTkn {
            align-items: center;
            justify-content: center;
          }

          .rowInfo {
            width: 600px;
          }
        }

        @media screen and (max-width: 700px) {
          .addInfoContainer {
            margin-top: 50px;
          }
          .rowInfo {
            width: 90%;
            flex-direction: column;
            border-top: 0px;
            border: 1px solid white;
            height: 200px;
            justify-content: flex-start;
            border-radius: 20px;
            padding-bottom: 20px;
          }

          .rowInfo .rowLeft {
            width: 100%;
            justify-content: center;
            font-size: 1.5rem;
          }

          .rowInfo .rowRight {
            width: 90%;
            justify-content: center;
            background-color: transparent;
            text-align: center !important;
            font-weight: bold;
            align-items: flex-start;
          }

          .lastRow {
            width: 90%;
            padding-bottom: 20px;
          }
        }

        @media screen and (max-width: 500px) {
          .leftSideTkn .imgContainer {
            width: 350px;
            height: 350px;
          }
          .title span {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </>
  );
}
