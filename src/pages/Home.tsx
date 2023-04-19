import React, { Fragment, useEffect, useState } from 'react';
import { usePodcastContext } from '../context/podcastState';
import { getPodcastData } from '../services/services';
import PodcastCard from '../components/PodcastCard/PodcastCard';
import './Home.scss';

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
        // const podcasts = res.entry[0].artist;
        // console.log(res.entry[0].)
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
      {
        loading ? 'Loading' : (
          <div className='podcast-container'>
            {
              podcastList?.map((item, index) => (
                <PodcastCard
                  key={index}
                  author={item['im:artist'].label}
                  imgUrl={item['im:image'].filter(e => e.attributes.height === '60')[0].label}
                  title={item['im:name'].label}
                  id={item.id.attributes['im:id']}
                />
              ))
            }
          </div>
        )
      }

    </Fragment>
  )
}
