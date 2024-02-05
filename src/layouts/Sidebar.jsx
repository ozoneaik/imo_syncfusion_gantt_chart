import {Link} from "react-router-dom";
import '../assets/css/sidebar.css'

const Sidebar = () => {
    return (
        <aside className={'p-3'} style={{
            width: 300,
            background: "#004991",
            height: 'calc(100vh - 60px)',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
        }}>
            <ul className={'sidebar-menu'}>
                <li>
                    <Link to={'/'}>
                        <div className={'d-flex align-items-center'}>
                            <span className="e-icons e-home">&nbsp;</span> <span>Home</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={'/gantt-chart'}>
                        <span className="e-icons e-chart"></span>&nbsp;<span>Gantt Chart</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;