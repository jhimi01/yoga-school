import React, { useEffect, useState } from "react";
import ShareTitle from "../../component/ShareTitle";
import { getAllClasses } from "../../api/class";
import SingleClasses from "../Clasess/SingleClasses";

const PopularClasess = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    getAllClasses().then((data) => {
      const sortClass = data.sort((a, b) => b.Enrolled - a.Enrolled);
      console.log(sortClass);
      setPopularClass(data);
    });
  }, []);

  return (
    <div>
      <ShareTitle subheading={"Polupar Clasess"} mainTitle={"DoYoga Classes"} />
      <div
        className="grid md:grid-cols-3 mx-auto w-full md:w-5/6 gap-4 md:gap-10"
        style={{ marginTop: "40px" }}
      >
        {popularClass.slice(0, 6).map((item) => (
          <SingleClasses key={item._id} yogaclass={item}></SingleClasses>
        ))}
      </div>
    </div>
  );
};

export default PopularClasess;
