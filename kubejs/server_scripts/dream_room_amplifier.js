ServerEvents.recipes(event => {
	event.recipes.gtceu.dream_room_amplifier('arcane_infused_growth_medium')
		.itemInputs(Item.of('1x botania:life_essence'))
		.itemInputs(Item.of('1x kubejs:source_gem_dust'))
		.inputFluids(Fluid.of('kubejs:growth_medium', 1000))
		.inputFluids(Fluid.of('kubejs:infused_source', 1000))
		.outputFluids(Fluid.of('kubejs:arcane_infused_growth_medium', 2000))
		.duration(200)
		.EUt(120)	
	event.recipes.gtceu.dream_room_amplifier('magical_alloy_dust')
		.notConsumable(Item.of('1x kubejs:life_sample_1'))
		.itemInputs(Item.of('1x botania:mana_powder'))
		.itemInputs(Item.of('1x kubejs:terrasteel_dust'))
		.itemInputs(Item.of('1x gtceu:arcane_gold_dust'))
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium', 1000))
		.itemOutputs(Item.of('3x gtceu:magical_alloy_dust'))
		.duration(400)
		.EUt(120)	
	event.recipes.gtceu.dream_room_amplifier('awakened_echo_dust')
		.itemInputs(Item.of('1x botania:corporea_spark'))
		.itemInputs(Item.of('1x deeperdarker:echo_soil'))
		.itemInputs(Item.of('1x minecraft:echo_shard'))
		.inputFluids(Fluid.of('kubejs:arcane_infused_growth_medium', 1000))
		.itemOutputs(Item.of('3x gtceu:awakened_echo_dust'))
		.duration(400)
		.EUt(120)	
	event.recipes.gtceu.dream_room_amplifier('life_sample_2')
		.itemInputs(Item.of('1x kubejs:cow_model_2'))
		.itemInputs(Item.of('1x kubejs:chicken_model_2'))
		.itemInputs(Item.of('1x kubejs:sheep_model_2'))
		.itemInputs(Item.of('1x kubejs:axolotl_model_2'))
		.itemInputs(Item.of('1x kubejs:squid_model_2'))
		.itemInputs(Item.of('1x kubejs:fish_model_2'))
		.itemInputs(Item.of('1x kubejs:bee_model_2'))
		.itemInputs(Item.of('1x kubejs:chicken_model_2'))
		.itemInputs(Item.of('1x kubejs:rabbit_model_2'))
		.inputFluids(Fluid.of('kubejs:clean_growth_medium', 1000))
		.itemOutputs(Item.of('1x kubejs:life_sample_2'))

		.duration(12000)
		.EUt(120)	
})