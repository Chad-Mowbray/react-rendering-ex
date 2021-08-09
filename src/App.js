import './App.css';
import { Component, useEffect, useState } from 'react';
import Child from './Child';



// class App extends Component {

//   state = {
//     trigger: false
//   }

//   handleClick = () => {
//     this.setState({trigger:!this.state.trigger})
//   }

//   componentDidMount =() => {
//     console.log("App mounted")
//   }

//   shouldComponentUpdate = (updatedProps, updatedState) => {
//     console.log("App should update?")
//     return true
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1 onClick={this.handleClick}>App Commponent</h1>
//         {this.state.trigger && <Child />}
//       </div>
//     );
//   }
// }

function App() {

  const [trigger, setTrigger] = useState(false)

  useEffect( () => {
    console.log("App useEffect called")
  }, [trigger])

  const handleClick = () => {
    setTrigger((prevTrigger) => !prevTrigger)
  }

  return (
    <div className="App">
      <h1 onClick={handleClick}>App Commponent</h1>
       <Child />
    </div>
  );
}

export default App;
