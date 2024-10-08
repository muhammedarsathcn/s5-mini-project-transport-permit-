import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import UserLogin from "./UserLogin"
import UserRegister from "./UserRegister";
import UserFrom from "./UserForm";
import TakalUserForm from './TakalUserForm';
import AdminApprove from './AdminApprove';
import AdminLandingPage from './AdminHomePage';
import ApprovedList from './ApprovedList';
import CheckHome from './CheckHome';
import CheckVerify from './CheckpostVerify';
import './App.css'
import UserHome from './UserHome';
import PassedList from './PassedList';
import TatkalPending from './TatkalPending';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<UserLogin/>
    },
    {
      path:"/user-home",
      element:<UserHome/>
    },
    {
      path:"/user-register",
      element:<UserRegister/>
    },
    {
      path:"/user-form",
      element:<UserFrom/>
    },
    {
      path:"/takal-form",
      element:<TakalUserForm/>
    },
    {
      path:"/admin-approve",
      element:<AdminApprove/>
    },
    {
      path:"/admin-landingpage",
      element:<AdminLandingPage/>
    },
    {
      path:"/approved-list",
      element:<ApprovedList/>
    },
    {
      path:"/check-home",
      element:<CheckHome/>
    },
    {
      path:"/check-verify",
      element:<CheckVerify/>
    },
    {
      path:"/passed-list",
      element:<PassedList/>
    },
    {
      path:"/takkal-pending",
      element:<TatkalPending/>
    }
  ])
  return (
   <div>
    <RouterProvider router={router}/>
   </div>
  );
}

export default App;
