const axios = require('axios')
axios.defaults.baseURL = 'https://youtube.googleapis.com/youtube/v3'
const api_key = 'AIzaSyDcSdMGRD4JXS7uAGAqKW2uob0k0ZqS_yw'
axios.defaults.params = {}
axios.defaults.params[ 'key' ] = api_key



// Search Youtube Videos
export async function searchYoutubeVideos (query = 'nba') {
	const { data } = await axios.get('/search', {
		params: {
			part: 'snippet',
			q: query,
			type: 'video',
			maxResults: 6
		}
	})
	return data.items
}

searchYoutubeVideos()
