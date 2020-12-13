<template>
	<!--Chose Media-->
	<section class="media-options mb-4">
		<h6>
			Choose Media Type
		</h6>
		<label class="text-white d-block">Select Media Type</label>
		<!--Change Media-->
		<button v-for="type in options"
		        class="btn btn-success btn-sm mr-3"
		        @click="changeMedia(type)"
		>
			{{ type }}
		</button>
		<!--Chnage Media-->
		<div class="text-white-50 mt-2">
			Selected Media Type: <span class="ml-2 text-light-primary">{{ media_type }}</span>
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
				options: [ 'audio', 'video' ]
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
