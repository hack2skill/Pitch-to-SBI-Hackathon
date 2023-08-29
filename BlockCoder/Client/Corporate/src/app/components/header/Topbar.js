import Link from 'next/link';
import { HomeIcon, DocumentTextIcon, CogIcon } from '@heroicons/react/20/solid';
import UserMenu from './UserMenu';
import Notifications from './Notification';
import LogOutButton from './LogOutButton';

const TopBar = () => {
  return (
    <header className="bg-neutral-900 hidden md:flex items-center justify-between">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-start">
        <div className="flex items-center">
          <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
            <HomeIcon className="h-5 w-5 mx-2" />
            Home
          </a>
        </div>
        <div className="flex items-center">
          <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
            <DocumentTextIcon className="h-5 w-5 mx-2" />
            Content
          </a>
        </div>
        <div className="flex items-center">
          <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
            <CogIcon className="h-5 w-5 mx-2" />
            Settings
          </a>
        </div>
        
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-end">
      <div className="flex items-center ml-auto">
          <div className="flex items-center space-x-1">
            <UserMenu />
            <div className="border-l pl-3 ml-3 space-x-1 flex items-center">
              <Notifications />
              <LogOutButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;