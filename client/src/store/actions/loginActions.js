import axios from "axios";
import { LOGIN_SUCCESS } from "../actions/types";


export const login = (body) => async dispatch => {

console.log(body)
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }


    try {
      const res = await axios.post("http://localhost:5000/users/login", body, config)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
      console.log(res.data)

    } catch (error) {
      console.log(error.message)
    }
}