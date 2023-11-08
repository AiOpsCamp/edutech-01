import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillBookmarkFill, BsJournalRichtext } from 'react-icons/bs';
import { GiNetworkBars } from 'react-icons/gi';
import { BiStopwatch } from 'react-icons/bi';
import { PiCertificateDuotone } from 'react-icons/pi';

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json');
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        fetchData();
    }, [])
    const { category, title, level, details } = data[0]?.allCourses?.find((course) => course.id === id) || {};


    return loading ? <div className="flex justify-center items-center h-screen">
        <h1>Loading...</h1>
    </div> : (
        <section>
            <div className="h-[300px] w-full bg-[#121d42] text-[#f9fafb]">
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
                    <div className="fixed top-[300px] bg-blue w-[250px] h-32 right-0">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;