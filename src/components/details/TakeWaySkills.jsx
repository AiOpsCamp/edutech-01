import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import CourseContent from './CourseContent';

const TakeWaySkills = () => {
    const [isShowMore, setIsShowMore] = useState(false);
    return (
        <>
            <div className='bg-[#eff6ff] p-4 md:p-8 lg:p-16  h-auto md:h-[250px] px-4 md:px-8 lg:px-16 w-full'>
                <div className="md:w-[80%] ">
                    <h1 className='text-2xl font-semibold mb-3'>Takeaway Skills</h1>
                    <div className="grid space-y-2 grid-cols-1 md:grid-cols-2 ">
                        <div className="">
                            <span className='flex items-center gap-2'>
                                <span>
                                    <AiOutlineCheck className='inline-block text-xl text-blue' />
                                </span>
                                <span>Thorough understanding of data structures and algorithms</span>
                            </span>
                        </div>
                        <div className="">
                            <span className='flex items-center gap-2'>
                                <span>
                                    <AiOutlineCheck className='inline-block text-xl text-blue' />
                                </span>
                                <span>Working knowledge of array-based, linked list-based, and blended implementations</span>
                            </span>
                        </div>
                        <div className="">
                            <span className='flex items-center gap-2'>
                                <span>
                                    <AiOutlineCheck className='inline-block text-xl text-blue' />
                                </span>
                                <span>Hands-on experience of Python interfaces, classes, and templates</span>
                            </span>
                        </div>
                        <div className="">
                            <span className='flex items-center gap-2'>
                                <span>
                                    <AiOutlineCheck className='inline-block text-xl text-blue' />
                                </span>
                                <span>Familiarity with complexity analysis of data structures and related algorithms</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <div className="">
                    <h1 className='text-2xl font-bold'>Course Overview</h1>
                </div>
                <div className="w-[70%] mb-9">
                    <p>Data structures and algorithms are essential in computer science since they play a crucial role in efficient information retrieval and processing, dealing with files, storing contacts on phones, social networks and web searches.</p>

                    <p className={`${isShowMore ? 'hidden' : 'block'} mt-4`}>In this course, you’ll learn about t... <span onClick={() => setIsShowMore(!isShowMore)} className='font-bold underline ml-3 cursor-pointer'>Show More</span></p>
                    {
                        isShowMore && <div className="">
                            <p className='mt-4'>In this course, you’ll learn about the array-based implementation of various linear data structures, stack, and queues. You’ll also learn about linked list-based implementation. Next, you’ll explore advanced data structures like skiplists and hashing. You’ll learn how to implement a variety of trees and graphs, and data structures related to bits of an integer. Toward the end of the course, you’ll learn the implementation of structures based on external storage.
                            </p>
                            <p className='mt-4'>
                                After completing this course, you’ll be able to create reusable programs with template-based collections that can efficiently analyze how to optimize the storage and retrieval of very large amounts of data. Overall, this course will enhance your productivity and performance as a software developer.
                                <span onClick={() => setIsShowMore(!isShowMore)} className='font-bold underline ml-3 cursor-pointer'>Show Less</span>
                            </p>
                        </div>
                    }


                </div>
            </div>
            <CourseContent />
        </>
    );
};

export default TakeWaySkills;