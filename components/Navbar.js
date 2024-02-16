import { useEffect, useState } from 'react';
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Saira } from "next/font/google";
import Image from 'next/image';

const saira = Saira({
  weight: '200',
  subsets: ['latin'],
  variable: '--Saira'
})

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(true);
  const router = useRouter();

  const n = () => {
    setOpenMobileMenu(!openMobileMenu);
    let box = document.getElementById('mobilePopup');
    // if (openMobileMenu) {
    //   box.classList.add('mobilePopupShow');
    // } else {
    //   box.classList.remove('mobilePopupShow');
    // }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
      <>
        <div className={`navbarContainer ${scrolled ? "scrolled" : ""} ${saira.variable}`}>
          <div className='logoContainer'>
            <Image src="/logo.png" width="65" height="65" alt="" />
          </div>
          <div className='routersContainer'>
            <Link href={router.pathname == "/" ? "#section1" : "/#section1"}><span>Home</span></Link>
            <Link href={router.pathname == "/" ? "#section2" : "/#section2"}><span>About us</span></Link>
            <Link href={router.pathname == "/" ? "#section3" : "/#section3"}><span>Tokenomics</span></Link>
            <Link href={router.pathname == "/" ? "#section4" : "/#section4"}><span>Community</span></Link>
            <Link href={router.pathname == "/" ? "#section5" : "/#section5"}><span>Stake</span></Link>
          </div>

          {/* <div className="rightSideMobile" onClick={n}>
            {openMobileMenu ? (
              <MdMenu color="white" size="35" />
            ) : (
              <MdMenuOpen color="white" size="35" />
            )}
          </div> */}
        </div>

        <style jsx>{`
          .navbarContainer {
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: fixed;
            top: 0;
            z-index: 2;
          }

          .logoContainer{
            padding-left: 20px;
          }

          .routersContainer{
            display: flex;
            gap: 30px;
            padding-right: 20px;
            font-family: var(--Saira);
            font-size: 1.5rem;
            color: white;
          }

          .rightSideMobile {
            display: none;
          }

          .navbarContainer.scrolled {
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0)
            );
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          }

          .navbarContainer span {
            cursor: pointer;
          }

          .navbarContainer span:hover {
            color: orange;
          }

          @media screen and (max-width: 600px) {
            .navbarContainer span {
              display: none;
            }

            .rightSideMobile {
              display: block;
            }
          }
        `}</style>
      </>
    );
}