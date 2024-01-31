import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";


export default function PlayMusic({audioStarted, setAudio}){
    return(
        <>
        
        <div className='musicButtonContainer'>
            <div className='btn' onClick={()=>{setAudio(!audioStarted)}}>{audioStarted ? <FaStop color='white' size='25'/> : <FaPlay color='white' size='25'/>}</div>
        </div>


        <style jsx>{`
        .musicButtonContainer{
            border-radius: 30px 0px 0px 30px;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-top: 1px solid rgba(255, 255, 255, 0.18);
            border-left: 1px solid rgba(255, 255, 255, 0.18);
            border-bottom: 1px solid rgba(255, 255, 255, 0.18);
            box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.37);
            z-index: 5;
        }

        .btn{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
            cursor: pointer;
        }
        `}</style>
        </>
    )
}