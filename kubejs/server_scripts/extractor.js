ServerEvents.recipes(event => {
	event.recipes.gtceu.extractor('raw_source')
		.itemInputs(Item.of('16x ars_nouveau:sourceberry_bush'))
		.outputFluids(Fluid.of('kubejs:raw_source', 1000))
		.duration(200)
		.EUt(30)

	event.recipes.gtceu.extractor('honey')
		.itemInputs(Item.of('1x minecraft:honey_block'))
		.outputFluids(Fluid.of('create:honey', 1000))
		.duration(200)
		.EUt(2)
	
	event.recipes.gtceu.extractor('honeycomb')
		.itemInputs(Item.of('1x minecraft:honeycomb'))
		.outputFluids(Fluid.of('create:honey', 100))
		.duration(40)
		.EUt(2)
})