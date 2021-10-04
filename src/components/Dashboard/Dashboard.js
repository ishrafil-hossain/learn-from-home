import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const courses = [
        {
            id: 101,
            name: "HTML",
            price: 1000,
            duration: 15,
            img: "https://i.ibb.co/HG44Nrp/html-2.jpg",
            description: "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. ... HTML elements are the building blocks of HTML pages."
        },
        {
            id: 102,
            name: "Bootstrap",
            price: 1500,
            duration: 15,
            img: "https://i.ibb.co/HgRrNR6/bootstrap.png",
            description: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
        },
        {
            id: 103,
            name: "CSS",
            price: 1000,
            duration: 15,
            img: "https://i.ibb.co/Q8dRtc4/css-2.jpg",
            description: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
        },
        {
            id: 104,
            name: "Tailwind",
            price: 1500,
            duration: 15,
            img: "https://i.ibb.co/hMRnh84/tailwind-4.jpg",
            description: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
        },
        {
            id: 105,
            name: "JavaScript",
            price: 2000,
            duration: 15,
            img: "https://i.ibb.co/wMVJwXq/js-2.jpg",
            description: "JavaScript is the world's most popular programming language JavaScript is the programming language of the Web.JavaScript is easy to learn.This tutorial will teach you JavaScript from basic to advanced."
        },
        {
            id: 106,
            name: "React JS",
            price: 2500,
            duration: 15,
            img: "https://i.ibb.co/DMN0ZNc/react.png",
            description: "ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing. There’s never been a better time to learn React."
        },
        {
            id: 107,
            name: "Node JS",
            price: 2000,
            duration: 15,
            img: "https://i.ibb.co/J3Sr7Rr/node.jpg",
            description: "Node JS is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node."
        },
        {
            id: 108,
            name: "Express JS",
            price: 2500,
            duration: 15,
            img: "https://i.ibb.co/rmjB2y7/express-3.jpg",
            description: "What is express JS used for? he primary use of Express is to provide server-side logic for web and mobile applications, and as such it's used all over the place."
        },
        {
            id: 109,
            name: "MongoDB",
            price: 3000,
            duration: 15,
            img: "https://i.ibb.co/CHhHCQ2/MONGO.png",
            description: "What is MongoDB good for?As a document database, MongoDB makes it easy for developers to store structured or unstructured data. ... MongoDB was built for people building internet and business applications who need to evolve quickly and scale elegantly. Companies and development teams of all sizes use MongoDB for a wide variety of reasons."
        }
    ]
    return (
        <div className="mt-5 ">
            <h3 className="container">At a glance all course price</h3>
            <BarChart
                width={800}
                height={400}
                data={courses}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Bar dataKey="id" fill="#8884d8" /> */}
                <Bar dataKey="price" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Dashboard;