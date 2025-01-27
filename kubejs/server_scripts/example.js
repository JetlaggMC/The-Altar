ServerEvents.recipes(event => {

event.remove({ output: 'gtceu:ulv_machine_casing' })
event.remove({ output: 'gtceu:ulv_machine_hull' })
event.remove({ output: 'create:shaft' })
event.remove({ output: 'create:cogwheel' })
event.remove({ output: 'create:large_cogwheel' })
event.remove({ output: 'create:gearbox' })
event.remove({ output: 'create:mechanical_drill' })
event.remove({ output: 'create:encased_fan'})
event.remove({ output: 'create:andesite_casing' })
event.remove({ output: 'gtceu:wood_drum' })
event.remove({ output: 'create:andesite_alloy', type: 'create:mixing' })
event.remove({ output: 'gtceu:coke_oven' })
event.remove({ output: 'create:mechanical_press' })
event.remove({ output: 'create:mechanical_mixer' })
event.remove({ output: 'create:millstone' })
event.remove({ output: 'create:water_wheel' })
event.remove({ output: 'create:large_water_wheel' })
event.remove({ output: 'gtceu:andesite_alloy_ring' })
event.remove({ input: '#forge:tools/mortars' })
event.remove({ output: 'gtceu:cupronickel_coil_block' })
event.remove({ output: 'gtceu:cupronickel_foil' })
event.remove({ output: 'create:rose_quartz' })
event.remove({ output: 'create:polished_rose_quartz' })
event.remove({ output: 'gtceu:rubber_ingot' })
event.remove({ input: 'gtceu:raw_rubber_pulpt' })
event.remove({ input: 'gtceu:sticky_resin' })
event.remove({ output: 'create:brass_casing' })
event.remove({ output: 'create:brass_hand' })
event.remove({ output: 'create:deployer' })
event.remove({ output: 'create:brass' })
event.remove({ output: 'create:electron_tube' })
event.remove({ output: 'create:precision_mechanism' })
event.remove({ output: 'create:mechanical_crafter' })
event.remove({ output: 'gtceu:lv_kinetic_input_box' })
event.remove({ output: 'create:fluid_pipe' })
event.remove({ output: 'create:mechanical_pipe' })
event.remove({ output: 'create:fluid_tank' })
event.remove({ output: 'create:copper_casing' })
event.remove({type: 'create:crushing'}) // Remove all campfire cooking recipes
event.remove({ output: 'create:spout'})
event.remove({ output: 'create:empty_blaze_burner'})
event.remove({type: 'gtceu:primitive_blast_furnace'}) // Remove all campfire cooking recipes
event.remove({ output: 'gtceu:good_electronic_circuit' })
event.remove({ output: 'gtceu:phenolic_printed_circuit_board' })
event.remove({ output: 'gtceu:empty_mold' })

event.remove({ output: 'gtceu:lv_machine_casing'})
event.remove({ output: 'gtceu:lv_machine_hull'})
event.remove({ output: 'gtceu:lv_electric_motor'})
event.remove({ output: 'gtceu:lv_electric_piston'})
event.remove({ output: 'gtceu:lv_robot_arm'})

event.remove({ output: 'ars_nouveau:imbuement_chamber'})
event.remove({ output: 'ars_nouveau:sourcestone'})
event.remove({ output: 'ars_nouveau:arcane_pedestal'})
event.remove({ output: 'ars_nouveau:arcane_core'})
event.remove({ output: 'ars_nouveau:enchanting_apparatus'})
event.remove({ output: 'gtceu:vacuum_tube'})
event.remove({ output: 'gtceu:resin_printed_circuit_board'})
event.remove({ output: 'gtceu:red_alloy_ingot'})
event.remove({ output: 'gtceu:red_alloy_single_cable'})
event.remove({ output: 'gtceu:resistor'})
event.remove({ output: 'gtceu:basic_electronic_circuit'})
event.remove({ output: 'gtceu:fireclay_dust'})
event.remove({ output: 'gtceu:primitive_blast_furnace'})
event.remove({ output: 'gtceu:firebricks'})
event.remove({ output: 'gtceu:glowing_single_cable'})
event.remove({ output: 'gtceu:blazing_single_cable'})
event.remove({ output: 'create:blaze_cake'})
event.remove({ output: 'create:copper_sheet'})
event.remove({ output: 'gtceu:lv_electric_pump'})
event.remove({ output: 'gtceu:lv_conveyor_module'})
event.remove({ output: 'gtceu:lv_wiremill'})
event.remove({ output: 'gtceu:lv_assembler'})
event.remove({ output: 'gtceu:lv_macerator'})
event.remove({ output: 'gtceu:lv_bender'})
event.remove({ output: 'gtceu:lv_extractor'})
event.remove({ output: 'gtceu:lv_chemical_reactor'})
event.remove({ output: 'gtceu:lv_autoclave'})
event.remove({ output: 'gtceu:lv_alloy_smelter'})
event.remove({ output: 'gtceu:electric_blast_furnace'})
event.remove({ output: 'gtceu:lv_steam_turbine'})
event.remove({ output: 'gtceu:bronze_firebox_casing'})
event.remove({ output: 'gtceu:bronze_pipe_casing'})
event.remove({ output: 'gtceu:steam_machine_casing'})
event.remove({ output: 'gtceu:bronze_large_boiler'})
event.remove({ output: 'extendedcrafting:luminessence'})
event.remove({ output: 'extendedcrafting:black_iron_ingot'})
event.remove({ output: 'gtceu:phenolic_circuit_board'})
event.remove({ input: 'gtceu:magical_alloy_dust'})
event.remove({ input: 'gtceu:weak_synthetic_dust'})
event.remove({ input: 'gtceu:glowing_dust'})
event.remove({ input: 'gtceu:blazing_dust'})
event.remove({ input: 'gtceu:weak_synthetic_dust'})
event.remove({ input: 'gtceu:elementium_dust'})
event.remove({ input: 'gtceu:arcane_gold_dust'})
event.remove({ input: 'gtceu:natures_alloy_dust'})
event.remove({ input: 'gtceu:awakened_echo_dust'})
event.remove({ output: 'gtceu:frostproof_machine_casing'})
event.remove({ output: 'gtceu:heatproof_machine_casing'})

event.remove({ output: 'gtceu:silicon'})

event.remove({ output: 'gtceu:diode'})

event.remove({ output: 'gtceu:mv_machine_hull'})
event.remove({ output: 'gtceu:mv_steam_turbine'})
	
event.remove({ output: Fluid.of('gtceu:rubber')})
event.remove({ output: Fluid.of('gtceu:biomass')})

event.remove({ type: 'twilightforest:uncrafting' })
event.remove({ output: 'gtceu:brass_ingot', type: 'minecraft:smelting' })
event.remove({ output: 'minecraft:charcoal', type: 'minecraft:smelting' })
event.remove({id: 'gtceu:cupronickel'}) 
event.replaceInput(
  { input: 'gtceu:andesite_alloy_ingot' }, // Arg 1: the filter
  'gtceu:andesite_alloy_ingot',            // Arg 2: the item to replace
  'create:andesite_alloy'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
event.replaceInput(
    { input: 'thermal:niter' },
    'thermal:niter',
    'gtceu:niter_gem'
)
event.replaceInput(
    { input: 'thermal:niter_dust' },
    'thermal:niter_dust',
    'gtceu:niter_dust'
)
    event.replaceOutput(
        { output: 'thermal:niter' },
        'thermal:niter',
        'gtceu:niter_gem'
    )
    event.replaceOutput(
        { output: 'thermal:niter_dust' },
        'thermal:niter_dust',
        'gtceu:niter_dust'
    )
    event.remove({ input: 'thermal:niter_ore' })
    event.remove({ input: 'thermal:deepslate_niter_ore' })
    event.remove({ output: 'thermal:niter_ore' })
    event.remove({ output: 'thermal:deepslate_niter_ore' })
    event.remove({ input: 'thermal:niter_block' })
    event.remove({ output: 'thermal:niter_block' })

    event.replaceOutput(
  { output: 'gtceu:andesite_alloy_ingot' }, // Arg 1: the filter
  'gtceu:andesite_alloy_ingot',            // Arg 2: the item to replace
  'create:andesite_alloy'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
	
event.replaceInput(
  { input: 'gtceu:elementium_ingot' }, // Arg 1: the filter
  'gtceu:elementium_ingot',            // Arg 2: the item to replace
  'botania:elementium_ingot'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
event.replaceOutput(
  { output: 'gtceu:andesite_alloy_ingot' }, // Arg 1: the filter
  'gtceu:andesite_alloy_ingot',            // Arg 2: the item to replace
  'botania:elementium_ingot'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
event.shapeless('9x minecraft:iron_nugget', [ // arg 1: output
  'minecraft:iron_ingot'
])
	
event.shapeless('1x minecraft:flint_and_steel', [ // arg 1: output
  'minecraft:iron_ingot',
  'minecraft:flint'
])
    event.recipes.create.item_application('kubejs:primitive_star_block', ['kubejs:key_block', 'kubejs:primitive_star'])
    event.recipes.create.item_application('kubejs:creative_star_block', ['kubejs:key_block', 'kubejs:creative_star'])
    event.recipes.create.item_application('kubejs:natural_star_block', ['kubejs:key_block', 'kubejs:natural_star'])
    event.recipes.create.item_application('kubejs:magical_star_block', ['kubejs:key_block', 'kubejs:magical_star'])
    event.recipes.create.item_application('kubejs:nano_star_block', ['kubejs:key_block', 'kubejs:nano_star'])
    event.recipes.create.item_application('kubejs:galactic_star_block', ['kubejs:key_block', 'kubejs:galactic_star'])
    event.recipes.create.item_application('kubejs:champion_star_block', ['kubejs:key_block', 'kubejs:champion_star'])
    event.recipes.create.item_application('kubejs:draconic_star_block', ['kubejs:key_block', 'kubejs:draconic_star'])
    event.recipes.create.item_application('kubejs:infinity_star_block', ['kubejs:key_block', 'kubejs:infinity_star'])

	event.recipes.create.filling('kubejs:desert_shard', [Fluid.of('kubejs:desert_essence',1000), 'kubejs:blank_shard'])
	event.recipes.create.filling('kubejs:earth_shard', [Fluid.of('kubejs:earth_essence',1000), 'kubejs:blank_shard'])
	event.recipes.create.filling('kubejs:nether_shard', [Fluid.of('kubejs:nether_essence',1000), 'kubejs:blank_shard'])
	event.recipes.create.filling('kubejs:ender_shard', [Fluid.of('kubejs:ender_essence',1000), 'kubejs:blank_shard'])
	event.recipes.create.filling('kubejs:taiga_shard', [Fluid.of('kubejs:taiga_essence',1000), 'kubejs:blank_shard'])
	event.recipes.create.filling('kubejs:ocean_shard', [Fluid.of('kubejs:ocean_essence',1000), 'kubejs:blank_shard'])
	event.recipes.create.filling('kubejs:sky_shard', [Fluid.of('kubejs:sky_essence',1000), 'kubejs:blank_shard'])
	event.recipes.create.filling('kubejs:jungle_shard', [Fluid.of('kubejs:jungle_essence',1000), 'kubejs:blank_shard'])

	event.recipes.create.pressing('gtceu:andesite_alloy_plate', 'create:andesite_alloy')
	event.recipes.create.pressing('gtceu:andesite_alloy_ring', 'gtceu:andesite_alloy_bolt')
	event.recipes.create.pressing('gtceu:cupronickel_plate', 'gtceu:cupronickel_ingot')
	event.recipes.create.pressing('gtceu:cupronickel_foil', 'gtceu:cupronickel_plate')
event.recipes.create.pressing('gtceu:glowing_plate', 'gtceu:glowing_ingot')
	event.recipes.create.pressing('gtceu:glowing_foil', 'gtceu:glowing_plate')
event.recipes.create.pressing('gtceu:copper_plate', 'gtceu:copper_ingot')
	event.recipes.create.pressing('gtceu:copper_foil', 'gtceu:copper_plate')
	event.recipes.create.pressing('create:polished_rose_quartz', 'create:rose_quartz')
	event.recipes.create.pressing('gtceu:rubber_plate', 'gtceu:rubber_ingot')
	event.recipes.create.pressing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust')

	event.recipes.create.compacting('1x gtceu:firebricks', '4x gtceu:compressed_fireclay')

    event.recipes.create.milling('2x kubejs:crushed_andesite', 'minecraft:andesite')
    event.recipes.create.milling('1x gtceu:copper_dust', '#forge:copper_ingot')
    event.recipes.create.milling('1x gtceu:nickel_dust', '#forge:nickel_ingot')
    event.recipes.create.milling('1x gtceu:brick_dust', 'minecraft:brick')
    event.recipes.create.milling('1x gtceu:clay_dust', 'minecraft:clay')
    event.recipes.create.milling('1x kubejs:desert_dust', 'kubejs:desert_shard')
    event.recipes.create.milling('1x kubejs:earth_dust', 'kubejs:earth_shard')
    event.recipes.create.milling('1x kubejs:sky_dust', 'kubejs:sky_shard')
    event.recipes.create.milling('1x kubejs:ocean_dust', 'kubejs:ocean_shard')
    event.recipes.create.milling('1x kubejs:nether_dust', 'kubejs:nether_shard')
    event.recipes.create.milling('1x kubejs:ender_dust', 'kubejs:ender_shard')
    event.recipes.create.milling('1x kubejs:jungle_dust', 'kubejs:jungle_shard')
    event.recipes.create.milling('1x kubejs:taiga_dust', 'kubejs:taiga_shard')
	event.recipes.create.milling('1x gtceu:blazing_dust', 'gtceu:blazing_ingot')

	
    event.recipes.create.crushing('2x gtceu:crushed_iron_ore', 'minecraft:raw_iron')
    event.recipes.create.crushing('2x gtceu:crushed_copper_ore', 'minecraft:raw_copper')
    event.recipes.create.crushing('2x gtceu:crushed_gold_ore', 'minecraft:raw_gold')
    event.recipes.create.crushing('2x gtceu:crushed_coal_ore', 'gtceu:raw_coal')
    event.recipes.create.crushing('2x gtceu:crushed_diamond_ore', 'gtceu:raw_diamond')
    event.recipes.create.crushing('2x gtceu:crushed_emerald_ore', 'gtceu:raw_emerald')
    event.recipes.create.crushing('2x gtceu:crushed_redstone_ore', 'gtceu:raw_redstone')
    event.recipes.create.crushing('2x kubejs:desert_dust', 'kubejs:desert_shard')
    event.recipes.create.crushing('2x kubejs:earth_dust', 'kubejs:earth_shard')
    event.recipes.create.crushing('2x kubejs:sky_dust', 'kubejs:sky_shard')
    event.recipes.create.crushing('2x kubejs:ocean_dust', 'kubejs:ocean_shard')
    event.recipes.create.crushing(['2x kubejs:nether_dust','1x create:cinder_flour'], 'kubejs:nether_shard')
    event.recipes.create.crushing('2x kubejs:ender_dust', 'kubejs:ender_shard')
    event.recipes.create.crushing('2x kubejs:jungle_dust', 'kubejs:jungle_shard')
    event.recipes.create.crushing('2x kubejs:taiga_dust', 'kubejs:taiga_shard')
    event.recipes.create.crushing('2x kubejs:source_gem_dust', 'ars_nouveau:source_gem')
    event.recipes.create.crushing('2x kubejs:terrasteel_dust', 'botania:terrasteel_ingot')
    event.recipes.create.crushing('2x kubejs:dragonsteel_dust', 'botania:dragonsteel_ingot')
	event.recipes.create.crushing('1x gtceu:blazing_dust', 'gtceu:blazing_ingot')

  event.recipes.create.cutting('gtceu:andesite_alloy_rod', 'create:andesite_alloy')
  event.recipes.create.cutting('gtceu:cupronickel_rod', 'gtceu:cupronickel_ingot')
  event.recipes.create.cutting('gtceu:brass_rod', 'gtceu:brass_ingot')
  event.recipes.create.cutting('gtceu:andesite_alloy_bolt', 'gtceu:andesite_alloy_rod')
  event.recipes.create.cutting('gtceu:cupronickel_bolt', 'gtceu:cupronickel_rod')
  event.recipes.create.cutting('gtceu:brass_bolt', 'gtceu:brass_rod')

	event.smelting('1x minecraft:coal', 'gtceu:crushed_coal_ore')
	event.smelting('1x minecraft:iron_ingot', 'gtceu:crushed_iron_ore')
	event.smelting('1x minecraft:copper_ingot', 'gtceu:crushed_copper_ore')
	event.smelting('1x minecraft:gold_ingot', 'gtceu:crushed_gold_ore')
	event.smelting('1x minecraft:diamond', 'gtceu:crushed_diamond_ore')
	event.smelting('1x minecraft:emerald', 'gtceu:crushed_emerald_ore')
	event.smelting('1x minecraft:redstone', 'gtceu:crushed_redstone_ore')
	event.smelting('1x gtceu:arcane_gold_ingot', 'gtceu:arcane_gold_dust')

	event.smelting('1x minecraft:coal', 'gtceu:purified_coal_ore')
	event.smelting('1x minecraft:iron_ingot', 'gtceu:purified_iron_ore')
	event.smelting('1x minecraft:copper_ingot', 'gtceu:purified_copper_ore')
	event.smelting('1x minecraft:gold_ingot', 'gtceu:purified_gold_ore')
	event.smelting('1x minecraft:diamond', 'gtceu:purified_diamond_ore')
	event.smelting('1x minecraft:emerald', 'gtceu:purified_emerald_ore')
	event.smelting('1x minecraft:redstone', 'gtceu:purified_redstone_ore')

    event.recipes.create.filling('2x gtceu:purified_iron_ore', [Fluid.of('kubejs:earth_essence', 10), 'gtceu:crushed_iron_ore'])
    event.recipes.create.filling('2x gtceu:purified_copper_ore', [Fluid.of('kubejs:ocean_essence', 10),'gtceu:crushed_copper_ore'])
    event.recipes.create.filling('2x gtceu:purified_gold_ore', [Fluid.of('kubejs:desert_essence', 10),'gtceu:crushed_gold_ore'])
    event.recipes.create.filling('2x gtceu:purified_coal_ore', [Fluid.of('kubejs:nether_essence', 10),'gtceu:crushed_coal_ore'])
    event.recipes.create.filling('2x gtceu:purified_diamond_ore', [Fluid.of('kubejs:ender_essence', 10),'gtceu:crushed_diamond_ore'])
    event.recipes.create.filling('2x gtceu:purified_emerald_ore', [Fluid.of('kubejs:taiga_essence', 10),'gtceu:crushed_emerald_ore'])
    event.recipes.create.filling('2x gtceu:purified_redstone_ore', [Fluid.of('kubejs:jungle_essence', 10),'gtceu:crushed_redstone_ore'])

 	event.recipes.create.mixing(Fluid.of('kubejs:desert_essence', 1000),	['16x #minecraft:sand', '8x minecraft:cactus', '4x minecraft:gold_ingot', 'minecraft:rabbit_hide', Fluid.of('minecraft:water',1000)])
	event.recipes.create.mixing(Fluid.of('kubejs:ocean_essence', 1000),		['16x minecraft:kelp', '8x #minecraft:sand', '4x minecraft:ink_sac', 'minecraft:prismarine_shard', Fluid.of('minecraft:water',1000)])
 	event.recipes.create.mixing(Fluid.of('kubejs:jungle_essence', 1000),	['16x minecraft:melon', '8x minecraft:mossy_cobblestone', '4x minecraft:bamboo', 'minecraft:cocoa_beans', Fluid.of('minecraft:water',1000)])
 	event.recipes.create.mixing(Fluid.of('kubejs:nether_essence', 1000),	['16x minecraft:nether_bricks', '8x minecraft:glowstone', '4x minecraft:nether_wart', 'minecraft:quartz', Fluid.of('minecraft:water',1000)])
 	event.recipes.create.mixing(Fluid.of('kubejs:earth_essence', 1000),		['16x minecraft:stone', '8x minecraft:deepslate', '4x minecraft:moss_block', 'minecraft:coal_block', Fluid.of('minecraft:water',1000)])
 	event.recipes.create.mixing(Fluid.of('kubejs:sky_essence', 1000),		['16x #minecraft:wool', '8x #forge:glass', '4x minecraft:string', 'minecraft:feather', Fluid.of('minecraft:water',1000)])
 	event.recipes.create.mixing(Fluid.of('kubejs:ender_essence', 1000),		['16x minecraft:end_stone', '8x minecraft:chorus_fruit', '4x minecraft:purpur_block', 'minecraft:ender_eye', Fluid.of('minecraft:water',1000)])
	event.recipes.create.mixing(Fluid.of('kubejs:taiga_essence', 1000),		['16x minecraft:podzol', '8x minecraft:snowball', '4x minecraft:leather', 'minecraft:emerald', Fluid.of('minecraft:water',1000)])
	event.recipes.create.mixing('8x gtceu:natures_alloy_dust',		['kubejs:nether_dust','kubejs:earth_dust','kubejs:desert_dust','kubejs:jungle_dust','kubejs:sky_dust','kubejs:ocean_dust','kubejs:ender_dust','kubejs:taiga_dust',])
	event.recipes.create.mixing('1x gtceu:glowing_ingot',	['1x minecraft:glow_ink_sac', '1x minecraft:iron_ingot']).heated

	event.recipes.create.mixing(Fluid.of('gtceu:brass', 576),		        [Fluid.of('gtceu:copper',432),Fluid.of('gtceu:zinc',144)]).heated()
	event.recipes.create.mixing(Fluid.of('gtceu:cupronickel', 288),		    [Fluid.of('gtceu:copper',144),Fluid.of('gtceu:nickel',144)]).heated()
	event.recipes.create.mixing(Fluid.of('kubejs:liquid_rose_quartz', 864),		[Fluid.of('gtceu:redstone',432),'1x minecraft:quartz']).heated()
	event.recipes.create.mixing(Fluid.of('gtceu:andesite_alloy', 144),		[Fluid.of('gtceu:iron',16),'1x kubejs:crushed_andesite']).heated()
 	event.recipes.create.mixing('1x gtceu:treated_wood_planks',	['1x #minecraft:planks', Fluid.of('gtceu:creosote',100)])
	event.recipes.create.mixing('2x gtceu:cupronickel_dust',	['1x gtceu:copper_dust', '1x gtceu:nickel_dust'])
 	event.recipes.create.mixing(Fluid.of('kubejs:crude_insulator', 288),[Fluid.of('create:honey',144),Fluid.of('gtceu:rubber',144), '1x gtceu:sulfur_dust']).heated()
	event.recipes.create.mixing('2x gtceu:fireclay_dust',	['1x gtceu:clay_dust', '1x gtceu:brick_dust']).heated()
	event.recipes.create.mixing('1x kubjes:blank_shard',	['1x create:andesite_alloy', '1x #forge:glass']).heated()
 	event.recipes.create.mixing(Fluid.of('gtceu:glowing', 288),[Fluid.of('gtceu:iron',144), '1x minecraft:glow_ink_sac']).heated()
 	event.recipes.create.mixing(Fluid.of('gtceu:red_alloy', 288),[Fluid.of('gtceu:iron',144), '1x minecraft:redstone']).heated()
 	event.recipes.create.mixing(Fluid.of('gtceu:blazing', 1296),['8x minecraft:blaze_powder', '1x kubejs:nether_dust']).superheated()

    event.recipes.create.sequenced_assembly('gtceu:resin_circuit_board','gtceu:treated_wood_planks', [
		event.recipes.createPressing('gtceu:treated_wood_planks','gtceu:treated_wood_planks'),
		event.recipes.createDeploying('gtceu:treated_wood_planks',['gtceu:treated_wood_planks', 'create:wheat_flour']),
		event.recipes.createFilling('gtceu:treated_wood_planks', ['gtceu:treated_wood_planks', Fluid.of('kubejs:crude_insulator', 144)])
	]).transitionalItem('gtceu:treated_wood_planks').loops(2)
	
 
	
   event.recipes.create.sequenced_assembly('create:precision_mechanism','gtceu:brass_plate', [
		event.recipes.createDeploying('gtceu:brass_plate', ['gtceu:brass_plate', 'create:cogwheel']),
		event.recipes.createDeploying('gtceu:brass_plate', ['gtceu:brass_plate', 'create:large_cogwheel']),
		event.recipes.createDeploying('gtceu:brass_plate', ['gtceu:brass_plate', 'create:electron_tube']),
		event.recipes.createFilling('gtceu:brass_plate', ['gtceu:brass_plate', Fluid.of('kubejs:crude_insulator', 16)])
	]).transitionalItem('gtceu:brass_plate').loops(3)

	
		event.recipes.gtceu.primitive_blast_furnace('natures_alloy')
		.itemInputs(
				'1x gtceu:natures_alloy_dust',
				'1x gtceu:coke_gem'
		)
		.itemOutputs(
				'1x gtceu:natures_alloy_ingot'
		)
		.duration(600)

	
		event.recipes.gtceu.coke_oven('charcoal_to_coke')
		.itemInputs(
				'1x minecraft:charcoal'
		)
		.itemOutputs(
				'1x gtceu:coke_gem'
		)
		.duration(600)
	
	
	event.recipes.gtceu.altar_research('1')
		.itemInputs(
				'1x kubejs:primitive_star'
		)
		.itemOutputs(
				'1x kubejs:primitive_research_token'
		)
		.circuit(1)
		.duration(600)
		.rpm(8)
	
	event.recipes.gtceu.altar_research('2')
		.itemInputs(
				'2x kubejs:primitive_star',
				'1x kubejs:creative_star'

		)
		.itemOutputs(
				'1x kubejs:creative_research_token'
		)
		.circuit(2)
		.duration(600)
		.rpm(64)

	event.recipes.gtceu.altar_research('3')
		.itemInputs(
				'4x kubejs:primitive_star',
				'2x kubejs:creative_star',
				'1x kubejs:natural_star'
		)
		.itemOutputs(
				'1x kubejs:natural_research_token'
		)
		.circuit(3)
		.duration(600)
		.rpm(64)
	
	
	event.shaped('1x kubejs:earth_sample', [
    'ABC', 
    'DEF',
    'GHI'  
  ], {
    A: 'allthecompressed:stone_1x', 
    B: 'allthecompressed:cobbled_deepslate_1x',
    C: 'minecraft:amethyst_block',
    D: 'minecraft:iron_block',
    E: 'minecraft:diamond',
    F: 'minecraft:gold_block',
    G: 'allthecompressed:spruce_log_1x',
    H: 'allthecompressed:moss_block_1x',
    I: 'minecraft:sculk',

  }
)
	
	event.shaped('1x kubejs:nether_sample', [
    'ABC', 
    'DEF',
    'GHI'  
  ], {
    A: 'minecraft:nether_wart_block', 
    B: 'minecraft:nether_bricks',
    C: 'allthecompressed:soul_sand_1x',
    D: 'allthecompressed:netherrack_1x',
    E: 'minecraft:netherite_ingot',
    F: 'allthecompressed:glowstone_1x',
    G: 'allthecompressed:blackstone_1x',
    H: 'allthecompressed:obsidian_1x',
    I: 'allthecompressed:quartz_block_1x',

  }
)

	event.shaped('1x kubejs:generic_bio_sample', [
    'ABC', 
    'DEF',
    'GHI'  
  ], {
    A: 'minecraft:leather', 
    B: 'minecraft:cod',
    C: 'minecraft:feather',
    D: 'minecraft:beef',
    E: 'minecraft:porkchop',
    F: 'minecraft:chicken',
    G: '#minecraft:wool',
    H: 'minecraft:ink_sac',
    I: 'minecraft:honeycomb',

  }
)
	
	event.shaped('1x kubejs:hostile_bio_sample', [
    'ABC', 
    'DEF',
    'GHI'  
  ], {
    A: 'minecraft:string', 
    B: 'minecraft:spider_eye',
    C: 'minecraft:rotten_flesh',
    D: 'minecraft:bone',
    E: 'minecraft:ender_pearl',
    F: 'minecraft:blaze_rod',
    G: 'minecraft:phantom_membrane',
    H: 'minecraft:ghast_tear',
    I: 'minecraft:gunpowder',

  }
)
	
	event.shaped('1x kubejs:primitive_star', [
    ' A ', 
    'BCD',
    ' E '  
  ], {
    A: 'kubejs:earth_sample', 
    B: 'kubejs:generic_bio_sample',
    C: 'kubejs:star_casing_01',
    D: 'kubejs:hostile_bio_sample',
    E: 'kubejs:nether_sample'

  }
)
	event.shaped('1x kubejs:star_casing_01', [
    'CAC', 
    'ABA',
    'CAC'  
  ], {
    A: '#minecraft:planks', 
    B: 'minecraft:flint',
    C: '#minecraft:logs'

  }
)

	event.shaped('1x gtceu:ulv_machine_casing', [
    'AAA', 
    'ABA',
    'AAA'  
  ], {
    A: 'gtceu:andesite_alloy_plate', 
    B: '#forge:tools/wrenches'

  }
)
	event.shaped('1x gtceu:ulv_machine_hull', [
    'CCC', 
    'ABA'  
  ], {
    A: 'minecraft:redstone', 
    B: 'gtceu:ulv_machine_casing',
    C: 'gtceu:andesite_alloy_plate'


  }
)
event.shaped('1x gtceu:andesite_alloy_rod', [
  'A ',
  ' B'
], {
A: '#forge:tools/files',
B: 'create:andesite_alloy'
}).damageIngredient('#forge:tools/files')

	event.shaped('1x gtceu:altar_tier_1', [
    'ADA', 
    'CBC',
	'ADA'
  ], {
    A: 'gtceu:firebricks', 
    B: 'gtceu:ulv_machine_hull',
	C: 'gtceu:andesite_alloy_screw',
	D: 'gtceu:andesite_alloy_plate'

  }
)
event.shaped('1x create:encased_fan', [
        'DSH',
        'CBR',
        ' SW'
], {
    D: '#forge:tools/screwdrivers',
    W: '#forge:tools/wrenches',
    H: '#forge:tools/hammers',
    S: 'gtceu:andesite_alloy_screw',
    C: 'create:andesite_casing',
    B: 'create:shaft',
    R: 'gtceu:iron_rotor'
}).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers').damageIngredient('#forge:tools/hammers')

event.shaped('1x create:mechanical_drill', [
    ' WD',
    'BCH',
    ' SD'
], {
    D: '#forge:double_plates/iron',
    W: '#forge:tools/wrenches',
    S: '#forge:tools/screwdrivers',
    C: 'create:andesite_casing',
    B: 'create:shaft',
    H: 'gtceu:iron_drill_head'
}).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers')

	event.shaped('1x create:mechanical_press', [
    'ABC', 
    'DED',
	' F '
  ], {
    A: '#forge:tools/wrenches', 
    B: 'create:andesite_casing',
	C: '#forge:tools/screwdrivers',
	D: 'gtceu:andesite_alloy_screw',
	E: 'create:shaft',
	F: 'gtceu:andesite_alloy_plate'
  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers')
	event.shaped('1x create:mechanical_mixer', [
    'ABC', 
    'DED',
	' F '
  ], {
    A: '#forge:tools/wrenches', 
    B: 'create:andesite_casing',
	C: '#forge:tools/screwdrivers',
	D: 'gtceu:andesite_alloy_screw',
	E: 'create:cogwheel',
	F: 'gtceu:andesite_alloy_rotor'
  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers')
	event.shaped('1x create:millstone', [
    'A C', 
    'EFE',
	'DBD'
  ], {
    A: '#forge:tools/wrenches', 
    B: 'create:andesite_casing',
	C: '#forge:tools/screwdrivers',
	D: 'gtceu:andesite_alloy_screw',
	E: 'create:cogwheel',
	F: 'gtceu:andesite_alloy_rotor'
  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers')
	event.shaped('1x kubejs:star_casing_02', [
    'ADA', 
    'CBC',
	'ADA'
  ], {
    A: 'create:copper_casing', 
    B: 'gtceu:cupronickel_quadruple_cable',
	C: 'gtceu:rubber_ingot',
	D: 'gtceu:brass_screw'

  }
)
	event.shaped('1x gtceu:andesite_alloy_plate', [
    'A', 
    'B',
	'B'
  ], {
    A: '#forge:tools/hammers', 
    B: 'create:andesite_alloy'
  }
).damageIngredient('#forge:tools/hammers')
	event.shaped('8x create:shaft', [
    'A', 
    'B',
	'B'
  ], {
    A: '#forge:tools/saws', 
    B: 'create:andesite_alloy'
  }
).damageIngredient('#forge:tools/saws')
	event.shaped('1x create:cogwheel', [
    'AD ', 
    'BCB',
	' DE'
  ], {
    A: '#forge:tools/screwdrivers', 
    B: 'gtceu:treated_wood_planks',
	C: 'create:shaft',
	D: 'gtceu:andesite_alloy_screw',
	E: '#forge:tools/saws'
  }
).damageIngredient('#forge:tools/screwdrivers').damageIngredient('#forge:tools/saws')
	event.shaped('1x create:large_cogwheel', [
    'AD ', 
    'BCB',
	' DE'
  ], {
    A: '#forge:tools/screwdrivers', 
    B: 'gtceu:treated_wood_planks',
	C: 'create:cogwheel',
	D: 'gtceu:andesite_alloy_screw',
	E: '#forge:tools/saws'
  }
).damageIngredient('#forge:tools/screwdrivers').damageIngredient('#forge:tools/saws')
	event.shaped('1x create:gearbox', [
    'AED', 
    'BCB',
	'DEF'
  ], {
    A: '#forge:tools/screwdrivers', 
    B: 'create:cogwheel',
	C: 'create:andesite_casing',
	D: 'gtceu:andesite_alloy_screw',
	E: 'gtceu:treated_wood_planks',
	F: '#forge:tools/saws'
  }
).damageIngredient('#forge:tools/screwdrivers').damageIngredient('#forge:tools/saws')
	event.shaped('1x create:andesite_casing', [
    'AB ', 
    'CEC',
	' BF'
  ], {
    A: '#forge:tools/hammers', 
    B: 'gtceu:andesite_alloy_plate',
	C: 'gtceu:andesite_alloy_rod',
	E: 'gtceu:treated_wood_planks',
	F: '#forge:tools/saws'
  }
).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/saws')
	event.shaped('1x create:brass_casing', [
    'AB ', 
    'CEC',
	' BF'
  ], {
    A: '#forge:tools/hammers', 
    B: 'gtceu:brass_plate',
	C: 'gtceu:brass_rod',
	E: 'gtceu:treated_wood_planks',
	F: '#forge:tools/saws'
  }
).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/saws')
	event.shaped('1x create:copper_casing', [
    'AB ', 
    'CEC',
	' BF'
  ], {
    A: '#forge:tools/hammers', 
    B: 'gtceu:cupronickel_plate',
	C: 'gtceu:cupronickel_rod',
	E: 'gtceu:treated_wood_planks',
	F: '#forge:tools/saws'
  }
).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/saws')
	event.shaped('1x gtceu:wood_drum', [
    'ABC', 
    'DED',
	'DED'
  ], {
    A: '#forge:tools/mallets', 
    B: 'gtceu:sticky_resin',
	C: '#forge:tools/saws',
	D: 'gtceu:treated_wood_planks',
	E: 'gtceu:long_andesite_alloy_rod'
  }
).damageIngredient('#forge:tools/mallets').damageIngredient('#forge:tools/saws')
	event.shaped('1x gtceu:coke_oven', [
    'ABA', 
    'BCB',
	'ABA'
  ], {
    A: 'gtceu:coke_oven_bricks', 
    B: 'gtceu:andesite_alloy_plate',
	C: '#forge:tools/screwdrivers'
  }
).damageIngredient('#forge:tools/screwdrivers')
	event.shaped('1x create:water_wheel', [
    'ABC', 
    'DED',
	'FGF'
  ], {
    A: '#forge:tools/wrenches', 
    B: 'create:shaft',
	C: '#forge:tools/screwdrivers',
	D: 'gtceu:treated_wood_planks',
	E: 'gtceu:andesite_alloy_rotor',
	F: 'gtceu:andesite_alloy_screw',
	G: 'create:andesite_casing'
  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers')
	event.shaped('1x create:large_water_wheel', [
    'ABC', 
    'DED',
	'FFF'
  ], {
    A: '#forge:tools/wrenches', 
    B: 'create:shaft',
	C: '#forge:tools/screwdrivers',
	D: 'gtceu:andesite_alloy_screw',
	E: 'create:water_wheel',
	F: 'gtceu:treated_wood_planks'
  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers')
	event.shaped('1x gtceu:cupronickel_coil_block', [
    'AAA', 
    'ABA',
	'AAA'
  ], {
    B: '#forge:tools/wrenches', 
    A: 'gtceu:glowing_foil'
  }
).damageIngredient('#forge:tools/wrenches')
	event.shaped('1x create:belt_connector', [
    'AAA', 
    'BCB'
  ], {
    B: 'create:shaft', 
    A: 'gtceu:rubber_plate',
    C: '#forge:tools/wrenches'
  }
).damageIngredient('#forge:tools/wrenches')
	event.shaped('1x create:brass_hand', [
    'FAE', 
    'BAB',
	'CDC'
  ], {
    B: 'gtceu:brass_plate', 
    A: 'gtceu:brass_rod',
    C: 'gtceu:andesite_alloy_screw',
    D: 'gtceu:andesite_alloy_plate',
	E: '#forge:tools/screwdrivers',
	F: '#forge:tools/hammers'
  }
).damageIngredient('#forge:tools/screwdrivers').damageIngredient('#forge:tools/hammers')
	event.shaped('1x create:electron_tube', [
    ' A ', 
    'FAE',
	'CDC'
  ], {
    A: 'create:polished_rose_quartz',
    C: 'gtceu:andesite_alloy_screw',
    D: 'gtceu:andesite_alloy_plate',
	E: '#forge:tools/screwdrivers',
	F: '#forge:tools/hammers'
  }
).damageIngredient('#forge:tools/screwdrivers').damageIngredient('#forge:tools/hammers')
	event.shaped('1x create:deployer', [
    'ABC', 
    'DED',
	' F '
  ], {
    A: '#forge:tools/wrenches',
	B: 'create:brass_casing',
    C: '#forge:tools/screwdrivers',
    D: 'gtceu:brass_screw',
	E: 'create:shaft',
	F: 'create:brass_hand'
  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers')
	event.shaped('1x create:mechanical_crafter', [
    'GFG', 
    'DED',
	'ABC'
  ], {
    A: '#forge:tools/wrenches',
	B: 'create:brass_casing',
    C: '#forge:tools/screwdrivers',
    D: 'gtceu:brass_screw',
	E: 'create:cogwheel',
	F: 'gtceu:brass_plate',
	G: 'create:electron_tube'

  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers')

	event.shaped('1x gtceu:essence_refinery_1', [
    'ABA', 
    'CDC',
	'EFE'
  ], {
    A: 'gtceu:copper_plate',
	B: 'gtceu:andesite_alloy_rotor',
    C: 'create:fluid_pipe',
    D: 'create:precision_mechanism',
	E: 'create:copper_casing',
	F: 'gtceu:ulv_machine_casing'
  }
)
	event.shaped('1x kubejs:natural_star', [
    'ABC', 
    'DEF',
	'GHI'
  ], {
    A: 'kubejs:taiga_shard',
	B: 'kubejs:nether_shard',
    C: 'kubejs:earth_shard',
    D: 'kubejs:ender_shard',
	E: 'kubejs:star_casing_02',
	F: 'kubejs:desert_shard',
	G: 'kubejs:ocean_shard',
	H: 'kubejs:sky_shard',
	I: 'kubejs:jungle_shard'
  }
)
	event.shaped('8x create:fluid_pipe', [
    'AAA', 
    'H W',
	'AAA'
  ], {
    A: 'gtceu:cupronickel_plate',
	H: '#forge:tools/hammers',
    W: '#forge:tools/wrenches'
  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/hammers')
	event.shaped('4x create:mechanical_pump', [
    'ABA', 
    'CCC',
	'ABA'
  ], {
    A: 'gtceu:cupronickel_spring',
	B: 'create:cogwheel',
    C: 'create:fluid_pipe'
  }
).damageIngredient('#forge:tools/wrenches')
	event.shaped('2x create:fluid_tank', [
    'ABA', 
    'CDC',
	'ABA'
  ], {
    A: 'gtceu:cupronickel_spring',
	B: 'create:copper_casing',
    C: '#forge:glass',
	D: '#forge:tools/wrenches'
  }
).damageIngredient('#forge:tools/wrenches')
	event.shaped('1x create:spout', [
    'ABA', 
    'CEC',
	' D '
  ], {
    A: 'gtceu:cupronickel_screw',
	B: 'create:copper_casing',
    C: '#forge:glass',
	D: 'create:fluid_pipe',
	E: 'gtceu:andesite_alloy_rotor'
  }
)
	event.shaped('1x gtceu:lv_machine_casing', [
    'AAA', 
    'ABA',
	'AAA'
  ], {
    A: 'gtceu:natures_alloy_plate',
	B: '#forge:tools/wrenches'
  }
).damageIngredient('#forge:tools/wrenches')
	
	event.shaped('1x gtceu:lv_machine_hull', [
    'ABA', 
    'CDC'
  ], {
    A: 'gtceu:rubber_plate',
	B: 'gtceu:natures_alloy_plate',
	C: 'gtceu:blazing_single_cable',
	D: 'gtceu:lv_machine_casing'
  }
)

	event.shaped('1x gtceu:lv_electric_motor', [
    'ABC', 
    'BDB',
	'CBA'
  ], {
    A: 'gtceu:blazing_single_cable',
	B: 'gtceu:glowing_single_wire',
	C: 'gtceu:natures_alloy_rod',
	D: 'gtceu:magnetic_iron_rod'
  }
)
	event.shaped('1x gtceu:lv_electric_piston', [
    'AAA', 
    'BCC',
	'BDE'
  ], {
    A: 'gtceu:natures_alloy_plate',
	B: 'gtceu:blazing_single_cable',
	C: 'gtceu:natures_alloy_rod',
	D: 'gtceu:lv_electric_motor',
	E: 'gtceu:small_natures_alloy_gear'
  }
)
	event.shaped('1x gtceu:lv_robot_arm', [
    'AAA', 
    'BCB',
	'DEC'
  ], {
    A: 'gtceu:blazing_single_cable',
	B: 'gtceu:lv_electric_motor',
	C: 'gtceu:natures_alloy_rod',
	D: 'gtceu:lv_electric_piston',
	E: '#gtceu:circuits/lv'
  }
)
	event.shaped('1x gtceu:lv_conveyor_module', [
    'AAA', 
    'BCB',
	'AAA'
  ], {
    A: 'gtceu:rubber_plate',
	B: 'gtceu:lv_electric_motor',
	C: 'gtceu:blazing_single_cable'
  }
)
	event.shaped('1x gtceu:lv_electric_pump', [
    'ABC', 
    'DEF',
	'CGH'
  ], {
    A: 'gtceu:natures_alloy_screw',
	B: 'gtceu:natures_alloy_rotor',
	C: 'gtceu:rubber_ring',
	D: '#forge:tools/screwdrivers',
	E: 'create:fluid_pipe',
	F: '#forge:tools/wrenches',
	G: 'gtceu:lv_electric_motor',
	H: 'gtceu:blazing_single_cable'
  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers')
	event.shaped('2x gtceu:frostproof_machine_casing', [
    'ABA', 
    'ACA',
	'ADA'
  ], {
    A: 'gtceu:awakened_echo_plate',
	B: '#forge:tools/hammers',
	C: 'gtceu:awakened_echo_frame',
	D: '#forge:tools/screwdrivers'
  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/hammers')
	event.shaped('1x gtceu:vacuum_tube', [
    'ABA', 
    'CCC'
  ], {
    A: 'gtceu:natures_alloy_bolt',
	B: 'gtceu:glass_tube',
	C: 'gtceu:glowing_single_wire'
  }
)
	event.shaped('1x ars_nouveau:imbuement_chamber', [
    'DBD', 
    'ACA',
	'ABA'
  ], {
    A: 'kubejs:source_planks',
	B: 'gtceu:arcane_gold_screw',
	C: '#gtceu:circuits/lv',
	D: 'gtceu:arcane_gold_plate'
  }
)
	event.shaped('1x ars_nouveau:arcane_core', [
    'DBD', 
    'ACA',
	'AEA'
  ], {
    A: 'gtceu:arcane_gold_plate',
	B: 'ars_nouveau:sourcestone',
	C: '#gtceu:circuits/lv',
	D: 'gtceu:arcane_gold_screw',
	E: 'ars_nouveau:source_gem_block'
  }
)
	event.shaped('1x ars_nouveau:arcane_pedestal', [
    'AAA', 
    'BCB',
	'DCD'
  ], {
    A: 'ars_nouveau:source_gem',
	B: 'gtceu:arcane_gold_screw',
	C: 'ars_nouveau:sourcestone',
	D: 'gtceu:arcane_gold_plate'
  }
)
	event.shaped('1x ars_nouveau:enchanting_apparatus', [
    'ABA', 
    'CDC',
	'ABA'
  ], {
    A: 'gtceu:arcane_gold_plate',
	B: 'ars_nouveau:source_gem_block',
	C: 'gtceu:arcane_gold_screw',
	D: '#gtceu:circuits/lv'
	}
)
	event.recipes.extendedcrafting.shaped_table(
		"gtceu:lv_dna_fabricator",
		['ABCDA', 
		 'EFGHI',
		 'JKLKJ',
		 'MNOPQ',
		 'ARSTA'
	], {
	A: 'gtceu:natures_alloy_screw',
	B: 'minecraft:slime_ball',
	C: 'minecraft:bone',
	D: 'minecraft:spider_eye',
	E: 'minecraft:wheat',
	F: 'minecraft:carrot',
	G: 'minecraft:glow_berries',
	H: 'minecraft:potato',
	I: 'minecraft:kelp',
	J: 'gtceu:lv_conveyor_module',
    K: '#gtceu:circuits/lv',
	L: 'gtceu:lv_machine_hull',
	M: 'minecraft:leather',
	N: 'minecraft:ink_sac',
	O: '#minecraft:fishes',
	P: 'minecraft:feather',
	Q: 'minecraft:honeycomb',
	R: 'minecraft:blaze_rod',
	S: 'minecraft:ender_pearl',
	T: 'minecraft:wither_skeleton_skull'
	}).id('kubejs:extended/lv_dna_fabricator');

	event.shaped('1x gtceu:lv_animal_pen', [
    'ABA', 
    'CDC',
	'EFG'
  ], {
    A: 'gtceu:natures_alloy_screw',
	B: 'allthecompressed:hay_block_1x',
	C: '#forge:chests/wooden',
	D: 'gtceu:lv_machine_casing',
	E: 'minecraft:carrot',
	F: 'kubejs:cow_model_1',
	G: 'minecraft:water_bucket'
	}
)
	event.shaped('1x gtceu:resin_printed_circuit_board', [
    'AAA', 
    'ABA',
	'AAA'
  ], {
    A: 'gtceu:glowing_single_wire',
	B: 'gtceu:resin_circuit_board'
  }
)
	event.shaped('1x gtceu:phenolic_printed_circuit_board', [
    'AAA', 
    'ABA',
	'AAA'
  ], {
    A: 'gtceu:elementium_single_wire',
	B: 'gtceu:phenolic_circuit_board'
  }
)
	
	event.shaped('1x gtceu:resistor', [
    'ABA', 
    'CDC',
	'ABA'
  ], {
    A: 'gtceu:fine_copper_wire',
	B: 'gtceu:blazing_dust',
	C: 'minecraft:string',
	D: 'minecraft:slime_ball'
  }
)
	event.shaped('1x gtceu:basic_electronic_circuit', [
    'ABA', 
    'CDC',
	'EEE'
  ], {
    A: 'gtceu:resistor',
	B: 'gtceu:natures_alloy_plate',
	C: 'gtceu:vacuum_tube',
	D: 'gtceu:resin_printed_circuit_board',
	E: 'gtceu:blazing_single_cable'
  }
)
	event.shaped('1x gtceu:good_electronic_circuit', [
    'ABA', 
    'CDC',
	'ECE'
  ], {
    A: 'gtceu:diode',
	B: 'gtceu:natures_alloy_plate',
	C: 'gtceu:basic_electronic_circuit',
	D: 'gtceu:phenolic_printed_circuit_board',
	E: 'gtceu:elementium_single_wire'
  }
)
	event.shaped('1x gtceu:primitive_blast_furnace', [
    'ABA', 
    'DCD',
	'AEA'
  ], {
    A: 'gtceu:firebricks',
	B: 'gtceu:andesite_alloy_rotor',
	C: 'kubejs:earth_shard',
	D: 'gtceu:andesite_alloy_screw',
	E: 'minecraft:lava_bucket'
  }
).damageIngredient('#forge:tools/screwdrivers')
	event.shaped('1x gtceu:heatproof_machine_casing', [
    'ABA', 
    'ACA',
	'ADA'
  ], {
    A: 'gtceu:arcane_gold_plate',
	B: '#forge:tools/hammers',
	C: 'gtceu:arcane_gold_frame',
	D: '#forge:tools/wrenches'
  }
).damageIngredient('#forge:tools/screwdrivers')
	event.shaped('1x create:empty_blaze_burner', [
    'AFA', 
    'BCB',
	'DED'
  ], {
    A: 'gtceu:andesite_alloy_screw',
	B: 'gtceu:andesite_alloy_rod',
	C: 'minecraft:netherrack',
	D: 'gtceu:andesite_alloy_plate',
	E: 'create:andesite_casing',
	F: '#forge:tools/screwdrivers'
  }
).damageIngredient('#forge:tools/screwdrivers')
	event.shaped('1x gtceu:foundry', [
    'ABA', 
    'BCB',
	'DBD'
  ], {
    A: 'gtceu:andesite_alloy_screw',
	B: 'create:andesite_casing',
	C: 'kubejs:nether_shard',
	D: 'create:blaze_burner'
  }
)
	event.shaped('1x gtceu:lv_caster', [
    'ABA', 
    'ECE',
	'DBD'
  ], {
    A: 'create:fluid_pipe',
	B: 'create:andesite_casing',
	C: 'create:spout',
	D: 'gtceu:glowing_single_wire',
	E: 'minecraft:glass'
  }
)
	event.shaped('1x gtceu:large_mechanical_press', [
    'CDC', 
    'ABA',
	'CEC'
  ], {
    A: 'create:precision_mechanism',
	B: 'create:mechanical_crafter',
	C: 'create:brass_casing',
	D: 'create:mechanical_press',
	E: 'gtceu:brass_block'
  }
)
	event.shaped('1x gtceu:lv_kinetic_input_box', [
    'A', 
    'B'
  ], {
    A: 'create:shaft',
	B: 'gtceu:lv_machine_hull'
  }
)
	event.shaped('1x gtceu:lv_bender', [
    'ABA', 
    'CDC',
	'EBE'
  ], {
    A: 'gtceu:lv_electric_piston',
	B: 'gtceu:blazing_single_cable',
	C: '#gtceu:circuits/lv',
	D: 'gtceu:lv_machine_hull',
	E: 'gtceu:lv_electric_motor'
  }
)
	event.shaped('1x gtceu:lv_assembler', [
    'ABA', 
    'CDC',
	'EBE'
  ], {
    A: 'gtceu:lv_robot_arm',
	B: '#gtceu:circuits/lv',
	C: 'gtceu:lv_conveyor_module',
	D: 'gtceu:lv_machine_hull',
	E: 'gtceu:blazing_single_cable'
  }
)
	event.shaped('1x gtceu:lv_wiremill', [
    'ABA', 
    'CDC',
	'ABA'
  ], {
    A: 'gtceu:lv_electric_motor',
	B: 'gtceu:blazing_single_cable',
	C: '#gtceu:circuits/lv',
	D: 'gtceu:lv_machine_hull'
  }
)
	event.shaped('1x gtceu:lv_macerator', [
    'ABC', 
    'DDE',
	'FFD'
  ], {
    A: 'gtceu:lv_electric_piston',
	B: 'gtceu:lv_electric_motor',
	C: 'minecraft:diamond',
	D: 'gtceu:blazing_single_cable',
	E: 'gtceu:lv_machine_hull',
	F: '#gtceu:circuits/lv'
  }
)
	event.shaped('1x gtceu:lv_extractor', [
    'ABA', 
    'CDE',
	'FBF'
  ], {
    A: '#forge:glass',
	B: '#gtceu:circuits/lv',
	C: 'gtceu:lv_electric_piston',
	D: 'gtceu:lv_machine_hull',
	E: 'gtceu:lv_electric_motor',
	F: 'gtceu:blazing_single_cable'
  }
)
	event.shaped('1x gtceu:lv_chemical_reactor', [
    'ABA', 
    'CDC',
	'EFE'
  ], {
    A: '#forge:glass',
	B: 'gtceu:natures_alloy_rotor',
	C: 'gtceu:blazing_single_cable',
	D: 'gtceu:lv_electric_motor',
	E: '#gtceu:circuits/lv',
	F: 'gtceu:lv_machine_hull'
  }
)
	event.shaped('1x gtceu:lv_autoclave', [
    'ABA', 
    'ACA',
	'DED'
  ], {
    A: 'gtceu:natures_alloy_plate',
	B: '#forge:glass',
	C: 'gtceu:lv_machine_hull',
	D: '#gtceu:circuits/lv',
	E: 'gtceu:lv_electric_pump'
  }
)
	event.shaped('1x gtceu:lv_alloy_smelter', [
    'ABA', 
    'BCB',
	'DBD'
  ], {
    A: '#gtceu:circuits/lv',
	B: 'gtceu:glowing_quadruple_wire',
	C: 'gtceu:lv_machine_hull',
	D: 'gtceu:blazing_single_cable'
  }
)
	event.shaped('1x gtceu:lv_steam_turbine', [
    'ABA', 
    'CDC',
	'EFE'
  ], {
    A: 'create:fluid_pipe',
	B: '#gtceu:circuits/lv',
	C: 'gtceu:natures_alloy_rotor',
	D: 'gtceu:lv_machine_hull',
	E: 'gtceu:lv_electric_motor',
	F: 'gtceu:blazing_single_cable'
  }
)
event.shaped('1x gtceu:resource_combinator', [
  'ABA', 
  'CDC',
  'EBE'
], {
  A: 'botania:mana_glass',
B: '#gtceu:circuits/hv',
C: 'gtceu:heatproof_machine_casing',
D: 'gtceu:lv_dna_fabricator',
E: 'gtceu:weak_synthetic_double_cable'
}
)
event.shaped('1x gtceu:dream_room_amplifier', [
  'ABA', 
  'CDC',
  'ABA'
], {
  A: 'botania:glimmering_dreamwood_log',
B: '#gtceu:circuits/mv',
C: 'botania:mana_glass',
D: 'botania:rainbow_rod'
}
)
	event.shaped('1x gtceu:electric_blast_furnace', [
    'AAA', 
    'BCB',
	'DBD'
  ], {
    A: 'minecraft:furnace',
	B: '#gtceu:circuits/lv',
	C: 'gtceu:heatproof_machine_casing',
	D: 'gtceu:blazing_single_cable'
  }
)
	event.shaped('1x gtceu:bronze_firebox_casing', [
    'ABA', 
    'BCB',
	'ABA'
  ], {
    A: 'gtceu:blazing_plate',
	B: 'gtceu:blazing_rod',
	C: 'gtceu:blazing_frame'
  }
)
event.shaped('1x gtceu:empty_mold', [
  'AB', 
  'CC'
], {
  A: '#forge:tools/wrenches', 
  B: '#forge:tools/files',
C: 'gtceu:natures_alloy_plate'
}
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers')
	event.shaped('1x gtceu:bronze_pipe_casing', [
    'ABA', 
    'BCB',
	'ABA'
  ], {
    A: 'gtceu:blazing_plate',
	B: 'create:fluid_pipe',
	C: 'gtceu:blazing_frame'
  }
)
	event.shaped('1x gtceu:bronze_large_boiler', [
    'ABA', 
    'BCB',
	'ABA'
  ], {
    A: 'gtceu:blazing_single_cable',
	B: '#gtceu:circuits/lv',
	C: 'gtceu:bronze_firebox_casing'
  }
)
	event.shaped('1x gtceu:meat_freezer', [
    'ABA', 
    'CDC',
	'EFE'
  ], {
    A: '#gtceu:circuits/hv',
	B: 'kubejs:snow_golem_model_1',
	C: 'gtceu:mv_electric_pump',
	D: 'gtceu:frostproof_machine_casing',
	E: 'gtceu:weak_synthetic_single_cable',
	F: 'kubejs:magma_model_1'

  }
)
event.shaped('1x gtceu:hostile_containment_unit', [
  'ABC', 
  'DED',
  'FGF'
], {
A: 'gtceu:hv_robot_arm',
B: 'gtceu:awakened_echo_rotor',
C: 'gtceu:hv_electric_piston',
D: '#gtceu:circuits/ev',
E: 'deeperdarker:gloomy_sculk',
F: 'minecraft:diamond_sword',
G: 'gtceu:soc'

}
)
	event.shaped('1x gtceu:steam_machine_casing', [
    'ABA', 
    'ACA',
	'ADA'
  ], {
    A: 'gtceu:blazing_plate',
	B: '#forge:tools/hammers',
	C: 'gtceu:firebricks',
	D: '#forge:tools/wrenches'
  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/hammers')

	
	event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "kubejs:cow_model_1",
            "kubejs:sheep_model_1",
            "kubejs:pig_model_1",
            "kubejs:chicken_model_1",
            "kubejs:rabbit_model_1",
            "kubejs:bee_model_1",
            "kubejs:squid_model_1",
            "kubejs:fish_model_1",
            "kubejs:axolotl_model_1"
        ], // input items
	    "gtceu:natures_alloy_dust", // reagent
	    "kubejs:life_sample_1", // output
	    10000, // source cost
	    // true // keep nbt of reagent, think like a smithing recipe
	);

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
        "kubejs:enderman_model_1",
        "kubejs:magma_model_1",
        "kubejs:slime_model_1",
        "kubejs:spider_model_1",
        "kubejs:skeleton_model_1",
        "kubejs:wither_skeleton_1",
        "kubejs:phantom_model_1",
        "kubejs:blaze_model_1",
        "kubejs:shulker_model_1",
        "kubejs:ghast_model_1",
        "kubejs:zombie_model_1",
        "kubejs:creeper_model_1"

    ], // input items
  "gtceu:natures_alloy_dust", // reagent
  "kubejs:hostile_sample_1", // output
  10000, // source cost
  // true // keep nbt of reagent, think like a smithing recipe
);

event.recipes.ars_nouveau.enchanting_apparatus(
  [
      "kubejs:carrots_1",
      "kubejs:wheat_seeds_1",
      "kubejs:potatoes_1",
      "kubejs:pumpkin_seeds_1",
      "kubejs:kelp_1",
      "kubejs:moss_1",
      "kubejs:glowberries_1",
      "kubejs:chorus_fruit_1",
      "kubejs:sourceberries_1",
      "kubejs:trees_1",
      "kubejs:mystical_flowers_1"

  ], // input items
"gtceu:natures_alloy_dust", // reagent
"kubejs:plant_sample_1", // output
10000, // source cost
// true // keep nbt of reagent, think like a smithing recipe
);
	event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "gtceu:arcane_gold_dust",
            "minecraft:redstone",
            "gtceu:sulfur_dust",
            "minecraft:glowstone_dust"
        ], // input items
	    "kubejs:sky_dust", // reagent
	    "8x extendedcrafting:luminessence", // output
	    1000, // source cost
	    // true // keep nbt of reagent, think like a smithing recipe
	);
  event.recipes.create.mechanical_crafting('kubejs:creative_star', [
    'ACACACA',
    'CBDBDBC',
    'ADEFEDA',
    'CBFFFBC',
    'ADEFEDA',
	'CBDBDBC',
	'ACACACA'
  ], {
    A: 'kubejs:mega_brass_casing',
    B: 'kubejs:mega_andesite_casing',
    C: 'create:electron_tube',
    D: 'create:precision_mechanism',
    E: 'kubejs:mega_copper_casing',
    F: 'create:mechanical_crafter'
  })
})