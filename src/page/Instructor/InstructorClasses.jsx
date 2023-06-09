import { useContext, useEffect, useState } from "react";
import { singleInstructorclasses } from "../../api/class";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleInstructorClasses from "./SingleInstructorClasses";

const InstructorClasses = () => {
    const [insClasses, setInsClasses] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(()=>{
        singleInstructorclasses(user.email)
        .then(data=> {
            setInsClasses(data)
        })
    },[])
    console.log(insClasses)

    return (
        <div>
        <h2 className="text-center text-3xl my-5">My Classes</h2>
            <div className="overflow-x-auto">
  <table className="table table-xl table-zebra text-center">
    <thead>
      <tr>
        <th></th> 
        <th>Class Name</th> 
        <th>Price</th>  
        <th>Available Seat</th> 
        <th>EnRolled</th> 
        <th>Status</th>
        <th>Update</th>
        <th>Feedback</th>
      </tr>
    </thead> 
    <tbody>
      {/* <tr>
        <th>1</th> 
        <td>yoga name</td> 
        <td>$ 56</td> 
        <td>seat</td> 
        <td>0</td> 
        <td>pendong</td> 
      </tr> */}
      {insClasses.map((item, index) => <SingleInstructorClasses item={item} index={index} key={item._id}></SingleInstructorClasses>)}
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default InstructorClasses;