import axios from "axios"
import { RequestActionCreator, REQUESTFAILEDACTIONCREATOR, RequestFullfilledActionCreator } from "./Todosreduser"

export const getData = () =>async (dispatch)=>{
    dispatch(RequestActionCreator(true))
    try {
        const data = await axios.get('/notation/')
        dispatch(RequestActionCreator(false))
        dispatch(RequestFullfilledActionCreator(data.data))
        console.log(data);
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
export const updateDataThunk = (id) =>async (dispatch,getState)=>{
    
    try {
        let {title,wisdomthoughts} = getState().TodosReducer.data.find(item=>item._id === id);
        console.log(title,wisdomthoughts);
       await axios.put('/notation/',{
            title:title,
            wisdomthoughts:wisdomthoughts
        })
       await axios.get('/notation/')
    } catch (error) {
        
    }
    
}