import { createBrowserRouter } from 'react-router-dom'
import MainLAyout from '../Layout/MainLAyout';
import TourProjectDetails from '../TourProjectDetails';
import PetProjectDetails from '../PetProjectDetails';
import VisaProjectDetails from '../VisaProjectDetails';


const routes = createBrowserRouter([
    {
      path:'/',
      element:<MainLAyout></MainLAyout>,
    },
    {
     path:'tour-Project-Details',
     element:<TourProjectDetails></TourProjectDetails>,
    },
    {
        path:'pet-Project-Details',
        element:<PetProjectDetails></PetProjectDetails>,
    },
    {
        path:'visa-Project-Details',
        element:<VisaProjectDetails></VisaProjectDetails>
    }
  ])

  export default routes;