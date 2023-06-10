export const selectClass = async(yogaclass)=>{

    const currentClass = {
        email: yogaclass.email,
        classImage: yogaclass.classImage,
        className: yogaclass.className,
        instructorEmail: yogaclass.instructorEmail,
        instructorName: yogaclass.instructorName,
        price: yogaclass.price,
        availableSeats: yogaclass.availableSeats,
        _id: yogaclass._id,
      };

    return fetch(`http://localhost:5000/users/selectclass/${yogaclass?._id}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(currentClass)
    })
    .then(res => res.json())
    .then(data => {
        return data
    })
}


// get all selected my class
export const allselectedmyclass = async (email) =>{
    return fetch(`http://localhost:5000/users/selectclass/${email}`)
    .then(res => res.json())
    .then(data => {
        return data
    })
}