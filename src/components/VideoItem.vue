<template>
	<!--Video-->
	<article class="bg-secondary rounded border-0 shadow-lg">
		<iframe class=""
		        :src="`https://www.youtube.com/embed/${video.id.videoId}`">
		</iframe>
		<div class="p-3">
			<button class="btn btn-primary btn-sm" @click="setYoutubeUrl(video.id.videoId)">
				Get
				Youtube Url
			</button>
		</div>
	</article>
	<!--Video-->
</template>

<script>
	/*
	* Display A Video
	* */
	export default {
		name: 'VideoItem',
		props: [ 'video' ],
		data () {
			return {}
		},
		methods: {
			setYoutubeUrl (videoId) {
				const yturl = 'https://www.youtube.com/watch?v=' + videoId
				this.$store.state.youtube_url = yturl
				
			}
		}
	}
</script>
<style>
	
	iframe {
		width: 100%;
		height: 225px;
	}

</style>
