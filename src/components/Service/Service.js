import React from 'react';

const Service = (props) => {
    const { name, img, price, duration, description } = props.course;
    return (
        <div className="col">
            <div className="card border rounded-3 shadow p-3 mb-5 bg-body h-100">
                <div>
                    <img src={img} className="card-img-top w-100 " alt="..." />
                </div>
                <div className="card-body">
                    <h5>Course Name :<span className="text-primary"> {name}</span></h5>
                    <h5>Course Fee : {price}TK</h5>
                    <h5>Duration : {duration} Day's</h5>
                    <p>Description : {description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;