import React, { createContext, useContext, useReducer } from "react";
import { Podcast } from "../services/API";
import PodcastAppReducer, { AddPodcastAction, UpdatePodcastListAction } from "./podcastReducer";

export interface State {
    podcastList: Podcast[];
}

export interface Store {
    state: State;
    dispatch?: React.Dispatch<UpdatePodcastListAction | AddPodcastAction>;
}

const initialState: State = {
    podcastList: [],
}

const PodcastContext = createContext<Store>({ state: initialState });
export const usePodcastContext = () => useContext(PodcastContext);

const PodcastState: React.FC = (props) => {
  const [state, dispatch] = useReducer(PodcastAppReducer, initialState);

  return (
    <PodcastContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PodcastContext.Provider>
  );
};

export default PodcastState;

