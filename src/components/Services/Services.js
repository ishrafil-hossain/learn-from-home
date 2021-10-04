import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <h1 className="text-center mt-4">Total Courses : {courses.length}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
                {
                    courses.map(course => <Service
                        key={course.id}
                        course={course}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;