ServerEvents.recipes(event => {
	event.recipes.gtceu.meat_freezer('clean_growth_medium')
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium'),1000)
		.itemInputs(Item.of('1x botania:corporea_spark_master'))
		.outputFluids(Fluid.of('kubejs:clean_growth_medium'),1000)
		.duration(200)
		.EUt(8)	
})
