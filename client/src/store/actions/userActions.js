import axios from "axios"
import { REGISTER_SUCCESS, FAVOURITE_SUCCESS, FETCH_FAVOURITES, FAVOURITE_REMOVE } from "./types"



export const addUser = (body) => async dispatch => {
    console.log(body)
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    /* const body = {name: name, email: email, password: password, profile_pic: profile_pic} */
    try {
      const res = await axios.post("http://localhost:5000/users/register", body, config)
      dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
      })
      console.log (res.data)
    } catch (error) {
       console.log(error.message) 
    }
    
}



export const fetchFavourites = (id) => dispatch => {
        console.log(id) 
            fetch("http://localhost:5000/users/favourites",{
                method: "GET",
                headers: {"Content-type": "Application/JSON", "Authorization": `bearer ${localStorage.token}`},
              })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch({
                type: FETCH_FAVOURITES,
                payload: res
            })});
}



export const addFavourites = id => dispatch => {
  //const body = JSON.stringify(favItinerary)
        fetch("http://localhost:5000/users/addFavourites/"+id, {
          method: "POST",
          headers: {"Content-type": "Application/JSON", "Authorization": `bearer ${localStorage.token}`},
        
        })
        .then(response => response.json())
        .then(res =>  {
        console.log(res)
           dispatch({
            type: FAVOURITE_SUCCESS,
            payload: res
          });
        })
        .catch(err => console.log(err));
};



export const removeFavourites = id => dispatch => {
    //const body = JSON.stringify(favItinerary)
            fetch("http://localhost:5000/users/removeFavourites/"+id, {
            method: "POST",
            headers: {"Content-type": "Application/JSON", "Authorization": `bearer ${localStorage.token}`},
            
            })
            .then(response => response.json())
            .then(res =>  {
            console.log(res)
                dispatch({
                type: FAVOURITE_REMOVE,
                payload: res
            });
            })
            .catch(err => console.log(err));
};



