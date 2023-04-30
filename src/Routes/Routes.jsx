import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Catagorys from "../Pages/Home/Catagorys/Catagorys";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/Home/News/News";
import LoginLayOut from "../Layouts/LoginLayOut";
import Login from "../Pages/Login/Login/Login";
import Registar from "../Pages/Login/Registar/Registar";
import PrivetRoutes from "./PrivetRoutes";
import Terms from "../Shared/Terms/terms";


const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayOut></LoginLayOut>,
        children:[
            {
                path:"/",
                element:<Navigate to="/category/0"></Navigate>
            },
            {
                 path:"/login",
                 element:<Login></Login>
            },
            {
                path:"/registar",
                element:<Registar></Registar>
            },
            {
                path:"/terms",
                element:<Terms></Terms>
            }
        ]
    },
   {
    path:"category",
    element:<Main></Main>,
    children:[
        {
            path:":id",
            element:<Catagorys></Catagorys>,
            loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        }
    ]
   },
   {
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children:[
       {
        path:':id',
        element:<PrivetRoutes><News></News></PrivetRoutes>,
        loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
       }
    ]
   }
])

export default router;