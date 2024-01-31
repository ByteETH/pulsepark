export default function Designed({colorBg}){
    return(
        <>
        
        <div className='designedContainer'>
            <a rel='noreferer' target='_BLANK' href='https://t.me/+rCuh4wnvAeljMjI5'>Made by Smooth Web3</a>
        </div>

        <style jsx>{`
            .designedContainer{
                width: 100%;
                height: 25px;
                background-image: linear-gradient(35deg, #DB1ADA 35%, #782CFB);
                font-family: Arial;
                font-size: 0.85rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: rgba(255,255,255,255.5);
                cursor: pointer;
            }

            .designedContainer a:hover{
                transition: 0.2s ease-out;
                color: rgba(255,255,255,1);
            }
        `}</style>
        </>
    )
}