/*import React, {Component} from 'react';


function App() {
  let x=1;
  let y=2;
  return (
    
      <div className="header">
           phone directory
       
       <button >Add </button>
       <div>
         <span>Name </span><br/>
         <span>Phone </span>
       </div>  
       <label htmlFor="name">Name:</label>
       <input id="name" defaultValue=x+y type="text" placeholder="Type here"/>
       </div>
     
  );
}
*/
import React, {Component} from 'react';
import Header from "./Header.js";
import './App.css';
class App extends Component{
  render(){

    return(
        <div>
           
            <Header />
            <div className="component-body-container">
            <button className="custom-btn add-btn">Add</button>

                <div className="grid-container heading-container">
                    <span className="grid-item name-heading">Name</span>
                    <span className="grid-item name-heading">Phone</span>
                    <span className="grid-item phone-heading">Address</span>
                </div> 
            </div>
        </div>
    );
   
  }
}

export default App;
