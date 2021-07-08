import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // REMOVE AFTER DEVELOPING...
    // token:"BQB-kcodyQv8ck2WDlAClW1jNlIWc-hOwcghoCdWeMzfbkilg1Y42Hjq_HALQ_qoOF6ettcg4jGpWGuIsLhVgkAW9uSJjGxKEnL8KSi038mG5WZLOajW-laZdxrC__R_kfIDR1V3BacD7xCuoiS_qzxnsHb5NU5H4PqZmDr_ehfB-LG6Bmjp",
};

const reducer = (state, action) =>{
console.log(action);

  switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user: action.user,
        };

    case "SET_PLAYING":
        return {
            ...state,
            playing: action.playing,
        };
      
    case "SET_ITEM":
        return {
            ...state,
            item: action.item,
        };

    case "SET_TOP_ARTISTS":
        return {
            ...state,
            top_artists: action.top_artists,
        };

    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        };

    case "SET_SPOTIFY":
        return {
            ...state,
            spotify: action.spotify,
        };

    case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists: action.playlists,
        };
    
    case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly: action.discover_weekly,
        }

    default:
        return state;
  }
}

export default reducer;