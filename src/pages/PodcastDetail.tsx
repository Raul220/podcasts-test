import React, { FC, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const PodcastDetail: FC = () => {
    const { podcastId } = useParams<{ podcastId: string }>();
    const [podcast, setPodcast] = useState(null);

    const getPodcast = () => {
        debugger;
        axios.get(`https://
        itunes.apple.com/lookup?id=${podcastId}`
        ).then((response) => {
            setPodcast(response.data);
        }).catch(e => {
            console.error(e);
        });
    }

    useEffect(() => {
        getPodcast();
    }, [podcastId]);

    return (
        <Fragment>
            <h1>{podcastId}</h1>
            <p>{podcast}</p>
        </Fragment>
    );
}