import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailBt from "../components/CopyEmailBt";
import { Frameworks } from "../components/Frameworks";
import { useMediaQuery } from "react-responsive";


const About = () => {
  // Using useRef to avoid unnecessary re-renders
  // If you need to check for mobile, you can use a media query or a library like react-responsive
   const isMobile = useMediaQuery({ maxWidth: 853 });
 
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me : </h2>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-500 to-sky-400 mb-15 mt-10" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-blue-color grid-1">
          <img
            src="assets/grid1bg.png"
            className="absolute scale-[1.75] -right-[5rem]  md:scale-[3] left-50 md:inset-y-10 lg:scale-[1.5]"
          />
          <div className="z-10">
            {/* <p className="headtext">Hraday here</p> */}
            {!isMobile && (
              <p className="subtext m-3">
                ✨ Hello there! I'm the space geek behind this portfolio.I'm a
                passionate developer who thrive on creating innovative web
                applications.
              </p>
            )}
            <p className="subtext m-3">
              {" "}
              🚀 My journey in tech began in junior high when computer labs
              first sparked my interest. I became fascinated with interactive,
              responsive design—especially 3D—and that curiosity only grew
              stronger in college as I started building my own projects.
            </p>

            <p className="subtext m-3">
              🎬 Outside of coding, I’m all about movies.
            </p>
            <p className="subtext m-3">
              🛸 FYI : The 3D model above is the USS Enterprise from Star Trek,
              one of my all-time favorite shows!
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">MegloManiac</p>

            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="OOPS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="App Dev"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Web Dev"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="DSA"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "30deg",
                top: "70%",
                left: "70%",
                borderRadius: "50%",
              }}
              image="assets/logos/java.webp"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "-45deg",
                top: "70%",
                left: "25%",
                borderRadius: "10px",
              }}
              image="assets/logos/js.png"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "-45deg",
                top: "5%",
                left: "10%",
                borderRadius: "10px",
              }}
              image="assets/logos/reactbg.png"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "-45deg",

                borderRadius: "10px",
              }}
              image="assets/logos/vscode.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              image="assets/logos/sql.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "45deg", top: "20%", left: "60%" }}
              image="assets/logos/android.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in India, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailBt />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <h2 className="text-3xl font-bold text-white mb-3">📄 Resume</h2>
            <p className="text-neutral-300">
              You can view or download my resume directly from{" "}
              <a
                href="https://drive.google.com/file/d/1ieI94DJioJuq2_qdxuFk379bGGJq3I8o/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-sky-300 transition"
              >
                Google Drive
              </a>
              .
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


