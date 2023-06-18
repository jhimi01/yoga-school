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

export const singleInstructorclasses = async (email) => {
    try {
      const response = await axios.get(`https://yoga-school-server.vercel.app/instructors/${email}/classes`,{
      // const response = await axios.get(`http://localhost:5000/instructors/${email}/classes`,{
        headers: { authorization: `Bearer ${localStorage.getItem('access-token')}`}
      });
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