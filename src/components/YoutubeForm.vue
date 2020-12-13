<template>
	<section class="form">
		<h4 class="text-light  mb-4">Enter YoutubeUrl</h4>
		<!--Form-->
		<form @submit.prevent="convertVideo" class=" d-flex">
			<input @input="bindUrl" v-model="youtube_url" class="form-control rounded-right-0"
			       placeholder="youtube_url"
			       type="text"
			/>
			<button type="submit" class="btn btn-primary rounded-left-0">Convert</button>
		</form>
		<!--Form-->
		<!--Spinner-->
		<div class="spinner-border text-primary mt-5" role="status" v-if="show_spinner">
			<span class="sr-only">Loading...</span>
		</div>
		<!--Spinner-->
	
	</section>

</template>

<script>
	/*
	* set youtube url your trying to download
	* Send Request To server to convert the vieo
	* Create download url
	* */
	import axios from 'axios'
	
	export default {
		name: 'YoutubeForm',
		data () {
			return {
				show_spinner: false
			}
		},
		computed: {
			youtube_url () {
				return this.$store.state.youtube_url
			}
		},
		methods: {
			bindUrl (e) {
				this.$store.state.youtube_url = e.target.value
			},
			async convertVideo () {
				this.show_spinner = true
				const { data } = await axios.post('https://youtuber-converter.herokuapp.com/convert', {
					youtube_url: this.$store.state.youtube_url,
					media_type: this.$store.state.media_type
				})
				localStorage.setItem('filename', data.filename)
				//  Fix Download Link
				// Get Filename
				const filename = localStorage.getItem('filename')
				//  Edit The Url
				const url = this.$store.state.download_url + `?filename=${ filename }`
				const encoded = encodeURI(url)
				this.$store.state.download_url = encoded
				this.show_spinner = false
				this.$store.state.is_downloaded = true
			
			}
		}
	}
</script>
