import React, { FC, Fragment, useEffect, useState } from 'react';
import { usePodcastContext } from '../context/podcastState';
import { getPodcastData } from '../services/services';
import Title from '../components/Title/Title';
import PodcastList from '../components/PocastList/PodcastList';
import Loader from '../components/General/Loader';

export const Home: FC = () => {
  const [loading, setLoading] = useState(false);
  const { state: {
    podcastList,
  }, dispatch } = usePodcastContext();

  const getData = () => {
    setLoading(true);
    getPodcastData()
      .then((res) => {
        if (dispatch)
          dispatch({
            type: 'UPDATE_PODCAST_LIST',
            payload: res.entry,
          })
      })
      .catch(e => {
        console.log(e)
      })
      .finally(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    if (!podcastList.length) getData();
  }, [])

  return (
    <Fragment>
      <Title title='Podcaster' />
      {
        loading ? (
          <Loader />
        ) : (
          <PodcastList list={podcastList} />
        )
      }
    </Fragment>
  )
}
