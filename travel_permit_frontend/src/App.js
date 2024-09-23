import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import UserLogin from "./UserLogin"
import UserRegister from "./UserRegister";
import UserFrom from "./UserForm";
import AdminApprove from './AdminApprove';
import AdminLandingPage from './AdminHomePage';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<UserLogin/>
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
      path:"/admin-approve",
      element:<AdminApprove/>
    },
    {
      path:"/admin-landingpage",
      element:<AdminLandingPage/>
    }
  ])
  return (
   <div>
    <RouterProvider router={router}/>
   </div>
  );
}

export default App;
