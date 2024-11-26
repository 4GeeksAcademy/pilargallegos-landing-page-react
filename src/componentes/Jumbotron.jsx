import React from 'react';

const Jumbotron = ({children}) => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3 w-75 m-auto">
            <div className="container py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="fs-4">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cupiditate repudiandae vero voluptatum eligendi, nulla explicabo consectetur quae odit ducimus error veniam. Officiis soluta, beatae eveniet totam possimus fugit ea.
                </p>
                {children}
            </div>
        </div>
    );
};

export default Jumbotron;
