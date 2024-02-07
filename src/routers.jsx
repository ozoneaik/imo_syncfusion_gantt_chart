import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import {GanttChart} from "./views/GanttChart.jsx";
import CreateTask from "./views/CreateTask.jsx";

export const router = createBrowserRouter([
    {path: '/', element:<App/>},
    {path: '/gantt-chart', element:<GanttChart/>},
    {path: '/create', element:<CreateTask/>},
])