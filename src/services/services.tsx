import axios from 'axios'

/**
 * Obtener todos los 100 podcast mas escuchados
 */
export const getPodcastList = () => {
    return axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
}