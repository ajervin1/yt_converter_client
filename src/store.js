import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		media_type: 'video',
		is_downloaded: false,
		download_url: 'http://localhost:4000/download',
		videos: [],
		youtube_url: ''
	}
})
export default store
