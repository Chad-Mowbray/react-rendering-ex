import { Component, useEffect, memo } from "react";


// class Child extends Component {

//   componentDidMount =() => {
//     console.log("Child mounted")
//   }

//   componentWillUnmount = () => {
//     console.log("Child will unmount")
//   }


//   render() {
//     return ( 
//       <h3>Child Component</h3>
//      );
//   }
// }

const Child = () => {

  useEffect( () => {
    console.log("Child useEffect called")
  })

  return ( 
    <h3>Child Component</h3>
   );
}
 
export default memo(Child);