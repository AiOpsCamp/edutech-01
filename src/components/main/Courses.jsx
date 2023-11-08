import React, { useEffect, useState } from 'react';

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
            <div className="grid grid-cols-3">
                {
                    data[0]?.allCourses?.map((course) => <div
                        key={course.id}
                        className='border'
                    >
                        <img className='max-h-[150px] w-full' src={course.thumbnail} alt="" />
                        <div className="">
                            <h1 className='uppercase  text-gray-500 text-sm'>courses</h1>
                            <h1 className='mt-2 text-2xl'>{course.title}</h1>
                            <div className="">
                                <div className="flex flex-col items-start justify-center">
                                    
                                    <p className="m-0 text-xs font-semibold capitalize leading-5 dark:text-gray-D200">beginner</p>
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