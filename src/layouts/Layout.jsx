import React from 'react';
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

// eslint-disable-next-line react/prop-types
function Layout({children ,HeadTitle_en,HeadTitle_th}) {
    return (
        <div>
            <Navbar navHeade={HeadTitle_en}/>
            <div className={'d-flex'}>
                <Sidebar/>

                <div className={'container-fluid p-0'} style={{height: 'calc(100vh - 60px)', overflowY: "scroll"}}>
                    <div className={'px-3 py-2'} style={{borderBottom:'solid #fbc107 3px'}}>
                        <p className={'m-0 mb-1'}>{HeadTitle_en}</p>
                        <p className={'m-0'}>{HeadTitle_th}</p>
                    </div>
                    <div className={'p-3'}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;