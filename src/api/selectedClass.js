export const selectClass = async (yogaclass) => {
  // return fetch(`https://yoga-school-server.vercel.app/users/selectclass`, {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(currentClass)
  // })
  const currentClass = {
    email: yogaclass.email,
    classImage: yogaclass.classImage,
    className: yogaclass.className,
    instructorEmail: yogaclass.instructorEmail,
    instructorName: yogaclass.instructorName,
    price: yogaclass.price,
    availableSeats: yogaclass.availableSeats,
    mySelectedClassid: yogaclass.mySelectedClassid,
  };
  
  // const res = await fetch(`https://yoga-school-server.vercel.app/users/selectclass`, {
    const res = await fetch(`http://localhost:5000/users/selectclass`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(currentClass),
});
const data = await res.json();
return data;
};



export const allselectedmyclass = async (email) => {
  console.log(email)
  if(!email){
    return []
  }
  const res = await fetch(`http://localhost:5000/users/selectclass/${email}`, {
    headers: { authorization: `Bearer ${localStorage.getItem('access-token')}`}
  });
  const data = await res.json();
  return data;
};

// get a single item by id from all selectedclass
export const singleitembyid = async (id) => {
  const res = await fetch(`http://localhost:5000/users/selectclass/payment/${id}`);
  const data = await res.json();
  // console.log(data);
  return data;
};

// delete my selected class
export const deletemyselectedclass = async (id) => {
  const res = await fetch(
    `http://localhost:5000/users/selectclass/delete/${id}`,
    {
      method: "DELETE",
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
};
