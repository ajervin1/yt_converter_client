import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		media_type: 'video',
		is_downloaded: false,
		download_url: 'https://youtuber-converter.herokuapp.com/download',
		videos: [],
		youtube_url: ''
	}
})
export default store
