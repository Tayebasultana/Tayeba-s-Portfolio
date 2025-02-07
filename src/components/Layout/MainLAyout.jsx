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
            <a href="https://docs.google.com/document/d/1wOfv2YMVxXsYEXS344XMwvC5uJM2afDYj8liwuBsSNE/export?format=pdf" download="Tayeba_Sultana_Resume.pdf" className="btn bg-[#F8E7F6] text-black hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
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
          <div className="flex flex-col md:flex-row justify-center gap-16 px-4 items-center h-screen bg-[#F8E7F6]">
            <div>
              <img src={bannerImage} alt="Profile Picture" className="h-96 md:h-96 lg:text-9xl" />
            </div>
            <div className="max-w-xl">
              <h1 className="text-4xl font-semibold text-[#4B164C]">Hello, I'm Tayeba Sultana</h1>
              <p className="text-lg text-[#4B164C] my-2">I'm a <span className="font-bold">Frontend Developer</span></p>
              <p>I have strong skills in HTML, CSS, JavaScript, and React to build responsive and visually appealing websites. Always eager to learn and grow in tech.</p>
              <p>"Crafting Beautiful and Interactive Web Experiences – Meet Tayeba Sultana, Your Frontend Developer"</p>

              {/* <!-- Social Links --> */}
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

              <a href="https://docs.google.com/document/d/1wOfv2YMVxXsYEXS344XMwvC5uJM2afDYj8liwuBsSNE/export?format=pdf" download="Tayeba_Sultana_Resume.pdf" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">Resume</a>
            </div>
          </div>
        </section>
      </header>

      <main>
    <section id="about" className="bg-white py-20">
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-[#4B164C] text-center">About Me</h2>
            <p className="text-lg text-[#4B164C] text-center mt-4">
                Hello! I'm Tayeba Sultana, a beginner Frontend Developer excited to start my journey in web development. My interest in coding began not long ago, and since then, I’ve been fully immersed in learning the basics of HTML, CSS, and JavaScript. While I’m new to the field, I’m passionate about creating responsive, user-friendly websites and eager to expand my knowledge and skills.
            </p>
            <p className="text-lg text-[#4B164C] text-center mt-4">
                I’ve spent a lot of time learning and experimenting with various web technologies, and I am particularly fascinated by the creative process behind frontend development. The idea of transforming a simple design into an interactive website really excites me, and I’m looking forward to building more projects and gaining practical experience in the field.
            </p>
            <p className="text-lg text-[#4B164C] text-center mt-4">
                When I'm not coding, I love spending my time outdoors – Gardening, trying my hand at painting. These hobbies help me stay inspired and keep my creativity flowing, which is important for my growth as a developer. Gardening improves patience and focus, while painting enhances creativity, both benefiting problem-solving and design skills for developers.
            </p>
            <p className="text-lg text-[#4B164C] text-center mt-4">
                I'm constantly learning, whether through online courses, tutorials, or experimenting with new projects. My goal is to continue developing my skills and eventually work on building meaningful, impactful websites and applications. I’m excited for the future and the opportunity to grow in this field!
            </p>
        </div>
    </section>

    <section id="skills" className="bg-[#4B164C] py-20">
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-white text-center">My Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {/* Skill 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <div className="flex items-center justify-center mb-4">
                        <img src="../../images/code.png" alt="" className="h-16"/>
                    </div>
                    <h3 className="text-[#4B164C] text-lg font-semibold text-center">HTML</h3>
                    <p className="text-[#4B164C] mt-2 text-center">I have experience with HTML and am learning its best practices.</p>
                    {/* HTML Progress Bar */}
                    <div className="w-full mt-4 bg-gray-300 rounded-full h-2">
                        <div className="bg-[#4B164C] h-2 rounded-full" style={{width: "80%"}}></div>
                    </div>
                    <p className="text-[#4B164C] text-center mt-2">80%</p>
                </div>

                {/* Skill 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <div className="flex items-center justify-center mb-4">
                        <img src="../../images/css.png" alt="" className="h-16"/>
                    </div>
                    <h3 className="text-[#4B164C] text-lg font-semibold text-center">CSS</h3>
                    <p className="text-[#4B164C] mt-2 text-center">I am learning CSS to create beautiful, responsive layouts.</p>
                    {/* CSS Progress Bar */}
                    <div className="w-full mt-4 bg-gray-300 rounded-full h-2">
                        <div className="bg-[#4B164C] h-2 rounded-full" style={{width: "70%"}}></div>
                    </div>
                    <p className="text-[#4B164C] text-center mt-2">70%</p>
                </div>

                {/* Skill 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <div className="flex items-center justify-center mb-4">
                        <img src="../../images/javascript.png" alt="" className="h-16"/>
                    </div>
                    <h3 className="text-[#4B164C] text-lg font-semibold text-center">JavaScript</h3>
                    <p className="text-[#4B164C] mt-2 text-center">Currently learning JavaScript to create interactive web pages.</p>
                    {/* JavaScript Progress Bar */}
                    <div className="w-full mt-4 bg-gray-300 rounded-full h-2">
                        <div className="bg-[#4B164C] h-2 rounded-full" style={{width: "40%"}}></div>
                    </div>
                    <p className="text-[#4B164C] text-center mt-2">40%</p>
                </div>

                {/* Skill 4 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <div className="flex items-center justify-center mb-4">
                        <img src="../../images/atom.png" alt="" className="h-16"/>
                    </div>
                    <h3 className="text-[#4B164C] text-lg font-semibold text-center">React</h3>
                    <p className="text-[#4B164C] mt-2 text-center">I’m familiar with React and building single-page applications.</p>
                    {/* React Progress Bar */}
                    <div className="w-full mt-4 bg-gray-300 rounded-full h-2">
                        <div className="bg-[#4B164C] h-2 rounded-full" style={{width: "75%"}}></div>
                    </div>
                    <p className="text-[#4B164C] text-center mt-2">75%</p>
                </div>
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
                <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 gap-6">
                    <div className=" md:h-96 md:w-96 bg-blue-200 rounded-lg ">
                        <img src={projectOne} alt="Tour of Dreams" className="h-full w-full object-cover rounded-lg"/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-[#4B164C] text-lg font-bold">Tour Of Dreams</h3>
                        <p className="text-[#4B164C] my-4">The TOUR OF DREAMS site is an online platform for travelers, offering comprehensive information on popular destinations in Bangladesh. The platform includes functionalities for tour bookings, profile management, and tour guide selection.</p>
                        <ul className="text-[#4B164C]">
                            <li>Authentication System (JWT, Google login)</li>
                            <li>Admin, Tourist, and Tour Guide Roles</li>
                            <li>Real-time notifications and sweet alerts</li>
                        </ul>
                        <div className="flex gap-4 my-4">
                            <div>React</div>
                            <div>Node.js</div>
                            <div>MongoDB</div>
                            <div>JWT Authentication</div>
                        </div>
                        <div className="flex gap-4 my-4">
                            <a href="https://tour-of-dreams.web.app/" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">View Live Project</a>
                            <a href="https://github.com/Tayebasultana/Tour-of-Dreams-Client-Side" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">GitHub Repository</a>
                        </div>
                        <NavLink to="tour-Project-Details" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md" >
                            View more about this Project
                        </NavLink>
                    </div>
                </div>
                {/* Project 2 */}
                <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 gap-6">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-[#4B164C] text-lg font-bold">Visa Navigator</h3>
                        <p className="text-[#4B164C] my-4">Visa Navigator is a platform that helps individuals navigate the complex process of obtaining visas for different countries. The platform provides information on required documents, application procedures, and offers a guide for each country’s visa requirements.</p>
                
                        <ul className="text-[#4B164C]">
                            <li>Authentication System (JWT, Google login)</li>
                            <li>Admin, Tourist, and Guide Roles</li>
                            <li>Real-time notifications and sweet alerts</li>
                        </ul>
                
                        {/* Tech Stack */}
                        <div className="flex gap-4 my-4">
                            <div>React</div>
                            <div>Node.js</div>
                            <div>MongoDB</div>
                            <div>JWT Authentication</div>
                        </div>
                
                        {/* Buttons for Live Project and GitHub */}
                        <div className="flex gap-4 my-4">
                            <a href="https://visa-navigator-a94fc.web.app" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
                                View Live Project
                            </a>
                            <a href="https://github.com/Tayebasultana/Visa-Navigator-Client-Side" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
                                GitHub Repository
                            </a>
                        </div>
                
                        {/* Link to View More Details */}
                        <NavLink to="visa-Project-Details" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md" href="/VisaProjectDetails.html">
                            View more about this Project
                        </NavLink>
                    </div>
                    <div className="md:h-96 md:w-96 bg-blue-200 rounded-lg">
                        <img src={plane} alt="Visa Navigator" className="h-full w-full object-cover rounded-lg"/>
                        </div>
                    </div>
                    
                    {/* Project 3 */}
                    <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 gap-6">
                        <div className="md:h-96 md:w-96 bg-blue-200 rounded-lg">
                            <img src={pets} alt="Pet Adoption Website" className="h-full w-full object-cover rounded-lg"/>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="text-[#4B164C] text-lg font-bold">Pet Adoption Website</h3>
                            <p className="text-[#4B164C] my-4">
                                Pet Adoption Website is a platform designed to help families find and adopt their best friends. The platform showcases various pets, sorted by categories and prices, and allows users to view detailed information and start the adoption process.
                            </p>
                            <ul className="text-[#4B164C]">
                                <li>Viewing pets by category</li>
                                <li>Sorted by price</li>
                                <li>Initiating the adoption process</li>
                                </ul>
                        
                                {/* Tech Stack */}
                                <div className="flex gap-4 my-4">
                                    <div>HTML</div>
                                    <div>CSS (Tailwind, DaisyUI)</div>
                                    <div>JavaScript</div>
                                    <div>FontAwesome</div>
                                </div>
                        
                                {/* Buttons for Live Project and GitHub */}
                                <div className="flex gap-4 my-4">
                                    <a href="https://assignment-six-live-repo.netlify.app" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
                                        View Live Project
                                    </a>
                                    <a href="https://github.com/Tayebasultana/pet-adoption" target="_blank" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
                                        GitHub Repository
                                    </a>
                                </div>
                        
                                {/* Link to View More Details */}
                                <NavLink to="pet-Project-Details" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md" href="/petProjectDetails.html">
                                    View more about this Project
                                </NavLink>
                            </div>
                        </div>

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