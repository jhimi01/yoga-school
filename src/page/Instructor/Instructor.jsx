import React, { useEffect, useState } from "react";
import SubBanner from "../../component/SubBanner";
import { allInsructor } from "../../api/auth";
import { Helmet } from "react-helmet";
import SingleInstructor from "./SingleInstructor";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    allInsructor().then((data) => {
      setInstructors(data);
    });
  }, []);

  console.log(instructors);

  return (
    <div>
      <Helmet>
        <title>Instructor | DoYoga</title>
      </Helmet>
      <SubBanner
        bannerimg={
          "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=1431&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        heading={"Instructors"}
      ></SubBanner>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 mt-32 grid-cols-1 mx-auto md:w-5/6 w-full gap-11">
        {instructors.map((instructor, index) => (
          <SingleInstructor key={index} instructor={instructor}></SingleInstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
