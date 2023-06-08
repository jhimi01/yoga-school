export const saveUSer = user =>{
    const currentUser = {
        name: user.displayName,
        emial: user.email
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