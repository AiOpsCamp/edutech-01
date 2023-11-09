import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CourseContent = () => {

    const [isCollapse, setIsCollapse] = useState(false);
    console.log(isCollapse)


    return (
        <div className='mt-6 max-w-screen-xl mx-auto'>
            <div className="w-[70%] ">
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl font-bold'>Course Overview</h1>
                    <span className='text-2xl font-bold text-blue'>Expand All Sections</span>
                </div>
                <div className="my-7">
                    <div className="">
                        <div onClick={() => {
                            setIsCollapse(prev => !prev)
                        }} className="flex hover:bg-gray-100 duration-200 py-2 px-1 rounded-md cursor-pointer justify-between">
                            <div className="flex items-center gap-3">
                                <div className="py-1 px-3 max-w-fit border-gray-300 font-bold border-[1.5px] w-fit rounded-full ">
                                    1
                                </div>
                                <div className="">
                                    <h1 className='font-bold text-xl'>Overview</h1>
                                    <p className='text'>8 Lesson</p>
                                </div>
                            </div>
                            <div className="">
                                {
                                    isCollapse ? <FaChevronUp className='text-xl text-black' /> : <FaChevronDown className='text-xl text-black' />

                                }
                            </div>
                        </div>
                        {
                            isCollapse && <div className="">
                               
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseContent;