import React, { FC, useState } from "react";
import { Podcast } from "../../services/API";
import PodcastCard from "../PodcastCard/PodcastCard";
import './PodcastList.scss';

const PodcastList: FC<{ list: Podcast[] }> = ({ list }) => {

    const [filteredList, setFilteredList] = useState<Podcast[]>(list);



    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        if (value) {
            setFilteredList(
                list.filter((element) => element["im:artist"].label.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || element["im:name"].label.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
            );
        } else {
            setFilteredList(list);
        }
    };

    return (
        <div className="podcast-list">
            <div className="filter-container">
                <span>{filteredList.length}</span>
                <input
                    className="filter-input"
                    placeholder="Filter podcasts..."
                    onChange={onChange}
                    type="text"
                />
            </div>

            <div className='podcast-container'>
                {
                    filteredList?.map((item, index) => (
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

        </div>

    );
}

export default PodcastList;