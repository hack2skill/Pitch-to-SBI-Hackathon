import {
    CloudIcon, DocumentIcon, FolderIcon
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

const Nav = ({ sidebarOutsideClick }) => {
    const [sidebarStatus, setSidebarStatus] = useState(false);
    const [subMenuToggleStatus, setSubMenuToggleStatus] = useState(false);

    const sidebarClose = () => {
        setSidebarStatus(false);
    };

    const sidebarOpen = () => {
        setSidebarStatus(true);
    };

    const subMenuToggle = () => {
        setSubMenuToggleStatus(!subMenuToggleStatus);
    };

    //if menu has chile menu then  use seperate array
    const childMenu = [
        {
            subMenuTitle: "Commerce",
            linkHref: "/"
        },
        {
            subMenuTitle: "Analytics",
            linkHref: "/"
        },
        {
            subMenuTitle: "Crypto",
            linkHref: "/"
        },
    ];

    useEffect(() => {
        if (sidebarOutsideClick) {
            setSidebarStatus(false);
        }
    }, [sidebarOutsideClick]);
    //console.log("sidebar Nav", sidebarOutsideClick)
    return (
        <>
            <nav className="flex flex-col mx-4 my-6 space-y-4 w-60">

                <button className="inline-flex px-5 py-3 bg-white text-black   rounded-md ml-6 mb-3">
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-black -ml-1 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    New Item
                </button>




                <NavItem
                    hrefLink='/Dashboard'
                    sidebarStatus={sidebarStatus}
                    menuTitle="Dashboard"
                    subMenu={true}
                    subMenuArray={childMenu}
                >
                    <CloudIcon className="h-10 " />
                    <h2 className="ml-4 text-white">Dashboard</h2>
                </NavItem>

                <NavItem
                    hrefLink='/Documents'
                    sidebarStatus={sidebarStatus}
                    menuTitle="My Documents"
                    subMenu={true}
                    subMenuArray={childMenu}
                >
                    <DocumentIcon className="h-10" />
                    <h2 className="ml-4 text-white">My Documents</h2>
                </NavItem>

                {/* this menu has child Menu     */}
                <NavItem
                    hrefLink='/loanData'
                    sidebarStatus={sidebarStatus}
                    menuTitle="Settings"
                    subMenu={true}
                    subMenuArray={childMenu}
                >
                    <FolderIcon className="h-10" />
                    <h2 className="ml-4 text-white">Loan Health</h2>
                </NavItem>

            </nav>
        </>
    );
};

export default Nav;