<template>
	<div class="c-slider-we-working">
		<swiper :options="sliderOptions" class="py-3">
			<swiper-slide v-for="(slideItem, slideIndex) in slides" :key="`client-${slideIndex}`" class="c-slider-we-working__slide">
				<vue-plyr allowfullscreen
					        crossorigin
					        controls
					        hideControls
					        allowtransparency :data-poster="slideItem.poster">
					<div v-if="slideItem.type === 'youtube'" data-plyr-provider="youtube" :data-plyr-embed-id="slideItem.id"></div>
				</vue-plyr>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {

	name: 'SliderWeWorking',
	components: {
		Swiper,
		SwiperSlide
	},
	data() {
		return {
			slides: [
				{
					id: 'bTqVqk7FSmY',
					poster: 'img/content/poster.jpg',
					type: 'youtube'
				}
			],
			sliderOptions: {
				pagination: {
					el: '.c-slider-we-working .swiper-pagination',
					clickable: true,
					dynamicBullets: true,
					dynamicMainBullets: 4
				},
			}
		}
	}
}
</script>