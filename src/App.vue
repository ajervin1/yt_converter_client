<template>
	<main id="app" class="mt-4 w-75 mx-auto text-white">
		<div>
			<strong>Youtube Url: </strong>
			{{ $store.state.youtube_url }}
		</div>
		<!--Media Options-->
		<MediaOptions class="mb-5"/>
		<!--Media Options-->
		<!--YoutubeForm-->
		<YoutubeForm/>
		<!--YoutubeForm-->
		<!--Download Button-->
		<DownloadButton />
		<!--Download Button-->
		<!--Search Videos-->
		<SearchVideos />
		<!--Search Videos-->
		<VideoList />
		<!--Search Videos-->
	</main>
</template>

<script>
	
	
	import { convertUrl } from './service'
	import SearchVideos from './components/SearchVideos'
	import MediaOptions from './components/MediaOptions'
	import YoutubeForm from './components/YoutubeForm'
	import DownloadButton from './components/DownloadButton'
	import VideoList from './components/VideoList'
	
	export default {
		name: 'App',
		components: { VideoList, DownloadButton, YoutubeForm, MediaOptions, SearchVideos },
		
		
	}
</script>
