ServerEvents.recipes(event => {
	event.recipes.gtceu.resource_combinator('wheat_seeds_1')
		.itemInputs(Item.of('64x minecraft:wheat_seeds'))
		.inputFluids(Fluid.of('minecraft:water',1000))
		.chancedOutput('1x kubejs:wheat_seeds_mk1', 500, 500)
		.duration(1200)
		.EUt(32)

})