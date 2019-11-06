import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTracks';
import counter from './counter';
import onSubmit from './onSubmit';

export default combineReducers({
    tracks,
    playlists,
    filterTracks,
    counter,
    onSubmit,
    form: formReducer
})