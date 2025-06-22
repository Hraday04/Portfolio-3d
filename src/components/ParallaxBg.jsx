import { section } from 'motion/react-client'
import React from 'react'
import { motion,useScroll,useTransform } from 'motion/react'

const ParallaxBg = () => {
 
  return (
    <section className="absolute top-0 left- 0 inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            // backgroundImage:
            //   "url(assets/milkyway.jpg)",
            backgroundImage:
              "url(assets/milkyway-bg.png)",
            // backgroundImage:
            //   "url(assets/st-bg.png)",
            // backgroundImage:
            //   "url(https://images.prismic.io/star-trek-untold/ODZlMTMxZDktYWQzMi00MTBkLTljZDgtODQyMWUwYWM1N2I2_3920startreklowerdeckszoom20background.jpg?auto=compress,format&rect=0,0,5760,3240&w=5760&h=3240)",
            // backgroundImage:"url(assets/dark-bg.png)",
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Mountain Layer 3 */}
        <div className="absolute inset-0" style={{}} />

        {/* Planets */}
        <div />

        {/* Mountain Layer 2 */}
        <div />

        {/* Mountain Layer 1 */}
        <div />
      </div>
    </section>
  );
}

export default ParallaxBg
