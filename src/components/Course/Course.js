import React from 'react';


const Course = (props) => {
    const { name, img, price, duration } = props.course;

    return (
        <div>
            {/* home page 4 card  */}
            <div>
                <div className="card border rounded-3 shadow p-3 mb-5 bg-body h-100">
                    <img src={img} className="card-img-top w-100" alt="..." />
                    <div className="card-body">
                        <h5>Course Name :<span className="text-primary"> {name}</span></h5>
                        <h5>Course Fee : {price}TK</h5>
                        <h5>Duration : {duration} Day's</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;