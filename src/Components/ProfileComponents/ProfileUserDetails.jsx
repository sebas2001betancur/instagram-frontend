import React from "react";
import { TbCircleDashed } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileUserDetails = () => {
  const { user } = useSelector((store) => store);
  const navigate = useNavigate();
  console.log("user", user.reqUser);
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src={
              user.reqUser?.image ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            }
            alt=""
          />
        </div>

        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>{user.reqUser?.username}</p>
            <button onClick={() => navigate("/account/edit")}>
              Edit Profile
            </button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2"></span>
              <span>posts</span>
            </div>

            <div>
              <span className="font-semibold mr-2">5</span>
              <span>follower</span>
            </div>
            <div>
              <span className="font-semibold mr-2">7</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">{user.reqUser?.fullName}</p>
            <p className="font-thin text-sm">{user.reqUser?.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;
