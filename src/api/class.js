import axios from 'axios';
// add class 
export const addclass = async (classItems) =>{
 return fetch('http://localhost:5000/users/addclass', {
    method: 'POST',
    headers : {'Content-Type': 'application/json'},
    body : JSON.stringify(classItems)
 })
  .then(res => res.json())
  .then(data => {
    return data
  })

}


// get all classes
// export const getAllClasses = async () => {
//     return fetch('http://localhost:5000/users/addclass')
//     .then(res => res.json())
//     .then(data => {
//         return data
//     })
// }



export const getAllClasses = async () => {
  try {
    const response = await axios.get('http://localhost:5000/users/addclass');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// update class


// Get classes posted by a single instructor
// export const singleInstructorclasses = async (email) => {
//     return fetch(`http://localhost:5000/instructors/${email}/classes`)
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data)
//         return data
//     });
// }

export const singleInstructorclasses = async (email) => {
    try {
      const response = await axios.get(`http://localhost:5000/instructors/${email}/classes`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };



  

export const adminClassFeedback = async (id, feedback)=>{
 return fetch(`http://localhost:5000/users/feedback/${id}`, {
  method: 'PUT',
  headers: {
    'content-type': 'application/json'
  },body: JSON.stringify({feedback})
}).then(res => res.json())
.then(data => {
  return data
})
}