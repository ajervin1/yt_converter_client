const axios = require('axios')

// Convert Url
export async function convertUrl (url, media_type = 'mp4') {
	const { data } = await axios.post('https://youtuber-converter.herokuapp.com/convert', {
		youtube_url: url,
		media_type
	})
	return data
}
