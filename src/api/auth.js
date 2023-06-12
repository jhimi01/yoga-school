export const saveUser = user =>{
    const currentUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: 'student' // Set the role to "student"
    }
    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    }).then(res => res.json())
    .then(data => console.log(data))
}


export const getRole = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/users/role/${email}`,{
        // headers: { authorization: `Bearer ${localStorage.getItem('access-token')}`}
      });
      if (response.ok) {
        const user = await response.json();
        return user?.[0]?.role; // Assuming the server returns an array with one user object
      } else {
        throw new Error('Failed to fetch user role');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // get all user
export const getAllUser = async()=>{
    return  fetch(`http://localhost:5000/users`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        return data
    })
    
}

// make instructor to student
export const makeInstructor = async (email) => {
    return fetch(`http://localhost:5000/users/instructor/${email}`,{
        method: 'PATCH',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify({email})
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        return data
    })
}

// make instructor to student
export const makeAdmin = async (email) => {
    return fetch(`http://localhost:5000/users/admin/${email}`,{
        method: 'PATCH',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify({email})
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        return data
    })
}


// instructor user
export const allInsructor = async () =>{
    return fetch('http://localhost:5000/users/instructor')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data
    })
}


