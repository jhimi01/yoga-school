import React, { useEffect, useState } from "react";
import ShareTitle from "../../component/ShareTitle";
import { getAllClasses } from "../../api/class";
import SingleClasses from "../Clasess/SingleClasses";
// import {Helmet} from "react-helmet";

const PopularClasess = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    getAllClasses().then((data) => {
        const sortClass = data.sort(
            (a, b) => a.availableSeats - b.availableSeats
        );
        console.log(sortClass)
      setPopularClass(data);
    });
  }, []);

//   console.log(popularClass)

  return (
    <div>
      <ShareTitle subheading={"Polupar Clasess"} mainTitle={"DoYoga Classes"} />
      <div className="grid md:grid-cols-4 mx-auto w-full md:w-5/6 gap-4 md:gap-20" style={{marginTop: '40px'}}>
      {popularClass.slice(0, 6).map(item => <SingleClasses key={item._id} yogaclass={item}></SingleClasses>)}
      </div>
    </div>
  );
};

export default PopularClasess;
