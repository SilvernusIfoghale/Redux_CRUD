import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./Redux/features/UserSlice";

export default function Create() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleCreate = () => {
    // console.log(users);

    dispatch(
      createUser({
        id: users[users.length - 1].id + 1,
        name,
        email,
      })
    );
    navigate("/");
  };

  return (
    <div className="flex items-center h-[100vh]">
      <div className="w-[650px] h-[350px] bg-gray-500 flex justify-center flex-col px-10">
        <p className="pb-10  text-2xl  text-white">Add New User</p>

        <div>
          <label htmlFor="Name" className="text-white">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter name "
            className="w-full mb-2 p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-2">
          <label htmlFor="Email" className="text-white">
            E-mail:
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full mb-2 p-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="text-white bg-blue-500 p-2 rounded-lg mt-4 py-3 w-52 hover:bg-blue-400"
          onClick={handleCreate}
        >
          <p>Create new User</p>
        </button>
      </div>
    </div>
  );
}
