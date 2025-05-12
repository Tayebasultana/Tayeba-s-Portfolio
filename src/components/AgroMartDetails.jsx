import { NavLink } from "react-router-dom";

const AgroMartDetails = () => {
  return (
    <div className="bg-blue-100 py-10 text-center">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">

        {/* Project Image */}
        <div className="flex justify-center mb-6">
          <img src="https://i.ibb.co.com/PZh2FDNb/Screenshot-2025-05-04-162750.png" alt="Agro Mart" className="w-full h-auto object-cover rounded-lg" />
        </div>

        {/* Project Title and Description */}
        <h2 className="text-3xl font-semibold text-[#4B164C] text-center mb-4">Agro Mart</h2>
        <p className="text-lg text-[#4B164C] text-center mb-6">
          Agro Mart is a complete agriculture-based e-commerce platform that helps farmers and consumers connect directly. 
          It offers weather-based crop suggestions, real-time farming alerts, secure payments, and more.
        </p>

        {/* Technologies Used */}
        <h3 className="text-2xl font-semibold text-[#4B164C] mb-4">Technologies Used</h3>
        <ul className="list-disc pl-5 mb-6 text-left text-[#4B164C]">
          <li>Frontend: React, Redux, Tailwind CSS</li>
          <li>Backend: Node.js, Express.js, MongoDB</li>
          <li>Authentication: JWT, Firebase Auth</li>
          <li>Others: Stripe, Framer Motion, React Query</li>
        </ul>

        {/* Live Demo and GitHub */}
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://agro-mart-e2cb4.web.app/" target="_blank" rel="noreferrer" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
            Live Project
          </a>
          <a href="https://github.com/ashraful2871/Agro-Mart" target="_blank" rel="noreferrer" className="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
            GitHub (Client & Server)
          </a>
        </div>

        {/* Challenges Faced */}
        <h3 className="text-2xl font-semibold text-[#4B164C] mb-4">Challenges Faced</h3>
        <ul className="list-disc pl-5 mb-6 text-left text-[#4B164C]">
          <li>Dynamic weather-based product recommendation logic</li>
          <li>Managing different user roles (admin, seller, buyer)</li>
          <li>Integrating secure payment gateway with Stripe</li>
          <li>Handling real-time notifications and alerts</li>
        </ul>

        {/* Potential Improvements */}
        <h3 className="text-2xl font-semibold text-[#4B164C] mb-4">Potential Improvements & Future Plans</h3>
        <ul className="list-disc pl-5 text-left text-[#4B164C]">
          <li>Add AI-based crop disease prediction system</li>
          <li>Expand to mobile app using React Native</li>
          <li>Support for offline order processing for remote areas</li>
          <li>Multi-language support for regional farmers</li>
        </ul>
      </div>

      <NavLink to="/" className="bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md mt-6 inline-block">
        Go Back
      </NavLink>
    </div>
  );
};

export default AgroMartDetails;
