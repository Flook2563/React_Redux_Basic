import React from 'react';
import User from './User';
import {connect} from 'react-redux';

class App extends React.Component{
  render(){
    return(
      //this.props.user.name ไปที่ mapStatetoProps ตรง user:state.user แล้วไปที่ name ในหน้า index.js
      <div>
        <User username={this.props.user.name} />
        <button onClick={()=>this.props.setName("BOTFlook Twitch")}>ChangeName</button>
      </div>
      
    )
  }
}
// connect mapStatetoProps กับ app เมื่อสร้าง compon user จะส่งค้า props ที่มีชื่อว่า username
//stateที่ถูกเก็บในstote มาแปลงเป็น Prop
const mapStatetoProps=(state)=>{
  return {
    //state.user/emp อยู่ในstore
    user:state.user,
    emp:state.emp
  };
}

const mapDispatchtoProps =(dispatch)=>{
  return {
    //ส่ง (ชื่อที่ต้องการเปลี่ยน)
    setName:(name)=>{
      dispatch({
        type:"setName",
        payload:name
      })
    }
  };
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
