<template>
	<div class="c-trip-schedule">
		<div class="c-trip-schedule__header d-flex align-items-lg-center">
			<div class="c-trip-schedule__field c-trip-schedule__field_from">
				<div class="c-card-text">
					<img :src="require('@/img/icons/pin-secondary.png')" class="c-card-text__icon mr-3" />
					<base-field placeholder="Откуда" />
				</div>
			</div>
			<div class="c-trip-schedule__dash d-none d-md-block"></div>
			<div class="c-trip-schedule__field c-trip-schedule__field_to">
				<div class="c-card-text">
					<img :src="require('@/img/icons/pin-secondary.png')" class="c-card-text__icon mr-3" />
					<base-field placeholder="Куда" />
				</div>
			</div>
			<div class="c-trip-schedule__field c-trip-schedule__field_calendar">
				<div class="c-card-text">
					<img :src="require('@/img/icons/calendar.png')" class="c-card-text__icon mr-3" />
					<base-field placeholder="С 12.10.2020" />
				</div>
			</div>
			<div class="c-trip-schedule__field c-trip-schedule__field_passengers">
				<div class="c-card-text">
					<img :src="require('@/img/icons/man.png')" class="c-card-text__icon mr-3" />
					<base-field placeholder="1 пассажир" />
				</div>
			</div>
			<button class="c-trip-schedule__search">
				<svg>
					<use href="#loupe"></use>	
				</svg>
			</button>
		</div>
		<div class="c-trip-schedule__body">
			<div class="c-card-ticket">
				<div class="d-flex flex-column flex-lg-row justify-content-between">
					<div class="mb-5 mb-lg-0">
						<h5 class="c-card-ticket__from-to m-0 mb-4">Москва - Санкт-Петербург</h5>
						<div class="c-card-ticket__meta mb-3 d-flex align-items-center">
							<img :src="require('@/img/icons/car.png')" class="c-card-ticket__meta-icon" alt="">
							Марка автомобиля
						</div>
						<div class="c-card-ticket__meta d-flex align-items-center">
							<img :src="require('@/img/icons/man.png')" class="c-card-ticket__meta-icon" alt="">
							10 из 20 свободных мест
						</div>
					</div>
					<div class="d-flex align-items-center justify-content-between justify-content-md-start mb-5 mb-lg-0">
						<div class="d-flex flex-column">
							<h5 class="c-card-ticket__location c-card-ticket__location_from m-0 mb-3 font-weight-normal">Москва</h5>
							<h3 class="c-card-ticket__time c-card-ticket__time_from m-0 mb-3">00:10</h3>
							<h3 class="c-card-ticket__time-secondary c-card-ticket__time-secondary_from m-0 font-weight-normal">00:10</h3>
						</div>
						<div class="c-card-ticket__direction d-none d-md-block mx-4">
							<img :src="require('@/img/icons/direction.png')" alt="">
						</div>
						<div class="d-flex flex-column">
							<h5 class="c-card-ticket__location c-card-ticket__location_from m-0 mb-3 font-weight-normal">Санкт-Петербург</h5>
							<h3 class="c-card-ticket__time c-card-ticket__time_from m-0 mb-3">20:50</h3>
							<h3 class="c-card-ticket__time-secondary c-card-ticket__time-secondary_from m-0 font-weight-normal">23:50</h3>
						</div>
					</div>
					<div class="d-flex flex-column flex-sm-row flex-lg-column">
						<h2 class="c-card-ticket__price text-center font-weight-normal m-0 mr-4 mr-lg-0 mb-4">400 Руб</h2>
						<button class="c-btn c-btn_primary c-btn_lg">Приобрести билет</button>
					</div>
				</div>
				<div class="c-card-ticket__footer">
					<div class="d-flex flex-column flex-md-row align-items-lg-center">
						<div class="c-card-ticket__meta d-flex align-items-center mb-4 mb-lg-0 mr-5">
							<div class="c-card-ticket__meta-icon">
								<img :src="require('@/img/icons/men.png')"  alt="">
							</div>
							Максимум 2 на заднемсиденье
						</div>
						<div class="c-card-ticket__meta c-card-ticket__meta_no d-flex align-items-center mb-4 mb-lg-0 mr-5">
							<div class="c-card-ticket__meta-icon">
								<img :src="require('@/img/icons/cigarette.png')" alt="">
							</div>
							В машине не курить
						</div>
						<div class="c-card-ticket__meta c-card-ticket__meta_no d-flex align-items-center">
							<div class="c-card-ticket__meta-icon">
								<img :src="require('@/img/icons/paw.png')" alt="">
							</div>
							Без животных
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	name: 'TripSchedule',

	data() {
		return {

		}
	}
}
</script>

<style lang="css" scoped>
</style>