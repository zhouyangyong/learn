import { combineReducers } from 'redux';
import * as ActionType from './actionTypes';

const initialState = {
  songStatus: false,
  song: {}, // 当前播放的歌
  songs: [] // 播放列表
}

/**
 * {type: 'SHOW_PLAYER', showStatus: true}
 * {type: 'SHOW_PLAYER', showStatus: false}
 */
function showStatus(showStatus = initialState.songStatus, action) {
  switch (action.type) {
    case ActionType.SHOW_PLAYER:
      return action.showStatus;
    default: 
      return showStatus;
  }
} 

/**
 * {type: 'CHANGE_SONG', song: {}}
 * type
 * payload 除type以外的
 */
function song(song = initialState.song, action) {
  switch(action.type) {
    case ActionType.CHANGE_SONG:
      return action.song;
    default: 
      return song;
  }
}

export default combineReducers({
  showStatus,
  song
})