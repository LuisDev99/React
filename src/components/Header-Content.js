import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import firebase from 'firebase';
import {connect} from 'react-redux'
import {Login} from './../actions/actions'
import {Logout} from './../actions/actions'
import SearchBar from './SearchBar'
import DateDisplayer from './Date-Displayer'

class HeaderContent extends Component{

    constructor(props){
        super(props);

        this.state = {
            username : null
        };
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState ({user});
        });
    }

    renderHeader = () =>{
        /*Render Header Content if user is sign in*/
        if(this.state.user){
           
            return(
                <div className="App-header">
                    <button 
                        onClick= {()=> this.props.Logout(this.user)}
                        variant="flat" color="primary">
                        Logout
                    </button>       
                    <DateDisplayer/>                    
                    <SearchBar/>
               </div>
            )
        } else {
            return (
                <div className = "App-header">
                    <button 
                        onClick={() => this.props.Login(this.user)}>Login To Search Videos
                    </button>
                </div>
            )
        }
    }

    render(){
        return (
            <div >
                {this.renderHeader()}
            </div>
        )
    }
}


function mapStateToProps(state){

    return {
        state : state
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({Login : Login, Logout : Logout}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HeaderContent);