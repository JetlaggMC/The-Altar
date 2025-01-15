ServerEvents.recipes(event => {
	event.recipes.gtceu.mixer('arcane_gold_dust')
		.itemInputs(Item.of('1x kubejs:source_gem_dust'))
		.itemInputs(Item.of('1x gtceu:gold_dust'))
		.itemOutputs(Item.of('2x gtceu:arcane_gold_dust'))
		.duration(200)
		.EUt(8)	
	event.recipes.gtceu.mixer('growth_medium')
		.itemInputs(Item.of('16x #forge:mushrooms'))
		.itemInputs(Item.of('16x minecraft:moss_block'))
		.itemInputs(Item.of('1x botania:spark'))
		.inputFluids(Fluid.of('minecraft:water',1000))
		.outputFluids(Fluid.of('kubejs:growth_medium',1000))
		.duration(200)
		.EUt(16)	
})
