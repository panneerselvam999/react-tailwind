import React from "react";

const UserSingleCard = ({ user }) => {
    return (
        <div className="m-4 flex h-[350px] w-72 flex-col justify-between rounded bg-slate-900 text-white">
            <div className="flex h-full flex-col justify-between pb-3">
                <div className="relative grid place-items-center rounded">
                    <div
                        className="m-2 h-28 w-28 rounded-full border-black bg-cover bg-center bg-no-repeat outline-2 outline-offset-4 outline-white"
                        style={{ backgroundImage: `url(${user.profile})` }}
                    ></div>
                    <p
                        className={`text-ssm absolute left-2 top-3 rounded p-1 font-semibold uppercase ${user.online ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"} p`}
                    >
                        {user.online ? "Online" : "Offline"}
                    </p>
                </div>
                <div className="text-center">
                    <p>{user.name}</p>
                    <p>{user.city}</p>
                    <p className="text-ssm font-poppins font-thin">{user.description}</p>
                </div>
                <div className="text-center">
                    <button className="text-ssm mr-4 rounded bg-blue-600 hover:bg-blue-700 px-3 py-1 duration-300">
                        Message
                    </button>
                    <button className="text-ssm rounded border px-3 py-1 duration-300">
                        Following
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap rounded bg-slate-950 p-3">
                <p className="text-ssm mb-1 uppercase">skills</p>
                <div className="flex flex-wrap">
                    {user.skills.map((skill, index) => (
                        <p
                            key={index}
                            className="text-ssm mx-2 my-1 rounded border px-2 py-1"
                        >
                            {skill}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserSingleCard;

{
    /* <img src={user.profile} alt="user.profile" /> */
}
