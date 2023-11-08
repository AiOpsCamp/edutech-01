import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    const fixData = data[0]?.allCourses?.find((course) => course.id === id);
    console.log(fixData)


    return loading ? <div className="">
        <h1>Loading...</h1>
    </div> : (
        <div>
            <h1>About : {fixData.title}</h1>

        </div>
    );
};

export default Details;