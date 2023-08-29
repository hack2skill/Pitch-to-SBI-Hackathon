import { MoonIcon } from '@heroicons/react/24/solid';
import React from 'react';

import SearchBox from './header/SearchBox';

import { MenuIcon } from '@heroicons/react/outline';

const Header = ({ mobileNavsidebar, setMobileNavsidebar }) => {
    return (
        <header className="flex items-center h-20 px-6 w-full sm:px-10 bg-white ">
            <h1 className='text-xl font-bold hidden md:block'>Corporate Loan Portal</h1>
            <MoonIcon className='h-12 stroke-slate-600 cursor-pointer sm:hidden' onClick={() => setMobileNavsidebar(!mobileNavsidebar)} />
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-black ml-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <div className='hidden md:block'>Ask Loan</div>
            <div className=' ml-6 w-80 hidden md:block'>Settings</div>
            <SearchBox className="ml-12 " />
        </header>
    );
};

export default Header;