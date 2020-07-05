import axios from "axios"

export const login = (email, password) => dispatch => {

    const body = { email: email, password: password }
    fetch("http://localhost:5000/users/login",{
        method: "POST",
        headers: {"Content-type": "Application/JSON"},
        body
    })

    .then(response =>  response.json())
    .then(res => {
        console.log(res)
    
    })
    .catch(err => console.log(err));
    /* const res = await axios.post("http://locahost:5000/users/login", body, config)
    .then (res => console.log(res.data))
    .catch(err => console.log(err)) */
}