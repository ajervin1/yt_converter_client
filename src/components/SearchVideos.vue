<template>
	<main class="search mt-6">
		<h4 class="text-light  mb-4">Search Youtube Videos</h4>
		
		<!--Form-->
		<form class="mb-10 d-flex" @submit.prevent="handleSearch">
			<input type="text" v-model="query" class="form-control rounded-right-0">
			<button class="btn btn-primary rounded-left-0">Submit</button>
		</form>
		<!--Form-->
		<!--Video List-->
		<div class="row">
			<div class="col-4 mb-4 text-white" v-for="video in videos">
				<!--Video-->
				<article>
					<iframe class="img-fluid"
					        :src="`https://www.youtube.com/embed/${video.id.videoId}`">
					</iframe>
					<div>
						<button class="btn btn-primary btn-sm" @click="changeUrl(video.id.videoId)">Get
							Youtube Url
						</button>
					
					</div>
				</article>
			</div>
		</div>
		<!--Video List-->
	</main>
</template>

<script>
	import { searchYoutubeVideos } from '../youtubeservice'
	
	export default {
		name: 'SearchVideos',
		data () {
			return {
				query: 'nba',
				videos: [],
				youtube_url: 'https://www.youtube.com/watch?v='
			}
		},
		methods: {
			async handleSearch () {
				this.videos = await searchYoutubeVideos(this.query)
			},
			changeUrl (videoId) {
				const youtubeurl = this.youtube_url + videoId
				this.$emit('changeurl', youtubeurl)
			}
		},
	}
</script>
