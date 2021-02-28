import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore , combineReducers , applyMiddleware} from 'redux'
import {Provider} from "react-redux"
const initialSate ={
    result:15000,
    value:[]
}

const UserReducer = (state={name:"Flook",age:"22"},action) =>{
  switch (action.type) {
    case "setName":
      state={
        ...state,
        name:action.payload
      }
      break;
    case "setAge":
      state={
        ...state,
        age:action.payload
      }
      
      break;
    default:
  }
  return state;
}

//Reducer เก็บเงินเดือน
const EmployeeReducer = (state=initialSate,action)=>{
  switch (action.type) {
    case "ADD":
      //State Object
        state={
          // แสดงข้อมูล state ทั้งหมด ถ้า State ไม่เยอะ
          ...state,
          //เปลี่ยนค่า result เฉพาะบางจุด ถ้าคำซ้ำ จะไปอัพเดต
          result:state.result+=action.payload,
          value:[...state.value,action.payload]
        }
      break;
    case "SUBTRACT":
      //State Object
      state={
        // แสดงข้อมูล state ทั้งหมด ถ้า State ไม่เยอะ
        ...state,
        //เปลี่ยนค่า result เฉพาะบางจุด ถ้าคำซ้ำ จะไปอัพเดต
        result:state.result-=action.payload,
        value:[...state.value,action.payload]
      }
      
      break;
    default:
  }
  return state;
}

//เก็บ Action ที่ทำงาน call หลังจาก dispatch
const mylogger = (store)=>(next)=>(action)=>{
  console.log("Log Action",action)
  next(action)
}
const store = createStore(combineReducers({emp:EmployeeReducer,user:UserReducer}),{},applyMiddleware(mylogger));

//แสดงค่า State ใน Store
store.subscribe(()=>{
  console.log("Update Store: ",store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);