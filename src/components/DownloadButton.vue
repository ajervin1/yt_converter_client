<template>
	<!--Download Show When Download Is Complete-->
	<div v-show="is_downloaded" class="mt-4">
		<a class="btn btn-success" ref="link" :href="download_url">Download</a>
		
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
