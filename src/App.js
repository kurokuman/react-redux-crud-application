import React, { Component } from 'react';

// class App extends Component {
//   render(){
//   return (
//     <div>
//       <h1 className="foo" onClick={()=>{console.log("clidk")}}>Hello World</h1>
//     </div>
//   );
//   }
// }

const App = () => {

  const profiles =[
    {name: "taro", age:10},
    {name: "taro"} ,
    {name: "hanako", age:120}
  ]
  return (
    <div>
      {
        profiles.map((profile,index) =>{
          return <User name={profile.name}  age={profile.age} key={index} />
        })
      }
      </div>


  )
}

const User = (props) => {
  return <div>{props.name} and {props.age} years old</div>
}

User.defaultProps ={
  age: 1
}

export default App;
