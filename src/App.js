import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';


class App extends Component {
    addTrack = () => {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    findTrack = () => {
        console.log('findTrack', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }

  render() {
      const addTrack = this.addTrack;
      const findTrack = this.findTrack;
    return (
        <div>
            <div>
                <input type="text" ref={(input) => { this.searchInput = input }} />
                <button onClick={findTrack}>Find track</button>
            </div>
            <input type="text" ref={(input) => {this.trackInput = input}}/>
            <button onClick={addTrack}>Add track</button>
            <ul>
                {
                    this.props.tracks.map((el, index) => {
                        return <li key={index}>{el.name}</li>
                    })
                }
            </ul>
            <div>
                <button onClick={this.props.onGetTracks}>Get tracks</button>
            </div>
        </div>
    );
  }

}

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            }
            dispatch({type: 'ADD_TRACK', payload})
        },
        onFindTrack: (name) => {
            dispatch({ type: 'FIND_TRACK', payload: name })
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);
