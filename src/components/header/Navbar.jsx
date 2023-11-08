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
        <nav className='px-8 py-2 flex justify-between items-center'>
            <div className="flex item-center gap-8">
                <div className="">
                    <div className="">
                        <h1 className='text-xl font-bold '>educative</h1>
                    </div>
                </div>
                <div className="">
                    <ul className='flex items-center  space-x-4'>
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
                    <div className="flex justify-center items-center gap-3">
                        <button className='flex px-2 py-3 hover:bg-gray-100 duration-200 items-center gap-3 '>
                            <CiSearch className="w-6 h-6" />
                            <span className=' font-bold'>Search</span>
                        </button>
                        <button className='px-3 hover:bg-gray-100 duration-200 py-3'>
                            <span className='font-bold'>Login</span>
                        </button>
                        <button className='bg-[#5553ff] text-white font-bold px-3 py-2 rounded'>
                            <span>Join for free</span>
                        </button>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;