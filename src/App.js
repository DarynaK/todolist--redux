import React, {Component} from 'react';
import { connect } from 'react-redux'


class App extends Component {
    addTrack = () => {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }
  render() {
      console.log('first push for feature/first-branch');
      const addTrack = this.addTrack;
    return (
        <div>
            <input type="text" ref={(input) => {this.trackInput = input}}/>
            <button onClick={addTrack}>Add track</button>
            <ul>
                {
                    this.props.tracks.map((el, index) => {
                        return <li key={index}>{el}</li>
                    })
                }
            </ul>
        </div>
    );
  }

}

export default connect(
    state => ({
        tracks: state.tracks
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName})
        }
    })
)(App);
