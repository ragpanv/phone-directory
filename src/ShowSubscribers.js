import React, {Component} from 'react';
import Header from "./Header.js";
import './ShowSubscribers.css';
class ShowSubscribers extends Component{

 /* constructor()
  {
    super();
    this.state={
      subscribersListToShow: []
    }
    console.log('constructor called')
  }

  componentDidMount(){
    let newSubscriber=
      {
          id: 1,
          name: "abc",
          phone : '12345'
      };
     
    let subscribersList=this.state.subscribersListToShow;
    subscribersList.push(newSubscriber);
    this.setState({subscribersListToShow: subscribersList});

    console.log('component did mount called')
  }


  deleteHandler(message){
    alert(message)
  }
  <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this,'Delete Clicked')}>Delete</button>

  alterHandler(){
    alert('alter the content')
  }*/
  render(){
   
    console.log('render called')

    return(
        <div className="component-container">
          {/*comment */}
            <Header heading="Phone directory"/>
            <div className="component-body-container">
            <button className="custom-btn add-btn">Add</button>

                <div className="grid-container heading-container">
                    <span className="grid-item name-heading">Name</span>
                    <span className="grid-item phone-heading">Phone</span>
                </div> 

            {
              this.props.subscribersList.map(sub =>{
                return <div key={sub.id} className='grid-container'>
                  <span className='grid-item'>{sub.name}</span>
                  <span className='grid-item'>{sub.phone}</span>
                  <span className="grit-item action-btn-container">
                    <button className="custom-btn delete-btn" >Delete</button>

                  </span>
                  </div>
              })
            }
            </div>
        </div>
    );
   
  }
}

export default ShowSubscribers;
