import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteUser } from "./Redux/features/UserSlice";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  // console.log(users.data);

  const handleDelete = (id) => {
    // console.log(id);
    dispatch(
      deleteUser({
        id: id,
      })
    );
  };
  return (
    <div>
      <p className="text-3xl font-bold mb-5">CRUD with Redux</p>

      <button
        className="text-white bg-green-600 p-4 rounded-lg hover:bg-green-700"
        onClick={() => navigate("/create")}
      >
        <p>Create new User</p>
      </button>

      <div className="  min-w-[600px] mt-9">
        <div className="flex gap-1">
          <p className="font-bold w-16">ID</p>
          <p className="font-bold w-52">Name</p>
          <p className="font-bold w-52">Email</p>
          <p className="font-bold w-48">Actions</p>
        </div>
        {users?.map((item, index) => (
          <div key={index} className="py-3 border-b-2 ">
            <div className=" flex gap: 1">
              <p className="w-16">{item.id}</p>
              <p className="w-52">{item.name}</p>
              <p className="w-52">{item.email}</p>
              <div className="w-48">
                <button className="text-white bg-blue-600 px-2 py-1 rounded-md mr-2 hover:bg-blue-700">
                  <NavLink to={`/edit/${item.id}`} className="text-sm">
                    Edit
                  </NavLink>
                </button>
                <button
                  className="text-white bg-red-500 px-2 py-1 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(item.id)}
                >
                  <p className="text-sm">Delete</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
