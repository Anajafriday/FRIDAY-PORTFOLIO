import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SectionLayout from "../components/SectionLayout";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    title: "FriyoWebSolution",
    img_url: "/friyowebsolution-scree-1.png",
    techUsed: ["React", "Tailwind", "Supabase"],
    subTitle: "Website for the web design agency, featuring a custom blog editor with Tiptap and an admin section.",
    categories: ["Web design", "Web app"],
    features: ["Custom blog editor", "Admin panel"],
    type: "full-stack",
    webUrl: "https://friyowebsolution.vercel.app/#home"
  },
  {
    img_url: "/foodplus-screen-1 (1).png",
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
      "Fake User Authentication",
    ],
    type: "full-stack"
    ,
    webUrl: "http://foodplus.surge.sh/",
    futureEnhancement:
      "Ongoing development includes implementing additional features for user personalization, refining the user interface, and exploring options for seamless payment integration.",
    relatedProjects: [{ name: "Food-Plus Landing Page Website", id: "pro_7" }],
  },
  {
    img_url: "/curiosophy-home-screen (1).png",
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
    type: "frontend",
  },
  {
    img_url: "/travaye-screen.png",
    title: "Travaye Traveling and Guidance Web App",
    webUrl: "https://travaye-by-friday.vercel.app/",
    id: "pro_6",
    subTitle:
      "Interactive web app providing travel guidance and personalized itineraries for seamless journeys.",
    overview:
      "Plan your journeys effortlessly with the Travaye Traveling and Guidance Web App. Navigate through the project page to uncover a user-centric travel companion offering personalized guidance and a wealth of information for a memorable adventure.",
    techUsed: ["html", "css", "javascript", "React.js"],
    categories: ["web app", "web design"],
    type: "frontend",
    features: [
      "Personalized Itineraries",
      "Interactive Map Integration",
      "Fake User Authentication",
    ],
    futureEnhancement:
      "Ongoing development includes expanding the travel database, enhancing user interactivity, and exploring options for community engagement.",
    relatedProjects: [{ name: "Food-Plus Landing Page Website", id: "pro_7" }],
  },
  {
    img_url: "/jason-technologie landing page -screen.png",
    title: "JasonTechnologies Landing Page",
    webUrl: "https://www.jasontechnologies.net/",
    id: "pro_1",
    type: "frontend",
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
    img_url: "/jason-technologie admin -screen.png",
    title: "Jsontechnologies Custom Email Sender with Signature",
    id: "pro_2",
    subTitle:
      "An email sender that includes signatures and supports customized SMTP configurations using MERN stack, Tailwind, Pug, and Brevo.",
    overview:
      "Build and send customized emails with a built-in signature feature using the MERN stack. This application leverages Tailwind CSS for responsive design, Pug for templating, and Brevo for SMTP functionality to send emails.",
    techUsed: ["mern", "tailwind", "pug", "brevo"],
    categories: ["web app", "email", "mern stack"],
    features: ["Custom Email Templates", "SMTP Integration with Brevo", "Signature Inclusion"],
    futureEnhancement:
      "Future improvements include adding more email templates, automation workflows, and enhanced SMTP provider support.",
    relatedProjects: [],
    type: "full-stack"

  },
  {
    img_url: "/jasontechacademy-home-screnn.png",
    title: "JasonTech Academy Web App",
    id: "pro_3",
    subTitle:
      "Web application for JasonTech Academy, offering a platform for admin, students, and instructors with features for course management.",
    overview:
      "The JasonTech Academy web app is designed to facilitate seamless interactions between students, instructors, and administrators. It enables course management, student tracking, and instructor profiles, creating an efficient educational experience.",
    techUsed: ["html", "css", "js", "tailwind"],
    categories: ["web app", "education"],
    features: ["Admin Dashboard", "Student and Instructor Profiles", "Course Management"],
    futureEnhancement:
      "Plans include adding real-time chat functionality, live classes, and integrations with third-party educational tools.",
    relatedProjects: [],
    type: "frontend",
    webUrl: "https://jasontechacademy.com/"
  },
  {
    img_url: "/lsiv-screen.png",
    title: "LSIV Charity Organization Website",
    id: "pro_4",
    subTitle:
      "A charity organization website designed to engage and inform users about the mission and projects of LSIV.",
    overview:
      "The LSIV charity organization website is built to raise awareness and drive action for charitable causes. The website features project updates, donation integration, and volunteer engagement tools, providing a comprehensive platform for the cause.",
    techUsed: ["html", "css", "tailwind", "js"],
    categories: ["web design", "charity"],
    features: ["Donation Integration", "Project Updates", "Volunteer Signup"],
    futureEnhancement:
      "Future enhancements include real-time donation tracking, volunteer management system, and more interactive content.",
    relatedProjects: [],
    type: "frontend"
  },
  {
    img_url: "/natours-screen.png",
    title: "Natours by Friday - Tour Booking Web App",
    id: "pro_5",
    subTitle:
      "Tour booking web app with Mern stack integration, Stripe payments, and email functionality via Pug and Brevo.",
    overview:
      "Natours by Friday is a complete tour booking application that allows users to search, book, and pay for tours. The app integrates with Stripe for payment processing, uses Pug for dynamic HTML templating, and Brevo for email notifications.",
    techUsed: ["mern", "stripe", "pug", "brevo"],
    categories: ["web app", "tourism"],
    features: [
      "Tour Booking System",
      "Stripe Payment Integration",
      "Email Notifications via Brevo",
    ],
    futureEnhancement:
      "Enhancements include adding user reviews, search filters, and interactive maps.",
    relatedProjects: [],
    type: "full-stack",
    webUrl: "https://natours-by-friday.onrender.com/"

  },
  {
    img_url: "/africtv-screen1.png",
    title: "AfricTV - Blogging Web Application",
    id: "pro_6",
    subTitle:
      "Blogging web app that combines HTML, CSS, Tailwind, JS, ReactJS, NodeJS, Firebase, and Socket.IO with AI integration.",
    overview:
      "AfricTV is a dynamic blogging web application that allows users to publish articles, comment on posts, and interact with content in real-time using Socket.IO for notifications. AI-powered features like content recommendations make it an engaging platform.",
    techUsed: ["html", "css", "tailwind", "js", "reactjs", "nodejs", "firebase", "socket.io"],
    categories: ["web app", "blog"],
    features: [
      "Real-time Comments and Notifications with Socket.IO",
      "AI Integration for Content Recommendations",
      "User Authentication with Firebase",
    ],
    futureEnhancement:
      "Future updates include adding more AI-powered features and enhancing the blog's SEO performance.",
    relatedProjects: [],
    type: "full-stack",
    webUrl: "https://africtv.com.ng/"
  },
  {
    img_url: "/obilotiti-screen (1).png",
    webUrl: "https://obilotiticloudsolutions.surge.sh/index.html",
    title: "Obilotit Cloud Solution Landing Page",
    techUsed: ["HTML", "CSS", "JavaScript"],
    subTitle: "A professional landing page for Obilotit Cloud Solutions, offering a range of cloud-based services and solutions.",
    categories: ["Landing Page", "Web Design"],
    type: "frontend",
    features: [
      "Engaging design",
      "Service highlights",
      "Lead generation form",
    ],
    futureEnhancement: "Further enhancements will include adding customer testimonials, integrating more detailed service pages, and optimizing for mobile performance.",
    relatedProjects: [{ name: "Wild Oasis Hotel Management System", id: "pro_2" }],
  },
  {
    img_url: "/wildoasis-screen.png",
    webUrl: "https://the-wild-oasis-by-friday.vercel.app/",
    title: "Wild Oasis Hotel Management System",
    techUsed: ["HTML", "CSS", "JavaScript", "React", "superbase", "styled component"],
    subTitle: "A hotel management system that provides functionalities for booking, reservations, and customer management.",
    categories: ["Web App", "Full Stack"],
    type: "full-stack",
    features: [
      "Room booking system",
      "Customer management",
      "Admin dashboard",
    ],
    futureEnhancement: "Upcoming updates include adding payment integration, enhanced booking features, and an online customer service portal.",
    relatedProjects: [{ name: "Obilotit Cloud Solution Landing Page", id: "pro_1" }],
  }
];

const sortedProjects = projects.slice().sort((a, b) => {
  if (a.type === "frontend" && b.type !== "frontend") return -1;
  if (a.type !== "frontend" && b.type === "frontend") return 1;
  return 0;
});
function PortfolioPage() {
  return (
    <div>
      <SectionLayout className=" bg-colorPrimaryLight backdrop-brightness-50 py-20 object-contain opacity-80 bg-center bg-no-repeat">
        <div>
          <h3 className="text-center text-xl md:text-5xl font-black capitalize relative">
            Projects i have worked on
          </h3>
          <p className="text-center text-base md:text-lg font-medium mt-3">
            from frontend to full stack
          </p>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div>

          <div className="grid grid-cols-1 md:gap-y-20 md:grid-cols-2  justify-between gap-8 md:gap-x-10 items-center   my-14">
            {sortedProjects.map((project, i) => (
              <ProjectList project={project} key={i} />
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
