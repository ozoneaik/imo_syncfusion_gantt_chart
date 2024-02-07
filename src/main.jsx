import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./routers.jsx";
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import '../node_modules/@syncfusion/ej2-base/styles/material.css';
import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
import '../node_modules/@syncfusion/ej2-gantt/styles/material.css';
import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
import '../node_modules/@syncfusion/ej2-treegrid/styles/material.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
