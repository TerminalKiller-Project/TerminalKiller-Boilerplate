import axios from "axios";
import { URL_API } from "../../misc/config";
import { GET_ALL } from "../../misc/consts";

export const getDevelop = () => {
  return async function (dispatch) {
    await axios.get(`${URL_API}/getdevelop`)
    .then(res => {
        dispatch({
            type: GET_ALL,
            payload: res.data
        })
    })
}}