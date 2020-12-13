<template>
	<!--Download Show When Download Is Complete-->
	<div v-show="is_downloaded" class="mt-4">
		<a @click="reset" class="btn btn-primary" ref="link" :href="download_url">Download</a>
	</div>
	<!--Downlaod-->
</template>

<script>
	/*
	* Make Get Request To Server To Download File
	* */
	export default {
		name: 'DownloadButton',
		data () {
			return {}
		},
		methods: {
			reset () {
				this.$store.state.youtube_url = ''
				localStorage.clear();
				this.$store.state.is_downloaded = false;
			}
		},
		computed: {
			is_downloaded () {
				return this.$store.state.is_downloaded
			},
			download_url () {
				return this.$store.state.download_url
			}
		}
	}
</script>
