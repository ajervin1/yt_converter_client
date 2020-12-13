<template>
	<main class="search mt-6">
		<h4 class="text-light  mb-4">Search Youtube Videos</h4>
		
		<!--Form-->
		<form class="mb-10 d-flex" @submit.prevent="searchVideos">
			<input type="text" v-model="query" class="form-control rounded-right-0">
			<button class="btn btn-primary rounded-left-0">Submit</button>
		</form>
		<!--Form-->
	
	</main>
</template>

<script>
	import axios from 'axios'
	
	const api_key = 'AIzaSyDcSdMGRD4JXS7uAGAqKW2uob0k0ZqS_yw'
	const request = axios.create({
		baseURL: 'https://youtube.googleapis.com/youtube/v3',
		params: {
			key: api_key,
		}
	})
	
	
	
	export default {
		name: 'SearchVideos',
		data () {
			return {
				query: 'nba',
			}
		},
		methods: {
			async searchVideos () {
				const { data } = await request.get('/search', {
					params: {
						part: 'snippet',
						q: this.query,
						type: 'video',
						maxResults: 3
					}
				})
				this.$store.state.videos = data.items;
			},
		},
	}
</script>
