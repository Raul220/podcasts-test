import React, { Fragment, useEffect, useState } from 'react'
import { getPodcastList } from '../services/services';

export const Home: React.FC = () => {
  const [podcasts, setPodcasts] = useState(null);

  const getData = async () => {
    debugger;
    await getPodcastList()
    .then(response => {
      if(response.data.Code === 200) {
        setPodcasts(response.data);

      }
    })
    .catch(e => {
      console.error(e)
    })
  }

  useEffect(() => {
    debugger;
    if (!podcasts) getData();
  }, [])

  return (
    <Fragment>
      {/* <ul>
        {
          podcasts?.map((item, index) => {
            <li>{ }</li>
          })
        }
      </ul> */}
    </Fragment>
  )
}
