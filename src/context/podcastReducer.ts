
import { Podcast } from "../services/API";
import { State } from "./podcastState";

export interface UpdatePodcastListAction {
    type: 'UPDATE_PODCAST_LIST';
    payload: Podcast[];
}

export interface AddPodcastAction {
    type: 'ADD_PODCAST';
    payload: Podcast;
}

type Action =
    | UpdatePodcastListAction
    | AddPodcastAction;
const PodcastAppReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'UPDATE_PODCAST_LIST':
            return {
                ...state,
                podcastList: action.payload,
            };
        case 'ADD_PODCAST':
            return {
                ...state,
                podcastList: [...state.podcastList, action.payload]
            }
        default:
            return state;
    }
}

export default PodcastAppReducer;