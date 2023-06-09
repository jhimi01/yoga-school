
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
export const getAllClasses = async () => {
    return fetch('http://localhost:5000/users/addclass')
    .then(res => res.json())
    .then(data => {
        return data
    })
}


// Get classes posted by a single instructor
export const singleInstructorclasses = async (email) => {
    return fetch(`http://localhost:5000/instructors/${email}/classes`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data
    });
}
