import axios from "axios"

export const addUser = (name, email, password, profile_img) => dispatch => {
    const body = {name: name, email: email, password: password, profile_img: profile_img}
    fetch("http://localhost:5000/users/register",{
    method: "POST",
    headers: {"Content-type": "Application/JSON"},
    body
  })
    .then(response =>  response.json())
    .then(res => {
        console.log(res)
    
    })
    .catch(err => console.log(err));
    /* const res = await axios.post("http://locahost:5000/users/register", body, config)
    .then (res => console.log(res.data))
    .catch(err => console.log(err)) */
}