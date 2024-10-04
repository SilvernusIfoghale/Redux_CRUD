import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateUser } from "./Redux/features/UserSlice";

export default function Update() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const { id } = useParams();
  const singleUser = users.filter((f) => f.id == id);
  const { name, email } = singleUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const navigate = useNavigate();
  const handleUpdate = () => {
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };
  // console.log(id);
  return (
    <div className="flex items-center h-[100vh]">
      <div className="w-[650px] h-[350px] bg-gray-500 flex justify-center flex-col px-10">
        <p className="pb-10  text-2xl  text-white">Update User</p>

        <div>
          <label htmlFor="Name" className="text-white">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter name "
            className="w-full mb-2 p-2 rounded-md"
            value={uname}
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
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="text-white bg-blue-500 p-2 rounded-lg mt-4 py-3 w-52 hover:bg-blue-400"
          onClick={handleUpdate}
        >
          <p>Update User</p>
        </button>
      </div>
    </div>
  );
}
