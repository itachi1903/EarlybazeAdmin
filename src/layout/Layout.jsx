import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Profile from './components/Profile';
import { Topbar_profile_Left } from '../dummyData/Data';
import Agents from './components/Agents';

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <div className="flex bg-theme-light">
                {/* Sidebar */}
                <div
                    className={`fixed lg:static top-0 left-0 z-20 transition-transform transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
                        } lg:translate-x-0 lg:w-fit`}
                >
                    <Sidebar setMobileOpen={setMobileOpen} />
                </div>
                {/* Main Content */}
                <div
                    className={`w-full h-screen overflow-auto transition-all duration-300 `}
                >
                    <div className="">
                        <div className="min-h-[72px] sticky top-0 z-[100] flex justify-between items-center px-4 md:px-8 py-2 border-l-2 border-b-2 border-[#093826] bg-theme-light">
                            <div className='flex items-center gap-2'>
                                <button
                                    className="block lg:hidden"
                                    onClick={() => setMobileOpen(!mobileOpen)}
                                >
                                    <i className="bi bi-list text-white text-4xl"></i>
                                </button>
                                <Agents agents={Topbar_profile_Left} />
                            </div>
                            <div className="">
                                {/* give name and img 
                                hey is hardcore
                                 */}
                                <Profile />
                            </div>
                        </div>
                        <div className='p-8 text-white'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
