import { NavLink } from "react-router-dom";
import tour from "../assets/images/sylhet-package-3.png";

const TourProjectDetails = () => {
    return (
        <div>
              {/* <!-- Container for the project details --> */}
    <div class="bg-[#f8e7f6] py-10 text-center">
        <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">

            {/* <!-- Project Image --> */}
            <div class="flex justify-center mb-6">
                <img src={tour} alt="Tour of Dreams Image" class="w-full h-auto object-cover rounded-lg"/>
            </div>

            {/* <!-- Project Title and Description --> */}
            <h2 class="text-3xl font-semibold text-[#4B164C] text-center mb-4">Tour of Dreams</h2>
            <p class="text-lg text-[#4B164C] text-center mb-6">
                The Tour of Dreams platform is a comprehensive guide for tourists looking to explore popular destinations in Bangladesh. 
                From detailed information on local culture to booking tours and selecting tour guides, this platform provides everything a traveler needs for a memorable journey.
            </p>

            {/* <!-- Technologies Used --> */}
            <h3 class="text-2xl font-semibold text-[#4B164C] mb-4">Technologies Used</h3>
            <ul class="list-disc pl-5 mb-6">
                <li>Frontend: React, Tailwind CSS, React Router</li>
                <li>Backend: Node.js, Express.js, MongoDB</li>
                <li>Authentication: JWT, Google Login</li>
                <li>Other Libraries: React-Toastify, React-Query, Framer Motion, React-Share</li>
            </ul>

            {/* <!-- Live Demo and GitHub --> */}
            <div class="flex justify-center gap-8 mb-6">
                <a href="https://your-live-project-link.com" target="_blank" class="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
                    Live Project
                </a>
                <a href="https://github.com/yourgithubusername/tour-of-dreams" target="_blank" class="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
                    GitHub (Client)
                </a>
            </div>

            {/* <!-- Challenges Faced --> */}
            <h3 class="text-2xl font-semibold text-[#4B164C] mb-4">Challenges Faced</h3>
            <ul class="list-disc pl-5 mb-6">
                <li>Implementing JWT authentication with secure token storage</li>
                <li>Integrating dynamic content such as tours and bookings in real-time</li>
                <li>Ensuring the platform’s responsiveness across all devices</li>
                <li>Managing complex user roles (admin, tour guides, and tourists) effectively</li>
            </ul>

            {/* <!-- Potential Improvements --> */}
            <h3 class="text-2xl font-semibold text-[#4B164C] mb-4">Potential Improvements & Future Plans</h3>
            <ul class="list-disc pl-5">
                <li>Adding a payment gateway for seamless online bookings</li>
                <li>Expanding the platform to include more tourist destinations across Bangladesh</li>
                <li>Implementing more interactive features for tourists, such as live chat with tour guides</li>
                <li>Adding a feedback and review system for tourists to rate tours and guides</li>
            </ul>
        </div>
        <NavLink to="/" className=" bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md my-4">go back</NavLink>
    </div>
        </div>
    );
};

export default TourProjectDetails;