export default function BuySection({id}){
  return(
    <>
    
    <div className='buyContainer' id={id}>
      <div className='title'><span>Join the Trailer Park TODAY!</span></div>
      <div className='subtitle'><span>Buy $PTP</span></div>
      <div className='buyBox'>
          <iframe
              src="https://gopulse.com/x/embed?out=PTP&r=0x708512fc764d4c86929674Af3313aa3DCFDc36C4"
              title="GoPulse Swap Widget"
              width="100%"
              height="450px"
              frameBorder="0"
              scrolling="no"
            />
      </div>
    </div>

    <style jsx>{`
      .buyContainer{
        width: 100%;
        min-height: 100vh;
        background-image: linear-gradient(150deg, #F3146D 35%, #DB1ADA);
        z-index: 1;
        text-align: center;
        color: white;
        padding-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
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
        font-size: 4.5rem;
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
        font-family: var(--Saira);
        font-size: 3rem;
        font-weight: bold;
        color: white;
      }

      .buyBox{
        width: 500px;
        height: min-content;
      }

      .buyBox iframe{
        border-radius: 20px;
        overflow: hidden;
        margin-top: 80px;
      }

      @media screen and (max-width: 1000px) {
        .title span{
          font-size: 2.5rem;
        }

        .subtitle span{
          font-size: 2rem;
        }
      }

      @media screen and (max-width: 500px){
        .buyBox{
          width: 400px;
        }
      }

      @media screen and (max-width: 400px){
        .buyBox{
          width: 350px;
        }
      }
    `}</style>
    </>
  )
}