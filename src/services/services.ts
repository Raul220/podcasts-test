import axios from 'axios'
import { PodcastService } from './API';

/**
 * Get podcats data
 */
export async function getPodcastData(){
    let response: PodcastService = {entry: []};
    await axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    .then(res => {
        response = res.data.feed;
    })
    .catch(e=> console.log(e));
    return response;
}