import { Slide } from "react-awesome-reveal";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";


export default function StakeSection({ id }) {
  return (
    <>
      <div className="stakeSection" id={id}>
        <Slide direction="up" duration="450" cascade>
          <div className="title">
            <span>STAKE</span>
          </div>
          <div className='subtitle'><span>Yield Farming / Token Staking dApp</span></div>
        </Slide>

        <div className='stakeBox'>
          <div className='titleBox'><span>{`00.0% (APY) - 0.0% Daily Earnings`}</span></div>
          <input />
          <div className='stakeButtons'>
            <div className='lb'>
              <span><GiPayMoney size='25'/></span>
              <span>Stake</span>
            </div>
            <div className='rb'>
              <span><GiReceiveMoney size='25'/></span>
              <span>UnStake All</span>
            </div>
          </div>
          <div className='selectedBox'>
            <span>Network: <b>PULSECHAIN</b></span>
          </div>

          <div className='claimButtons'>
            <button>CLAIM REWARDS</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stakeSection {
          width: 100%;
          min-height: 80vh;
          background-image: linear-gradient(0deg, #DB1ADA 35%, #782CFB);
          z-index: 1;
          text-align: center;
          color: white;
          padding-bottom: 50px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
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

        .subtitle{
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .subtitle span{
          font-family: var(--Archivo);
          font-size: 1.5rem;
          color: white;
        }

        .stakeBox{
          width: 550px;
          height: 470px;
          border: 2px solid white;
          border-radius: 30px;
          margin-top: 50px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
        }

        .titleBox{
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--Saira);
          margin-top: 10px;
        }

        .titleBox span{
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .stakeBox input{
          width: 70%;
          height: 35px;
          border-radius: 5px;
          border: 0px;
          outline: none;
          background-color: white;
          margin-top: 30px;
          color: black;
          padding-left: 10px;
        }

        .stakeBox .stakeButtons{
          width: 100%;
          height: min-content;
          display: flex;
          align-itemS: center;
          justify-content: center;
          gap: 40px;
          margin-top: 20px;
        }

        .stakeButtons .lb, .stakeButtons .rb{
          width: 170px;
          border-radius: 10px;
          height: 40px;
          border: 2px solid white;
          padding: 5px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: white;
          font-family: var(--Saira);
        }

        .stakeButtons .lb:hover, .stakeButtons .rb:hover{
          background-color: white;
          color: purple;
          cursor: pointer;
          transition: 0.2s ease-out;
        }

        .lb span:first-child{
          margin-top: 10px;
        }

        .rb span:first-child{
          margin-top: 5px;
        }

        .selectedBox{
          width: 100%;
          height: min-content;
          margin-top: 60px;
          background-color: rgba(255,255,255,0.2);
          padding: 5px 0px;
          font-family: var(--Saira);
          color: white;
        }

        .claimButtons{
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 70px;
        }

        .claimButtons button{
          width: 250px;
          height: 80px;
          border-radius: 10px;
          border: 2px solid white;
          letter-spacing: 3px;
          font-size: 1.2rem;
          padding: 0px 10px;
          background-color: transparent;
        }

        .claimButtons button:hover{
          cursor: pointer;
          background-color: white;
          color: purple;
          transition: 0.2s ease-out;
        }

        @media screen and (max-width: 600px){
          .stakeBox{
            width: 400px;
          }
          
          .stakeBox input{
            width: 85%;
          }

          .stakeButtons .lb, .stakeButtons .rb{
            width: 150px;
          }
        }

        @media screen and (max-width: 410px){
          .stakeBox{
            width: 340px;
          }
          
          .stakeBox input{
            width: 86%;
          }

          .stakeButtons{
            gap: 10px !important;
          }
          .stakeButtons .lb, .stakeButtons .rb{
            width: 140px;
            height: 35px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  );
}
