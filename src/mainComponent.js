import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { newData, updateDataThunk } from "./ThunckRedux";
import { ChangeValueActionCreator } from "./Todosreduser";

let DataCMP = (props) =>{
let [isActive,SetState] = useState(false)
let [isActive2,SetState2] = useState(false)

const inputEl = useRef(null);
const inputE2 = useRef(null);
const Deleteitem = useRef(null);
const dispatch = useDispatch()

  let arr=props.data.map(el=>{
        return(
            <div>
                <hr />
                <input name='title' className={el._id} onChange={changeval} value={el.title}></input>
                <p>Your notation is{el.wisdomthoughts}</p>
                <p>date of publication is {el.date}</p>
                <button onClick={updateData} className={el._id}>update</button>
                <hr />
            </div>
        )
    })
    function updateData(e) {
        let id = e.target.className
        dispatch(updateDataThunk(id))
    }
    function Submit() {
      let a1= inputEl.current.value
      let a2 = inputE2.current.value
      if (a1 === '' && a2 === '') {
          alert('inputs are empty!')
      }
     else if (a1 === '' || a2 === '') {
        alert('one of the yours inputs is empty!')
    }
    else{
      dispatch(newData(a1,a2))}
    }
    function changeval(e) {
        console.log(e.target.name);
        let id = e.target.className;
        let change =e.target.value;
       dispatch(ChangeValueActionCreator(change,id))
    }
return (
<div className ='wrapper'>
<input onClick={()=>{SetState(!isActive)}} className={isActive ? 'active' : 'unactive'} type="text" ref={inputEl} name='title' />
<input onClick={()=>{SetState2(!isActive2)}} className={isActive2 ? 'active' : 'unactive'} type="text" ref={inputE2} name='wisdomthoughts' />
<button className='btn' onClick={Submit}>Submit</button>
    {arr}
</div>
)}
export default DataCMP