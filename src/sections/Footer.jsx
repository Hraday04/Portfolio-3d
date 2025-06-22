import { a } from "motion/react-client"
import { mySocials } from "../constants"

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm  text-neutral-400 c-space">
      <div className="bg-gradient-to-r from-transparent mb-4 h-[1px] w-full"></div>
      <div className="flex items-center justify-center gap-2">
        <p>Terms & Conditions</p>
        <p> | </p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => 
        (<a href={social.href} key={index} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-half hover:bg-gray-600 transition-colors duration-300">
          <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>)
      )}
      </div>
      <p>@2025 Hraday. All rights reserved</p>
    </section>
  )
}

export default Footer
