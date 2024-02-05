import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./routers.jsx";
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
