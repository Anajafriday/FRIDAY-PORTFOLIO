import Analytics from "../components/Analytics";
import Buttoncta from "../components/Buttoncta";
import Footer from "../components/Footer";
import SectionColumn2 from "../components/SectionColumn2";
import SectionLayout from "../components/SectionLayout";

function HomePage() {
  return (
    <div>
      <SectionLayout className=" bg-colorPrimaryLight">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 justify-between">
          <div className=" bg-colorPrimary w-full md:py-8 md:px-5 py-3 px-2 lg:w-96">
            <h3 className="text-lg md:text-3xl font-bold  text-white w-full">
              Hi, This is <strong className=" text-neutral-700">Friday</strong>,
              the{" "}
              <strong className=" text-neutral-700">Frontend Developer</strong>
            </h3>
          </div>
          <div className=" bg-colorBrand  w-full md:py-8 md:px-5 py-3 px-2 ">
            <p className="text-base font-semibold md:font-bold md:text-xl text-neutral-900">
              I Transform ideas into captivating web experiences through
              creative coding and designing stunning websites that leave a
              lasting impression.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-3 items-center justify-between">
          <div className="smPadding  mt-3 md:ml-0 m col-span-2 md:col-auto order-1 md:-order-1">
            <span className="flex gap-1 flex-wrap items-center md:gap-3 justify-center md:justify-normal  md:ml-0">
              <h3 className="md:text-4xl text-xl font-bold text-neutral-900">
                stack
              </h3>
              <p className=" font-medium md:text-lg text-base">
                html,css,tailwindcss, javascript, react
              </p>
            </span>
          </div>
          <div className=" lg:ml-10 -mb-6 mt-3 md:w-60   ml-14  w-40  lg:w-80 border- border-green-600">
            <img
              src="/friyo_headshot.jpg"
              alt="friday headshot"
              className="-mt-12 md:mt-0 lg:-m-14 md:w-4/6  w-full rounded-full"
            />
          </div>
          <div className="smPadding col-span-2 md:col-auto mx-auto my-4 md:mt-12 -order-1 md:order-1">
            <Buttoncta className="lg:py-4">Learn more</Buttoncta>
          </div>
        </div>
      </SectionLayout>
      <SectionColumn2>
        <div className="md:w-6/12">
          <h5 className="text-lg capitalize mb-4">i specialize in</h5>
          <h3 className="md:text-3xl text-xl font-bold text-neutral-900">
            Building beautiful and user-friendly websites
          </h3>
          <p className="text-lg mt-3">
            {" "}
            With my expertise in frontend development, I specialize in creating
            visually striking and engaging web experiences
          </p>
          <Analytics>
            <div>
              <h3 className="md:text-4xl text-xl font-bold text-neutral-900">
                100%
              </h3>
              <p className="mt-4">
                html,css,javascript ,react ,tailwind and more
              </p>
            </div>
            <div>
              <h3 className="md:text-4xl text-xl font-bold text-neutral-900">
                100%
              </h3>
              <p className="mt-4">
                Resposive design and cross-browser compatibility and performance
                optimization
              </p>
            </div>
          </Analytics>
          <div className="w-3/5 md:w-auto mx-auto">
            <Buttoncta className="w-full lg:py-4">Contact me</Buttoncta>
          </div>
        </div>
        <div className="md:w-1/2 h-96 md:h-[40rem] w-full">
          <img
            src="/web-image.jpg"
            alt="web-text-ilustration"
            className="w-full   h-5/6 object-cover object-center"
          />
        </div>
      </SectionColumn2>
      <SectionLayout className=" bg-colorBrand">
        <div>
          <h3 className="md:text-3xl text-xl font-bold text-neutral-900 text-center ">
            Frontend development skills
          </h3>
          <div className="flex flex-wrap justify-between gap-8 md:gap-3 items-center md:flex-nowrap md:flex-row-reverse my-14">
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-[70px] h-[70px]"
                  viewBox="0 0 48 48"
                >
                  <mask id="ipTAddWeb0">
                    <g fill="none">
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="M25 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v13.941"
                      />
                      <path
                        className=" fill-neutral-700 stroke-white"
                        strokeWidth="2"
                        d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4v-9Z"
                      />
                      <path
                        className=" fill-neutral-700 stroke-white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="M32 35h12m-6-6v12"
                      />
                      <circle
                        r="2"
                        fill="#fff"
                        transform="matrix(0 -1 -1 0 10 14)"
                      />
                      <circle
                        r="2"
                        fill="#fff"
                        transform="matrix(0 -1 -1 0 16 14)"
                      />
                    </g>
                  </mask>
                  <path
                    className=" fill-neutral-700 "
                    d="M0 0h48v48H0z"
                    mask="url(#ipTAddWeb0)"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                Custom website{" "}
              </h3>
              <p className="text-lg mt-2">
                i creat unique and visual appearing website{" "}
              </p>
            </div>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                >
                  <path
                    className=" fill-neutral-700"
                    d="M16.5 11.74c0-.59-.07-1.16-.14-1.74h3.38c.08.33.15.67.19 1c.72.07 1.41.23 2.07.5C21.71 6.21 17.35 2 12 2C6.47 2 2 6.5 2 12s4.5 10 10 10c.87 0 1.71-.12 2.5-.33a6.599 6.599 0 0 1-1.46-3.47c-.31.61-.65 1.2-1.04 1.76c-.83-1.2-1.5-2.53-1.91-3.96h3.09c.17-.72.46-1.39.85-2H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .5-.04 1-.1 1.5a6.36 6.36 0 0 1 2.1-1.76M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26m.82 2H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m2.09 0c.41-1.43 1.08-2.77 1.91-3.97c.83 1.2 1.5 2.54 1.91 3.97h-3.82m8.83 0h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M23 17.5c0 .82-.25 1.58-.67 2.21l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 19 15v1.5l-2.25-2.25L19 12v1.5c2.21 0 4 1.79 4 4m-4 1l2.25 2.25L19 23v-1.5c-2.21 0-4-1.79-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 19 20v-1.5Z"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                website optimization{" "}
              </h3>
              <p className="text-lg mt-2">
                i ensure your website is fast and user friendly{" "}
              </p>
            </div>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                >
                  <path
                    className=" fill-neutral-700 "
                    d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6H4M0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2H0m11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1h-1m-2-8v7h5v-7h-5Z"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                Responsive design
              </h3>
              <p className="text-lg mt-2">
                i speciliaz in html,css,javascript ,react ,tailwind and more
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className=" bg-colorPrimaryLight">
        <div>
          <h3 className="md:text-3xl text-xl font-bold text-neutral-900 text-center ">
            My Frontend Projects{" "}
          </h3>
          <div className="grid  md:grid-cols-2 gap-6   relative -bottom-8 md:-bottom-24 md:gap-8  h-2/3">
            <div className="relative h-full md:h-5/6">
              {/* <img
                src="/jason home.png"
                alt="web-text-ilustration"
                className="w-full   h-full object-cover object-center"
              /> */}
              <iframe
                title="jasontech website"
                alt="web-text-ilustration"
                src="https://jasontechacademy.com/"
                className="w-full  h-96 object-center"
              />
              <Buttoncta
                className="absolute top-0"
                link="https://www.jasontechacademy.com/"
              >
                visit website
              </Buttoncta>
            </div>
            <div className="relative h-full">
              <iframe
                title="curiosophyblog website"
                // src="https://curiousophy.surge.sh/"
                src="https://the-wild-oasis-by-friday.vercel.app/"
                alt="blog website "
                className="w-full h-[28rem] object-center"
              />
              <Buttoncta
                className="absolute top-0"
                link="https://the-wild-oasis-by-friday.vercel.app/"
              >
                visit website
              </Buttoncta>
            </div>
            <div className="relative h-full  lg:-top-12 md:-top-16 ">
              {/* <img
                src="/web-image.jpg"
                alt="project one"
                className="w-full  h-full md:h-4/6 object-cover object-center"
              /> */}
              <iframe
                title="jason technologies custom software "
                src="https://www.jasontechnologies.net/"
                alt="custom software"
                className="w-full h-[28rem] object-center"
              />
              <Buttoncta
                className="absolute top-0"
                link="https://www.jasontechnologies.net/"
              >
                visit website
              </Buttoncta>
            </div>
            <div className="relative self-stretch h-full md:h-5/6 md:-top-1 lg:-top-[0rem]">
              {/* <img
                src="/web-image.jpg"
                alt="web-text-ilustration"
                className="w-full   h-full object-cover object-center"
              /> */}
              <iframe
                title="jasontech website"
                alt="web-text-ilustration"
                src="https://travaye-by-friday.vercel.app/"
                className="w-full  h-[25rem] object-center"
              />
              <Buttoncta
                className="absolute top-0"
                link="https://travaye-by-friday.vercel.app/"
              >
                visit website
              </Buttoncta>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div className=" -mt-32">
          <h3 className="md:text-3xl text-xl font-bold text-center mt-16 md:mt-28">
            What Client Says About me
          </h3>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-3 items-center flex-row-reverse my-14">
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 48 48"
                >
                  <mask id="ipTAddWeb0">
                    <g fill="none">
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="M25 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v13.941"
                      />
                      <path
                        fill="#555"
                        stroke="#fff"
                        strokeWidth="4"
                        d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4v-9Z"
                      />
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="M32 35h12m-6-6v12"
                      />
                      <circle
                        r="2"
                        fill="#fff"
                        transform="matrix(0 -1 -1 0 10 14)"
                      />
                      <circle
                        r="2"
                        fill="#fff"
                        transform="matrix(0 -1 -1 0 16 14)"
                      />
                    </g>
                  </mask>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipTAddWeb0)"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                Custom website{" "}
              </h3>
              <p className="text-lg mt-2">
                i creat unique and visual appearing website{" "}
              </p>
            </div>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.5 11.74c0-.59-.07-1.16-.14-1.74h3.38c.08.33.15.67.19 1c.72.07 1.41.23 2.07.5C21.71 6.21 17.35 2 12 2C6.47 2 2 6.5 2 12s4.5 10 10 10c.87 0 1.71-.12 2.5-.33a6.599 6.599 0 0 1-1.46-3.47c-.31.61-.65 1.2-1.04 1.76c-.83-1.2-1.5-2.53-1.91-3.96h3.09c.17-.72.46-1.39.85-2H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .5-.04 1-.1 1.5a6.36 6.36 0 0 1 2.1-1.76M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26m.82 2H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m2.09 0c.41-1.43 1.08-2.77 1.91-3.97c.83 1.2 1.5 2.54 1.91 3.97h-3.82m8.83 0h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M23 17.5c0 .82-.25 1.58-.67 2.21l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 19 15v1.5l-2.25-2.25L19 12v1.5c2.21 0 4 1.79 4 4m-4 1l2.25 2.25L19 23v-1.5c-2.21 0-4-1.79-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 19 20v-1.5Z"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                website optimization{" "}
              </h3>
              <p className="text-lg mt-2">
                i ensure your website is fast and user friendly{" "}
              </p>
            </div>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6H4M0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2H0m11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1h-1m-2-8v7h5v-7h-5Z"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-neutral-900">
                Responsive design
              </h3>
              <p className="text-lg mt-2">
                i speciliaz in html,css,javascript ,react ,tailwind and more
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout className=" bg-colorPrimary">
        <div className="flex justify-center flex-col items-center w-full md:w-1/2 mx-auto ">
          <h3 className="text-lg md:text-2xl  w-full font-bold text-neutral-900 text-center my-8">
            Ready to bring your vision to life? Let's discuss your project and
            create something extraordinary together.{" "}
          </h3>
          <Buttoncta className="md:text-xl">Contact me</Buttoncta>
        </div>
      </SectionLayout>
      <Footer />
    </div>
  );
}

export default HomePage;
