import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/hijab.png';
import bannerImage from '../../assets/images/1738842993306.jpg';
import facebook from '../../assets/images/facebook_1419644.png';
import tweeter from '../../assets/images/twitter_5968830.png';
import linkedin from '../../assets/images/linkedin_3536569.png';
import projectOne from '../../assets/images/sylhet-package-3.png';
import plane from '../../assets/images/forsaken-films-7cfcCOOXsIo-unsplash.jpg';
import pets from '../../assets/images/andrew-s-ouo1hbizWwo-unsplash.jpg';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const projectVariants = {
  hiddenRight: { opacity: 0, x: 100 },
  hiddenLeft: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 7 } },
};

const MainLAyout = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = (e) => {
    if (e.target === e.currentTarget) {
      setDrawerOpen(false);
    }
  };

  useEffect(() => {
    const setActiveLink = () => {
      const sections = document.querySelectorAll('section');
      const links = document.querySelectorAll('.nav-link');
      let currentSectionId = '';
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSectionId = section.id;
        }
      });

      links.forEach(link => {
        link.classList.remove('text-blue-500', 'font-semibold');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('text-blue-500', 'font-semibold');
        }
      });
    };

    window.addEventListener('load', setActiveLink);
    window.addEventListener('scroll', setActiveLink);
    return () => {
      window.removeEventListener('load', setActiveLink);
      window.removeEventListener('scroll', setActiveLink);
    };
  }, []);

const skills = [
  {
    name: "HTML",
    img: "https://i.ibb.co.com/WWqpbsfr/code.png",
    desc: "I have experience with HTML and am learning its best practices.",
    progress: "80%"
  },
  {
    name: "CSS",
    img: "https://i.ibb.co.com/B5kpNBwq/css.png",
    desc: "I am learning CSS to create beautiful, responsive layouts.",
    progress: "70%"
  },
  {
    name: "JavaScript",
    img: "https://i.ibb.co.com/1twW75wD/javascript.png",
    desc: "Currently learning JavaScript to create interactive web pages.",
    progress: "40%"
  },
  {
    name: "React",
    img: "https://i.ibb.co.com/ghx8M2N/atom.png",
    desc: "I’m familiar with React and building single-page applications.",
    progress: "75%"
  },
  {
    name: "Node.js",
    img: "https://i.ibb.co.com/NgPzYMhh/nodejs.png",
    desc: "I use Node.js to build server-side applications and REST APIs.",
    progress: "65%"
  },
  {
    name: "Express.js",
    img: "https://i.ibb.co.com/27h721Vm/example.png",
    desc: "I work with Express.js to build scalable backend APIs.",
    progress: "60%"
  },
  {
    name: "MongoDB",
    img: "https://i.ibb.co.com/fGtDjK3h/database.png",
    desc: "I use MongoDB as my database to store and manage data.",
    progress: "70%"
  },
  {
    name: "TypeScript",
    img: "https://i.ibb.co.com/v6nBg2vv/typescript.png",
    desc: "I’m learning TypeScript to write type-safe JavaScript code.",
    progress: "40%"
  }
];

useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

    return (
        <>
      <header>
        {/* <!-- Navigation Bar --> */}
        <nav className="flex justify-between items-center bg-[#4B164C] px-4 md:px-7 lg:px-16 py-4 shadow-lg fixed top-0 w-full z-10 opacity-80">
          {/* <!-- Logo Section --> */}
          <div className="text-white text-xl font-semibold flex items-center gap-4">
            <div>
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            </div>
            <div>
              <h3 id="logo" className="font-italic">TAYEBA</h3>
            </div>
          </div>

          {/* <!-- Navigation Links (For larger screens) --> */}
          <div className="hidden md:flex">
            <ul className="flex space-x-6">
              <li><a href="#home" className="nav-link text-white hover:text-blue-200 transition duration-300">Home</a></li>
              <li><a href="#about" className="nav-link text-white hover:text-blue-200 transition duration-300">About</a></li>
              <li><a href="#skills" className="nav-link text-white hover:text-blue-200 transition duration-300">Skills</a></li>
              <li><a href="#education" className="nav-link text-white hover:text-blue-200 transition duration-300">Education</a></li>
              <li><a href="#projects" className="nav-link text-white hover:text-blue-200 transition duration-300">Projects</a></li>
              <li><a href="#contact" className="nav-link text-white hover:text-blue-200 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* <!-- Resume Button --> */}
          <div className="hidden md:block">
            <a
              href="https://drive.google.com/uc?export=download&id=1iuz796I9buXUB2Obvf-J9vlt4iZ3nNXO" 
              download="Tayeba_Sultana_Resume.pdf"
              className="btn bg-[#F8E7F6] text-black hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md"
            >
              Download Resume
            </a>
          </div>


          {/* <!-- Hamburger Icon to Toggle Drawer (For small screens) --> */}
          <div className="md:hidden">
            <button onClick={toggleDrawer} className="text-white text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>

       {/* <!-- Drawer (Conditional rendering based on state) --> */}
       <div 
          id="drawer" 
          className={`fixed inset-0 z-20 ${isDrawerOpen ? '' : 'hidden'}`}
          onClick={closeDrawer}
        >
          <div className="bg-white w-64 h-full flex flex-col items-start pt-10 px-6">
            <ul className="space-y-6">
              <li><a href="#home" className="nav-link text-black hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="nav-link text-black hover:text-blue-500">About</a></li>
              <li><a href="#skills" className="nav-link text-black hover:text-blue-500">Skills</a></li>
              <li><a href="#education" className="nav-link text-black hover:text-blue-500">Education</a></li>
              <li><a href="#projects" className="nav-link text-black hover:text-blue-500">Projects</a></li>
              <li><a href="#contact" className="nav-link text-black hover:text-blue-500">Contact</a></li>
              <li>
                <a href="https://docs.google.com/document/d/1wOfv2YMVxXsYEXS344XMwvC5uJM2afDYj8liwuBsSNE/export?format=pdf" download="Tayeba_Sultana_Resume.pdf" className="btn bg-[#F8E7F6] text-black hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
         </div>

        {/* <!-- Banner --> */}
        <section id="home">
          <div className="flex flex-col md:flex-row justify-center md:gap-16 px-4 items-center bg-[#F8E7F6]">
            <div>
            <img src="https://i.ibb.co.com/hxVcxcVP/freepik-background-32752.png" alt="" className="h-96 md:h-svh lg:h-lvh lg:text-9xl"/>
            </div>
            <motion.div
              className="max-w-xl md:w-2/4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 5, ease: 'easeOut' }}
            >
              <h1 className="text-4xl font-semibold text-[#4B164C]">
                Hello, I'm Tayeba Sultana
              </h1>
            
              <p className="text-lg text-[#4B164C] my-2">
                I'm a <span className="font-bold">MERN-Stack Developer</span>
              </p>
            
              <p className="text-gray-700">
                 I specialize in building full-stack web applications using <span className="font-semibold">MongoDB, Express.js, React,</span> and <span className="font-semibold">Node.js</span>. With strong skills in <span className="font-semibold">HTML, CSS, JavaScript,</span> and modern frontend libraries, I create responsive and user-friendly interfaces.
              </p>
              <br/>
              <p className="text-gray-700">
                "  Passionate about clean code and seamless user experiences, I’m always eager to learn, grow, and contribute to innovative projects."
              </p>
            
              {/* Social Links */}
              <div className="flex mt-6 space-x-6">
                <a href="https://www.facebook.com/tayeba.sultana.578546" className="text-[#4B164C] hover:text-[#DD88CF] h-16">
                  <img src={facebook} alt="Facebook" className="h-8 w-8 hover:scale-110 transition duration-300" />
                </a>
                <a href="https://x.com/sultana_ta61837" className="text-[#4B164C] hover:text-[#DD88CF] transition duration-300">
                  <img src={tweeter} alt="Twitter" className="h-8 w-8 hover:scale-110 transition duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/tayeba-sultana-sultana-b6760934b/" className="text-[#4B164C] hover:text-[#DD88CF] transition duration-300">
                  <img src={linkedin} alt="LinkedIn" className="h-8 w-8 hover:scale-110 transition duration-300" />
                </a>
              </div>
            
              <a
                href="https://drive.google.com/file/d/1iuz796I9buXUB2Obvf-J9vlt4iZ3nNXO/view?usp=sharing"
                download="Tayeba_Sultana_Resume.pdf"
                className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md mt-4 flex items-center justify-center lg:w-1/4"
              >
                Resume
              </a>
            </motion.div>
          </div>
        </section>
      </header>

      <main>
    <section id="about" className="bg-white py-20" >
      <div className="container mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-[#4B164C] text-center">About Me</h2>
    
        <p className="text-lg text-[#4B164C] text-center mt-4">
          Hello! I'm <span className="font-bold">Tayeba Sultana</span>, a passionate <span className="font-bold">MERN-Stack Developer</span> with a strong interest in building full-stack web applications. I enjoy transforming ideas into real-world digital experiences through clean code and user-friendly interfaces.
        </p>
    
        <p className="text-lg text-[#4B164C] text-center mt-4">
          My journey in web development began with HTML, CSS, and JavaScript, and soon I advanced into working with modern technologies like <span className="font-semibold">React.js, Node.js, Express.js,</span> and <span className="font-semibold">MongoDB</span>. I am continuously learning to improve both frontend and backend skills, while also exploring tools like <span className="font-semibold">JWT, Stripe,</span> and <span className="font-semibold">Firebase</span>.
        </p>
    
        <p className="text-lg text-[#4B164C] text-center mt-4">
          I find joy in the process of developing interactive, responsive, and scalable applications. Coding has become more than a skill — it’s a creative outlet and a career path I’m deeply committed to. Whether it’s working on real-time features or crafting a clean UI, I always give my best.
        </p>
    
        <p className="text-lg text-[#4B164C] text-center mt-4">
          Outside of tech, I enjoy <span className="italic">gardening</span> and <span className="italic">painting</span>, which help me stay creative, patient, and focused. These hobbies enhance my design thinking and problem-solving abilities—valuable traits for any developer.
        </p>
    
        <p className="text-lg text-[#4B164C] text-center mt-4">
          I’m currently building projects, learning new tools, and preparing myself for a professional developer role. My goal is to contribute to meaningful tech solutions and grow as a full-stack developer in the modern web industry.
        </p>
      </div>
    </section>


    <section id="skills" className="bg-[#4B164C] py-20">
  <div className="container mx-auto">
    <h2 className="text-3xl font-semibold text-white text-center">My Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
        >
          <div className="flex items-center justify-center mb-4">
            <img src={skill.img} alt={skill.name} className="h-16" />
          </div>
          <h3 className="text-[#4B164C] text-lg font-semibold text-center">{skill.name}</h3>
          <p className="text-[#4B164C] mt-2 text-center">{skill.desc}</p>
          <div className="w-full mt-4 bg-gray-300 rounded-full h-2">
            <div className="bg-[#4B164C] h-2 rounded-full" style={{ width: skill.progress }}></div>
          </div>
          <p className="text-[#4B164C] text-center mt-2">{skill.progress}</p>
        </motion.div>
      ))}
    </div>
  </div>
    </section>


    <section id="education">
        <div className="bg-[#F8E7F6] py-20">
            <h2 className="text-3xl font-semibold text-[#4B164C] text-center">Education</h2>
            <div className="grid grid-cols-1 gap-6 mt-8">
                {/* Education 3: BBA Honours */}
                <div className="bg-white w-fit mx-auto p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
                    <div className="flex items-center justify-center mb-4">
                        <i className="fas fa-graduation-cap fa-3x text-[#4B164C]"></i>
                    </div>
                    <h3 className="text-[#4B164C] text-lg font-semibold text-center">BBA Honours in Accounting</h3>
                    <p className="text-[#4B164C] mt-2 text-center">Currently pursuing my BBA Honours in Accounting from National University.</p>
                    <p className="text-[#4B164C] text-center mt-2 font-medium">Expected Graduation: 2027</p>
                </div>
                {/* Education 2: HSC */}
                <div className="bg-white w-fit mx-auto p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
                    <div className="flex items-center justify-center mb-4">
                        <i className="fas fa-graduation-cap fa-3x text-[#4B164C]"></i>
                    </div>
                    <h3 className="text-[#4B164C] text-lg font-semibold text-center">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-[#4B164C] mt-2 text-center">Completed my Higher study from Fenchuganj Govt College.</p>
                    <p className="text-[#4B164C] text-center mt-2 font-medium">Graduated: 2023</p>
                    <p className="text-[#4B164C] text-center mt-2 font-medium">Location: Fenchuganj, Sylhet</p>
                </div>
                {/* Education 1: SSC */}
                <div className="bg-white w-fit mx-auto p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
                    <div className="flex items-center justify-center mb-4">
                        <i className="fas fa-graduation-cap fa-3x text-[#4B164C]"></i>
                    </div>
                    <h3 className="text-[#4B164C] text-lg font-semibold text-center">Secondary School Certificate (SSC)</h3>
                    <p className="text-[#4B164C] mt-2 text-center">Completed my SSC from Kulaura Girls High School.</p>
                    <p className="text-[#4B164C] text-center mt-2 font-medium">Graduated: 2021</p>
                    <p className="text-[#4B164C] text-center mt-2 font-medium">Location: Kulaura, Moulvibazar, Sylhet</p>
                </div>
            </div>
        </div>
    </section>
    
    <section id="projects">
      <div className="bg-[#4B164C] py-20">
        <h2 className="text-3xl font-semibold text-white text-center">Projects</h2>
        <div className="grid grid-cols-1 gap-6 mt-8">

          {/* Project 1 */}
          <motion.div
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={projectVariants}
            className="w-10/12 grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 gap-6"
          >
            <div className="flex flex-col justify-center">
              <h3 className="text-[#4B164C] text-lg font-bold">Agro Mart</h3>
              <p className="text-[#4B164C] my-4">
                Agro Mart is a modern agriculture-based e-commerce platform that connects farmers with consumers. It provides features like weather-based crop suggestions, real-time farming alerts, secure payment system, and live chat with sellers.
              </p>
              <ul className="text-[#4B164C] list-disc ml-5">
                <li>Role-Based Dashboard (Admin, Seller, Buyer)</li>
                <li>Weather-based Farming Suggestions</li>
                <li>Secure Payment with Stripe</li>
                <li>Live Chat and Real-Time Notifications</li>
              </ul>
              <div className="flex gap-4 my-4 flex-wrap">
                <div>React</div>
                <div>Redux</div>
                <div>Node.js</div>
                <div>Express.js</div>
                <div>MongoDB</div>
                <div>JWT</div>
                <div>Stripe</div>
              </div>
              <div className="flex gap-4 my-4 flex-wrap">
                <a href="https://agro-mart-e2cb4.web.app/" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">View Live Project</a>
                <a href="https://github.com/ashraful2871/Agro-Mart" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">GitHub Repository</a>
              </div>
              <NavLink to="AgroMart_Project_details" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">View more about this Project</NavLink>
            </div>
            <div className="md:h-96 md:w-96 bg-blue-200 rounded-lg">
              <img src="https://i.ibb.co.com/PZh2FDNb/Screenshot-2025-05-04-162750.png" alt="Agro Mart" className="h-full w-full object-cover rounded-lg" />
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={projectVariants}
            className="w-10/12 grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 gap-6"
          >
            <div className="md:h-96 md:w-96 bg-blue-200 rounded-lg">
              <img src={projectOne} alt="Tour of Dreams" className="h-full w-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[#4B164C] text-lg font-bold">Tour Of Dreams</h3>
              <p className="text-[#4B164C] my-4">The TOUR OF DREAMS site is an online platform for travelers, offering comprehensive information on popular destinations in Bangladesh.</p>
              <ul className="text-[#4B164C]">
                <li>Authentication System (JWT, Google login)</li>
                <li>Admin, Tourist, and Tour Guide Roles</li>
                <li>Real-time notifications and sweet alerts</li>
              </ul>
              <div className="flex gap-4 my-4 flex-wrap">
                <div>React</div>
                <div>Node.js</div>
                <div>MongoDB</div>
                <div>JWT Authentication</div>
              </div>
              <div className="flex gap-4 my-4 flex-wrap">
                <a href="https://tour-of-dreams.web.app/" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">View Live Project</a>
                <a href="https://github.com/Tayebasultana/Tour-of-Dreams-Client-Side" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">GitHub Repository</a>
              </div>
              <NavLink to="tour-Project-Details" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">View more about this Project</NavLink>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={projectVariants}
            className="w-10/12 grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 gap-6"
          >
            <div className="flex flex-col justify-center">
              <h3 className="text-[#4B164C] text-lg font-bold">Visa Navigator</h3>
              <p className="text-[#4B164C] my-4">Visa Navigator is a platform that helps individuals navigate the complex process of obtaining visas for different countries.</p>
              <ul className="text-[#4B164C]">
                <li>Authentication System (JWT, Google login)</li>
                <li>Admin, Tourist, and Guide Roles</li>
                <li>Real-time notifications and sweet alerts</li>
              </ul>
              <div className="flex gap-4 my-4 flex-wrap">
                <div>React</div>
                <div>Node.js</div>
                <div>MongoDB</div>
                <div>JWT Authentication</div>
              </div>
              <div className="flex gap-4 my-4 flex-wrap">
                <a href="https://visa-navigator-a94fc.web.app" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">View Live Project</a>
                <a href="https://github.com/Tayebasultana/Visa-Navigator-Client-Side" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">GitHub Repository</a>
              </div>
              <NavLink to="visa-Project-Details" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">View more about this Project</NavLink>
            </div>
            <div className="md:h-96 md:w-96 bg-blue-200 rounded-lg">
              <img src={plane} alt="Visa Navigator" className="h-full w-full object-cover rounded-lg" />
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={projectVariants}
            className="w-10/12 grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 gap-6"
          >
            <div className="md:h-96 md:w-96 bg-blue-200 rounded-lg">
              <img src={pets} alt="Pet Adoption Website" className="h-full w-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[#4B164C] text-lg font-bold">Pet Adoption Website</h3>
              <p className="text-[#4B164C] my-4">Pet Adoption Website is a platform designed to help families find and adopt their best friends.</p>
              <ul className="text-[#4B164C]">
                <li>Viewing pets by category</li>
                <li>Sorted by price</li>
                <li>Initiating the adoption process</li>
              </ul>
              <div className="flex gap-4 my-4 flex-wrap">
                <div>HTML</div>
                <div>CSS (Tailwind, DaisyUI)</div>
                <div>JavaScript</div>
                <div>FontAwesome</div>
              </div>
              <div className="flex gap-4 my-4 flex-wrap">
                <a href="https://assignment-six-live-repo.netlify.app" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">View Live Project</a>
                <a href="https://github.com/Tayebasultana/pet-adoption" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">GitHub Repository</a>
              </div>
              <NavLink to="pet-Project-Details" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">View more about this Project</NavLink>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    <section id="contact">
    {/* Contact Information Section */}
    <div className="bg-[#DD88CF] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>

            <div className="w-full flex flex-col md:flex-row justify-center gap-12">
                {/* Contact Card 1: Email */}
                <div className="bg-white text-[#4B164C] p-6 rounded-lg shadow-lg w-full md:w-1/3">
                    <h3 className="text-xl font-semibold mb-4">Email</h3>
                    <p className="text-lg">
                        <a href="mailto:youremail@example.com" className="hover:text-[#DD88CF] transition duration-300">tayebasultana743@gmail.com</a>
                    </p>
                </div>

                {/* Contact Card 2: Phone Number */}
                <div className="bg-white text-[#4B164C] p-6 rounded-lg shadow-lg w-full md:w-1/3">
                    <h3 className="text-xl font-semibold mb-4">Phone</h3>
                    <p className="text-lg">
                        <a href="tel:01771879759" className="hover:text-[#DD88CF] transition duration-300">01771879759</a>
                    </p>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-lg mb-4">Feel free to contact me via email or phone. I am happy to assist you with any questions or concerns you may have!</p>
                <a href="mailto:tayebasultana743@gmail.com" className="bg-[#4b164c] text-white py-2 px-6 rounded-full text-lg hover:bg-[#4B164C] transition duration-300">
                    Send an Email
                </a>
            </div>
            
        </div>
    </div>
    </section>

      </main>


      {/* <!-- Footer Section --> */}
      <footer className="bg-[#4B164C] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* <!-- Logo or Name --> */}
          <h2 className="text-2xl font-semibold mb-4">Tayeba Sultana</h2>

          {/* Social Links */}
          <div className="flex mt-6 space-x-6 justify-center">
            <a href="https://www.facebook.com/tayeba.sultana.578546" className="text-[#4B164C] hover:text-[#DD88CF]">
              <img src={facebook} alt="Facebook" className="h-8 w-8 hover:scale-110 transition duration-300" />
            </a>
            <a href="https://x.com/sultana_ta61837" className="text-[#4B164C] hover:text-[#DD88CF] transition duration-300">
              <img src={tweeter} alt="Twitter" className="h-8 w-8 hover:scale-110 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/tayeba-sultana-sultana-b6760934b/" className="text-[#4B164C] hover:text-[#DD88CF] transition duration-300">
              <img src={linkedin} alt="LinkedIn" className="h-8 w-8 hover:scale-110 transition duration-300" />
            </a>
          </div>
          <p class="text-lg my-4">Feel free to reach out to me via number, email or through my social media channels.</p>
          <p className="mt-8 text-sm">&copy; 2025 Tayeba Sultana. All rights reserved.</p>
          <a href="#top" className="mt-4 inline-block text-[#DD88CF] hover:text-black font-bold text-lg">
                Back to Top
            </a>
        </div>
      </footer>
    </>
    );
};

export default MainLAyout;