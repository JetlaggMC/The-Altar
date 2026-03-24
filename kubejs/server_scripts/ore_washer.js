ServerEvents.recipes(event => {

	event.recipes.gtceu.ore_washer('processed_iron_ore')
		.itemInputs(Item.of('1x gtceu:purified_iron_ore'))
		.chancedInput(Item.of('1x create:sand_paper'), 100,1)

		.inputFluids(Fluid.of('gtceu:hydrochloric_acid',10))
		.itemOutputs(Item.of('1x kubejs:processed_iron_ore'))
		.duration(100)
		.EUt(16)	
	
	event.recipes.gtceu.ore_washer('refined_copper_ore')
		.itemInputs(Item.of('1x gtceu:purified_copper_ore'))
		.chancedInput(Item.of('1x create:sand_paper'), 100,1)
		.inputFluids(Fluid.of('gtceu:hydrochloric_acid',10))
		.itemOutputs(Item.of('1x gtceu:refined_copper_ore'))
		.duration(100)
		.EUt(16)	
})
