// import React from "react";

// const Home = () => {
//     return (
//         <section className="relative flex">
//             <div className="left-div fixed left-0 top-0 h-screen w-64 border border-black bg-blue-500">
//                 left
//             </div>
//             <div className="right-div ml-64 w-full bg-red-500">
//                 right
//             </div>
//         </section>
//     );
// };
// export default Home;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import menu from "../../JsonData/menu.json";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className=" mb-24">
            <div className="left-div left-0 top-0 h-fit w-full  bg-[#a8dadc] pb-4 text-black">
                <div className="w-full py-5">
                    <h4 className="text-center text-2xl font-bold">Mini Projects</h4>
                </div>

                <ul className="flex flex-wrap gap-6  px-4 ">
                    {menu.menuData.map((data) => (
                        <li key={data.id}>
                            <Link
                                to={`${data.navLink}`}
                                className="rounded-md  px-3 py-1 duration-300 bg-[#57c8cc] hover:bg-[#1d3557] hover:text-white"
                            >
                                {data.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Home;
