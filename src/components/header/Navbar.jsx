import React from 'react';
import { CiSearch } from 'react-icons/ci'

const Navbar = () => {
    const navItems = [
        {
            title: 'Explore',
            link: '/explore'

        },
        {
            title: 'Pricing',
            link: '/pricing',
        },
        {
            title: 'Enterprise',
            link: '/enterprise',
        },
        {
            title: 'Resources',
            link: '/resources',
        }
    ]
    return (
        <nav className='px-8 py-2 flex items-center'>
            <div className="flex item-center">
                <div className="">
                    <div className="">
                        <h1 className='text-xl font-bold '>educative</h1>
                    </div>
                </div>
                <div className="">
                    <ul className='flex space-x-4'>
                        {navItems.map((item, index) => (
                            <li key={index} className='text-base font-medium text-gray-500 hover:text-gray-900'>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="">
                        <CiSearch className="w-6 h-6" />
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;