ServerEvents.recipes(event => {
	event.recipes.gtceu.meat_freezer('clean_growth_medium')
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium'),1000)
		.inputFluids(Fluid.of('kubejs:manafloraethylene'),1000)

		.itemInputs(Item.of('1x botania:corporea_spark_master'))
		.outputFluids(Fluid.of('kubejs:clean_growth_medium'),2000)

		.duration(200)
		.EUt(120)	

	event.recipes.gtceu.meat_freezer('sterile_meat')
		.itemInputs(Item.of('1x minecraft:beef'))
		.itemInputs(Item.of('1x minecraft:mutton'))
		.itemInputs(Item.of('1x minecraft:chicken'))
		.itemInputs(Item.of('1x minecraft:salmon'))
		.itemInputs(Item.of('1x minecraft:rabbit'))
		.itemInputs(Item.of('1x minecraft:porkchop'))
		.inputFluids(Fluid.of('kubejs:clean_growth_medium'),288)
		.inputFluids(Fluid.of('gtceu:fermented_biomass'),288)
		.itemOutputs(Item.of('1x kubejs:sterile_meat'))
		.duration(200)
		.EUt(480)	
})
