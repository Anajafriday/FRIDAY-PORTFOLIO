import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SectionLayout from "../components/SectionLayout";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    img_url: "/deal-hand-shake.jpg",
    title: "Food-Plus Web Ordering Food Web App",
    id: "pro_5",
    subTitle:
      "User-friendly web app for convenient food ordering, enhancing the dining experience through intuitive design and functionality.",
    overview:
      "Experience the future of food ordering with the Food-Plus Web Ordering Food Web App. Delve into the web app, offering a user-friendly interface and efficient functionality to enhance the culinary experience.",
    techUsed: ["html", "css", "javascript"],
    categories: ["web design", "web app"],
    features: [
      "Intuitive Ordering",
      "Real-Time Updates",
      " Fake User Authentication",
    ],

    futureEnhancement:
      "Ongoing development includes implementing additional features for user personalization, refining the user interface, and exploring options for seamless payment integration.",
    relatedProjects: [{ name: "Food-Plus Landing Page Website", id: "pro_7" }],
  },
  {
    img_url: "/bg-yellow-2.jpg",
    title: "Curiosphy Blog Website",
    webUrl: "https://curiousophy.surge.sh/",
    id: "pro_0",
    subTitle:
      "A captivating blog platform exploring a diverse range of curious and philosophical topics.",
    overview:
      "Explore the realms of curiosity and philosophy through the captivating Curiosphy Blog Website. This platform is designed to provide users with a seamless and immersive experience as they delve into thought-provoking articles, engaging visuals, and a user-friendly interface.",
    techUsed: ["html", "css", "javascript"],
    categories: ["web design", "blog"],
    features: ["Dynamic Content", "Responsive Design", "User Authentication"],

    futureEnhancement:
      "Continued development includes implementing a user feedback system, enhancing social sharing features, and incorporating advanced search functionalities.",
    relatedProjects: [{ name: "Quick-Book Course Landing Page", id: "pro_1" }],
  },
  {
    img_url: "/responsive-design-2.jpg",
    title: "Travaye Traveling and Guidance Web App",
    id: "pro_6",
    subTitle:
      "Interactive web app providing travel guidance and personalized itineraries for seamless journeys.",
    overview:
      "Plan your journeys effortlessly with the Travaye Traveling and Guidance Web App. Navigate through the project page to uncover a user-centric travel companion offering personalized guidance and a wealth of information for a memorable adventure.",
    techUsed: ["html", "css", "javascript", "React.js"],
    categories: ["web app", "web design"],
    features: [
      "Personalized Itineraries",
      "Interactive Map Integration",
      " fake User Authentication",
    ],

    futureEnhancement:
      "Ongoing development includes expanding the travel database, enhancing user interactivity, and exploring options for community engagement.",
    relatedProjects: [{ name: "Food-Plus Landing Page Website", id: "pro_7" }],
  },
  {
    img_url: "/web-maintenance.jpg",
    title: "Quick-Book Course Landing Page",
    webUrl: "https://www.jasontechacademy.com/Course/Quickbooks/index.html",
    id: "pro_1",
    subTitle:
      "Streamlined landing page for a fast-paced course on efficient bookkeeping and accounting.",
    overview:
      "Immerse yourself in the world of efficient bookkeeping through the Quick-Book Course Landing Page. This project is a frontend-centric approach to providing an informative and visually appealing landing page for a course on streamlined accounting practices.",
    techUsed: ["html", "css", "javascript"],
    categories: ["landing page", "web design", "figma"],
    features: [
      "Engaging Design",
      "Dynamic Content Presentation",
      "User-Focused Layout",
    ],

    relatedProjects: [{ name: "Curiosphy Blog Website", id: "pro_0" }],
  },
  {
    img_url: "/responsive-design-1.jpg",
    webUrl: "https://www.jasontechacademy.com/Course/uiux/uiuix.html",
    title: "UI/UX Course Landing Page",
    id: "pro_2",
    subTitle:
      "Engaging landing page for a comprehensive course on user interface and user experience design.",
    overview:
      "Immerse yourself in a design journey with the UI/UX Course Landing Page. Explore the principles of user interface and experience design through an interactive and visually pleasing project page.",
    techUsed: ["html", "css", "javascript", "tailwind"],
    categories: ["landing page", "web design", "figma"],
    features: ["Interactive Design", "Dynamic Content Presentation"],

    relatedProjects: [
      { name: "Web-Developing Course Landing Page", id: "pro_3" },
      { name: "Digital Marketing Course Landing Page", id: "pro_4" },
    ],
  },
  {
    img_url: "/web-image.jpg",
    title: "Web-Developing Course Landing Page",
    webUrl:
      "https://www.jasontechacademy.com/Course/webdev/webdevelopment.html",
    id: "pro_3",

    subTitle:
      "Dynamic landing page for a web development course covering the latest technologies and techniques.",
    overview:
      "Elevate your coding skills with the Web-Developing Course Landing Page. Navigate through the cutting-edge technologies and methodologies of web development in a project page that mirrors the dynamic nature of the course content.",
    techUsed: ["html", "css", "javascript", "tailwind"],
    categories: ["landing page", "web design", "figma"],
    features: ["Cutting-Edge Technologies", "Responsive Design"],

    relatedProjects: [
      { name: "UI/UX Course Landing Page", id: "pro_2" },
      { name: "Digital Marketing Course Landing Page", id: "pro_4" },
    ],
  },
  {
    img_url: "/hero-bg-portfolio.jpg",
    title: "Digital Marketing Course Landing Page",
    webUrl:
      "https://www.jasontechacademy.com/Course/DigitalMarketing/index.html",
    id: "pro_4",
    subTitle:
      "Vibrant landing page for a digital marketing course, offering strategies for online success.",
    overview:
      "Transform your digital presence with the Digital Marketing Course Landing Page. Engage with a vibrant and informative project page that highlights key strategies and insights, setting the stage for a successful online marketing journey.",
    techUsed: ["html", "css", "javascript", "tailwind"],
    categories: ["landing page", "web design", "figma"],
    features: ["Vibrant Design", "Informative Layout", "User-Focused Content"],
    relatedProjects: [
      { name: "UI/UX Course Landing Page", id: "pro_2" },
      { name: "Web-Developing Course Landing Page", id: "pro_3" },
    ],
  },
  {
    img_url: "/hero-bg-yellow.jpg",
    title: "Food-Plus Landing Page Website",
    webUrl:'https://foodplus.surge.sh/',
    id: "pro_7",
    subTitle:
      "Appetizing landing page enticing users to explore the features of the Food-Plus web ordering platform.",
    overview:
      "Indulge your senses in the Food-Plus Landing Page Website. Take a tour of the project page, enticing visitors with tantalizing visuals and compelling features, inviting them to explore the convenience and joy of ordering through Food-Plus.",
    techUsed: ["html", "css"],
    categories: ["landing page", "web design", "figma"],
    features: ["Visually Appealing Design", "Informative Layout"],
    relatedProjects: [
      { name: "Food-Plus Web Ordering Food Web App", id: "pro_5" },
      { name: "Travaye Traveling and Guidance Web App", id: "pro_6" },
    ],
  },
  {
    img_url: "hero-bg-coding.jpg",
    title: "My Portfolio Site",
    id: "pro_8",
    subTitle:
      "Crafting a Digital Showcase: Frontend Developer's Journey through Code, Creativity, and Innovation . Showcasing my skills, projects, and achievements as a frontend developer.",
    overview:
      "Dive into the showcase of skills and accomplishments with the Portfolio Site. This project serves as a central hub to display the expertise and creativity of a frontend developer, offering visitors insights into projects, skills, and achievements.",
    techUsed: ["html", "css", "javascript", "react"],
    categories: ["figma", "web design"],

    features: ["Responsive Design", "Project Showcase", "Skill Highlights"],

    futureEnhancement:
      "Continued development involves updating the portfolio with new projects, enhancing the user interface for an optimal viewing experience, and exploring options for interactive elements to engage visitors.",
    relatedProjects: [],
  },
];

function PortfolioPage() {
  return (
    <div>
      <SectionLayout className=" bg-colorPrimaryLight backdrop-brightness-50 py-20 object-contain opacity-80 bg-center bg-no-repeat">
        <div>
          <h3 className="text-center text-xl md:text-5xl font-black capitalize relative">
            Responsive web design
          </h3>
          <p className="text-center text-base md:text-lg font-medium mt-3">
            Crafting visually captivating websites that leave a lasting and
            memorable impact.
          </p>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div>
          <h3 className="md:text-3xl text-xl font-bold text-neutral-900 text-center ">
            Project i have worked on
          </h3>
          <div className="grid grid-cols-1 md:gap-y-20 md:grid-cols-2 xl:grid-cols-3 justify-between gap-8 md:gap-3 items-center   my-14">
            {projects.map((project) => (
              <ProjectList project={project} key={project.id} />
            ))}
          </div>
        </div>
      </SectionLayout>
      <Outlet />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
