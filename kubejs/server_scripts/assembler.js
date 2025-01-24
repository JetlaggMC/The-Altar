ServerEvents.recipes(event => {
	event.recipes.gtceu.assembler('heatproof_machine_casing')
		.circuit(6)
		.itemInputs(Item.of('6x gtceu:arcane_gold_plate'))
		.itemInputs(Item.of('1x gtceu:arcane_gold_frame'))
		.itemOutputs(Item.of('2x gtceu:heatproof_machine_casing'))
		.duration(50)
		.EUt(16)
	event.recipes.gtceu.assembler('lv_machine_casing')
		.circuit(8)
		.itemInputs(Item.of('8x gtceu:natures_alloy_plate'))
		.itemOutputs(Item.of('1x gtceu:lv_machine_casing'))
		.duration(50)
		.EUt(16)
	event.recipes.gtceu.assembler('diode')
		.itemInputs(Item.of('4x gtceu:fine_weak_synthetic_wire'))
		.itemInputs(Item.of('1x gtceu:silicon_wafer'))
		.inputFluids(Fluid.of('kubejs:floraethylene',144))
		.itemOutputs(Item.of('4x gtceu:diode'))
		.duration(400)
		.EUt(30)
	event.recipes.gtceu.assembler('diode_2')
		.itemInputs(Item.of('2x gtceu:fine_weak_synthetic_wire'))
		.itemInputs(Item.of('1x gtceu:small_arcane_gold_dust'))
		.inputFluids(Fluid.of('gtceu:floraethylene',144))
		.itemOutputs(Item.of('2x kubejs:diode'))
		.duration(400)
		.EUt(30)
	event.recipes.gtceu.assembler('mv_machine_casing')
		.circuit(8)
		.itemInputs(Item.of('8x gtceu:magical_alloy_plate'))
		.itemOutputs(Item.of('1x gtceu:mv_machine_casing'))
		.duration(50)
		.EUt(16)
	
	event.recipes.gtceu.assembler('lv_machine_hull')
		.circuit(8)
		.itemInputs(Item.of('1x gtceu:lv_machine_casing'))
		.itemInputs(Item.of('2x gtceu:blazing_single_cable'))
		.inputFluids(Fluid.of('kubejs:crude_insulator',288))
		.itemOutputs(Item.of('1x gtceu:lv_machine_hull'))
		.duration(50)
		.EUt(16)
	event.recipes.gtceu.assembler('mv_machine_hull')
		.circuit(8)
		.itemInputs(Item.of('8x gtceu:magical_alloy_plate'))
		.itemOutputs(Item.of('1x gtceu:mv_machine_hull'))
		.itemInputs(Item.of('2x gtceu:blazing_single_cable'))
		.inputFluids(Fluid.of('kubejs:crude_insulator',288))
		.duration(50)
		.EUt(16)
	event.recipes.gtceu.assembler('raw_meat_glob')
		.itemInputs(Item.of('1x minecraft:beef'))
		.itemInputs(Item.of('1x minecraft:mutton'))
		.itemInputs(Item.of('1x minecraft:chicken'))
		.itemInputs(Item.of('1x minecraft:salmon'))
		.itemInputs(Item.of('1x minecraft:rabbit'))
		.itemInputs(Item.of('1x minecraft:porkchop'))
		.itemOutputs(Item.of('1x kubejs:raw_meat_glob'))
		.inputFluids(Fluid.of('gtceu:fermented_biomass',288))

		.duration(50)
		.EUt(16)
	event.recipes.gtceu.assembler('frostproof_machine_casing')
		.circuit(6)
		.itemInputs(Item.of('6x gtceu:awakened_echo_plate'))
		.itemInputs(Item.of('1x gtceu:awakened_echo_frame'))
		.itemOutputs(Item.of('1x gtceu:frostproof_machine_casing'))
		.duration(50)
		.EUt(16)
})
