import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Catagorys from "../Pages/Home/Catagorys/Catagorys";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/Home/News/News";

const router = createBrowserRouter([
   {
    path:"/",
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Catagorys></Catagorys>,
            loader:()=>fetch('http://localhost:5000/news')
        },
        {
            path:"/category/:id",
            element:<Catagorys></Catagorys>,
            loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        },
        {

        }
    ]
   },
   {
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children:[
       {
        path:':id',
        element:<News></News>,
        loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
       }
    ]
   }
])

export default router;