import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from "react-router-dom";
import Layout from "./layouts/Layout.jsx";

function App() {

    return (
        <Layout HeadTitle_en={'Home'} HeadTitle_th={'หน้าหลัก'}>
            <Link to={'/gantt-chart'} className={'btn btn-primary'}>go to Gantt chart</Link>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo1</h1>
        </Layout>
    )
}

export default App
