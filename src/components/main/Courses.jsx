import React, { useEffect, useState } from 'react';
import Dot from '../../assets/svg/Dot';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Courses = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }, [])

    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-center text-4xl uppercase font-bold'>All Courses</h1>
            <div className="grid gap-8 mt-11 grid-cols-3">
                {
                    data[0]?.allCourses?.map((course) => <div
                        key={course.id}
                        className='hover:-translate-y-1 rounded duration-200 shadow-md overflow-hidden'
                    >
                        <img className='max-h-[150px] w-full' src={course.thumbnail} alt="" />
                        <div className="">
                            <div className="p-2">
                                <h1 className='uppercase  text-gray-500 text-sm'>courses</h1>
                                <h1 className='mt-2 text-2xl'>{course.title}</h1>
                            </div>
                            <div className="mt-9 p-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col items-start justify-center">
                                        <Dot />
                                        <p className="m-0 text-xs font-semibold capitalize leading-5 ">
                                            {course.category}
                                        </p>
                                    </div>
                                    <div className="">
                                        <button className='flex px-2 py-[6px] border-gray-400 border-[1px] justify-center items-center gap-3'>
                                            <span className='text-xl'>Get started</span>
                                            <span><AiOutlineArrowRight className="text-xl text-blue" /></span>
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Courses;