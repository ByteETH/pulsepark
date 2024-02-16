import { Slide } from "react-awesome-reveal";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';

export default function ThirdSection({ id }) {
  const [showAmount, setShowAmount] = useState(9);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showAmount,
    slidesToScroll: 1,
    arrows : true,
    autoplay: true,
    autoplaySpeed: 1500
  };

  
  const generateMemberBoxes = () => {
    const members = [
      { id: 1, name: "GymRatCrypto", imageUrl: "/team/1.png", href: "https://twitter.com/GymRatCrypto" },
      { id: 2, name: "CryptoCoffee", imageUrl: "/team/2.png", href: "https://twitter.com/CryptoCoffee369" },
      { id: 3, name: "Freddie Quotes", imageUrl: "/team/3.png", href: "https://twitter.com/_FreddieQuotes_" },
      { id: 4, name: "Crypto Kindness", imageUrl: "/team/4.png", href: "https://twitter.com/KindnessCrypto" },
      { id: 5, name: "KatieePCrypto", imageUrl: "/team/5.png", href: "https://twitter.com/KatieePCrypto" },
      { id: 6, name: "K4K", imageUrl: "/team/6.png", href: "https://twitter.com/K4KCrypto" },
      { id: 7, name: "Gary Woods", imageUrl: "/team/7.png", href: "https://twitter.com/FundingGym" },
      { id: 8, name: "INC", imageUrl: "/team/8.png", href: "https://twitter.com/incplsx" },
      { id: 10, name: "Mati ALLin", imageUrl: "/team/10.png", href: "https://twitter.com/MatiAllin" },
      { id: 11, name: "Mando", imageUrl: "/team/11.png", href: "https://twitter.com/TheCryptoMando" },
      { id: 12, name: "abit_HEX", imageUrl: "/team/12.png", href: "https://twitter.com/abit_HEX" },
      { id: 13, name: "dollarcostcrypto", imageUrl: "/team/13.png", href: "https://twitter.com/dollarcostcrypt" },
      { id: 14, name: "Johnny Chaos", imageUrl: "/team/14.png", href: "https://twitter.com/ccfxstudios" },
      { id: 15, name: "DJ Lethal", imageUrl: "/team/15.png", href: "https://twitter.com/djlethal" },
      { id: 16, name: "Goldkey", imageUrl: "/team/16.png", href: "https://twitter.com/goldk3y_" },
      { id: 17, name: "Karim Madjido", imageUrl: "/team/17.png", href: "https://twitter.com/YORmadjic" },
      { id: 18, name: "Dip Catcher", imageUrl: "/team/18.png", href: "https://twitter.com/TantoNomini" },
      { id: 19, name: "NrdGrl007 ", imageUrl: "/team/19.png", href: "https://twitter.com/nrdgrl007" },
      { id: 20, name: "Quinn", imageUrl: "/team/20.png", href: "https://twitter.com/HEXyQuinn" },
      { id: 21, name: "HviidHEX", imageUrl: "/team/21.png", href: "https://twitter.com/HviidHEX" },
      { id: 22, name: "Marco The HEXican", imageUrl: "/team/22.png", href: "https://twitter.com/MarcoTheHEXican" },
      { id: 23, name: "David Feder", imageUrl: "/team/23.png", href: "https://twitter.com/DavidFeder" },
      { id: 24, name: "Randy Hilarski", imageUrl: "/team/24.png", href: "https://twitter.com/PulseMafia#" },
      { id: 25, name: "Wolverine", imageUrl: "/team/25.png", href: "https://twitter.com/Wolverine__2241" },
      { id: 26, name: "Wescott Crypto", imageUrl: "/team/26.png", href: "https://twitter.com/wescottcrypto" },
      { id: 27, name: "Conrad Zen", imageUrl: "/team/27.png", href: "https://twitter.com/askconradzen" },
      { id: 28, name: "djpaulywood", imageUrl: "/team/28.png", href: "https://twitter.com/djpaulywoodWin" },
      { id: 29, name: "Sam Stolt", imageUrl: "/team/29.png", href: "https://twitter.com/Sam_A_Stolt" },
      { id: 30, name: "cryptoThaFamous", imageUrl: "/team/30.png", href: "https://twitter.com/cryptoThaFamous" },
      { id: 31, name: "Trevor", imageUrl: "/team/31.png", href: "https://twitter.com/trevorsarver" },
      { id: 32, name: "Awesome Life", imageUrl: "/team/32.png", href: "https://twitter.com/LitAwesomeLife" },
      { id: 33, name: "Brandon Davis", imageUrl: "/team/33.png", href: "https://twitter.com/Rags2RichesFAM" },
      { id: 34, name: "Corey Costa", imageUrl: "/team/34.png", href: "https://twitter.com/coreycosta123" },
      { id: 35, name: "JustAskJesse", imageUrl: "/team/35.png", href: "https://twitter.com/JustAskJesse" },
      { id: 36, name: "WaLLrus", imageUrl: "/team/36.png", href: "https://twitter.com/WaLLrusOfficial" },
      { id: 37, name: "Hex Keef", imageUrl: "/team/37.png", href: "https://twitter.com/murdersauce" },
      { id: 38, name: "yourfriendSOMMI", imageUrl: "/team/38.png", href: "https://twitter.com/yourfriendSOMMI" },
      { id: 39, name: "NagaBeau", imageUrl: "/team/39.png", href: "https://twitter.com/BeauNaga" },
      { id: 40, name: "DJ Cryptomatic", imageUrl: "/team/40.png", href: "https://twitter.com/djcryptomatic" },
      { id: 41, name: "hodldog", imageUrl: "/team/41.png", href: "https://twitter.com/hodldogofficial" },
      { id: 42, name: "TAngent", imageUrl: "/team/42.png", href: "https://twitter.com/HEX_TAngent" },
      { id: 43, name: "bretep", imageUrl: "/team/43.png", href: "https://twitter.com/bretep" },
      { id: 44, name: "Lil Hexico", imageUrl: "/team/44.png", href: "https://twitter.com/lilhexico" },
      { id: 45, name: "CryptoHeartBeat", imageUrl: "/team/45.png", href: "https://twitter.com/CryptoHartbeat" },
      { id: 46, name: "Taylor B. Crypto", imageUrl: "/team/46.png", href: "https://twitter.com/PulseGains" },
      { id: 48, name: "BrotherKDG", imageUrl: "/team/48.png", href: "https://twitter.com/BrotherKDG" },
      { id: 49, name: "Joe Parys", imageUrl: "/team/49.png", href: "https://twitter.com/JoeParys" },
      { id: 50, name: "Frossty", imageUrl: "/team/50.png", href: "https://twitter.com/hexadori5555" },
      { id: 51, name: "Captain RG3", imageUrl: "/team/51.png", href: "https://twitter.com/CaptainRG3" },
      { id: 52, name: "SammyChica", imageUrl: "/team/52.png", href: "https://twitter.com/sammyChica" },
      { id: 53, name: "TrevonJames", imageUrl: "/team/53.png", href: "https://twitter.com/TrVon" },
      { id: 54, name: "Croat", imageUrl: "/team/54.png", href: "https://twitter.com/Crobot01" },
      { id: 55, name: "Ian Heinisch", imageUrl: "/team/55.png", href: "https://twitter.com/ianheinischmma" },
      { id: 56, name: "AXiS ALiVE", imageUrl: "/team/56.png", href: "https://twitter.com/AxisAlive" },
      { id: 57, name: "MOON KING B-ROOTS ", imageUrl: "/team/57.png", href: "https://twitter.com/iambroots" },
      { id: 58, name: "LizG", imageUrl: "/team/58.png", href: "https://twitter.com/lizethgiraldo_" },
      { id: 59, name: "Hexologist", imageUrl: "/team/59.png", href: "https://twitter.com/Hexologist31" },
      { id: 60, name: "Ran Neuner", imageUrl: "/team/60.png", href: "https://twitter.com/cryptomanran" },
      { id: 61, name: "Christy Todd", imageUrl: "/team/61.png", href: "https://twitter.com/christytodd71" },
      { id: 62, name: "Wendy O", imageUrl: "/team/62.png", href: "https://twitter.com/CryptoWendyO" },
      { id: 63, name: "Ivan on Tech", imageUrl: "/team/63.png", href: "https://twitter.com/IvanOnTech" },
      { id: 64, name: "Ben Armstrong", imageUrl: "/team/65.png", href: "https://twitter.com/BenArmstrongsX" }
    ];

    return members.map(member => (
      <div className="memberBox" key={member.id}>
        <a href={member.href} target="_BLANK" rel='noreferrer'>
          <div className="imgContainer">
            <Image src={member.imageUrl} width='180' height='380' alt=''/>
          </div>
          <div style={{fontFamily: `var(--Saira)`, marginTop : '10px', color : 'white', fontWeight : 'bold'}} id='nameMember'><span>{member.name}</span></div>
        </a>
      </div>
    ));
  };



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setShowAmount(5);
      } if(window.innerWidth <= 1000){
        setShowAmount(4)
      } 
      if(window.innerWidth <= 800){
        setShowAmount(3)
      } 
      if(window.innerWidth <= 600){
        setShowAmount(2)
      }
      if(window.innerWidth <= 450){
        setShowAmount(1)
      }
      
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div className="thrdSection" id={id}>
          <div className="title">
            <span>OUR COMMUNITY</span>
          </div>
        <div className="carrouselContainer">
          <div className="carrouselAlign">
          <Slider {...settings}>
          {generateMemberBoxes()}
          </Slider>
          </div>
        </div>
        <div className='disclaimerContainer'>
          <span>Disclaimer</span>
          <span>The individuals mentioned in this context are not affiliated with the team. This meme is all about fun, support, and positive vibes that we are all part of, if by chance you happen to be offended then you most likely suck.</span>
        </div>
      </div>

      <style jsx>{`
        .thrdSection {
          width: 100%;
          min-height: 100vh;
          background-image: linear-gradient(90deg, #782CFB, #2895FE 50%);
          z-index: 1;
          text-align: center;
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
        }

        .carrouselContainer {
          width: 100%;
          height: min-content;
          margin-top: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .carrouselAlign{
          width: 90%;
          height: 100%;
        }


        .memberBox .nameMember{
          font-family: var(--Saira);
          color: white;
          font-weight: bold;
        }

        .customNameMember {
          font-family: var(--Saira);
          color: white;
          font-weight: bold;
        }

        .disclaimerContainer{
          width: 100%;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-family: var(--Saira);
          color: white;
        }

        .disclaimerContainer span:first-child{
          font-size: 3rem;
          font-family: var(--Archivo);
          color: white;
        }

        .disclaimerContainer span:last-child{
          width: 50%;
          font-weight: bold;
          color: white;
          margin-top: 10px;
        }

        @media screen and (max-width: 1000px){
          .carrouselContainer{
            margin-top: 70px;
          }
        }

        
        @media screen and (max-width: 600px) {
          .carrouselAlign{
            width: 60%;
          }

          .disclaimerContainer span:last-child{
          width: 90%;
          font-weight: bold;
        }
        }

                
        @media screen and (max-width: 450px) {
          .carrouselAlign{
            width: 50%;
          }
        }


        @media screen and (max-width: 500px) {
          .title span {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </>
  );
}
