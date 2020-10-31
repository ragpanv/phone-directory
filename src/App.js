import React, {Component} from 'react';
import Header from "./Header.js";
import './App.css';
class App extends Component{

  deleteHandler(message){
    alert(message)
  }
  alterHandler(){
    alert('alter the content')
  }
  render(){
    let subscribers=[
      {
          id: 1,
          name: "abc",
          phone : '12345'
      },
     {          id: 2,
      name: 'abdeddc',
      phone: '12345'
    },
     {   id: 3,
      name: 'adsdbc',
      phone: '12345'
    }
    ]
  

    return(
        <div className="component-container">
          {/*comment */}
            <Header heading="Phone directory"/>
            <div className="component-body-container">
            <button className="custom-btn add-btn">Add</button>

                <div className="grid-container heading-container">
                    <span className="grid-item name-heading">Name</span>
                    <span className="grid-item phne-heading">Phone</span>
                </div> 

            {
              subscribers.map(sub =>{
                return <div key={sub.id} className='grid-container'>
                  <span className='grid-item'>{sub.name}</span>
                  <span className='grid-item'>{sub.phone}</span>
                  <span className="grit-item action-btn-container">
                    <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this,'Delete Clicked')}>Delete</button>
                    <button className="custom-btn alter-btn" onClick={this.alterHandler}>Delete</button>

                  </span>
                  </div>
              })
            }
            </div>
        </div>
    );
   
  }
}

export default App;
