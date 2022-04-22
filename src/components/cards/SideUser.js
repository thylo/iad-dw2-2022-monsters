import React from "react";
import UserCard from "./UserCard";

const SideUser = ({created_by}) => {

    if (created_by == null) return null;

    return (
        <div className="c-side-window">
            <button>Close</button>
            <UserCard userId={created_by}/>
        </div>
    );
}

export default SideUser;