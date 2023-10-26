import React from "react";
import { Fade } from "react-awesome-reveal";
import { SiGmail } from "react-icons/si";

const SingleInstructor = ({ instructor }) => {
  return (
    <Fade cascade>
      <div className="shadow pb-2">
        <img
          className="h-[250px] object-cover w-full"
          src={instructor?.photo}
          alt="instructor image"
        />
        <div className="text-center pt-2" style={{ lineHeight: "2" }}>
          <p className="text-xl text-gray-600">Instructor</p>
          <h3 className="text-3xl text-black font-semibold">
            {instructor?.name}
          </h3>
          <h3 className="text-gray-600">
            <SiGmail className="inline-block" /> : {instructor?.email}
          </h3>
        </div>
      </div>
    </Fade>
  );
};

export default SingleInstructor;
