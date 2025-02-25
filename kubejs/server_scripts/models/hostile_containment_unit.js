ServerEvents.recipes(event => {
	event.recipes.gtceu.animal_pen('wither_skeleton_1')
		.notConsumable(Item.of('1x kubejs:wither_skeleton_model_1'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('1x minecraft:wither_skeleton_skull'))
		.duration(200)
		.EUt(128)

    event.recipes.gtceu.animal_pen('blaze_1')
		.notConsumable(Item.of('1x kubejs:blaze_model_1'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('1x minecraft:blaze_rod'))
		.duration(200)
		.EUt(128)

    event.recipes.gtceu.animal_pen('slime_1')
		.notConsumable(Item.of('1x kubejs:slime_model_1'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('1x minecraft:slime_ball'))
		.duration(200)
		.EUt(128)

        event.recipes.gtceu.animal_pen('magma_cube_1')
		.notConsumable(Item.of('1x kubejs:magma_model_1'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('1x minecraft:magma_cream'))
		.duration(200)
		.EUt(128)

        event.recipes.gtceu.animal_pen('shulker_1')
		.notConsumable(Item.of('1x kubejs:shulker_model_1'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('1x minecraft:shulker_shell'))
		.duration(200)
		.EUt(128)

        event.recipes.gtceu.animal_pen('enderman_1')
		.notConsumable(Item.of('1x kubejs:enderman_model_1'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('1x minecraft:ender_pearl'))
		.duration(200)
		.EUt(128)

        event.recipes.gtceu.animal_pen('phantom_1')
		.notConsumable(Item.of('1x kubejs:phantom_model_1'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('1x minecraft:phantom_membrane'))
		.duration(200)
		.EUt(128)

        event.recipes.gtceu.animal_pen('spider_1')
		.notConsumable(Item.of('1x kubejs:spider_model_1'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('1x minecraft:string'))
		.duration(200)
		.EUt(128)

        event.recipes.gtceu.animal_pen('skeleton_1')
		.notConsumable(Item.of('1x kubejs:skeleton_model_1'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('1x minecraft:bone'))
		.duration(200)
		.EUt(128)

        event.recipes.gtceu.animal_pen('ghast_1')
		.notConsumable(Item.of('1x kubejs:ghast_model_1'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('1x minecraft:ghast_tear'))
		.duration(200)
		.EUt(128)

        event.recipes.gtceu.animal_pen('creeper_1')
		.notConsumable(Item.of('1x kubejs:creeper_model_1'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('1x minecraft:gunpowder'))
		.duration(200)
		.EUt(128)

        event.recipes.gtceu.animal_pen('zombie_1')
		.notConsumable(Item.of('1x kubejs:zombie_model_1'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('1x minecraft:rotten_flesh'))
		.duration(200)
		.EUt(128)


        event.recipes.gtceu.animal_pen('ur-ghast')
		.notConsumable(Item.of('1x twilightforest:ur_ghast_trophy'))
		.itemInputs(Item.of('1x minecraft:ghast_tear'))
		.itemInputs(Item.of('1x kubejs:sky_dust'))
		.inputFluids(Fluid.of('kubejs:living_matter', 16))
		.itemOutputs(Item.of('8x twilightforest:carminite'))
		.duration(200)
		.EUt(480)

        event.recipes.gtceu.animal_pen('lich')
		.notConsumable(Item.of('1x twilightforest:lich_trophy'))
		.itemInputs(Item.of('1x minecraft:bone_meal'))
		.itemInputs(Item.of('1x kubejs:skeleton_model_1'))
		.inputFluids(Fluid.of('gtceu:carbon', 144))
		.itemOutputs(Item.of('8x minecraft:gold_ore'))
		.duration(200)
		.EUt(480)

        event.recipes.gtceu.animal_pen('naga')
		.notConsumable(Item.of('1x twilightforest:naga_trophy'))
		.itemInputs(Item.of('1x gtceu:coke'))
		.itemInputs(Item.of('1x kubejs:dense_insulator_sheet'))
		.inputFluids(Fluid.of('gtceu:carbon_dioxide', 144))
		.itemOutputs(Item.of('8x minecraft:naga_scale'))
		.duration(200)
		.EUt(480)

		event.recipes.gtceu.animal_pen('snow_queen')
		.notConsumable(Item.of('1x twilightforest:snow_queen_trophy'))
		.itemInputs(Item.of('1x minecraft:blue_ice'))
		.itemInputs(Item.of('1x gtceu:phenolic_circuit_board'))
		.itemInputs(Item.of('1x minecraft:gold_ingot'))
		.itemOutputs(Item.of('8x minecraft:aurora_block'))
		.duration(200)
		.EUt(480)

		event.recipes.gtceu.animal_pen('hydra')
		.notConsumable(Item.of('1x twilightforest:hydra_trophy'))
		.itemInputs(Item.of('1x minecraft:dragons_breath'))
		.itemInputs(Item.of('1x minecraft:phantom_membrane'))
		.inputFluids(Fluid.of('kubejs:manafloraethylene', 144))
		.itemOutputs(Item.of('8x minecraft:aurora_block'))
		.duration(200)
		.EUt(480)

})