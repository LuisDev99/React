import React, {Component} from 'react'
import Moment from 'react-moment'
import AnalogClock, { Themes } from 'react-analog-clock';

class DateDisplayer extends Component{

    render(){
        return(
            <div> 
            
            <Moment format="YYYY-MM-DD">{this.props.dateToFormat}</Moment> <br/>
            <Moment format="HH:mm:ss">{this.props.dateToFormat}</Moment>
            <AnalogClock theme={Themes.lime} width={150}/>
            </div>
        )
    }

}


export default DateDisplayer;