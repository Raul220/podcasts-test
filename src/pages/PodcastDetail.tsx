import React, { FC, Fragment } from 'react';
import { useParams } from 'react-router-dom';

export const PodcastDetail: FC = () => {
    const { podcastId } = useParams<{ podcastId: string }>();

    return (
        <Fragment>
            <h1>{podcastId}</h1>
        </Fragment>
    );
}