import './index.scss'
import LogoL from '../../../assets/images/llogo.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 1,
        duration: 20,
      })
      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 4,
        }
      )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoL}
        alt="JavaScript,  Developer"
      />
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="281.000000pt"
        height="450.000000pt"
        viewBox="0 0 281.000000 450.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,450.000000) scale(0.100000,-0.100000)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M345 4276 l-210 -153 -3 -2007 -2 -2006 1097 0 1098 1 208 155 207
155 0 330 0 329 -640 0 -640 0 0 1675 0 1675 -452 0 -453 -1 -210 -153z m1095
-1537 l0 -1669 643 -2 642 -3 2 -302 c2 -166 0 -309 -3 -318 -5 -13 -127 -15
-1080 -15 l-1073 0 -3 297 c-2 164 -2 1060 0 1990 l3 1693 427 2 c235 2 430 2
435 0 4 -2 7 -754 7 -1673z m-890 -329 l0 -1990 1078 -2 1077 -3 -196 -148
-196 -147 -1084 2 -1084 3 -3 1986 -2 1985 25 24 c32 30 368 278 378 279 4 1
7 -894 7 -1989z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
