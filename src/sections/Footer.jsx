import { a } from "motion/react-client";
import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full text-sm text-neutral-400 c-space py-8">
      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-600 to-transparent mb-6" />

      {/* Footer Content */}
      <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
        {/* Left: Made with line */}
        <p className="flex items-center gap-1 text-center">
          ☕ Made with caffeine & dark mode 💻
        </p>

        {/* Center: Social Icons */}
        <div className="flex gap-4">
          {mySocials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-neutral-600 hover:bg-neutral-700 transition-colors duration-300"
            >
              <img src={social.icon} alt={social.name} className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Right: Copyright */}
        <p className="text-center">@2025 Hraday. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
