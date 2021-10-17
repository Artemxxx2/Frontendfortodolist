import { connect } from "react-redux";
import App from './App'
let AppContainer = (props) =>{
debugger
return (
<div className ='wrapper'>
    <App msg = {props.msg}/>
</div>
)}
let MapStateToProps =(state) =>{
    
 return {
     
    }
}

let SuperiorContainer = connect(MapStateToProps,{

})(AppContainer)
export default SuperiorContainer