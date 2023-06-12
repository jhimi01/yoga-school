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
    // _id: yogaclass._id,
  };
  
  const res = await fetch(`https://yoga-school-server.vercel.app/users/selectclass`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(currentClass),
});
const data = await res.json();
return data;
};

// get all selected my class
export const allselectedmyclass = async (email) => {
  const res = await fetch(`https://yoga-school-server.vercel.app/users/selectclass/${email}`);
  const data = await res.json();
  return data;
};


// delete my selected class
export const deletemyselectedclass = async (id) => {
  const res = await fetch(
    `https://yoga-school-server.vercel.app/users/selectclass/delete/${id}`,
    {
      method: "DELETE",
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
};

// get one my selected class
// export const getmyselectedclass = async (id) => {
//     const res = await fetch(
//       `https://yoga-school-server.vercel.app/users/selectclass/delete/${id}`    );
//     const data = await res.json();
//     console.log(data);
//     return data;
//   };

// get one my selected class
// export const getmyselectedclass = async (id) => {
//   const res = await fetch(
//     `https://yoga-school-server.vercel.app/users/selectclass/delete/${id}`
//   );
//   const data = res.json();
//   return data;
//   // return fetch(`https://yoga-school-server.vercel.app/users/selectclass/delete/${id}`)
//   //   .then((res) => res.json())
//   //   .then((data) => {
//   //     console.log(data);
//   //     return data;
//   //   });
// };
