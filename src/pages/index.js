import Head from "next/head";
import { Titan_One, Saira } from "next/font/google";
import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar"; 
import MainScreen from "../../components/MainScreen";
import FirstSection from "../../components/FirstSection";
import SecondSection from "../../components/SecondSection";
import ThirdSection from "../../components/ThirdSection";
import PlayMusic from "../../components/PlayMusic";
import StakeSection from "../../components/Stake";
import Footer from "../../components/Footer";
import Designed from "../../components/Designed";

const archivo = Titan_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--Archivo'
});

const saira = Saira({
  weight: '200',
  subsets: ['latin'],
  variable: '--Saira'
})

export default function Home() {
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    if (audioStarted) {
      const audio = new Audio('/bgMusic.mp3');
      audio.loop = true;
      audio.play();
      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [audioStarted]);


  return (
    <>
      <Head>
        <title>Pulse Trailer Park</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${archivo.variable} ${saira.variable}`}>
        <Navbar />
        <MainScreen id={'section1'}/>
        <FirstSection id={'section2'}/>
        <SecondSection id='section3'/>
        <ThirdSection id='section4'/>
        <StakeSection id='section5'/>
        <PlayMusic audioStarted={audioStarted} setAudio={setAudioStarted}/>
        <Footer />
        <Designed colorBg={'purple'}/>
      </main>


      <style jsx>{`
      
      main{
        width: 100%;
        height: min-content;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        scroll-behavior: smooth !important;
      }

      `}</style>
    </>
  );
}
