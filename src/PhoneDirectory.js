import React,{Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom'
class PhoneDirectory extends Component{

    constructor(){
        super();
        this.state={
            subscribersList: [{
                id: 1,
                name: 'abc ',
                phone: '55555'
            },
            {
                id: 2,
                name: 'def ',
                phone: '77777'
            }
        ]}
    }

    deleteSubscribersHandler = (subscriberId)=>{
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index){
            if(subscriber.Id === subscriberId){
                subscriberIndex = index;
            }
        },this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }

    addSubscriberHandler = (newSubscriber) =>{
        let subscribersList=this.state.subscribersList;
        if(subscribersList.length>0){
            newSubscriber.id=subscribersList[subscribersList.length-1].id +1;
        }
        else{
            newSubscriber.id=1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList: subscribersList});
       
    }

    render(){
        return (

            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(porps) => <ShowSubscribers {...porps} subscribersList={this.state.subscribersList} deleteSubscribersHandler={this.deleteSubscribersHandler} />} />
                    <Route exact path='/add' render={({history},porps) => <AddSubscriber history={history} {...porps} addSubscriberHandler={this.addSubscriberHandler}/>} />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;