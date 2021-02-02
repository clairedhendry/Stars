import React from 'react';
import "./App.css";
// import { useState, useEffect } from "react";
// import Dot  from './components/dot'
import Stars from './components/stars'


// const useMousePosition = () => {
//   const [mousePosition, setMousePosition] = useState({ x: null, y: null });

//   const updateMousePosition = ev => {
//     setMousePosition({ x: ev.clientX, y: ev.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", updateMousePosition);

//     return () => window.removeEventListener("mousemove", updateMousePosition);
//   }, []);

//   return mousePosition;
// };

// const renderDot = () => {
//   let dot = Dot()
//   return dot;
  
// };

// function App() {
//   const { x, y } = useMousePosition();


//   return (

//     <div className="App" style={{backgroundColor: `rgb(${x}, ${y}, ${y})`}} >
//       {renderDot}
//     </div>
//   );
// }

// export default App;

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Stars />
      </div>
    )
  }
}