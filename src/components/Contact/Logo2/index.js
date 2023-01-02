import './index.scss'
import Logoe from '../../../assets/images/email1.png'
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
    <div className="logocontainer" ref={bgRef}>
      <img
        className="solidlogo"
        ref={solidLogoRef}
        src={Logoe}
        alt="JavaScript,  Developer"
      />

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="400.000000pt"
        height="400.000000pt"
        viewBox="0 0 400.000000 400.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M1960 3799 c-221 -25 -438 -128 -599 -283 -93 -90 -150 -169 -207
-290 -43 -90 -94 -261 -94 -312 l0 -24 -480 0 -480 0 0 -1355 0 -1355 1903 2
1902 3 0 1350 0 1350 -472 3 -473 2 0 68 c-1 381 -255 704 -640 811 -63 17
-242 43 -275 40 -5 -1 -44 -5 -85 -10z m189 -159 c338 -35 572 -228 637 -524
13 -62 16 -108 11 -215 -15 -375 -146 -529 -348 -408 -65 39 -110 106 -116
175 -3 27 13 163 37 320 23 150 40 283 38 294 -7 50 -243 67 -405 28 -282 -66
-538 -317 -584 -569 -31 -177 66 -366 214 -418 154 -53 366 9 526 153 l57 52
27 -43 c37 -58 112 -126 172 -155 42 -21 65 -25 140 -25 107 0 158 21 234 97
59 59 97 128 131 238 l27 85 336 3 c186 1 337 -1 337 -5 0 -5 -364 -373 -810
-818 l-810 -810 -810 810 c-445 445 -810 813 -810 817 0 5 148 8 328 8 l329 0
6 -97 c17 -261 133 -469 344 -619 260 -187 664 -237 914 -115 110 53 109 50
54 118 -26 32 -50 58 -54 58 -3 0 -34 -15 -69 -33 -34 -18 -91 -40 -125 -49
-89 -23 -260 -20 -358 5 -328 87 -525 318 -546 642 -7 99 10 258 38 368 27
105 106 263 174 345 126 152 335 261 547 286 40 5 76 9 79 10 4 0 52 -4 108
-9z m81 -484 c0 -14 -12 -103 -26 -198 -30 -209 -54 -266 -151 -369 -86 -91
-168 -133 -268 -137 -97 -4 -137 20 -183 108 -31 60 -34 71 -30 135 7 97 43
170 134 264 77 81 145 128 246 168 65 27 176 51 241 52 33 1 37 -2 37 -23z
m-900 -1621 c0 -6 -241 -251 -535 -545 l-535 -535 0 1080 0 1080 535 -535
c294 -294 535 -539 535 -545z m2420 -5 c0 -588 -3 -1070 -8 -1070 -4 0 -248
241 -542 535 l-535 535 535 535 c294 294 538 535 542 535 5 0 8 -481 8 -1070z
m-2020 -385 l275 -275 275 275 275 275 540 -540 540 -540 -1628 0 c-895 0
-1627 1 -1627 3 0 4 1064 1073 1070 1075 3 1 129 -122 280 -273z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
