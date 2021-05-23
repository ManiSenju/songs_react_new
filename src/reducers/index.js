import {combineReducers} from 'redux';

const songReducer = ()=>{
    return [
        {title:"Maracena",duration:"3:00"},
        {title:"Baby Love me More",duration:"3:30"},
        {title:"Faded",duration:"4:00"},
        {title:"Believer",duration:"2:40"}
    ];
};

const selectSongReducer = (selectedSong=null,action)=>{
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs:songReducer,
    selectedSong:selectSongReducer
});