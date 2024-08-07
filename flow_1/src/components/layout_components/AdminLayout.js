
import React from 'react';
import { Outlet } from 'react-router';
import DisplayNavItems from '../helper_components/DisplayNavItems';
import Logo from '../helper_components/Logo';

const AdminLayout = ({ children }) => {
    const firstBlockItems = [
        {
            name: "Dashboard",
            src: "dashboard.svg",
            link:"/dashboard"
        },
        {
            name: "Books",
            src: "book.svg",
            link:"/books"
        },
        {
            name: "Owners",
            src: "owner.svg",
            link:"/owner"
        },
        {
            name: "Other",
            src: "other.svg",
            link:"#"
        },
        {
            name: "Other",
            src: "other.svg",
            link:"#"
        }
    ]
    const secondBlockItems = [
        {
            name: "Notification",
            src: "notification.svg",
            link:"#"
        },
        {
            name: "Setting",
            src: "setting.svg",
            link:"#"
        },
        {
            name: "Log in as book owner",
            src: "user.svg",
            link:"#"
        }
    ]
  return (
    <>
     <div className="admin-container">
            <navbar className="admin-navbar">
                <div className="flex  gap-3 items-center">
                    <img src="menu.svg" className="w-5 h-5" alt="logo" />
                    <Logo src="blue_logo2.svg" />
                </div>
                <hr className="mt-8 mb-6"></hr>
                <DisplayNavItems items={firstBlockItems} />
                <hr className="my-4"></hr>
                <DisplayNavItems items={secondBlockItems} />

                <div className="flex justify-center items-end mt-96 pt-36 ">
                <button className="bg-gray-300 bg-opacity-30  flex items-center w-full  justify-center gap-2 p-2 rounded-md">
                    <img src="logout.svg" className="w-5 h-5" alt="logout button" />
                    <h1 className="text-white">Log out</h1>
              </button>
                </div>

            </navbar>

            <main className="admin-main">
                <div className="w-full bg-white py-4 mb-5 px-8 font-bold rounded-xl text-2xl"> Admin / </div>
                <Outlet/>
            </main>
        </div>
    </>
  );
};

export default AdminLayout;
