<template>
	<!--Video-->
	<article>
		<iframe class="img-fluid"
		        :src="`https://www.youtube.com/embed/${video.id.videoId}`">
		</iframe>
		<div>
			<button class="btn btn-primary btn-sm" @click="setYoutubeUrl(video.id.videoId)">
				Get
				Youtube Url
			</button>
		</div>
	</article>
	<!--Video-->
</template>

<script>
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
