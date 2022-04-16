import { AxiosError, AxiosResponse } from "axios";
import { Dispatcher } from "kernel/redux/types";
import axios from "kernel/utils/axios";
import * as consts from "./constants";

const get_characters_started = () => ({type: consts.GET_CHARACTERS_STARTED})
const get_characters_success = (response: AxiosResponse) => ({type: consts.GET_CHARACTERS_SUCCESS, response})
const get_characters_failed = (error: AxiosError) => ({type: consts.GET_CHARACTERS_FAILED, error})

export const get_characters = () => (dispatch: Dispatcher) => {
    dispatch(get_characters_started())
    return new Promise((resolve, reject) => {
        axios.get('https://rickandmortyapi.com/api/character').then((response: AxiosResponse) => {
            dispatch(get_characters_success(response))
            resolve(response)
        }).catch((error: AxiosError) => {
            dispatch(get_characters_failed(error))
            reject(error)
        })
    })
}