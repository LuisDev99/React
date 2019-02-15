import firebase from 'firebase';

export const getSuggestedVideos = (state, event) => {

    /*Get recommended videos by using the youtube api search engine v3*/

    //https://www.googleapis.com/youtube/v3/search?part=snippet&q=swimming&type=video&key=API_KEY
    state.searchText = event.target.value;

    var url = 'https://www.googleapis.com/youtube/v3/search';
    var key = 'AIzaSyA8RkRzkgJLaoGpGgAK_d6mxSKsrtHD1mA';
    var searchresult = state.searchText;
    var finalUrl = url + '?part=snippet&q=' + searchresult + '&key='+key+'&max_results=10';

    console.log(finalUrl);

    fetch(finalUrl)
        .then((response) => console.log("Searching"))
        .then((responseJson) => state.youtubeItems = responseJson)
        .catch((error) => console.log(error)) 

    return {
        type: 'OnUserSearchEvent',
        payload : state
    }
}


export const Login = (state) => {

    //Firebase Login Authentication
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => state.user = result.user.displayName)
        .catch(error => console.log(error));

    return {
        type: 'OnUserLogging',
        payload : state
    }

}

export const Logout = (state) => {

    //Firebase Logout
    firebase.auth().signOut()
        .then (result => console.log("Log out"))
        .catch(error => console.log('Error in Logout ${error.code}: ${error.message}'));

    return {
        type: 'OnUserLogout',
        payload : state
    }
}

export const OnWatchLaterClick = (state) =>{ 

    //Save video id to firebase
    return {
        type : 'OnUserWatchLaterEvent',
        payload : state
    }
}

export const OnWatchTableVideos = (state) => {

    //Get the users watch later videos from firebase
    return {
        type : 'OnWatchTableVideos',
        payload : state
    }
}
