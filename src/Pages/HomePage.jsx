import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaLinkedin } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiSupabase, SiFirebase, SiFigma } from "react-icons/si";
import Buttoncta from "../components/Buttoncta";
import Footer from "../components/Footer";
import SectionLayout from "../components/SectionLayout";


function HomePage() {
  return (
    <div>

      <SectionLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          {/* <div className="bg-colorPrimaryLight w-full md:py-8 md:px-5 py-3 px-2 lg:w-96">
            <h3 className="text-lg md:text-3xl font-bold text-white">
              Hi, I'm <strong className="text-colorCtaTwo">Friday</strong>, a
              <strong className="text-colorCtaTwo"> Full-Stack Developer</strong>
            </h3>
            </div> */}
          <div className="bg-colorPrimaryLight xl:w-3/4  w-full md:py-4 md:px-5 py-3 px-4  rounded-xl shadow-lg relative">
            <h3 className="text-lg md:text-3xl font-medium text-white">
              Hi, I'm <strong className="text-colorCtaTwo">Friday</strong>, a
              <strong className="text-colorCtaTwo"> Full-Stack Developer</strong>
            </h3>
            <div className="absolute hidden xl:block bottom-[-28px] -right-6 w-10 h-10  bg-colorPrimaryLight  rounded-full"></div>
            <div className="absolute hidden xl:block bottom-[-50px] -right-12 w-8 h-8  bg-colorPrimaryLight  rounded-full"></div>
            <div className="absolute bottom-[-70px] -right-16 w-5 h-5  bg-colorPrimaryLight  rounded-full hidden xl:block"></div>
          </div>

          <div className="bg-colorPrimaryLight  xl:w-96l mx-auto xl:ml-36  w-full md:py-4 md:px-5 py-3 px-4  rounded-xl shadow-lg relative">
            <p className="text-base font-semibold md:font-bold md:text-lg leading-7">
              I specialize in building high-performance, visually engaging web applications,
              transforming ideas into seamless digital experiences.
            </p>
            <div className="absolute hidden xl:block bottom-[-28px] -left-6 w-10 h-10  bg-colorPrimaryLight  rounded-full"></div>
            <div className="absolute hidden xl:block bottom-[-50px] -left-12 w-8 h-8  bg-colorPrimaryLight  rounded-full"></div>
            <div className="absolute bottom-[-70px] -left-16 w-5 h-5  bg-colorPrimaryLight  rounded-full hidden xl:block"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 items-center gap-8 md:gap-0">
          <div className="smPadding mt-3 md:ml-0 col-span-2 md:col-auto order-1 md:-order-1">
            <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
              <h3 className="md:text-2xl mr-8 md:mr-0  xl:text-3xl text-xl font-bold capitalize">Tech Stacks</h3>
              {/* Tech Stack Icons */}
              <div className="flex flex-wrap my-4 justify-center md:justify-normal gap-4 text-3xl">
                <FaHtml5 className="text-orange-600" title="HTML5" />
                <FaCss3Alt className="text-blue-500" title="CSS3" />
                <SiJavascript className="text-yellow-500" title="JavaScript" />
                <SiTypescript className="text-blue-700 hidden" title="TypeScript" />
                <SiTailwindcss className="text-cyan-500" title="Tailwind CSS" />
                <FaReact className="text-blue-400" title="React" />
                <FaNodeJs className="text-green-600" title="Node.js" />
                <SiExpress className="text-gray-700" title="Express.js" />
                <SiMongodb className="text-green-500" title="MongoDB" />
                <SiSupabase className="text-green-600" title="Supabase" />
                <SiFirebase className="text-yellow-400" title="Firebase" />
                <SiFigma className="text-orange-600" title="Figma" />
              </div>

              <Buttoncta className="lg:py-4 md:hidden">Learn more</Buttoncta>
            </div>
          </div>

          <div className="xl:ml-36 mx-auto -mb-6 mt-3 lg:w-72 md:w-60  w-40 xl:w-80">
            <img
              src="/friyo_headshot.jpg"
              alt="Friday Anaja"
              className="-mt-12 md:mt-0 lg:-m-14 md:w-4/6 w-full rounded-full"
            />
          </div>

          <div className="smPadding col-span-2 md:col-auto mx-auto my-4 md:mt-12 -order-1 md:order-1">
            {/* <Buttoncta className="lg:py-4 md:block hidden">Learn more</Buttoncta> */}
          </div>
        </div>
      </SectionLayout>



      <SectionLayout className=" bg-colorPrimaryLight">
        <div>
          <h3 className="md:text-3xl text-xl font-bold  text-center ">
            Projects{" "}
          </h3>
          <div className="grid  md:grid-cols-2 gap-20     md:gap-y-20 md:gap-x-8   mt-20">
            <div className="relative h-full">
              {/* <img
                src="/jason home.png"
                alt="web-text-ilustration"
                className="w-full   h-full object-cover object-center"
              /> */}
              <img
                title="jasontechacademy website"
                alt="web-text-ilustration"
                src="/jasontechacademy-home-screnn.png"
                className="w-full h-full object-contain object-center"
              />
              <Buttoncta
                className="absolute -top-10"
                link="https://www.jasontechacademy.com/"
              >
                visit website
              </Buttoncta>
            </div>
            <div className="relative h-full">
              <img
                title="AfricTV - Blogging Web Applicatione"
                // src="https://curiousophy.surge.sh/"
                src="/africtv-2 screen.png"
                alt="AfricTV - Blogging Web Application "
                className="w-full h-full object-contain object-center"
              />
              <Buttoncta
                className="absolute -top-10"
                link="https://africtv.com.ng/"
              >
                visit website
              </Buttoncta>
            </div>
            <div className="relative h-full">
              {/* <div className="relative h-full  lg:-top-12 md:-top-16 "> */}
              {/* <img
                src="/web-image.jpg"
                alt="project one"
                className="w-full  h-full md:h-4/6 object-cover object-center"
                /> */}
              <img
                title="FriyoWebSolution"
                src="/friyowebsolution-scree-2.png"
                alt="FriyoWebSolution"
                className="w-full h-full object-contain object-center"
              />
              <Buttoncta
                className="absolute -top-10"
                link="https://friyowebsolution.vercel.app/#home"
              >
                visit website
              </Buttoncta>
            </div>
            <div className="relative h-full">
              {/* <div className="relative self-stretch h-full md:h-5/6 md:-top-1 lg:-top-[0rem]"> */}
              {/* <img
                src="/web-image.jpg"
                alt="web-text-ilustration"
                className="w-full   h-full object-cover object-center"
                /> */}
              <img
                title="Travaye Traveling and Guidance Web App"
                alt="Travaye Traveling and Guidance Web App"
                src="/travaye-screen.png"
                className="w-full h-full object-contain object-center"
              />
              <Buttoncta
                className="absolute -top-10"
                link="https://travaye-by-friday.vercel.app/"
              >
                visit website
              </Buttoncta>
            </div>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout className=" bg-colorPrimary">
        <div className="container mx-auto ">
          <h3 className="md:text-3xl text-xl font-bold  text-center">
            Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {/* Frontend Development */}
            <div className="p-6  bg-gray-800 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold ">🎨 Frontend Development</h4>
              <ul className="mt-4 text-lg  space-y-2">
                <li>🔹 HTML, CSS, JavaScript/TypeScript</li>
                <li>🔹 Tailwind CSS</li>
                <li>🔹 React.js</li>
              </ul>
            </div>

            {/* Backend Development */}
            <div className="p-6  bg-gray-800 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold ">⚙️ Backend Development</h4>
              <ul className="mt-4 text-lg  space-y-2">
                <li>🔹 Node.js & Express.js</li>
                <li>🔹 MongoDB, Firebase, Supabase</li>
              </ul>
            </div>

            {/* Problem-Solving & Optimization */}
            <div className="p-6  bg-gray-800 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold ">🧠 Problem-Solving & Optimization</h4>
              <ul className="mt-4 text-lg  space-y-2">
                <li>🔹 Performance Optimization</li>
                <li>🔹 Scalability & Security</li>
                <li>🔹 Debugging & Troubleshooting</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout className="bg-gray-900">
        <div className="flex justify-center flex-col items-center w-full md:w-1/2 mx-auto">
          <h3 className="text-lg md:text-2xl w-full font-bold text-center my-8">
            Have an idea in mind? Let's collaborate and turn your vision into reality.
            Get in touch, and let's build something remarkable together!
          </h3>
          <Buttoncta className="md:text-xl flex items-center gap-4" link="https://www.linkedin.com/in/friday-anaja-9ba729262"><FaLinkedin /> Let's Connect</Buttoncta>
        </div>
      </SectionLayout>

      <Footer />
    </div>
  );
}

export default HomePage;
