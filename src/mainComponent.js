import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData, newData } from "./ThunckRedux";

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
                <input ref={Deleteitem} value={el.title}></input>
                <p>Your notation is{el.wisdomthoughts}</p>
                <p>date of publication is {el.date}</p>
                <button  onClick={DeleteFCN}>Delete this post</button>
                <hr />
            </div>
        )
    })
    function DeleteFCN() {
        debugger
        const deletedItemTitle = Deleteitem.current.value;
        dispatch(deleteData())
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
return (
<div className ='wrapper'>
<input onClick={()=>{SetState(!isActive)}} className={isActive ? 'active' : 'unactive'} type="text" ref={inputEl} name='title' />
<input onClick={()=>{SetState2(!isActive2)}} className={isActive2 ? 'active' : 'unactive'} type="text" ref={inputE2} name='wisdomthoughts' />
<button className='btn' onClick={Submit}>Submit</button>
    {arr}
</div>
)}
export default DataCMP