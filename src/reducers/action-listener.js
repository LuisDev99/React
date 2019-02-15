export default function (state = null, action) {
    switch (action.type) {
        case 'OnUserLogging':
            return action.payload;
            break;

        case 'OnUserSearchEvent':
            return action.payload;
            break;

        case 'OnUserLogout':
            return action.payload;
            break;

        case 'OnUserWatchLaterEvent':
            return action.payload;
        break;

        case 'OnWatchTableVideos':
            return action.payload;
        break;

    }
    return state;
}