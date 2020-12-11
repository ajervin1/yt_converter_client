<template>
	<div id="app" class="mt-4 w-75 mx-auto">
		
		<h2 class="text-center text-light ">Uncles Youtube Converter</h2>
		<ol class="text-white">
			<li>First Search The Videos You Want To Convert</li>
			<li>Click On The Get Youtube Url Button</li>
			<li>
				Then Click Convert Button, Wait Till download button appears
			</li>
			<li>Click Download</li>
		</ol>
		<!--Chose Media-->
		<div class="options mb-4">
			<h6>
				Choose Media Type
			</h6>
			<label class="text-white d-block">Select Media Type</label>
			<button class="btn btn-success mr-3" @click="media_type = 'mp3'">
				mp3
			</button>
			<button class="btn btn-info" @click="media_type = 'mp4'">
				mp4
			</button>
			<div class="text-white-50 mt-2">
				Selected Media Type: <span class="ml-2 text-light-primary">{{ media_type }}</span>
			</div>
		</div>
		
		<!--Chose Media-->
		<!--Form-->
		<form @submit.prevent="handleConversion" class="mx-auto d-flex">
			<input class="form-control rounded-right-0" placeholder="youtube_url" type="text"
			       v-model="youtube_url"/>
			<button type="submit" class="btn btn-primary rounded-left-0">Convert</button>
		</form>
		<!--Form-->
		<!--Download Show When Download Is Complete-->
		<div v-show="is_downloaded" class="mt-4">
			<a class="btn btn-success" ref="link" :href="download_url">Download</a>
			<button class="btn btn-primary" @click="resetDownload">Convert Another Video</button>
		</div>
		<!--Downlaod-->
		<SearchVideos @changeurl="setYoutubeUrl"/>
	</div>
</template>

<script>
	
	
	import { convertUrl } from './service'
	import SearchVideos from './components/SearchVideos'
	
	export default {
		name: 'App',
		components: { SearchVideos },
		data () {
			return {
				youtube_url: '',
				media_type: 'mp4',
				is_downloaded: false,
				download_url: 'https://youtuber-converter.herokuapp.com/download'
				
			}
		},
		methods: {
			setYoutubeUrl (youtubeurl) {
				this.youtube_url = youtubeurl;
			},
			resetDownload () {
				this.youtube_url = ''
				this.is_downloaded = false
				this.download_url = 'https://youtuber-converter.herokuapp.com/download'
				localStorage.clear()
			},
			async handleConversion () {
				const file = await convertUrl(this.youtube_url, this.media_type)
				localStorage.setItem('filename', file)
				this.is_downloaded = true
				//  Fix Download Link
				
				// Get Filename
				const filename = localStorage.getItem('filename')
				//  Edit The Url
				const url = this.download_url + `?filename=${ filename }`
				const encoded = encodeURI(url)
				this.download_url = encoded
			}
		}
		
	}
</script>
