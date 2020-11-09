<template>
	<div class="c-form-calculator">
		<div class="c-grid-calculator mb-4 pb-3">
			<div class="row c-grid-calculator__row">
				<div class="col-md-6 c-grid-calculator__col">
					<base-field placeholder="Откуда"/>
				</div>
				<div class="col-md-6 c-grid-calculator__col">
					<base-field placeholder="Куда"/>
				</div>
			</div>
		</div>
		<p class="m-0 mb-4">Вес ( в кг ), Габариты ДхШхВ ( в см )</p>
		<div class="c-grid-calculator mb-4 pb-3">
			<div class="row mb-2 c-grid-calculator__row">
				<div class="col-md-3 c-grid-calculator__col"><base-field /></div>
				<div class="col-md-3 c-grid-calculator__col"><base-field /></div>
				<div class="col-md-3 c-grid-calculator__col"><base-field /></div>
				<div class="col-md-3 c-grid-calculator__col"><base-field /></div>
			</div>
		</div>
		<div class="c-grid-calculator">
			<div class="row c-grid-calculator__row">
				<div class="col-md-6 c-grid-calculator__col">
					<base-select :options="options" />
				</div>
				<div class="col-md-6 c-grid-calculator__col">
					<button class="c-btn c-btn_primary c-form-calculator__action c-form-calculator__action_calculate">Рассчитать</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'FormCalculator',

  data () {
    return {
    	options: [
    		{
    			value: null,
    			text: 'Тип груза'
    		},
    		{
    			value: 0,
    			text: 'Большой'
    		}
    	] 
    }
  }
}
</script>

<style lang="css" scoped>
</style>