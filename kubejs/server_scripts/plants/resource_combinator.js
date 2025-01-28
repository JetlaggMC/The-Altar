ServerEvents.recipes(event => {
	event.recipes.gtceu.resource_combinator('mystical_flowers_1')
		.itemInputs(Item.of('64x botania:red_petal'))
		.itemInputs(Item.of('64x botania:orange_petal'))
		.itemInputs(Item.of('64x botania:yellow_petal'))
		.itemInputs(Item.of('64x botania:lime_petal'))
		.itemInputs(Item.of('64x botania:green_petal'))
		.itemInputs(Item.of('64x botania:light_blue_petal'))
		.itemInputs(Item.of('64x botania:cyan_petal'))
		.itemInputs(Item.of('64x botania:blue_petal'))
		.itemInputs(Item.of('64x botania:purple_petal'))
		.itemInputs(Item.of('64x botania:magenta_petal'))
		.itemInputs(Item.of('64x botania:pink_petal'))
		.itemInputs(Item.of('64x botania:brown_petal'))
		.itemInputs(Item.of('64x botania:black_petal'))
		.itemInputs(Item.of('64x botania:gray_petal'))
		.itemInputs(Item.of('64x botania:light_gray_petal'))
		.itemInputs(Item.of('64x botania:white_petal'))
		.inputFluids(Fluid.of('kubejs:manafloraethylene', 16000))
		.itemOutputs(Item.of('1x kubejs:mystical_flowers_1'))
		.duration(2000)
		.EUt(480)	
	
		event.recipes.gtceu.resource_combinator('wheat_1')
		.itemInputs(Item.of('8x minecraft:wheat'))
		.itemInputs(Item.of('4x minecraft:wheat_seeds'))
		.itemInputs(Item.of('4x minecraft:dirt'))
		.itemInputs(Item.of('4x gtceu:fine_blazing_wire'))
		.inputFluids(Fluid.of('gtceu:fermented_biomass', 288))
		.inputFluids(Fluid.of('kubejs:growth_medium', 144))
		.chancedOutput('1x kubejs:wheat_1',500,500)
		.duration(400)
		.EUt(244)	

		event.recipes.gtceu.resource_combinator('wheat_2')
		.itemInputs(Item.of('8x kubejs:wheat_1'))
		.itemInputs(Item.of('1x gtceu:plastic_circuit_board'))
		.itemInputs(Item.of('4x gtceu:fertilizer'))
		.itemInputs(Item.of('4x gtceu:fine_elementium_wire'))
		.inputFluids(Fluid.of('kubejs:living_matter', 288))
		.inputFluids(Fluid.of('kubejs:manafloraethylene', 144))
		.chancedOutput('1x kubejs:wheat_2',500,500)
		.duration(400)
		.EUt(960)	
})