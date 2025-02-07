import { NavLink } from "react-router-dom";
import visa from "../assets/images/forsaken-films-7cfcCOOXsIo-unsplash.jpg";

const VisaProjectDetails = () => {
    return (
        <div>
            {/* <!-- Container for the project details --> */}
    <div class="bg-blue-100 py-10 text-center">
        <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">

            {/* <!-- Project Image --> */}
            <div class="flex justify-center mb-6">
                <img src={visa} alt="Visa Navigator Image" class="w-full h-auto object-cover rounded-lg"/>
            </div>

            {/* <!-- Project Title and Description --> */}
            <h2 class="text-3xl font-semibold text-[#4B164C] text-center mb-4">Visa Navigator</h2>
            <p class="text-lg text-[#4B164C] text-center mb-6">
                Visa Navigator is a platform designed to assist travelers in obtaining the necessary visas for various countries. 
                The platform provides detailed guides, required documents, and application procedures, helping users through every step of the visa application process.
            </p>

            {/* <!-- Technologies Used --> */}
            <h3 class="text-2xl font-semibold text-[#4B164C] mb-4">Technologies Used</h3>
            <ul class="list-disc pl-5 mb-6">
                <li>Frontend: React, Tailwind CSS</li>
                <li>Backend: Node.js, Express.js, MongoDB</li>
                <li>Authentication: JWT, Google Login</li>
                <li>Other Libraries: React-Toastify, React-Query</li>
            </ul>

            {/* <!-- Live Demo and GitHub --> */}
            <div class="flex justify-center gap-8 mb-6">
                <a href="https://visa-navigator-a94fc.web.app" target="_blank" class="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
                    Live Project
                </a>
                <a href="https://github.com/Tayebasultana/Visa-Navigator-Client-Side" target="_blank" class="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
                    GitHub (Client)
                </a>
            </div>

            {/* <!-- Challenges Faced --> */}
            <h3 class="text-2xl font-semibold text-[#4B164C] mb-4">Challenges Faced</h3>
            <ul class="list-disc pl-5 mb-6">
                <li>Ensuring the security of sensitive user data during the application process</li>
                <li>Integrating JWT authentication seamlessly for both normal users and admins</li>
                <li>Maintaining a responsive design that works across all devices</li>
                <li>Handling real-time notifications effectively to alert users about visa updates</li>
            </ul>

            {/* <!-- Potential Improvements --> */}
            <h3 class="text-2xl font-semibold text-[#4B164C] mb-4">Potential Improvements & Future Plans</h3>
            <ul class="list-disc pl-5">
                <li>Adding multi-language support for a wider audience</li>
                <li>Incorporating a payment gateway for visa processing fees</li>
                <li>Integrating a live chat feature to provide instant assistance to users</li>
                <li>Expanding the platform to cover more countries and visa types</li>
            </ul>
        </div>
        <NavLink to="/" className="bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md mt-4">go back</NavLink>

    </div>
        </div>
    );
};

export default VisaProjectDetails;