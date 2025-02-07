import { NavLink } from 'react-router-dom';
import pets from '../assets/images/andrew-s-ouo1hbizWwo-unsplash.jpg';

const PetProjectDetails = () => {
    return (
        <div>
             {/* <!-- Container for the project details --> */}
    <div class="bg-[#f8e7f6] py-10 text-center">
        <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">

            {/* <!-- Project Image --> */}
            <div class="flex justify-center mb-6">
                <img src={pets} alt="Pet Adoption Website" class="w-full h-auto object-cover rounded-lg"/>
            </div>

            {/* <!-- Project Title and Description --> */}
            <h2 class="text-3xl font-semibold text-[#4B164C] text-center mb-4">Pet Adoption Website</h2>
            <p class="text-lg text-[#4B164C] text-center mb-6">
                The Pet Adoption Website is a platform designed to help families find and adopt their best friends. The website allows users to browse through various pets available for adoption, filtered by categories, price, and other details. The process is smooth, user-friendly, and aims to bring pets and families together.
            </p>

            {/* <!-- Technologies Used --> */}
            <h3 class="text-2xl font-semibold text-[#4B164C] mb-4">Technologies Used</h3>
            <ul class="list-disc pl-5 mb-6">
                <li>HTML</li>
                <li>CSS (Tailwind, DaisyUI)</li>
                <li>JavaScript</li>
                <li>FontAwesome</li>
            </ul>

            {/* <!-- Live Demo and GitHub --> */}
            <div class="flex justify-center gap-8 mb-6">
                <a href="https://your-live-project-link.com" target="_blank" class="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
                    Live Project
                </a>
                <a href="https://github.com/yourusername/pet-adoption" target="_blank" class="btn bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md">
                    GitHub Repository
                </a>
            </div>

            {/* <!-- Challenges Faced --> */}
            <h3 class="text-2xl font-semibold text-[#4B164C] mb-4">Challenges Faced</h3>
            <ul class="list-disc pl-5 mb-6">
                <li>Organizing and categorizing pets effectively for users</li>
                <li>Implementing a smooth adoption process flow</li>
                <li>Ensuring mobile responsiveness for a user-friendly experience</li>
                <li>Handling real-time availability updates for pets</li>
            </ul>

            {/* <!-- Potential Improvements --> */}
            <h3 class="text-2xl font-semibold text-[#4B164C] mb-4">Potential Improvements & Future Plans</h3>
            <ul class="list-disc pl-5">
                <li>Adding a payment gateway for seamless online donations or adoption fees</li>
                <li>Expanding the platform to include more pets from different regions</li>
                <li>Integrating a user feedback system for pet adopters to rate their experiences</li>
                <li>Implementing live chat support between users and adoption centers</li>
            </ul>
        </div>
        <NavLink to="/" className=" bg-[#4B164C] text-white hover:bg-[#DD88CF] transition duration-300 py-2 px-4 rounded-lg shadow-md my-4">Go Back</NavLink>
    </div>
        </div>
    );
};

export default PetProjectDetails;