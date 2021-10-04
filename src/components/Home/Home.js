import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';


const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <div className="d-flex justify-content-around bg-dark text-light text-center p-5 mt-3">
                <div>
                    <h2 className="text-center">HTML</h2>
                    <button type="button" className="btn btn-success mb-4">Learn HTML</button> <br />
                    <button type="button" className="btn btn-success mb-4">Video Tutorual</button><br />
                    <button type="button" className="btn btn-success mb-4">HTML Reference</button>
                </div>

                <div className=" ">
                    <h2 className="text-center">CSS</h2>
                    <button type="button" className="btn btn-success mb-4">Learn CSS</button> <br />
                    <button type="button" className="btn btn-success mb-4">Video Tutorual</button><br />
                    <button type="button" className="btn btn-success mb-4">CSS Reference</button>
                </div>

            </div>
            <h1 className="text-center mt-3 mb-3 text-info">Popular Online Courses</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 m-1">
                {

                    courses.slice(0, 4).map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Home;