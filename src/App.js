
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { getData } from './ThunckRedux';
import Loading from './loadingComponent';
import DataCMP from './mainComponent';

function App() {
  const [color, setСolor] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData())
  },[])

  const {data,loading,error} = useSelector((state)=>state.TodosReducer)
  console.log(data);

 
  return (
    <div>
      <div className='info' onClick={()=>{
        setСolor(!color)}}>Click me!</div>
     <div  
    className = {color ? 'red' : 'blue'}  >Hello world:)</div>
      {loading ? <Loading></Loading> :
      error ? <errorCMP error={error}></errorCMP> :
      data ? <DataCMP data={data}></DataCMP> : <></>
      }
    </div>
  );
}

export default App;
