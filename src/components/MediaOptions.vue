<template>
	<!--Chose Media-->
	<section class="media-options mb-4">
		<h6 class="text-light mb-2">
			Choose Media Type
		</h6>
	
		<!--Change Media-->
		<button class="btn btn-success btn-sm mr-3" @click="changeMedia('video')">
			Video
		</button>
		<button class="btn btn-info btn-sm mr-3" @click="changeMedia('audio')">
			Audio
		</button>
		<!--Chnage Media-->
		<div class="text-white-50 mt-2">
			Selected Media Type: <span class="ml-2 badge badge-primary">{{ media_type }}</span>
		</div>
	</section>
	<!--Chose Media-->
</template>

<script>
	/*
	* Set The Media Type to audio or video
	* */
	export default {
		name: 'MediaOptions',
		data () {
			return {
				options: [ 'video', 'audio' ]
			}
		},
		computed: {
			media_type () {
				return this.$store.state.media_type
			}
		},
		methods: {
			changeMedia (media_type) {
				this.$store.state.media_type = media_type
			}
		}
	}
</script>
