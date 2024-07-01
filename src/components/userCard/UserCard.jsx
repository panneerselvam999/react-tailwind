import React from "react";
import userDetails from "../../JsonData/userCard.json";
import UserSingleCard from "./UserSingleCard";

const UserCard = () => {
    return (
        <div className="flex flex-wrap items-center justify-center h-full w-full">
            {userDetails.userDate.map((user) => (
                <UserSingleCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserCard;
