import React, { Fragment, useEffect, useState } from 'react';
import { usePodcastContext } from '../context/podcastState';
import { getPodcastData } from '../services/services';

export const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { state: {
    podcastList,
  }, dispatch } = usePodcastContext();

  const getData = () => {
    setLoading(true);
    getPodcastData()
      .then((res) => {
        console.log(res);
        if(dispatch)
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
      {
        loading ? 'Loading' : (
          <ul>
            {
              podcastList?.map((item, index) => {
                <li key={index}>{item.id}</li>
              })
            }
          </ul>
        )
      }

    </Fragment>
  )
}
