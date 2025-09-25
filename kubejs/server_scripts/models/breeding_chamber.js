ServerEvents.recipes(event => {
	event.recipes.gtceu.breeding_chamber('cow_1')
		.notConsumable(Item.of('2x kubejs:cow_model_2'))
		.itemInputs(Item.of('2x kubejs:wheat_1'))
		.inputFluids(Fluid.of('kubejs:taiga_essence',144))
		.itemOutputs(Item.of('1x kubejs:cow_model_1'))
		.duration(2400)
		.EUt(480)
})
