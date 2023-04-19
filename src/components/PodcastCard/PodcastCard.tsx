import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import './PodcastCard.scss';

interface IPodcastCard {
  imgUrl: string;
  title: string;
  author: string;
  id: string;
};

const PodcastCard: FC<IPodcastCard> = ({
  imgUrl,
  title,
  author,
  id
}) => {

  return (
    <div className='podcast-card'>
      <Link to={`/podcast/${id}`}>
        <Image src={imgUrl} style={{ borderRadius: '50%' }} />
        <div className='text-container'>
          <span className='card-title'>{title}</span>
          <span className='card-author'>Author: {author}</span>
        </div>

      </Link >
    </div>
  )
}

export default PodcastCard