import { createBrowserRouter } from 'react-router-dom'
import MainLAyout from '../Layout/MainLAyout';
import TourProjectDetails from '../TourProjectDetails';
import PetProjectDetails from '../PetProjectDetails';
import VisaProjectDetails from '../VisaProjectDetails';
import AgroMartDetails from '../AgroMartDetails';


const routes = createBrowserRouter([
    {
      path:'/',
      element:<MainLAyout></MainLAyout>,
    },
    {
      path: 'AgroMart_Project_details',
      element: <AgroMartDetails></AgroMartDetails>
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