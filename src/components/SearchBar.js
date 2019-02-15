import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {getSuggestedVideos} from './../actions/actions'
import YoutubeList from './YoutubeList'

class Searchbox extends React.Component {
    constructor() {
      super();
      this.state = {
        searchText: '',
        targetValue: '',
        youtubeItems : []
      };
    }
   
    render() {
      return (
        <div>
          <form id="search-term">
              <input
              placeholder="Enter the video name"
              type="text"
              value={this.state.searchText}
              onChange={(e) => this.props.getSuggestedVideos(this.state, e)}
            />                    
          </form>

          <YoutubeList props={this.state.youtubeItems}/>
        </div>
      );
    }
  }

function mapStateToProps(state){

    return {
        state : state
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({getSuggestedVideos : getSuggestedVideos}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Searchbox);