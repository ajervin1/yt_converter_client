<template>
	<!--Video List-->
	<div class="row">
		<div class="col-4 mb-4 text-white" v-for="video in videos">
			<video-item :video="video"></video-item>
		</div>
	</div>
	<!--Video List-->
</template>

<script>
	import VideoItem from './VideoItem'
	
	export default {
		name: 'VideoList',
		components: { VideoItem },
		data () {
			return {}
		},
		computed: {
			videos () {
				return this.$store.state.videos
			}
		}
	}
</script>
