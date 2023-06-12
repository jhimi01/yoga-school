import axios from 'axios';
// add class 
export const addclass = async (classItems) =>{
 return fetch('https://yoga-school-server.vercel.app/users/addclass', {
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body : JSON.stringify(classItems)
 })
  .then(res => res.json())
  .then(data => {
    return data
  })

}



export const getAllClasses = async () => {
  try {
    const response = await axios.get('https://yoga-school-server.vercel.app/users/addclass');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// update class


// Get classes posted by a single instructor
// export const singleInstructorclasses = async (email) => {
//     return fetch(`https://yoga-school-server.vercel.app/instructors/${email}/classes`)
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data)
//         return data
//     });
// }

export const singleInstructorclasses = async (email) => {
    try {
      const response = await axios.get(`https://yoga-school-server.vercel.app/instructors/${email}/classes`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };



  

export const adminClassFeedback = async (id, feedback)=>{
 return fetch(`https://yoga-school-server.vercel.app/users/feedback/${id}`, {
  method: 'PUT',
  headers: {
    'content-type': 'application/json'
  },body: JSON.stringify({feedback})
}).then(res => res.json())
.then(data => {
  return data
})
}