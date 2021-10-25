
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { getData } from './ThunckRedux';
import Loading from './loadingComponent';
import DataCMP from './mainComponent';
import Errorcomponent from './errorcomponent';

function App() {
  const [color, setСolor] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData())
  },[])

  const {data,loading,error,errorPayload} = useSelector((state)=>state.TodosReducer)
  console.log(data);

 
  return (
    <div className='wrapperX'>
      <div className='info' onClick={()=>{
        setСolor(!color)}}>Click me!</div>
     <div  
    className = {color ? 'red' : 'blue'}  >Hello world:)</div>
      {loading ? <Loading></Loading> :
      error ? <Errorcomponent error={errorPayload} /> :
      data ? <DataCMP data={data}></DataCMP> : <></>
      }
    </div>
  );
}

export default App;
