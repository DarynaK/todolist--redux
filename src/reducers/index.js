import { combineReducers } from 'redux'

import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTracks';
import counter from './counter';

export default combineReducers({
    tracks,
    playlists,
    filterTracks,
    counter,
})