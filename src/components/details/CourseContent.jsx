import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CourseContent = () => {

    const data = [
        {
            id: 1,
            title: 'Overview',
            lesson: 8,
            sub: [
                {
                    id: 1,
                    title: 'ChainedHashTable: Hashing with Chaining'
                },
                {
                    id: 2,
                    title: 'LinearHashTable: Linear Probing'
                },
                {
                    id: 3,
                    title: 'Hash Codes'
                },
                {
                    id: 4,
                    title: 'Quiz on Hash Tables'
                },
                {
                    id: 5,
                    title: 'Quiz on Binary Trees'
                }
            ]
        },
        {
            id: 2,
            title: 'Array-Based Lists',
            lesson: 10,
            sub: [
                {
                    id: 1,
                    title: 'ChainedHashTable: Hashing with Chaining'
                },
                {
                    id: 2,
                    title: 'LinearHashTable: Linear Probing'
                },
                {
                    id: 3,
                    title: 'Hash Codes'
                },
                {
                    id: 4,
                    title: 'Quiz on Hash Tables'
                },
                {
                    id: 5,
                    title: 'Quiz on Binary Trees'
                }
            ]
        }
    ]
    const [isAllOpen, setIsAllOpen] = useState(false);
    const handleExpandAll = () => {
        setIsAllOpen((prevIsAllOpen) => !prevIsAllOpen);
        setOpenIndex(null); // Close individual sections when "Expand All" is clicked
    };
    const [openIndex, setOpenIndex] = useState(null);

    const box = <div className="h-6 w-6 border-[1px] rounded-full"></div>;

    return (
        <div className='mt-6 max-w-screen-xl mx-auto'>
            <div className="w-[70%] ">
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl font-bold'>Course Overview</h1>
                    <button
                        onClick={handleExpandAll}
                        className='text-2xl font-bold cursor-pointer text-blue'>
                        {isAllOpen ? 'Collapse All Sections' : 'Expand All Sections'}
                    </button>
                </div>
                <div className="my-7 space-y-3">
                    {data.map((item, index) => (
                        <div key={item.id} className="">
                            <div
                                onClick={() => {
                                    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
                                }}
                                className="flex hover:bg-gray-100 duration-200 py-2 px-1 rounded-md cursor-pointer justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="py-1 px-3 max-w-fit border-gray-300 font-bold border-[1.5px] w-fit rounded-full ">
                                        1
                                    </div>
                                    <div className="">
                                        <h1 className='font-bold text-xl'>{item.title}</h1>
                                        <p className='text'>{item.lesson} Lesson</p>
                                    </div>
                                </div>
                                <div className="">
                                    {openIndex === index ? (
                                        <FaChevronUp className='text-xl text-black' />
                                    ) : (
                                        <FaChevronDown className='text-xl text-black' />
                                    )}
                                </div>
                            </div>
                            {openIndex === index || isAllOpen ? (
                                <div className="ml-2 space-y-2">
                                    {item.sub.map(sub => (
                                        <div key={sub.id} className="flex items-center gap-1">
                                            {box}
                                            <p className='underline'>{sub.title}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default CourseContent;