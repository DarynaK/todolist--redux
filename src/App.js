import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';
import ContactForm from './form';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: 0,
            name: '',
            email: '',
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

    getName = event => {
        this.setState({
            name: event.target.value,
        })
    }

    getEmail = event => {
        this.setState({
            email: event.target.value,
        })
    }

    formSubmit = event => {
        event.preventDefault();
        let userData = {
            userName: this.state.name,
            userEmail: this.state.email
        }

        this.props.formSubmit(userData);
        this.setState({
            name: '',
            email: '',
        })

    }

  render() {
      const addTrack = this.addTrack;
      const findTrack = this.findTrack;
      const onAddNumber = this.onAddNumber;
      const onDecNumber = this.onDecNumber;
      const getName = this.getName;
      const getEmail = this.getEmail;
      const formSubmit = this.formSubmit;
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
            <div className="custom-form">
                <form onSubmit={formSubmit}>
                 <fieldset>
                    <input type="text" name="name" value={this.state.name} onChange={getName} placeholder="Name"/>
                    <input type="email" name="email" value={this.state.email} onChange={getEmail} placeholder="Email"/>
                    <input type="submit" value="Submit"/>
                </fieldset>
                </form>
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
        },
        formSubmit: (values) => {
            dispatch({type: 'SUBMIT', values});
        }
    })
)(App);
