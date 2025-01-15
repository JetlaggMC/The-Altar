ServerEvents.recipes(event => {
	
	event.recipes.gtceu.dna_fabricator('pure_daisy')
		.itemInputs(
			'4x botania:white_petal',
			'1x #forge:seeds'
		)
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs(Item.of('1x botania:pure_daisy'))
		.duration(1200)
		.EUt(32)	
	event.recipes.gtceu.dna_fabricator('endoflame')
		.itemInputs(
			'2x botania:brown_petal',
			'1x botania:red_petal',
			'1x botania:light_gray_petal',
			'1x #forge:seeds'
		)
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs(Item.of('1x botania:endoflame'))
		.duration(1200)
		.EUt(32)	
	event.recipes.gtceu.dna_fabricator('hydroangea')
		.itemInputs(
			'2x botania:blue_petal',
			'2x botania:cyan_petal',
			'1x #forge:seeds'
		)
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs(Item.of('1x botania:hydroangea'))
		.duration(1200)
		.EUt(32)	


	event.recipes.gtceu.dna_fabricator('cow_model_1')
		.itemInputs(
			'16x minecraft:hay_block',
			'8x minecraft:leather',
			'4x minecraft:beef',
			'1x kubejs:taiga_dust',
			'1x #gtceu:circuits/mv'
		)
		.inputFluids(Fluid.of('minecraft:milk', 1000))
		.itemOutputs(Item.of('1x kubejs:cow_model_1'))
		.duration(12000)
		.EUt(32)	

	event.recipes.gtceu.dna_fabricator('sheep_model_1')
		.itemInputs(
			'16x minecraft:hay_block',
			'8x #forge:wool',
			'4x minecraft:mutton',
			'1x minecraft:grass_block',
			'1x kubejs:taiga_dust',
			'1x #gtceu:circuits/mv'
		)
		.itemOutputs(Item.of('1x kubejs:sheep_model_1'))
		.duration(12000)
		.EUt(32)	

	event.recipes.gtceu.dna_fabricator('pig_model_1')
		.itemInputs(
			'16x minecraft:carrot',
			'8x minecraft:mud',
			'4x minecraft:porkchop',
			'1x minecraft:bone_meal',
			'1x kubejs:earth_dust',
			'1x #gtceu:circuits/mv'
		)
		.itemOutputs(Item.of('1x kubejs:pig_model_1'))
		.duration(12000)
		.EUt(32)	

	event.recipes.gtceu.dna_fabricator('chicken_model_1')
		.itemInputs(
			'16x #forge:seeds',
			'8x minecraft:feather',
			'4x minecraft:chicken',
			'1x minecraft:egg',
			'1x kubejs:sky_dust',
			'1x #gtceu:circuits/mv'
		)
		.itemOutputs(Item.of('1x kubejs:chicken_model_1'))
		.duration(12000)
		.EUt(32)	

	event.recipes.gtceu.dna_fabricator('bee_model_1')
		.itemInputs(
			'16x minecraft:honeycomb_block',
			'8x #minecraft:flowers',
			'4x minecraft:honey_bottle',
			'1x minecraft:campfire',
			'1x kubejs:sky_dust',
			'1x #gtceu:circuits/mv'
		)
		.itemOutputs(Item.of('1x kubejs:bee_model_1'))
		.duration(12000)
		.EUt(32)	

	event.recipes.gtceu.dna_fabricator('rabbit_model_1')
		.itemInputs(
			'16x minecraft:carrot',
			'8x minecraft:rabbit',
			'4x minecraft:rabbit_hide',
			'1x minecraft:hay_block',
			'1x kubejs:desert_dust',
			'1x #gtceu:circuits/mv'
		)
		.itemOutputs(Item.of('1x kubejs:rabbit_model_1'))
		.duration(12000)
		.EUt(32)

	event.recipes.gtceu.dna_fabricator('squid_model_1')
		.itemInputs(
			'16x minecraft:ink_sac',
			'8x minecraft:black_dye',
			'4x minecraft:glow_ink_sac',
			'1x kubejs:ocean_dust',
			'1x #gtceu:circuits/mv'
		)
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs(Item.of('1x kubejs:squid_model_1'))
		.duration(12000)
		.EUt(32)	
	
	event.recipes.gtceu.dna_fabricator('fish_model_1')
		.itemInputs(
			'16x #forge:foods/fish/raw',
			'4x minecraft:bread',
			'1x minecraft:fishing_rod',
			'1x kubejs:ocean_dust',
			'1x #gtceu:circuits/mv'
		)
		.inputFluids(Fluid.of('gtceu:fish_oil', 1000))
		.itemOutputs(Item.of('1x kubejs:fish_model_1'))
		.duration(12000)
		.EUt(32)
	
	event.recipes.gtceu.dna_fabricator('axolotl_model_1')
		.itemInputs(
			'16x minecraft:moss_block',
			'8x minecraft:glow_berries',
			'4x minecraft:sculk',
			'1x kubejs:earth_dust',
			'1x #gtceu:circuits/mv'
		)
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs(Item.of('1x kubejs:axolotl_model_1'))
		.duration(12000)
		.EUt(32)
	event.recipes.gtceu.dna_fabricator('cow_model_2')
		.itemInputs(
			'1x botania:rune_earth',
			'1x botania:rune_summer',
			'1x botania:rune_sloth',
			'1x kubejs:cow_model_1',
			'1x #gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium', 1000))
		.itemOutputs(Item.of('1x kubejs:cow_model_2'))
		.duration(12000)
		.EUt(128)
	event.recipes.gtceu.dna_fabricator('chicken_model_2')
		.itemInputs(
			'1x botania:rune_earth',
			'1x botania:rune_spring',
			'1x botania:rune_pride',
			'1x kubejs:chicken_model_1',
			'1x #gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium', 1000))
		.itemOutputs(Item.of('1x kubejs:chicken_model_2'))
		.duration(12000)
		.EUt(128)
	event.recipes.gtceu.dna_fabricator('sheep_model_2')
		.itemInputs(
			'1x botania:rune_earth',
			'1x botania:rune_winter',
			'1x botania:rune_gluttony',
			'1x kubejs:sheep_model_1',
			'1x #gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium', 1000))
		.itemOutputs(Item.of('1x kubejs:sheep_model_2'))
		.duration(12000)
		.EUt(128)
	event.recipes.gtceu.dna_fabricator('rabbit_model_2')
		.itemInputs(
			'1x botania:rune_earth',
			'1x botania:rune_spring',
			'1x botania:rune_wrath',
			'1x kubejs:rabbit_model_1',
			'1x #gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium', 1000))
		.itemOutputs(Item.of('1x kubejs:rabbit_model_2'))
		.duration(12000)
		.EUt(128)
	event.recipes.gtceu.dna_fabricator('fish_model_2')
		.itemInputs(
			'1x botania:rune_water',
			'1x botania:rune_winter',
			'1x botania:rune_envy',
			'1x kubejs:fish_model_1',
			'1x #gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium', 1000))
		.itemOutputs(Item.of('1x kubejs:fish_model_2'))
		.duration(12000)
		.EUt(128)
	event.recipes.gtceu.dna_fabricator('axolotl_model_2')
		.itemInputs(
			'1x botania:rune_mana',
			'1x botania:rune_autumn',
			'1x botania:rune_lust',
			'1x kubejs:axolotl_model_1',
			'1x #gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium', 1000))
		.itemOutputs(Item.of('1x kubejs:axolotl_model_2'))
		.duration(12000)
		.EUt(128)
	event.recipes.gtceu.dna_fabricator('bee_model_2')
		.itemInputs(
			'1x botania:rune_air',
			'1x botania:rune_summer',
			'1x botania:rune_wrath',
			'1x kubejs:bee_model_1',
			'1x #gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium', 1000))
		.itemOutputs(Item.of('1x kubejs:bee_model_2'))
		.duration(12000)
		.EUt(128)
	event.recipes.gtceu.dna_fabricator('pig_model_2')
		.itemInputs(
			'1x botania:rune_earth',
			'1x botania:rune_autumn',
			'1x botania:rune_greed',
			'1x kubejs:pig_model_1',
			'1x #gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium', 1000))
		.itemOutputs(Item.of('1x kubejs:pig_model_2'))
		.duration(12000)
		.EUt(128)
	event.recipes.gtceu.dna_fabricator('squid_model_2')
		.itemInputs(
			'1x botania:rune_water',
			'1x botania:rune_summer',
			'1x botania:rune_envy',
			'1x kubejs:squid_model_1',
			'1x #gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium', 1000))
		.itemOutputs(Item.of('1x kubejs:squid_model_2'))
		.duration(12000)
		.EUt(128)
})
