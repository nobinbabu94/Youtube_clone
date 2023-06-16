import React from "react";

const Loader = () => {

    return (
            <div className="flex flex-wrap mt-5">
                {Array(15).fill("").map((item,index) => (
                    <div key={index} className="flex flex-col mx-2">
                        <div className="w-64 h-36 bg-gray-200 rounded-md shadow-sm"></div>
                        <div className="w-[16rem] h-[3rem] my-2 bg-gray-200 shadow-sm rounded-md"></div>
                    </div>
                ))}
            </div>
    )
};

export default Loader;
