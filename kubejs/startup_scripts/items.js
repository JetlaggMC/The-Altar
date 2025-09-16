
StartupEvents.registry('item', e => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  e.create('primitive_star')
  e.create('creative_star')
  e.create('natural_star')
  e.create('magical_star')
  e.create('nano_star')
  e.create('bio_star')
  e.create('champion_star')
  e.create('galactic_star')
  e.create('draconic_star')
  e.create('infinity_star').glow(true)

  e.create('desert_shard')
  e.create('sky_shard')
  e.create('ocean_shard')
  e.create('jungle_shard')
  e.create('earth_shard')
  e.create('nether_shard')
  e.create('ender_shard')
  e.create('taiga_shard')
	
  e.create('desert_dust')
  e.create('sky_dust')
  e.create('ocean_dust')
  e.create('jungle_dust')
  e.create('earth_dust')
  e.create('nether_dust')
  e.create('ender_dust')
  e.create('taiga_dust')
  e.create('source_gem_dust')

  e.create('terrasteel_dust')
  e.create('elementium_dust')
	
  e.create('cooked_sterile_meat_glob')
  e.create('dense_insulator_sheet')
  e.create('crude_insulator_sheet')
  e.create('hyper_insulator_sheet')

  e.create('primitive_research')
  e.create('andesite_research')
  e.create('brass_research')
  e.create('natural_research')
  e.create('magical_research')
  e.create('sterile_research')

  e.create('unborn_naga_trophy')
  e.create('unborn_lich_trophy')
  e.create('unborn_hydra_trophy')
  e.create('unborn_urghast_trophy')
  e.create('unborn_snow_queen_trophy')
	
  e.create('plant_glob')
  e.create('magical_plant_glob')
  e.create('magical_meat_glob')

  e.create('processed_iron_ore')


	
  e.create('uranium_235_fuel_rod')
  e.create('spent_uranium_235_fuel_rod')
  e.create('plutonium_241_fuel_rod')
  e.create('spent_plutonium_241_fuel_rod')

})

StartupEvents.registry("block", (event) => {
    event.create("key_block") // Create a new block
    .displayName("Key Block") // Set a custom name
    .material("stone") // Set a material (affects the sounds and some properties)
    .unbreakable()
  	.textureAll("kubejs:block/key_block")
	.model('kubejs:block/key_block')
	
	 event.create("primitive_star_block") // Create a new block
    .displayName("Primitive Star Block") // Set a custom name
    .material("stone") // Set a material (affects the sounds and some properties)
    .unbreakable()
  	.textureAll("kubejs:block/primitive_star_block")
	.model('kubejs:block/primitive_star_block')
	
	 event.create("creative_star_block") // Create a new block
    .displayName("Creative Star Block") // Set a custom name
    .material("stone") // Set a material (affects the sounds and some properties)
    .unbreakable()
  	.textureAll("kubejs:block/creative_star_block")
	.model('kubejs:block/creative_star_block')
	
	event.create("natural_star_block") // Create a new block
    .displayName("Natural Star Block") // Set a custom name
    .material("stone") // Set a material (affects the sounds and some properties)
    .unbreakable()
  	.textureAll("kubejs:block/natural_star_block")
	.model('kubejs:block/natural_star_block')
	
		 event.create("magical_star_block") // Create a new block
    .displayName("Magical Star Block") // Set a custom name
    .material("stone") // Set a material (affects the sounds and some properties)
    .unbreakable()
  	.textureAll("kubejs:block/magical_star_block")
	.model('kubejs:block/magical_star_block')	

		event.create("bio_star_block") // Create a new block
    .displayName("Bio Star Block") // Set a custom name
    .material("stone") // Set a material (affects the sounds and some properties)
    .unbreakable()
  	.textureAll("kubejs:block/bio_star_block")
	.model('kubejs:block/bio_star_block')	
	
		 event.create("nano_star_block") // Create a new block
    .displayName("Nano Star Block") // Set a custom name
    .material("stone") // Set a material (affects the sounds and some properties)
    .unbreakable()
  	.textureAll("kubejs:block/nano_star_block")
	.model('kubejs:block/nano_star_block')	
	
		 event.create("champion_star_block") // Create a new block
    .displayName("Champion Star Block") // Set a custom name
    .material("stone") // Set a material (affects the sounds and some properties)
    .unbreakable()
  	.textureAll("kubejs:block/champion_star_block")
	.model('kubejs:block/champion_star_block')	
	
	event.create("galactic_star_block") // Create a new block
    .displayName("Galactic Star Block") // Set a custom name
    .material("stone") // Set a material (affects the sounds and some properties)
    .unbreakable()
  	.textureAll("kubejs:block/galactic_star_block")
	.model('kubejs:block/galactic_star_block')	

		event.create("draconic_star_block") // Create a new block
    .displayName("Draconic Star Block") // Set a custom name
    .material("stone") // Set a material (affects the sounds and some properties)
    .unbreakable()
  	.textureAll("kubejs:block/draconic_star_block")
	.model('kubejs:block/draconic_star_block')	
	
		event.create("infinity_star_block") // Create a new block
    .displayName("Infinity Star Block") // Set a custom name
    .material("stone") // Set a material (affects the sounds and some properties)
    .unbreakable()
  	.textureAll("kubejs:block/infinity_star_block")
	.model('kubejs:block/infinity_star_block')	
	
		event.create("altar_block") // Create a new block
    .displayName("Altar Block") // Set a custom name
    .material("stone") // Set a material (affects the sounds and some properties)
    .unbreakable()
  	.textureAll("kubejs:block/altar_block")
	.model('kubejs:block/altar_block')

		event.create("source_planks") // Create a new block
    .displayName("Source Planks") // Set a custom name
    .material("wood") // Set a material (affects the sounds and some properties)
    .tagBlock("mineable/axe") //can be mined faster with an axe
  	.textureAll("kubejs:block/source_planks")
	.model('kubejs:block/source_planks')
	
		event.create("mega_andesite_casing") // Create a new block
    .displayName("Mega Andesite Casing") // Set a custom name
    .material("wood") // Set a material (affects the sounds and some properties)
    .tagBlock("mineable/axe") //can be mined faster with an axe
  	.textureAll("kubejs:block/mega_andesite_casing")
	.model('kubejs:block/mega_andesite_casing')

		event.create("mega_brass_casing") // Create a new block
    .displayName("Mega Brass Casing") // Set a custom name
    .material("wood") // Set a material (affects the sounds and some properties)
    .tagBlock("mineable/axe") //can be mined faster with an axe
  	.textureAll("kubejs:block/mega_brass_casing")
	.model('kubejs:block/mega_brass_casing')
		event.create("mega_cupronickel_casing") // Create a new block
    .displayName("Mega Cupronickel Casing") // Set a custom name
    .material("wood") // Set a material (affects the sounds and some properties)
    .tagBlock("mineable/axe") //can be mined faster with an axe
  	.textureAll("kubejs:block/mega_cupronickel_casing")
	.model('kubejs:block/mega_cupronickel_casing')
			event.create("mega_lv_machine_casing") // Create a new block
    .displayName("Mega LV Machine Casing") // Set a custom name
    .material("metal") // Set a material (affects the sounds and some properties)
    .tagBlock("mineable/pickaxe") //can be mined faster with an axe
  	.textureAll("kubejs:block/mega_lv_machine_casing")
	.model('kubejs:block/mega_lv_machine_casing')

})

StartupEvents.registry("fluid", (event) => {
  // These first examples are 1.16.5 and 1.18.2 syntax
  
  // Basic "thick" (looks like lava) fluid with red tint
  event.create('crude_insulator')
    .thinTexture(0x433327)
    .bucketColor(0x433327)
  event.create('liquid_rose_quartz')
    .thinTexture(0xf8506b)
    .bucketColor(0xf8506b)
  event.create('liquid_quartz')
    .thinTexture(0xeeeeee)
    .bucketColor(0xeeeeee)
  event.create('desert_essence')
    .thinTexture(0xEED76B)
    .bucketColor(0xEED76B)
    .displayName('Desert Essence')
  event.create('sky_essence')
    .thinTexture(0xACFDFF)
    .bucketColor(0xACFDFF)
    .displayName('Sky Essence')
  event.create('ocean_essence')
    .thinTexture(0x5B27FF)
    .bucketColor(0x5B27FF)
    .displayName('Ocean Essence')
  event.create('jungle_essence')
    .thinTexture(0x00AD02)
    .bucketColor(0x00AD02)
    .displayName('Jungle Essence')
  event.create('earth_essence')
    .thinTexture(0xFF5733)
    .bucketColor(0xFF5733)
    .displayName('Earth Essence')
  event.create('nether_essence')
    .thinTexture(0xB30101)
    .bucketColor(0xB30101)
    .displayName('Nether Essence')
  event.create('ender_essence')
    .thinTexture(0x490C53)
    .bucketColor(0x490C53)
    .displayName('Ender Essence')
  event.create('taiga_essence')
    .thinTexture(0xF66CFA)
    .bucketColor(0xF66CFA)
    .displayName('Taiga Essence')


  event.create('raw_source')
    .thinTexture(0x8726a2)
    .bucketColor(0x8726a2)
    .displayName('Raw Source')
  event.create('infused_source')
    .thinTexture(0x3e1f3e)
    .bucketColor(0x3e1f3e)
    .displayName('Infused Source')
  event.create('growth_medium')
    .thinTexture(0x353367)
    .bucketColor(0x353367)
    .displayName('Growth Medium')
  event.create('arcane_infused_growth_medium')
    .thinTexture(0xed75ff)
    .bucketColor(0xed75ff)
    .displayName('Arcane Infused Growth Medium')
  event.create('clean_growth_medium')
    .thinTexture(0xfec4fe)
    .bucketColor(0xfec4fe)
    .displayName('Clean Growth Medium')
  event.create('twilight_infused_growth_medium')
    .thinTexture(0x795eb5)
    .bucketColor(0x795eb5)
    .displayName('Twilight Infused Growth Medium')
  event.create('floraethylene')
    .thinTexture(0x3F322B)
    .bucketColor(0x3F322B)
    .displayName('Flora-Etyhlene')
  event.create('manafloraethylene')
    .thinTexture(0x39c1b8)
    .bucketColor(0x39c1b8)
    .displayName('Mana-Flora-Etyhlene')
  event.create('dense_insulator')
    .thinTexture(0x4A1408)
    .bucketColor(0x4A1408)
    .displayName('Dense Insulator')
    event.create('hyper_insulator')
    .thinTexture(0x331650)
    .bucketColor(0x331650)
    .displayName('Hyper Insulator')
    event.create('living_matter')
    .thinTexture(0xBD5B79)
    .bucketColor(0xBD5B79)
    .displayName('Living Matter')
    event.create('sterile_meat')
    .thinTexture(0x98478d)
    .bucketColor(0x98478d)
    .displayName('Sterile Meat')
    event.create('glass_residue')
    .thinTexture(0xd5bbb6)
    .bucketColor(0xd5bbb6)
    .displayName('Glass Residue')
    event.create('molten_amethyst')
    .thinTexture(0xDF98E3)
    .bucketColor(0xDF98E3)
    .displayName('Molten Amethyst')
    event.create('carrot_juice')
    .thinTexture(0xFF9F1F)
    .bucketColor(0xFF9F1F)
    .displayName('Carrot Juice')
	    event.create('dandelion_juice')
    .thinTexture(0x77B071)
    .bucketColor(0x77B071)
    .displayName('Dandelion Juice')
	    event.create('melon_juice')
    .thinTexture(0x700025)
    .bucketColor(0x700025)
    .displayName('Melon Juice')
    event.create('apple_cider')
    .thinTexture(0xC48056)
    .bucketColor(0xC48056)
    .displayName('Apple Cider')
   event.create('fermented_garlic_honey')
    .thinTexture(0xFFCD4A)
    .bucketColor(0xFFCD4A)
    .displayName('Fermented Garlic Honey')
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('andesite_alloy')
        .ingot()
		.liquid()
		.color(0xb9c1b5).iconSet(GTMaterialIconSet.getByName('alloy'))
        .components('1x andesite', '1x iron')
        .flags(GTMaterialFlags.IS_MAGNETIC,GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMELTING)
        .toolStats(new ToolProperty(2.0, 2.0, 256, 2, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))

    event.create('glowing')
        .ingot()
		.liquid()
		.color(0x03c5e8).iconSet(GTMaterialIconSet.METALLIC)
        .cableProperties(GTValues.V[GTValues.LV],16,0,true)
        .flags(GTMaterialFlags.IS_MAGNETIC,GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FINE_WIRE)
    event.create('blazing')
        .ingot()
		.liquid()
		.color(0xff603b).iconSet(GTMaterialIconSet.METALLIC)
        .cableProperties(GTValues.V[GTValues.LV],16,1)
        .flags(GTMaterialFlags.IS_MAGNETIC,GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FRAME)
		.toolStats(new ToolProperty(2.0, 2.0, 256, 2, [GTToolType.DRILL_LV, GTToolType.SAW]))
	event.create('weak_synthetic')
        .ingot()
		.liquid()
		.color(0x3E4839).iconSet(GTMaterialIconSet.METALLIC)
        .cableProperties(GTValues.V[GTValues.MV],16,1)
        .flags(GTMaterialFlags.IS_MAGNETIC,GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FINE_WIRE)

	
	event.create('synthetic_neuron')
        .ingot()
		.liquid()
		.color(0xdaf9b9).iconSet(GTMaterialIconSet.METALLIC)
        .cableProperties(GTValues.V[GTValues.HV],16,0,true)
        .flags(GTMaterialFlags.IS_MAGNETIC,GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FINE_WIRE)

	
	event.create('radioactive')
        .ingot()
		.liquid()
		.color(0x6bff65).iconSet(GTMaterialIconSet.METALLIC)
        .cableProperties(GTValues.V[GTValues.LuV],16,1)
        .flags(GTMaterialFlags.IS_MAGNETIC,GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FINE_WIRE)
	event.create('withered')
        .ingot()
		.liquid()
		.color(0x44395e).iconSet(GTMaterialIconSet.METALLIC)
        .cableProperties(GTValues.V[GTValues.EV],16,1)
        .flags(GTMaterialFlags.IS_MAGNETIC,GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create('arcane_gold')
        .ingot()
		.liquid()
		.color(0xdfb01a).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.IS_MAGNETIC,GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FRAME)


	   event.create('natures_alloy')
        .ingot()
		.liquid()
	    .color(0x1bb848).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.IS_MAGNETIC,GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FINE_WIRE,GTMaterialFlags.GENERATE_FRAME)
        .toolStats(new ToolProperty(3.0, 3.0, 512, 3, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))
		.fluidPipeProperties(50, 1855, true,false, false, false)

    event.create('magical_alloy')
		.ingot()
		.liquid()
        .color(0xcc66ff).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FINE_WIRE)
        .toolStats(new ToolProperty(4.0, 4.0, 768, 4, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))
		.fluidPipeProperties(100, 1166, true,false, false, false)

    event.create('awakened_echo')
		.ingot()
		.liquid()
        .color(0x0ac184).iconSet(GTMaterialIconSet.METALLIC)
        .cableProperties(GTValues.V[GTValues.HV],16,1)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FRAME)
        .toolStats(new ToolProperty(4.0, 4.0, 768, 4, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))
	
    event.create('sterile_bio_alloy')
		.ingot()
		.liquid()
		.blastTemp(2700)
        .color(0xe2230d).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FOIL,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_FINE_WIRE)
        .toolStats(new ToolProperty(5.0, 5.0, 1024, 5, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))

    event.create('champions_alloy')
		.ingot()
		.liquid()
        .color(0xebc113).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING)
        .toolStats(new ToolProperty(6.0, 6.0, 2048, 6, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))
    event.create('alfdesh')
		.ingot()
		.liquid()
        .color(0xff7b00).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING)

    event.create('calorite')
		.ingot()
		.liquid()
        .color(0xd3340e).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING)

    event.create('ostrum')
		.ingot()
		.liquid()
        .color(0x83558a).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING)

    event.create('interstellar_alloy')
		.ingot()
		.liquid()
        .color(0x4f0532).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING)
        .toolStats(new ToolProperty(8.0, 8.0, 4096, 8, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))
	
    event.create('nano_alloy')
		.ingot()
		.liquid()
        .color(0xffcfec).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING)
        .toolStats(new ToolProperty(10.0, 10.0, 8192, 10, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))
	
    event.create('draconic_alloy')
		.ingot()
		.liquid()
        .color(0xf37207).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING)
        .toolStats(new ToolProperty(12.0, 12.0, 16384, 10, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))
	
    event.create('infinite_alloy')
		.ingot()
		.liquid()
        .color(0xe4cdff).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMASHING,GTMaterialFlags.NO_SMELTING)
        .toolStats(new ToolProperty(14, 14, 32768, 12, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))

	event.create('manasteel')
		.ingot()
		.liquid()
		.secondaryColor(0xb5fffc)
		.color(0x67b9ee)
		.iconSet(GTMaterialIconSet.getByName('botanic'))
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FINE_WIRE)
		.toolStats(new ToolProperty(6.2, 2, 300, 3, [GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))

	event.create('terrasteel')
		.ingot()
		.liquid()
		.secondaryColor(0xccffb5)
		.color(0x2bb93b)
		.iconSet(GTMaterialIconSet.getByName('botanic'))
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FINE_WIRE)
		.toolStats(new ToolProperty(6.2, 2, 300, 3, [GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))

	event.create('elementium')
		.ingot()
		.liquid()
		.secondaryColor(0xf5c7c4)
		.color(0xc543a8)
		.iconSet(GTMaterialIconSet.getByName('botanic'))
		.flags(GTMaterialFlags.IS_MAGNETIC,GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROTOR,GTMaterialFlags.GENERATE_LONG_ROD,GTMaterialFlags.NO_SMELTING,GTMaterialFlags.GENERATE_FINE_WIRE)
		.cableProperties(GTValues.V[GTValues.MV],16,0,true)
		.toolStats(new ToolProperty(6.2, 2, 300, 3, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SAW, GTToolType.HARD_HAMMER, GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.SCYTHE, GTToolType.KNIFE, GTToolType.BUTCHERY_KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV, GTToolType.WRENCH_IV, GTToolType.BUZZSAW, GTToolType.SCREWDRIVER_LV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV,  GTToolType.WIRE_CUTTER_IV]))

	event.create('niter')
		.gem(1)
		.ore(4, 2)
		.color(0xbab1b1)
		.secondaryColor(0x745b66)
		.iconSet(GTMaterialIconSet.QUARTZ)
		.flags(GTMaterialFlags.NO_SMASHING, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.CRYSTALLIZABLE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('1x potassium', '1x nitrogen', '3x oxygen')
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
	//kinetic_caster
	event.create('caster', 'simple')
  .tiers(GTValues.LV,GTValues.MV,GTValues.HV,GTValues.EV,GTValues.IV,GTValues.LuV)
  .definition((tier, builder) =>
      builder
          .langValue(GTValues.VLVH[tier] + " Crop Simulator")
          .recipeType('crop_simulator')
          .workableTieredHullRenderer('gtceu:block/machines/crop_simulator')
  )
	//crop_simulator
	event.create('crop_simulator', 'simple')
        .tiers(GTValues.LV,GTValues.MV,GTValues.HV,GTValues.EV,GTValues.IV,GTValues.LuV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Crop Simulator")
                .recipeType('crop_simulator')
                .workableTieredHullRenderer('gtceu:block/machines/crop_simulator')
        )
	//dna_fabricator
	event.create('dna_fabricator', 'simple')
        .tiers(GTValues.LV,GTValues.MV,GTValues.HV,GTValues.EV,GTValues.IV,GTValues.LuV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " DNA Fabricator")
                .recipeType('dna_fabricator')
                .workableTieredHullRenderer('gtceu:block/machines/dna_fabricator')
        )

 
	//animal_pen
	event.create('animal_pen', 'simple')
    .tiers(GTValues.LV,GTValues.MV,GTValues.HV,GTValues.EV,GTValues.IV,GTValues.LuV)
    .definition((tier, builder) =>
        builder
            .langValue(GTValues.VLVH[tier] + " Animal Pen")
            .recipeType('animal_pen')
            .workableTieredHullRenderer('gtceu:block/machines/animal_pen')
    )
//large mixer
	 event.create('mega_mixer', 'multiblock')
		.appearanceBlock(() => Block.getBlock('gtceu:machine_casing_solid_steel'))
        .recipeTypes('mega_mixer')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'GGG','GGG','BVB','LLL','CCC')
            .aisle('CPC', 'GEG','GGG','VXV','L L','CAC')
            .aisle('CMC', 'GGG','GGG','BVB','LLL','CHC')
			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks('create:framed_glass'))
            .where('E', Predicates.blocks('create:basin'))
            .where('B', Predicates.blocks('kubejs:mega_cupronickel_casing'))
            .where('V', Predicates.blocks('gtceu:heat_vent'))
            .where('X', Predicates.blocks('create:mechanical_mixer'))
            .where('L', Predicates.blocks('gtceu:cupronickel_coil_block'))
            .where('P', Predicates.blocks('gtceu:bronze_pipe_casing'))

            .where('A', Predicates.abilities(PartAbility.MUFFLER))
            .where('H', Predicates.abilities(PartAbility.MAINTENANCE))
        	.build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/mixer",
            false
        )
//large press
	 event.create('mega_press', 'multiblock')
		.appearanceBlock(() => Block.getBlock('gtceu:machine_casing_solid_steel'))
        .recipeTypes('mega_press')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CLBCCCC', 'CLCGGGC','CLCGGGC','CLBCCCC')
            .aisle('CLCCCCC', 'C PEEEP','A C   V','CLCXXXC')
            .aisle('CLBCMHC', 'CLCGGGC','CLCGGGC','CLBCCCC')
			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks('create:framed_glass'))
            .where('E', Predicates.blocks('create:depot'))
            .where('B', Predicates.blocks('kubejs:mega_andesite_casing'))
            .where('V', Predicates.blocks('gtceu:heat_vent'))
            .where('X', Predicates.blocks('create:mechanical_press'))
            .where('L', Predicates.blocks('gtceu:cupronickel_coil_block'))
            .where('P', Predicates.blocks('gtceu:bronze_pipe_casing'))

            .where('A', Predicates.abilities(PartAbility.MUFFLER))
            .where('H', Predicates.abilities(PartAbility.MAINTENANCE))
        	.build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/machines/bender",
            false
        )
//dreamroom
		 event.create('dream_room_amplifier', 'multiblock')
		.appearanceBlock(() => Block.getBlock('botania:glimmering_dreamwood_log'))
        .recipeTypes('dream_room_amplifier')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('ABBBA', 'BCCCB','BCCCB','BCCCB','ABBBA')
            .aisle('BEEEB', 'C###C','C###C','C###C','BEEEB')
            .aisle('BEEEB', 'C#D#C','C#D#C','C#D#C','BEEEB')
            .aisle('BEEEB', 'C###C','C###C','C###C','BEEEB')
            .aisle('ABMBA', 'BCCCB','BCCCB','BCCCB','ABBBA')
			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
	        .where('A', Predicates.blocks('ars_nouveau:source_gem_block'))
            .where('B', Predicates.blocks('botania:glimmering_dreamwood_log')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
			.where('C', Predicates.blocks('botania:bifrost_perm'))
			.where('D', Predicates.blocks('botania:gaia_pylon'))
			.where('E', Predicates.blocks('botania:shimmerrock'))
			.where('#', Predicates.blocks('minecraft:air'))
        	.build())
        .workableCasingRenderer(
            "botania:block/glimmering_dreamwood_log",
            "gtceu:block/machines/mixer",
            false
		)
	 event.create('resource_combinator', 'multiblock')
		.appearanceBlock(() => Block.getBlock('create:andesite_casing'))
        .recipeTypes('resource_combinator')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB', 'F F','F F','CCC','CGC','CGC','CGC','CCC')
            .aisle('BBB', '   ','   ','CHC','GEG','GEG','GEG','CCC')
            .aisle('BBB', 'F F','F F','CMC','CGC','CGC','CGC','CCC')
			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
	        .where('F', Predicates.blocks('gtceu:blazing_frame'))
            .where('G', Predicates.blocks('botania:mana_glass'))
            .where('C', Predicates.blocks('gtceu:heatproof_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('E', Predicates.blocks('gtceu:kanthal_coil_block'))
            .where('H',	Predicates.abilities(PartAbility.MUFFLER))
			.where('B', Predicates.blocks('gtceu:bronze_firebox_casing'))
        	.build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_heatproof",
            "gtceu:block/machines/alloy_smelter",
            false
		)

        event.create('hydroponic_garden', 'multiblock')
		.appearanceBlock(() => Block.getBlock('gtceu:machine_casing_solid_steel'))
        .recipeTypes('hydroponic_garden')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' CHC ', ' GGG ', ' GGG ',' CCC ')
            .aisle('CSSSC', 'G   G', 'G   G','CCCCC')
            .aisle('CSSSC', 'G   G', 'G   G','CCLCC')
            .aisle('CSSSC', 'G   G', 'G   G','CCCCC')
            .aisle(' CMC ', ' GGG ', ' GGG ',' CAC ')

			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('S', Predicates.blocks('minecraft:sand'))
            .where('L', Predicates.blocks('gtceu:white_lamp'))
            .where('H', Predicates.abilities(PartAbility.MUFFLER))
            .where('A', Predicates.abilities(PartAbility.MAINTENANCE))
        	.build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/processing_array",
            false
        )

        event.create('temperate_garden', 'multiblock')
		.appearanceBlock(() => Block.getBlock('gtceu:machine_casing_solid_steel'))
        .recipeTypes('temperate_garden')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' CHC ', ' GGG ', ' GGG ',' CCC ')
            .aisle('CSSSC', 'G   G', 'G   G','CCCCC')
            .aisle('CSSSC', 'G   G', 'G   G','CCLCC')
            .aisle('CSSSC', 'G   G', 'G   G','CCCCC')
            .aisle(' CMC ', ' GGG ', ' GGG ',' CAC ')

			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('S', Predicates.blocks('minecraft:moss_block'))
            .where('L', Predicates.blocks('gtceu:white_lamp'))
            .where('H', Predicates.abilities(PartAbility.MUFFLER))
            .where('A', Predicates.abilities(PartAbility.MAINTENANCE))
        	.build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/processing_array",
            false
        )
	
	 event.create('meat_freezer', 'multiblock')
		.appearanceBlock(() => Block.getBlock('gtceu:machine_casing_frost_proof'))
        .recipeTypes('meat_freezer')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CHC','CCC')
            .aisle('CCC', 'GEG','CGC')
            .aisle('CMC', 'CGC','CAC')
			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtceu:frostproof_machine_casing')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('E', Predicates.blocks('gtceu:kanthal_coil_block'))
            .where('H', Predicates.abilities(PartAbility.MUFFLER))
            .where('A', Predicates.abilities(PartAbility.MAINTENANCE))
        	.build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_frost_proof",
            "gtceu:block/machines/extractor",
            false
        )
	
	 event.create('hostile_containment_unit', 'multiblock')
		.appearanceBlock(() => Block.getBlock('deeperdarker:gloomy_sculk'))
        .recipeTypes('hostile_containment_unit')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'AGA','AGA','AGA','CCC')
            .aisle('CCC', 'G#G','G#G','G#G','CHC')
            .aisle('CMC', 'AGA','AGA','AGA','CBC')
			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('deeperdarker:gloomy_sculk')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('A', Predicates.blocks('deeperdarker:sculk_grime_bricks'))
			.where('#', Predicates.blocks('minecraft:air'))
            .where('H', Predicates.abilities(PartAbility.MUFFLER))
            .where('B', Predicates.abilities(PartAbility.MAINTENANCE))
        	.build())
        .workableCasingRenderer(
            "deeperdarker:block/gloomy_sculk",
            "gtceu:block/machines/extractor",
            false
        )
	
//twilight_awakening_chamber
		 event.create('twilight_awakening_chamber_mk1', 'multiblock')
		.appearanceBlock(() => Block.getBlock('gtceu:machine_casing_clean_stainless_steel'))
        .recipeTypes('twilight_awakening_chamber_mk1')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CBNBC', 'CBNBC','CBNBC')
            .aisle('CBNBC', 'H###C','ABNBC')
            .aisle('CBNBC', 'CBNBM','CBNBC')
			.where('#', Predicates.blocks('minecraft:air'))
			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.abilities(PartAbility.MUFFLER))
            .where('A', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('B', Predicates.blocks('twilightforest:ironwood_block'))
            .where('N', Predicates.blocks('gtceu:nichrome_coil_block'))
        	.build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/machines/alloy_smelter",
            false
		)
			 event.create('twilight_awakening_chamber_mk2', 'multiblock')
		.appearanceBlock(() => Block.getBlock('gtceu:machine_casing_clean_stainless_steel'))
        .recipeTypes('twilight_awakening_chamber_mk2')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CBNBC', 'CBNBC','CBNBC')
            .aisle('CBNBC', 'H###C','ABNBC')
            .aisle('CBNBC', 'CBNBM','CBNBC')
			.where('#', Predicates.blocks('minecraft:air'))
			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.abilities(PartAbility.MUFFLER))
            .where('A', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('B', Predicates.blocks('twilightforest:fiery_block'))
            .where('N', Predicates.blocks('gtceu:nichrome_coil_block'))
        	.build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/machines/alloy_smelter",
            false
		)
			 event.create('twilight_awakening_chamber_mk3', 'multiblock')
		.appearanceBlock(() => Block.getBlock('gtceu:machine_casing_clean_stainless_steel'))
        .recipeTypes('twilight_awakening_chamber_mk3')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CBNBC', 'CBNBC','CBNBC')
            .aisle('CBNBC', 'H###C','ABNBC')
            .aisle('CBNBC', 'CBNBM','CBNBC')
			.where('#', Predicates.blocks('minecraft:air'))
			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.abilities(PartAbility.MUFFLER))
            .where('A', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('B', Predicates.blocks('twilightforest:knightmetal_block'))
            .where('N', Predicates.blocks('gtceu:nichrome_coil_block'))
        	.build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/machines/alloy_smelter",
            false
		)
			 event.create('twilight_awakening_chamber_mk4', 'multiblock')
		.appearanceBlock(() => Block.getBlock('gtceu:machine_casing_clean_stainless_steel'))
        .recipeTypes('twilight_awakening_chamber_mk4')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CBNBC', 'CBNBC','CBNBC')
            .aisle('CBNBC', 'H###C','ABNBC')
            .aisle('CBNBC', 'CBNBM','CBNBC')
			.where('#', Predicates.blocks('minecraft:air'))
			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.abilities(PartAbility.MUFFLER))
            .where('A', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('B', Predicates.blocks('twilightforest:carminite_block'))
            .where('N', Predicates.blocks('gtceu:nichrome_coil_block'))
        	.build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/machines/alloy_smelter",
            false
		)
			 event.create('dimensional_reactor', 'multiblock')
		.appearanceBlock(() => Block.getBlock('gtceu:machine_casing_stable_titanium'))
        .recipeTypes('dimensional_reactor')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('             ', '             ','             ','             ','             ','      G      ','     GGG     ','      G      ','             ','             ','             ', '             ','             ')
            .aisle('             ', '             ','             ','             ','      G      ','             ','    G   G    ','             ','      G      ','             ','             ', '             ','             ')
            .aisle('     CCC     ', '   CC   CC   ','  C       C  ',' C    G    C ',' C         C ','C           C','C  G  R  G  C','C           C',' C         C ',' C    G    C ','  C       C  ', '   CC   CC   ','     CCC     ')
            .aisle('     LEL     ', '   LL   LL   ','  L       L  ',' L   GGG   L ',' L  G   G  L ','L  G  R  G  L','E  G RRR G  E','L  G  R  G  L',' L  G   G  L ',' L   GGG   L ','  L       L  ', '   LL   LL   ','     LEL     ')
          	.aisle('     CMC     ', '   CC   CC   ','  C       C  ',' C    G    C ',' C         C ','C           C','C  G  R  G  C','C           C',' C         C ',' C    G    C ','  C       C  ', '   CC   CC   ','     CCC     ')
            .aisle('             ', '             ','             ','             ','      G      ','             ','    G   G    ','             ','      G      ','             ','             ', '             ','             ')
            .aisle('             ', '             ','             ','             ','             ','      G      ','     GGG     ','      G      ','             ','             ','             ', '             ','             ')

			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtceu:stable_machine_casing')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks('twilightforest:auroralized_glass'))
            .where('R', Predicates.blocks('gtceu:rtm_alloy_coil_block'))
            .where('L', Predicates.blocks('cataclysm:ignitium_block'))
            .where('E', Predicates.blocks('cataclysm:enderite_block'))

        	.build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_stable_titanium",
            "gtceu:block/machines/alloy_smelter",
            false
		)
	
			 event.create('planetary_simulation_chamber', 'multiblock')
		.appearanceBlock(() => Block.getBlock('ad_astra:glowing_calorite_pillar'))
        .recipeTypes('planetary_simulation_chamber')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('     CCC     ', '     GGG     ','     GGG     ','     GGG     ','     GGG     ','     GGG     ','     GGG     ','     GGG     ','     GGG     ','     GGG     ','     CCC     ')
            .aisle('   CCTTTCC   ', '   GG   GG   ','   GG   GG   ','   GG   GG   ','   GG   GG   ','   GG   GG   ','   GG   GG   ','   GG   GG   ','   GG   GG   ','   GG   GG   ','   CCTTTCC   ')
            .aisle('  PTTTTTTTP  ', '  P       P  ','  P       P  ','  P       P  ','  P       P  ','  P       P  ','  P       P  ','  P       P  ','  P       P  ','  P       P  ','  PTTTTTTTP  ')
            .aisle(' CTTTTTTTTTC ', ' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' CTTTTTTTTTC ')
          	.aisle(' CTTTFFFTTTC ', ' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' CTTTFFFTTTC ')
            .aisle('CTTTFVVVFTTTC', 'G           G','G           G','G           G','G    BBA    G','G    BBB    G','G    AAA    G','G           G','G           G','G           G','CTTTFVVVFTTTC')
            .aisle('CTTTFVVVFTTTC', 'G           G','G           G','G           G','G    BBB    G','G    AZB    G','G    AAA    G','G           G','G           G','G           G','CTTTFVVVFTTTC')
            .aisle('CTTTFVVVFTTTC', 'G           G','G           G','G           G','G    ABB    G','G    ABA    G','G    BAA    G','G           G','G           G','G           G','CTTTFVVVFTTTC')
            .aisle(' CTTTFFFTTTC ', ' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' CTTTFFFTTTC ')
            .aisle(' CTTTTTTTTTC ', ' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' G         G ',' CTTTTTTTTTC ')
            .aisle('  PTTTTTTTP  ', '  P       P  ','  P       P  ','  P       P  ','  P       P  ','  P       P  ','  P       P  ','  P       P  ','  P       P  ','  P       P  ','  PTTTTTTTP  ')
            .aisle('   CCTTTCC   ', '   GG   GG   ','   GG   GG   ','   GG   GG   ','   GG   GG   ','   GG   GG   ','   GG   GG   ','   GG   GG   ','   GG   GG   ','   GG   GG   ','   CCTTTCC   ')
            .aisle('     CMC     ', '     GGG     ','     GGG     ','     GGG     ','     GGG     ','     GGG     ','     GGG     ','     GGG     ','     GGG     ','     GGG     ','     CCC     ')

			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('ad_astra:glowing_calorite_pillar')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('T', Predicates.blocks('gtceu:robust_machine_casing'))
            .where('F', Predicates.blocks('gtceu:extreme_engine_intake_casing'))
            .where('V', Predicates.blocks('ad_astra:vent'))
            .where('B', Predicates.blocks('minecraft:light_blue_concrete'))
            .where('A', Predicates.blocks('minecraft:lime_concrete'))
            .where('Z', Predicates.blocks('ae2:controller'))
            .where('P', Predicates.blocks('ad_astra:calorite_pillar')
  				.or(Predicates.autoAbilities(definition.getRecipeTypes())))
        	.build())
        .workableCasingRenderer(
            "ad_astra:block/glowing_calorite_pillar",
            "gtceu:block/machines/alloy_smelter",
            false
		)


    event.create('essence_extractor_1', 'multiblock')
		.appearanceBlock(() => Block.getBlock('create:copper_casing'))
        .recipeTypes('essence_extractor')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('S   S', 'S   S', 'S   S','CCECC', 'CGGGC','CGGGC','CGGGC','CGGGC','CCCCC')
            .aisle('     ', '     ', '     ','CCCCC', 'GTTTG','GTTTG','GTTTG','GTTTG','CCCCC')
            .aisle('     ', ' D D ', 'PPPPP','ICCCO', 'GTTTG','GTTTG','GTTTG','GTTTG','CCCCC')
            .aisle('     ', '     ', '     ','CCCCC', 'GTTTG','GTTTG','GTTTG','GTTTG','CCCCC')
            .aisle('S   S', 'S   S', 'S   S','CCMCC', 'CGGGC','CGGGC','CGGGC','CGGGC','CCCCC')

			.where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('create:copper_casing'))
            .where('T', Predicates.blocks('create:fluid_tank'))
            .where('G', Predicates.blocks('create:framed_glass'))
            .where('S', Predicates.blocks('create:copper_scaffolding'))
            .where('P', Predicates.blocks('create:fluid_pipe'))
            .where('D', Predicates.blocks('create:spout'))
            .where('O', Predicates.blocks('gtceu:lv_output_hatch'))
            .where('I', Predicates.blocks('gtceu:lv_input_hatch'))
            .where('E', Predicates.blocks('gtceu:lv_energy_input_hatch'))
        	.build())
        .workableCasingRenderer(
            "create:block/copper_casing",
            "gtceu:block/multiblock/distillation_tower",
            false
        )
})


GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('crop_simulator')
        .category('crop_simulator')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
    event.create('resource_combinator')
        .category('resource_combinator')
        .setEUIO('in')
        .setMaxIOSize(16, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)

    event.create('altar_research')
        .category('altar')
        .setEUIO('in')
        .setMaxIOSize(8, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
	
    event.create('essence_refinery')
        .category('essence_refinery')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
    event.create('essence_extractor')
        .category('essence_extractor')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
    event.create('dna_fabricator')
        .category('dna_fabricator')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 1, 0) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
    event.create('animal_pen')
        .category('animal_pen')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 0, 2) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
	
   event.create('dream_room_amplifier')
        .category('dream_room_amplifier')
        .setEUIO('in')
        .setMaxIOSize(12, 1, 2, 1) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
	
	 event.create('meat_freezer')
        .category('meat_freezer')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 2, 1) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

		event.create('twilight_awakening_chamber_mk1')
        .category('twilight_awakening_chamber_mk1')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 1, 0) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
		event.create('twilight_awakening_chamber_mk2')
        .category('twilight_awakening_chamber_mk2')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 1, 0) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
		event.create('twilight_awakening_chamber_mk3')
        .category('twilight_awakening_chamber_mk3')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 1, 0) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
		event.create('twilight_awakening_chamber_mk4')
        .category('twilight_awakening_chamber_mk4')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 1, 0) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
		event.create('hostile_containment_unit')
        .category('hostile_containment_unit')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 1, 1) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
		event.create('dimensional_reactor')
        .category('dimensional_reactor')
        .setEUIO('in')
        .setMaxIOSize(2, 4, 1, 1) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
		event.create('planetary_simulation_chamber')
        .category('planetary_simulation_chamber')
        .setEUIO('in')
        .setMaxIOSize(9, 9, 1, 1) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

		event.create('temperate_garden')
        .category('temperate_garden')
        .setEUIO('in')
        .setMaxIOSize(4, 2, 2, 0) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
        event.create('hydroponic_garden')
        .category('hydroponic_garden')
        .setEUIO('in')
        .setMaxIOSize(4, 2, 2, 0) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

        event.create('mega_mixer')
        .category('mega_mixer')
        .setEUIO('in')
        .setMaxIOSize(8, 3, 1, 1) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

        event.create('mega_press')
        .category('mega_press')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 2, 0) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
})