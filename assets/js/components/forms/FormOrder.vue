<template>
	<form class="c-form-order">
		<base-field class="mb-4" label="ФИО" size="lg"></base-field>
        <base-field class="mb-4" label="Номер телефона" size="lg"></base-field>
        <div class="row mb-4">
            <div class="col-md-6">
            	<input-range label="Количество взрослых" icon="man" />
            </div>
            <div class="col-md-6">
            	<input-range label="Количество детей" icon="baby"/>
            </div>
        </div>
        <div v-if="orderType == 'car'" class="mb-5">
            <h5 class="m-0 mb-5 font-weight-normal">Выбрать сиденье</h5>
            <div class="c-form-order__car d-flex align-items-center justify-content-center">
            	<div class="c-form-order__sittings c-form-order__sittings_car">
            		<div class="c-form-order__sittings-back d-flex flex-column">
	            		<div v-for="sitting in car.sittings.back" class="c-form-order__sitting" :class="{'is-active': sitting.active}">
		            		<input v-model="sitting.active" type="checkbox">
	            		</div>
            		</div>
            		<div class="c-form-order__sittings-front d-flex flex-column justify-content-between">
            			<div v-for="sitting in car.sittings.front" class="c-form-order__sitting" :class="{'is-active': sitting.active}">
		            		<input  v-model="sitting.active" type="checkbox">
	            		</div>
            		</div>
            	</div>
				<img :src="require('@/img/content/placeholder-car.png')" alt="">
            </div>
        </div>
        <div v-else-if="orderType == 'bus'" class="mb-5 mt-5">
        	<div class="c-form-order__bus">
        		<img :src="require('@/img/icons/steering-wheel.png')" alt="" class="c-form-order__icon c-form-order__icon_steering-wheel">
        		<div class="c-form-order__sittings c-form-order__sittings_bus">
        			<div class="c-form-order__sittings-right d-flex flex-wrap">
	            		<div v-for="sitting in Array.from(new Array(18), (k, i) => ++i)" class="c-form-order__sitting" :class="{'is-active': bus.sittings.right.includes(sitting)}">
		            		{{sitting}}
		            		<input v-model="bus.sittings.right" :value="sitting" type="checkbox">
	            		</div>
        			</div>
        			<div class="c-form-order__sittings-left d-flex">
	        			<div v-for="sitting in Array.from(new Array(9), (k, i) => ++i)" class="c-form-order__sitting" :class="{'is-active': bus.sittings.left.includes(sitting)}">
	        				{{sitting}}
		            		<input  v-model="bus.sittings.left" :value="sitting" type="checkbox">
	            		</div>
        			</div>
        		</div>
        	</div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h5 class="font-weight-normal m-0 mb-4 pb-1">Животные</h5>
                <div class="row">
                    <div class="col-md-6">
                        <base-radio label="Есть" name="pets" value="yes" placement="left"></base-radio>
                    </div>
                    <div class="col-md-6">
                        <base-radio label="Нет" name="pets" value="no" placement="left"></base-radio>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <base-field label="Объем багажа" size="lg"></base-field>
            </div>
        </div>
        <base-textarea label="Примечание"></base-textarea>
	</form>
</template>

<script>
import InputRange from '@/js/components/controls/InputRange.vue';
export default {

	name: 'FormOrder',
	components: {
		InputRange
	},
	props: {
		orderType: {
			type: String,
			default: null
		},
		busRightSittings: {

		}
	},
	data() {
		return {
			car: {
				sittings: {
					front: [
						{
							active: false
						},
						{
							active: false
						},
					],
					back: [
						{
							active: false
						},
						{
							active: false
						},
						{
							active: false
						}
					]
				}
			},
			bus: {
				sittings: {
					left: [],
					right: []
				}
			}
		}
	}
}
</script>

<style lang="css" scoped>
</style>