<template>
	<div class="c-slider-reviews">
		<swiper :options="sliderOptions" class="py-3">
			<swiper-slide v-for="(reviewItem, reviewIndex) in reviews" :key="`client-${reviewIndex}`">
				<div class="c-card-review">
					<div class="c-card-review__avatar">
						<img :src="require(`@/img/content/avatar.png`)" alt="">
					</div>
					<h5 class="c-card-review__title">{{reviewItem.name}}</h5>
					<div class="c-card-review__grade">
						<span class="c-card-review__grade-number">{{reviewItem.grade}}</span>
						Отлично
					</div>
					<p class="c-card-review__text text-center mb-0">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
						Cumque ullam nesciunt et voluptates accusantium veritatis quasi, eius, neque est voluptatum.
					</p>
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
			reviews: [
				{
					avatar: './img/content/avatar.jpg',
					name: 'Имя пользователя',
					grade: 10
				},
				{
					avatar: './img/content/avatar.jpg',
					name: 'Имя пользователя',
					grade: 10
				},
				{
					avatar: './img/content/avatar.jpg',
					name: 'Имя пользователя',
					grade: 10
				}
			],
			sliderOptions: {
				slidesPerView: 3,
				loop: true,
				pagination: {
					el: '.c-slider-reviews .swiper-pagination',
					clickable: true,
					dynamicBullets: true,
					dynamicMainBullets: 4
				},
				spaceBetween: 15
			}
		}
	},
}
</script>

<style lang="css" scoped>
</style>