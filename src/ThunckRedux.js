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
export const updateDataThunk = (_id) =>async (dispatch,getState)=>{
    
    try {
        let {title,wisdomthoughts} = getState().TodosReducer.data.find(item=>item._id === _id);
        console.log(title,wisdomthoughts);
       await axios.put('/notation/',{
            _id:_id,
            title:title,
            wisdomthoughts:wisdomthoughts
        })
       const data = await axios.get('/notation/')
       dispatch(RequestFullfilledActionCreator(data.data))
    } catch (error) {
        dispatch(REQUESTFAILEDACTIONCREATOR(error))
    }
}
export const DeleteDataThunk = (_id) =>async (dispatch)=>{
    
    try {
       await axios.delete('/notation/',{
         data:{
            _id:_id
        }
        })
        
       const data = await axios.get('/notation/')
       dispatch(RequestFullfilledActionCreator(data.data))
    } catch (error) {
        dispatch(REQUESTFAILEDACTIONCREATOR(error))
    }
}