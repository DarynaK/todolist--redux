import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';
import ContactForm from './form';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: 0,
        }
    }
    addTrack = () => {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    findTrack = () => {
        this.props.onFindTrack(this.searchInput.value);
    }

    onAddNumber = () => {
        this.props.addNumber(this.props.number);
    }

    onDecNumber = () => {
        this.props.decNumber(this.props.number);
    }

    submit = values => {
        console.log(values)
    }

  render() {
      const addTrack = this.addTrack;
      const findTrack = this.findTrack;
      const onAddNumber = this.onAddNumber;
      const onDecNumber = this.onDecNumber;
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

            <div className="counter_container">
                <button className="plus" onClick={onAddNumber}>+</button>
                <div className="result">{this.props.number}</div>
                <button className="minus" onClick={onDecNumber}>-</button>
            </div>
            <div className="contact-form">
                <ContactForm onSubmit={this.submit}/>
            </div>
        </div>
    );
  }

}

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
        number: state.counter
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
        },
        addNumber: (num) => {
            dispatch({type: 'ADD_PLUS', number: num })
        },
        decNumber: (num) => {
            dispatch({type: 'ADD_MINUS', number: num })
        }
    })
)(App);
