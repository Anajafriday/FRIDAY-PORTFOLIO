import Analytics from "../components/Analytics";
import Buttoncta from "../components/Buttoncta";
import Footer from "../components/Footer";
import SectionColumn2 from "../components/SectionColumn2";
import SectionLayout from "../components/SectionLayout";
function AboutPage() {
  return (
    <div>
      <SectionLayout className="bg-hero-bg-3 backdrop-brightness-50 py-20 object-cover opacity-80 bg-center bg-no-repeat">
        <div>
          <h3 className="text-center text-xl md:text-5xl font-black capitalize relative">
            about me
          </h3>
        </div>
      </SectionLayout>
      <SectionColumn2 className=" md:flex-row w-full flex-col-reverse">
        <div className="md:w-1/2 h-96 md:h-[30rem] w-full ">
          {/* <img src="/Friday-headshot.png" alt="friday second" /> */}
          <img
            src="/hero-bg-coding.jpg"
            alt="friday second"
            className="w-full    h-5/6 object-cover object-center"
          />
        </div>
        <div className="md:w-6/12 flex flex-col w-full md:gap-56 gap-8">
          <p className="text-lg">
            Hi, I'm Friday Anaja, a Frontend Web Developer And Freelancer With a
            solid year of experience in JavaScript, I'm passionate about
            crafting seamless user experiences and eager to continue learning in
            the digital realm. Join me as I take the next step in my programming
            adventure.
          </p>
          <div className="w-3/5 md:w-auto md:mx-0 mx-auto ">
            <Buttoncta className="w-full lg:py-4">Contact me</Buttoncta>
          </div>
        </div>
      </SectionColumn2>

      <SectionColumn2
        classNameChild="w-full md:w-auto"
        paramParent="bg-colorPrimaryLight"
      >
        <div className="md:w-6/12  ">
          <h2 className="md:text-2xl lg:text-4xl text-xl font-extrabold">
            I Deliver An Exceptional Web Development Solutions
          </h2>
          <div className=" h-36 md:h-[30rem] w-full  mt-5">
            <img
              src="/hero-bg-portfolio.jpg"
              alt="wire-frame"
              className="w-full h-5/6   md:h-3/6 object-cover object-center"
            />
          </div>
        </div>
        <div className="md:w-1/2 h-96 md:h-[30rem] w-full  ">
          <p className="text-xl">
            With a track record of successfully completing numerous projects and
            serving a wide range of clients
          </p>
          <Analytics>
            <div>
              <h3 className="lg:text-4xl md:text-2xl text-xl font-bold text-neutral-900">
                100%
              </h3>
              <p className="mt-4 text-lg">
                Projects completed on time and within budget{" "}
              </p>
            </div>
            <div>
              <h3 className="lg:text-4xl md:2text-xl text-xl font-bold text-neutral-900">
                100%
              </h3>
              <p className="mt-4 lg:text-lg md:text-base text-lg">
                satisfied client who loves my work
              </p>
            </div>
          </Analytics>
        </div>
      </SectionColumn2>
      <SectionLayout className=" bg-colorPrimary">
        <h3 className="text-center text-2xl font-black capitalize relative">
          technologies{" "}
        </h3>
        <div className=" text-center flex justify-center gap-8 my-5 flex-wrap">
          <div>
            <h3 className="capitalize text-xl md:text-2xl font-bold text-white">
              html
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              className="mx-auto"
              viewBox="0 0 32 32"
            >
              <path
                fill="#e44f26"
                d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"
              />
              <path
                fill="#f1662a"
                d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
              />
              <path
                fill="#ebebeb"
                d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"
              />
              <path
                fill="#fff"
                d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"
              />
            </svg>
          </div>
          <div>
            <h3 className="capitalize text-xl md:text-2xl font-bold text-white">
              css
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              className="mx-auto"
              viewBox="0 0 32 32"
            >
              <path
                fill="#1572b6"
                d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"
              />
              <path
                fill="#33a9dc"
                d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
              />
              <path
                fill="#fff"
                d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"
              />
              <path
                fill="#ebebeb"
                d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"
              />
              <path
                fill="#fff"
                d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"
              />
              <path
                fill="#ebebeb"
                d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z"
              />
            </svg>
          </div>
          <div>
            <h3 className="capitalize text-xl md:text-2xl font-bold text-white">
              JavaScript
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              className="mx-auto"
              viewBox="0 0 32 32"
            >
              <path fill="#f5de19" d="M2 2h28v28H2z" />
              <path d="M20.809 23.875a2.866 2.866 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 0 1 3.742 2.107L25 18.128A1.789 1.789 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z" />
            </svg>
          </div>
          <div>
            <h3 className="capitalize text-xl md:text-2xl font-bold text-white">
              tailwind css
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="30.08"
              viewBox="0 0 256 154"
              className="mx-auto"
            >
              <defs>
                <linearGradient
                  id="logosTailwindcssIcon0"
                  x1="-2.778%"
                  x2="100%"
                  y1="32%"
                  y2="67.556%"
                >
                  <stop offset="0%" stopColor="#2298BD" />
                  <stop offset="100%" stopColor="#0ED7B5" />
                </linearGradient>
              </defs>
              <path
                fill="url(#logosTailwindcssIcon0)"
                d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
              />
            </svg>
          </div>
          <div>
            <h3 className="capitalize text-xl md:text-2xl font-bold text-white">
              react
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44.54"
              viewBox="0 0 256 228"
            >
              <path
                fill="#00D8FF"
                d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"
              />
            </svg>
          </div>
          <div>
            <h3 className="capitalize text-xl md:text-2xl font-bold text-white">
              Figma
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="45"
              viewBox="0 0 256 384"
            >
              <path
                fill="#0ACF83"
                d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"
              />
              <path
                fill="#A259FF"
                d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"
              />
              <path
                fill="#F24E1E"
                d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"
              />
              <path
                fill="#FF7262"
                d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"
              />
              <path
                fill="#1ABCFE"
                d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-center text-2xl font-black capitalize relative my-7">
          tools & toolbox
        </h3>
        <div className="flex justify-center gap-8 flex-wrap">
          <div>
            <h3 className="capitalize text-xl md:text-2xl font-bold text-white">
              parcel
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              className="mx-auto"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="red"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.339 23.276v10.767l15.654 2.941V13.519"
              />
              <path
                fill="none"
                stroke="red"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M39.562 23.561v10.294l-15.569 3.129"
              />
              <path
                fill="none"
                stroke="red"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m28.775 22.075l13.386 1.844a1.176 1.176 0 0 0 1.236-1.643l-3.835-8.632l-15.57-2.628L8.34 13.77l-3.73 8.016a1.176 1.176 0 0 0 1.149 1.67l13.338-.927a1.47 1.47 0 0 0 1.24-.865l3.655-8.144l3.653 7.727a1.47 1.47 0 0 0 1.129.828Zm-17.871 8.589l2.941.313"
              />
            </svg>
          </div>
          <div>
            <h3 className="capitalize text-xl md:text-2xl font-bold text-white">
              git
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="54.09"
              viewBox="0 0 924.464 1000"
            >
              <path
                fill="orange"
                d="M526.961 0c-21.136 0-39.171 8.011-54.113 24.045c-14.939 16.037-22.39 35.359-22.39 57.954c0 21.866 7.448 40.798 22.39 56.831c14.942 16.037 32.978 24.073 54.113 24.073c20.409 0 38.08-8.036 53.022-24.073c14.942-16.033 22.419-34.965 22.419-56.831c0-22.596-7.476-41.917-22.419-57.954C565.044 8.012 547.37 0 526.961 0zm163.903 156.345c2.183 12.391 3.278 28.772 3.278 49.181v42.622h-53.55v106.041c15.304-2.186 27.684-3.246 37.159-3.246l16.395 1.063v2.186h-1.091v195.69c0 61.228 7.678 106.058 22.982 134.486c20.409 37.896 57.21 56.831 110.413 56.831c37.899 0 70.331-7.274 97.299-21.859V610.018c-18.227 12.394-38.64 18.578-61.232 18.578c-32.067 0-48.086-24.42-48.086-73.254v-203.34h46.995c8.748 0 18.046.365 27.886 1.091c9.84.73 16.561 1.091 20.204 1.091V248.143h-95.081v-44.809c0-17.49 1.095-33.144 3.278-46.995H690.877l-.011.004zm-500.638 86.34c-49.56 0-92.183 16.413-127.899 49.209c-37.166 34.983-55.768 78.7-55.768 131.177c0 34.983 10.194 67.784 30.6 98.391c18.22 28.421 39.005 46.658 62.327 54.677v2.186c-23.322 10.194-34.972 35.72-34.972 76.532c0 31.344 12.38 54.641 37.159 69.945v2.186C33.897 749.58.005 791.483.005 852.701c0 53.21 22.599 92.222 67.791 117c35.706 19.68 81.252 29.509 136.641 29.509c134.83 0 202.249-56.487 202.249-169.459c0-70.693-52.119-114.056-156.345-130.086c-24.048-3.643-42.254-12.377-54.645-26.228c-9.475-9.471-14.209-18.971-14.209-28.446c0-26.965 14.57-42.619 43.714-46.995c44.458-6.552 80.727-27.145 108.79-61.763c28.059-34.622 42.091-75.26 42.091-121.904c0-14.577-2.913-30.235-8.741-46.995c18.953-4.376 33.509-8.38 43.714-12.022V242.681c-45.921 17.493-86.361 26.259-121.341 26.259c-30.614-17.49-63.772-26.259-99.486-26.259v.004zm274.44 5.464c1.456 13.117 2.186 36.819 2.186 71.068v340.012c0 34.987-.73 59.747-2.186 74.317h123.527c-1.46-16.76-2.186-43.732-2.186-80.904V317.03c0-32.067.726-55.035 2.186-68.882H464.666zm-270.068 95.113c21.866 0 38.976 8.408 51.367 25.168c10.201 15.311 15.3 33.509 15.3 54.645c0 51.017-22.209 76.532-66.667 76.532c-45.911 0-68.882-25.15-68.882-75.441c0-53.929 22.971-80.904 68.882-80.904zm7.65 444.962c61.225 0 91.836 18.567 91.836 55.736c0 39.359-28.063 59.046-84.182 59.046c-64.134 0-96.204-18.967-96.204-56.863c0-38.629 29.519-57.922 88.554-57.922l-.004.004z"
              />
            </svg>
          </div>
          <div>
            <h3 className="capitalize text-xl md:text-2xl font-bold text-white">
              github
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              className="mx-auto"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8 .198a8 8 0 0 0-2.529 15.591c.4.074.547-.174.547-.385c0-.191-.008-.821-.011-1.489c-2.226.484-2.695-.944-2.695-.944c-.364-.925-.888-1.171-.888-1.171c-.726-.497.055-.486.055-.486c.803.056 1.226.824 1.226.824c.714 1.223 1.872.869 2.328.665c.072-.517.279-.87.508-1.07c-1.777-.202-3.645-.888-3.645-3.954c0-.873.313-1.587.824-2.147c-.083-.202-.357-1.015.077-2.117c0 0 .672-.215 2.201.82A7.672 7.672 0 0 1 8 4.066c.68.003 1.365.092 2.004.269c1.527-1.035 2.198-.82 2.198-.82c.435 1.102.162 1.916.079 2.117c.513.56.823 1.274.823 2.147c0 3.073-1.872 3.749-3.653 3.947c.287.248.543.735.543 1.481c0 1.07-.009 1.932-.009 2.195c0 .213.144.462.55.384A8 8 0 0 0 8.001.196z"
              />
            </svg>
          </div>
        </div>
      </SectionLayout>
      <SectionColumn2>
        <div className="md:w-6/12  ">
          <h2 className="md:text-2xl lg:text-4xl text-xl font-extrabold">
            Discover my web development portfolio
          </h2>
          <p className="text-xl my-16">
            Explore a collection of my front-end web development projects and
            designs.
          </p>
          <div className="w-4/5 md:w-auto mx-auto">
            <Buttoncta className="w-full lg:py-4">view portfolio</Buttoncta>
          </div>
        </div>
        <div className="md:w-1/2 h-96 md:h-[30rem] w-full  ">
          <img
            src="/hero-bg-coding.jpg"
            alt="friday second"
            className="w-full    h-5/6 object-cover object-center"
          />
        </div>
      </SectionColumn2>
      <Footer />
    </div>
  );
}

export default AboutPage;
