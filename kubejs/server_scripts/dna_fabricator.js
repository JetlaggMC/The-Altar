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
			'1x kubejs:raw_meat_glob',
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
			'1x kubejs:taiga_dust',
			'1x kubejs:raw_meat_glob',
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
			'1x kubejs:earth_dust',
			'1x kubejs:raw_meat_glob',
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
			'1x kubejs:sky_dust',
			'1x kubejs:raw_meat_glob',
			'1x #gtceu:circuits/mv'
		)
		.itemOutputs(Item.of('1x kubejs:chicken_model_1'))
		.duration(12000)
		.EUt(32)	

	event.recipes.gtceu.dna_fabricator('bee_model_1')
		.itemInputs(
			'16x minecraft:honeycomb_block',
			'8x #minecraft:flowers',
			'4x minecraft:campfire',
			'1x kubejs:sky_dust',
			'1x kubejs:raw_meat_glob',
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
			'1x kubejs:desert_dust',
			'1x kubejs:raw_meat_glob',
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
			'1x kubejs:raw_meat_glob',
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
			'1x kubejs:raw_meat_glob',
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

//hostile models
event.recipes.gtceu.dna_fabricator('wither_skeleton_model_1')
.itemInputs(
	'16x minecraft:nether_bricks',
	'8x minecraft:coal',
	'4x minecraft:wither_skeleton_skull',
	'1x minecraft:wither_rose',
	'1x #gtceu:circuits/hv'
)
.inputFluids(Fluid.of('gtceu:blazing', 1000))
.itemOutputs(Item.of('1x kubejs:whither_skeleton_model_1'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('shulker_model_1')
.itemInputs(
	'16x minecraft:purpur_block',
	'8x minecraft:shulker_shell',
	'4x minecraft:chorus_flower',
	Item.of('minecraft:potion','{Potion:"minecraft:long_slow_falling"}'),
	'1x #gtceu:circuits/hv'
)
.inputFluids(Fluid.of('gtceu:blazing', 1000))
.itemOutputs(Item.of('1x kubejs:shulker_model_1'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('enderman_model_1')
.itemInputs(
	'16x minecraft:end_stone_bricks',
	'8x minecraft:ender_pearl',
	'4x minecraft:warped_wart_block',
	'1x kubejs:ender_shard',
	'1x #gtceu:circuits/hv'
)
.inputFluids(Fluid.of('gtceu:blazing', 1000))
.itemOutputs(Item.of('1x kubejs:enderman_model_1'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('blaze_model_1')
.itemInputs(
	'16x minecraft:red_nether_bricks',
	'8x gtceu:sulfur_dust',
	'4x minecraft:blaze_rod',
	'1x gtceu:blazing_rotor',
	'1x #gtceu:circuits/hv'
)
.inputFluids(Fluid.of('gtceu:blazing', 1000))
.itemOutputs(Item.of('1x kubejs:blaze_model_1'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('phantom_model_1')
.itemInputs(
	'16x minecraft:white_wool',
	'8x minecraft:phantom_membrane',
	'4x minecraft:feather',
	'1x kubejs:sky_shard',
	'1x #gtceu:circuits/hv'
)
.inputFluids(Fluid.of('gtceu:blazing', 1000))
.itemOutputs(Item.of('1x kubejs:phantom_model_1'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('spider_model_1')
.itemInputs(
	'16x minecraft:string',
	'8x minecraft:cobweb',
	'4x minecraft:spider_eye',
	Item.of('minecraft:potion', '{Potion:"minecraft:poison"}'),
	'1x #gtceu:circuits/hv'
)
.inputFluids(Fluid.of('gtceu:blazing', 1000))
.itemOutputs(Item.of('1x kubejs:spider_model_1'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('magma_model_1')
.itemInputs(
	'16x minecraft:blackstone',
	'8x minecraft:magma_block',
	'4x minecraft:magma_cream',
	'1x kubejs:nether_shard',
	'1x #gtceu:circuits/hv'
)
.inputFluids(Fluid.of('gtceu:blazing', 1000))
.itemOutputs(Item.of('1x kubejs:magma_model_1'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('skeleton_model_1')
.itemInputs(
	'16x minecraft:stone',
	'8x minecraft:bone',
	'4x minecraft:bone_meal',
	'1x minecraft:bow',
	'1x #gtceu:circuits/hv'
)
.inputFluids(Fluid.of('gtceu:blazing', 1000))
.itemOutputs(Item.of('1x kubejs:skeleton_model_1'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('slime_model_1')
.itemInputs(
	'16x minecraft:slime_block',
	'8x minecraft:honey_block',
	'4x minecraft:slime_ball',
	'1x create:super_glue',
	'1x #gtceu:circuits/hv'
)
.inputFluids(Fluid.of('gtceu:blazing', 1000))
.itemOutputs(Item.of('1x kubejs:slime_model_1'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('ghast_model_1')
.itemInputs(
	'16x minecraft:soul_soil',
	'8x minecraft:fire_charge',
	'4x minecraft:feather',
	'1x create:ghast_tear',
	'1x #gtceu:circuits/hv'
)
.inputFluids(Fluid.of('gtceu:blazing', 1000))
.itemOutputs(Item.of('1x kubejs:ghast_model_1'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('zombie_model_1')
.itemInputs(
	'16x minecraft:mossy_cobblestone',
	'8x minecraft:rotten_flesh',
	'4x minecraft:iron_nugget',
	'1x minecraft:golden_apple',
	'1x #gtceu:circuits/hv'
)
.inputFluids(Fluid.of('gtceu:blazing', 1000))
.itemOutputs(Item.of('1x kubejs:zombie_model_1'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('creeper_model_1')
.itemInputs(
	'16x minecraft:gunpowder',
	'8x gtceu:sulfur_dust',
	'4x minecraft:tnt',
	'1x minecraft:porkchop',
	'1x #gtceu:circuits/hv'
)
.inputFluids(Fluid.of('gtceu:blazing', 1000))
.itemOutputs(Item.of('1x kubejs:creeper_model_1'))
.duration(12000)
.EUt(128)

//hostile models 2
event.recipes.gtceu.dna_fabricator('wither_skeleton_model_2')
.itemInputs(
	'1x botania:rune_fire',
	'1x botania:rune_wrath',
	'1x botania:rune_spring',
	'1x #gtceu:circuits/ev'
)
.inputFluids(Fluid.of('kubejs:living_matter', 1000))
.itemOutputs(Item.of('1x kubejs:whither_skeleton_model_2'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('shulker_model_2')
.itemInputs(
	'1x botania:rune_mana',
	'1x botania:rune_wrath',
	'1x botania:rune_spring',
	'1x #gtceu:circuits/ev'
)
.inputFluids(Fluid.of('kubejs:living_matter', 1000))
.itemOutputs(Item.of('1x kubejs:shulker_model_2'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('enderman_model_2')
.itemInputs(
	'1x botania:rune_mana',
	'1x botania:rune_pride',
	'1x botania:rune_winter',
	'1x #gtceu:circuits/ev'
)
.inputFluids(Fluid.of('kubejs:living_matter', 1000))
.itemOutputs(Item.of('1x kubejs:enderman_model_2'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('blaze_model_2')
.itemInputs(

'1x botania:rune_fire',
'1x botania:rune_wrath',
'1x botania:rune_autumn',
'1x #gtceu:circuits/ev'
)
.inputFluids(Fluid.of('kubejs:living_matter', 1000))
.itemOutputs(Item.of('1x kubejs:blaze_model_2'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('phantom_model_2')
.itemInputs(
	'1x botania:rune_air',
	'1x botania:rune_wrath',
	'1x botania:rune_summer',
	'1x #gtceu:circuits/ev'
)
.inputFluids(Fluid.of('kubejs:living_matter', 1000))
.itemOutputs(Item.of('1x kubejs:phantom_model_2'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('spider_model_2')
.itemInputs(
	'1x botania:rune_earth',
	'1x botania:rune_pride',
	'1x botania:rune_autumn',
	'1x #gtceu:circuits/ev'
)
.inputFluids(Fluid.of('kubejs:living_matter', 1000))
.itemOutputs(Item.of('1x kubejs:spider_model_2'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('magma_model_2')
.itemInputs(
	'1x botania:rune_fire',
	'1x botania:rune_gluttony',
	'1x botania:rune_autumn',
	'1x #gtceu:circuits/ev'
)
.inputFluids(Fluid.of('kubejs:living_matter', 1000))
.itemOutputs(Item.of('1x kubejs:magma_model_2'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('skeleton_model_2')
.itemInputs(
	'1x botania:rune_earth',
	'1x botania:rune_lust',
	'1x botania:rune_summer',
	'1x #gtceu:circuits/ev'
)
.inputFluids(Fluid.of('kubejs:living_matter', 1000))
.itemOutputs(Item.of('1x kubejs:skeleton_model_2'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('slime_model_2')
.itemInputs(
	'1x botania:rune_earth',
	'1x botania:rune_gluttony',
	'1x botania:rune_spring',
	'1x #gtceu:circuits/ev'
)
.inputFluids(Fluid.of('kubejs:living_matter', 1000))
.itemOutputs(Item.of('1x kubejs:slime_model_2'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('ghast_model_2')
.itemInputs(
	'1x botania:rune_fire',
	'1x botania:rune_envy',
	'1x botania:rune_winter',
	'1x #gtceu:circuits/ev'
)
.inputFluids(Fluid.of('kubejs:living_matter', 1000))
.itemOutputs(Item.of('1x kubejs:ghast_model_2'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('zombie_model_2')
.itemInputs(
	'1x botania:rune_earth',
	'1x botania:rune_gluttony',
	'1x botania:rune_summer',
	'1x #gtceu:circuits/ev'
)
.inputFluids(Fluid.of('kubejs:living_matter', 1000))
.itemOutputs(Item.of('1x kubejs:zombie_model_2'))
.duration(12000)
.EUt(128)

event.recipes.gtceu.dna_fabricator('creeper_model_2')
.itemInputs(
	'1x botania:rune_earth',
	'1x botania:rune_wrath',
	'1x botania:rune_autumn',
	'1x #gtceu:circuits/ev'
)
.inputFluids(Fluid.of('kubejs:living_matter', 1000))
.itemOutputs(Item.of('1x kubejs:creeper_model_2'))
.duration(12000)
.EUt(128)

})
