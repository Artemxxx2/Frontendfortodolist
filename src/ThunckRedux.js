import axios from "axios"
import { RequestActionCreator, REQUESTFAILEDACTIONCREATOR, RequestFullfilledActionCreator } from "./Todosreduser"

export const getData = () =>async (dispatch)=>{
    dispatch(RequestActionCreator(true))
    try {
        const data = await axios.get('/notation/')
        dispatch(RequestActionCreator(false))
        dispatch(RequestFullfilledActionCreator(data.data))
        
    } catch (error) {
        dispatch(RequestActionCreator(false))
        dispatch(REQUESTFAILEDACTIONCREATOR(error))
    }
}
export const newData = (title,wisdomthoughts) =>async (dispatch)=>{
    try {
         await axios.post('/notation/',{
            title:title,
            wisdomthoughts:wisdomthoughts
        })
        const data = await axios.get('/notation/')
        dispatch(RequestFullfilledActionCreator(data.data))
    } catch (error) {
        dispatch(RequestActionCreator(false))
        dispatch(REQUESTFAILEDACTIONCREATOR(error))
    }
}
export const deleteData = () =>async (dispatch)=>{
    try {
        let test =  await axios.delete('/notation/',{
            "title":"3213"
        })
        // debugger
        // console.log(test);
        // const data = await axios.get('/notation/')
        // dispatch(RequestFullfilledActionCreator(data.data))
    } catch (error) {
        dispatch(RequestActionCreator(false))
        dispatch(REQUESTFAILEDACTIONCREATOR(error))
    }
}