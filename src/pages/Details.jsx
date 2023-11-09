import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsClipboardData, BsFillBookmarkFill, BsJournalRichtext } from 'react-icons/bs';
import { GiNetworkBars } from 'react-icons/gi';
import { BiStopwatch } from 'react-icons/bi';
import { PiCertificateDuotone } from 'react-icons/pi';
import Paragraph from '../tmp/Paragraph';
import { CgWebsite } from 'react-icons/cg';
import { GrMagic } from 'react-icons/gr';
import Java from '../assets/svg/Java';
import TakeWaySkills from '../components/details/TakeWaySkills';

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json');
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        fetchData();
    }, [])

    // if scroll position is greater than 100px then show state is true
    const handleScroll = () => {
        if (window.scrollY > 500) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])



    const { category, title, level, details, thumbnail } = data[0]?.allCourses?.find((course) => course.id === id) || {};


    return loading ? <div className="flex justify-center items-center h-screen">
        <h1>Loading...</h1>
    </div> : (
        <section className='overflow-hidden'>
            <div className="h-[300px]  w-full bg-[#121d42] text-[#f9fafb]">
                <div className="w-[90%] relative py-8  mx-auto">
                    <div className="flex items-center gap-4">
                        <h1>{category}</h1>
                        <div className='border-r border-white h-[20px] '> </div>
                        <BsFillBookmarkFill className="text-xl" />
                    </div>
                    <div className="mb-10">

                        <h1 className='text-5xl  font-bold  mt-3'>{title}</h1>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center ">
                            <GiNetworkBars className="text-base" />
                            <span className="ml-1">{level}</span>
                        </div>
                        <div className="flex items-center ">
                            <BsJournalRichtext className="text-base" />
                            <span className=" ml-1">{details.videos} Lessons</span>
                        </div>
                        <div className="flex items-center ">
                            <BiStopwatch className="text-xl" />
                            <span className=" ml-1">{details.length}h</span>
                        </div>
                        <div className="flex items-center ">
                            <PiCertificateDuotone className="text-xl" />
                            <span className=" ml-1">Certificate of Completion</span>
                        </div>
                    </div>
                    <div className={`${show ? 'fixed right-[150px]' : 'absolute right-[100px]'} hidden md:block shadow-md top-[70px] bg-white w-[250px] `}>
                        <div
                            hidden={show}
                        >
                            <img src={thumbnail} />
                        </div>
                        <div className="w-full mb-4 p-4">
                            <button
                                className='py-3 px-4 bg-blue w-full text-center text-white  mt-4'
                            >
                                Start Learning
                            </button>
                            <div className="text-black space-y-2 mt-3">
                                <p className='font-bold'>This course includes:</p>
                                <span className='flex items-center '>
                                    <CgWebsite className="text-xl" />
                                    <span className="ml-1 ">
                                        {details.playground} Playgrounds
                                    </span>
                                </span>
                                <span className='flex items-center '>
                                    <BsClipboardData className="text-xl" />
                                    <span className="ml-1 ">
                                        {details.videos} Lessons
                                    </span>
                                </span>
                                <span className='flex items-center '>
                                    <GrMagic className="text-xl" />
                                    <span className="ml-1 ">
                                        {details.illustration} Illustrations
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 flex items-center gap-6 mx-10">
                <p className='text-xl font-bold'>Looking to learn in a different language?</p>
                <button className="px-3 hover:bg-gray-100 duration-150 py-1 border-[0.5px] rounded-full flex justify-center items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 48 48">
                        <path fill="#00549d" fillRule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clipRule="evenodd"></path>
                        <path fill="#0086d4" fillRule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clipRule="evenodd"></path>
                        <path fill="#fff" fillRule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clipRule="evenodd"></path>
                        <path fill="#0075c0" fillRule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clipRule="evenodd"></path>
                        <path fill="#fff" fillRule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clipRule="evenodd"></path>
                        <path fill="#fff" fillRule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clipRule="evenodd"></path>
                    </svg>
                    <span>C++</span>
                </button>
                <button className="px-3 hover:bg-gray-100 duration-150 py-1 border-[0.5px] rounded-full flex justify-center items-center gap-1">
                    <Java />
                    <span>Java</span>
                </button>
            </div>
            <TakeWaySkills />
        </section>
    );
};

export default Details;