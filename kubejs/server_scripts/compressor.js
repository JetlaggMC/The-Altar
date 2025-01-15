ServerEvents.recipes(event => {
	event.recipes.gtceu.extractor('honeyblock')
		.inputFluids(Fluid.of('create:honey', 1000))
		.itemOutputs(Item.of('1x minecraft:honey_block'))
		.duration(300)
		.EUt(2)
})