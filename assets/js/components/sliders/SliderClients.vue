<template>
	<div class="c-slider-clients">
		<swiper :options="sliderOptions" class="py-3">
			<swiper-slide v-for="(clientItem, clientIndex) in clients" :key="`client-${clientIndex}`">
				<div class="c-card-client">
					<img :src="require(`@/img/content/clients/${clientItem}.png`)" alt="">
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {

	name: 'SliderClients',
	components: {
		Swiper,
		SwiperSlide
	},
	data() {
		return {
			clients: ['otpbank', 'unicredit', 'tinkoff', 'eastbank'],
			sliderOptions: {
				slidesPerView: 1,
				loop: true,
				pagination: {
					el: '.c-slider-clients .swiper-pagination',
					clickable: true,
					dynamicBullets: true,
					dynamicMainBullets: 4
				},
				spaceBetween: 5,
				breakpoints: {
					512: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 4,
					}
				}
			}
		}
	},
}
</script>

<style lang="css" scoped>
</style>