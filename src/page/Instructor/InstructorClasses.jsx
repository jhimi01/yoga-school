import { useContext, useEffect, useState } from "react";
import { singleInstructorclasses } from "../../api/class";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleInstructorClasses from "./SingleInstructorClasses";
import { Helmet } from "react-helmet";
// import UpdateModal from "../../component/UpdateModal";

const InstructorClasses = () => {
  const { user } = useContext(AuthContext)
  const [insClasses, setInsClasses] = useState([])
  // const [showUpdateModal, setShowUpdateModal] = useState(false);

  const fetchInstructorclasses =()=> {
    singleInstructorclasses(user.email)
    .then(data=> {
        setInsClasses(data)
    })
  }
    useEffect(()=>{
        fetchInstructorclasses()
    },[user])


    return (
        <div>
           <Helmet>
                <title>My Added Classes | DOYoga</title>
            </Helmet>
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
      {insClasses.map((item, index) => <SingleInstructorClasses fetchInstructorclasses={fetchInstructorclasses} item={item} index={index} key={item._id}></SingleInstructorClasses>)}
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default InstructorClasses;