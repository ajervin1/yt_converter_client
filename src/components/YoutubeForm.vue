<template>
	<!--Form-->
	<form @submit.prevent="convertVideo" class="mx-auto d-flex">
		<input @input="bindUrl" v-model="youtube_url" class="form-control rounded-right-0"
		       placeholder="youtube_url"
		       type="text"
		/>
		<button type="submit" class="btn btn-primary rounded-left-0">Convert</button>
	</form>
	<!--Form-->
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
				const { data } = await axios.post('http://localhost:4000/convert', {
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
				this.$store.state.is_downloaded = true
			}
		}
	}
</script>
