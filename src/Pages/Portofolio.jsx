// FullWidthTabs.jsx
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Smile, Boxes, Mail, Phone } from "lucide-react";

// ✅ Counter Hook
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium 
      transition-all duration-300 ease-in-out flex items-center gap-2 
      bg-white/5 hover:bg-white/10 rounded-md border border-white/10 
      hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          isShowingMore
            ? "group-hover:-translate-y-0.5"
            : "group-hover:translate-y-0.5"
        }`}
      >
        <polyline
          points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
        ></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return { id: `full-width-tab-${index}`, "aria-controls": `full-width-tabpanel-${index}` };
}

// ✅ Projects
const myProjects = [
  {
    id: "beauty-shop",
    Title: "Beauty Shop",
    Description:
      "A full-stack e-commerce platform for beauty products with user & admin roles, JWT auth, product browsing, cart, checkout, and invoice generation.",
    Img: "/images/beauty-shop.png",
    TechStack: ["React", "Redux Toolkit", "Flask", "PostgreSQL", "JWT", "TailwindCSS"],
    Features: [
      "User & Admin roles with JWT authentication",
      "Product browsing and advanced filtering",
      "Cart and secure checkout system",
      "Invoice generation",
    ],
    Link: "https://beauty-shop-opal.vercel.app/",
    Github: "Private",
  },
  {
    id: "music-store",
    Title: "Music Store App",
    Description:
      "Full-stack application for managing musical instruments, reservations, and feedback.",
    Img: "/images/music-store.png",
    TechStack: ["React", "Flask", "PostgreSQL", "JWT"],
    Features: [
      "User authentication & role-based access",
      "Instrument catalog browsing",
      "Reservation system",
      "Admin inventory management",
    ],
    Link: "https://music-management-store.vercel.app/",
    Github: "Private",
  },
  {
    id: "property-manager-app",
    Title: "Property Manager App",
    Description:
      "A property management platform to handle listings, tenants, and rental payments.",
    Img: "/images/property-manager.png",
    TechStack: ["React Native", "Expo", "Firebase"],
    Features: ["Property listings", "Tenant management", "Rental tracking"],
    Link: "",
    Github: "https://github.com/chachambone/property-manager-app",
  },
];

// ✅ Tech Stacks
const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "react-svgrepo-com (1).svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert (copy).svg", language: "SweetAlert2" },
  { icon: "google-cloud-svgrepo-com.svg", language: "Google Cloud" },
  { icon: "python-svgrepo-com.svg", language: "Python" },
  { icon: "flask-svgrepo-com.svg", language: "Flask" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects] = useState(myProjects);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014]" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, happy clients, and technical expertise.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent" }} className="md:px-4">
          <Tabs
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab icon={<Code className="mb-2 w-5 h-5" />} label="Projects" {...a11yProps(0)} />
            <Tab icon={<Smile className="mb-2 w-5 h-5" />} label="Happy Clients" {...a11yProps(1)} />
            <Tab icon={<Boxes className="mb-2 w-5 h-5" />} label="Tech Stack" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        {/* ✅ Swiper replacing SwipeableViews */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={(swiper) => setValue(swiper.activeIndex)}
          initialSlide={value}
        >
          {/* Projects */}
          <SwiperSlide>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration="1000"
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
              {projects.length > initialItems && (
                <div className="mt-6 w-full flex justify-start">
                  <ToggleButton onClick={() => setShowAllProjects(!showAllProjects)} isShowingMore={showAllProjects} />
                </div>
              )}
            </TabPanel>
          </SwiperSlide>

          {/* Happy Clients */}
          <SwiperSlide>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text drop-shadow-lg">
                  Trusted by <span className="text-white">{useCounter(3)}+</span> Happy Clients
                </h2>
                <p className="text-gray-400 text-sm md:text-base mt-2">
                  A few amazing people and businesses I’ve had the honor to work with.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-duration="1200">
                {[
                  { name: "Robbinson Ngecu", contact: "ngecu16@.com", type: "email" },
                  { name: "June Mutheu", contact: "junemutheu@gmail.com", type: "email" },
                  { name: "KFC Mtaani", contact: "+254707583092", type: "phone" },
                ].map((client, index) => {
                  const href =
                    client.type === "email"
                      ? `mailto:${client.contact}`
                      : `tel:${client.contact.replace(/\s+/g, "")}`;

                  return (
                    <div
                      key={index}
                      className="p-6 bg-white/5 rounded-xl border border-white/10 
                                hover:bg-white/10 transition-all duration-300"
                      data-aos="zoom-in"
                      data-aos-delay={index * 200}
                    >
                      <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                      <a
                        href={href}
                        className="text-slate-300 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 mt-1"
                      >
                        {client.type === "email" ? (
                          <Mail className="w-4 h-4" />
                        ) : (
                          <Phone className="w-4 h-4" />
                        )}
                        {client.contact}
                      </a>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </SwiperSlide>

          {/* Tech Stack */}
          <SwiperSlide>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {techStacks.map((stack, index) => (
                  <TechStackIcon key={index} TechStackIcon={stack.icon} Language={stack.language} />
                ))}
              </div>
            </TabPanel>
          </SwiperSlide>
        </Swiper>
      </Box>
    </div>
  );
}
