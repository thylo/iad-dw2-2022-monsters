import clsx from "clsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const fetchUser = async (id) => {
  return axios.get(`http://localhost:8080/users/${id}`);
};

const UserCard = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser(userId)
      .then((response) => {
        console.log(response);
        setUser(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError("Error");
      });
  }, [userId]);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="c-monster-card-stats__creator">
      <span className="c-monster-card-stats__label">Creator: </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/list/users/${userId}`)
        }}
        className="c-monster-card-stats__amount"
      >
        {user.name}
      </button>
    </div>
  );
};

export default UserCard;
