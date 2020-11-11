<template>
	<div class="">
		<b-tabs class="c-tabs" nav-class="c-tabs__nav">
			<b-tab :title="tariffItem.title" :active="!tariffIndex" v-for="(tariffItem, tariffIndex) in tariffs">
				<div class="d-flex flex-column flex-lg-row align-items-center pt-5">
					<div v-for="(tariffCarItem, tariffCarIndex) in tariffItem.list" class="c-tariff mb-4 mb-lg-0">
						<div class="c-tariff__thumb">
							<img :src="require('@/img/content/bus.png')" alt="">
						</div>
						<div class="c-tariff__body">
							<h4 class="c-tariff__title">{{tariffCarItem.name}}</h4>
							<p class="c-tariff__description">{{tariffCarItem.description}}</p>
							<button class="c-btn c-btn_primary mt-4" v-b-modal="tariffCarItem.modal">Подать заявку</button>
						</div>
					</div>
				</div>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
import { VBModal } from 'bootstrap-vue'
import { BTabs, BTab } from 'bootstrap-vue';
export default {

	name: 'TransportationTariffs',
	components: {
		BTabs,
		BTab
	},
	directives: {
		'b-modal': VBModal
	},
	data() {
		return {
			tariffs: [
				{
					title: 'Эконом',
					list: [
						{
							name: 'Название авто',
							description: 'Краткое описание автомобиля',
							modal: 'order'
						},
						{
							name: 'Название авто',
							description: 'Краткое описание автомобиля',
							modal: 'order-car'
						},
						{
							name: 'Название авто',
							description: 'Краткое описание автомобиля',
							modal: 'order-bus'
						}
					]
				},
				{
					title: 'Бизнес',
					list: [
						{
							name: 'Название авто',
							description: 'Краткое описание автомобиля'
						},
						{
							name: 'Название авто',
							description: 'Краткое описание автомобиля'
						}
					]
				}
			]
		}
	}
}
</script>

<style lang="css" scoped>
</style>