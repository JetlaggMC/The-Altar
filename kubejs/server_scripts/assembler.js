ServerEvents.recipes(event => {
	event.remove({ output: 'gtceu:transistor' })
	event.remove({ output: 'gtceu:capacitor' })
	event.remove({ output: 'gtceu:smd_inductor' })
	event.remove({ output: 'gtceu:inductor' })
	event.remove({ output: 'gtceu:smd_diode' })
	event.remove({ output: 'gtceu:smd_capacitor' })
	event.remove({ output: 'gtceu:smd_transistor' })
	event.remove({ output: 'gtceu:solid_machine_casing' })

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
		event.recipes.gtceu.assembler('resistor')
		.itemInputs(Item.of('4x gtceu:fine_blazing_wire'))
		.itemInputs(Item.of('1x gtceu:sulfur_dust'))
		.inputFluids(Fluid.of('kubejs:crude_insulator',144))
		.itemOutputs(Item.of('4x gtceu:resistor'))
		.duration(320)
		.EUt(30)
		event.recipes.gtceu.assembler('capacitor')
		.itemInputs(Item.of('1x kubejs:crude_insulator_sheet'))
		.itemInputs(Item.of('2x gtceu:magical_alloy_foil'))
		.inputFluids(Fluid.of('kubejs:crude_insulator',144))
		.itemOutputs(Item.of('4x gtceu:capacitor'))
		.duration(320)
		.EUt(120)
		event.recipes.gtceu.assembler('transistor')
		.itemInputs(Item.of('1x gtceu:silicon_plate'))
		.itemInputs(Item.of('6x gtceu:fine_elementium_wire'))
		.inputFluids(Fluid.of('kubejs:crude_insulator',144))
		.itemOutputs(Item.of('8x gtceu:transistor'))
		.duration(160)
		.EUt(120)
		event.recipes.gtceu.assembler('inductor')
		.itemInputs(Item.of('1x gtceu:andesite_alloy_ring'))
		.itemInputs(Item.of('2x gtceu:fine_blazing_wire'))
		.inputFluids(Fluid.of('kubejs:floraethylene',36))
		.itemOutputs(Item.of('8x gtceu:inductor'))
		.duration(400)
		.EUt(30)
		event.recipes.gtceu.assembler('smd_inductor')
		.itemInputs(Item.of('1x gtceu:andesite_alloy_ring'))
		.itemInputs(Item.of('4x gtceu:fine_blazing_wire'))
		.inputFluids(Fluid.of('kubejs:floraethylene',144))
		.itemOutputs(Item.of('16x gtceu:smd_inductor'))
		.duration(160)
		.EUt(480)
		event.recipes.gtceu.assembler('smd_inductor_2')
		.itemInputs(Item.of('1x gtceu:andesite_alloy_ring'))
		.itemInputs(Item.of('4x gtceu:fine_synthetic_neuron_wire'))
		.inputFluids(Fluid.of('kubejs:floraethylene',144))
		.itemOutputs(Item.of('32x gtceu:smd_inductor'))
		.duration(160)
		.EUt(480)
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
		.inputFluids(Fluid.of('kubejs:floraethylene',144))
		.itemOutputs(Item.of('2x gtceu:diode'))
		.duration(400)
		.EUt(30)
		event.recipes.gtceu.assembler('smd_diode')
		.itemInputs(Item.of('1x gtceu:silicon_dust'))
		.itemInputs(Item.of('8x gtceu:fine_synthetic_neuron_wire'))
		.inputFluids(Fluid.of('kubejs:manafloraethylene',288))
		.itemOutputs(Item.of('32x gtceu:smd_diode'))
		.duration(200)
		.EUt(480)
		event.recipes.gtceu.assembler('smd_capacitor')
		.itemInputs(Item.of('1x kubejs:dense_insulator_sheet'))
		.itemInputs(Item.of('1x gtceu:synthetic_neuron_foil'))
		.inputFluids(Fluid.of('kubejs:crude_insulator',72))
		.itemOutputs(Item.of('16x gtceu:smd_capacitor'))
		.duration(120)
		.EUt(480)
		event.recipes.gtceu.assembler('smd_capacitor_2')
		.itemInputs(Item.of('1x kubejs:dense_insulator_sheet'))
		.itemInputs(Item.of('1x gtceu:magical_alloy_foil'))
		.inputFluids(Fluid.of('kubejs:crude_insulator',72))
		.itemOutputs(Item.of('8x gtceu:smd_capacitor'))
		.duration(80)
		.EUt(480)
		event.recipes.gtceu.assembler('smd_capacitor_3')
		.itemInputs(Item.of('2x kubejs:hyper_insulator_sheet'))
		.itemInputs(Item.of('1x gtceu:synthetic_neuron_foil'))
		.inputFluids(Fluid.of('kubejs:crude_insulator',72))
		.itemOutputs(Item.of('24x gtceu:smd_capacitor'))
		.duration(120)
		.EUt(480)
		event.recipes.gtceu.assembler('smd_capacitor_4')
		.itemInputs(Item.of('2x kubejs:hyper_insulator_sheet'))
		.itemInputs(Item.of('1x gtceu:magical_alloy_foil'))
		.inputFluids(Fluid.of('kubejs:crude_insulator',72))
		.itemOutputs(Item.of('12x gtceu:smd_capacitor'))
		.duration(80)
		.EUt(480)
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

		.duration(50)
		.EUt(16)
	event.recipes.gtceu.assembler('frostproof_machine_casing')
		.circuit(6)
		.itemInputs(Item.of('6x gtceu:awakened_echo_plate'))
		.itemInputs(Item.of('1x gtceu:awakened_echo_frame'))
		.itemOutputs(Item.of('1x gtceu:frostproof_machine_casing'))
		.duration(50)
		.EUt(16)

		event.recipes.gtceu.assembler('solid_machine_casing')
		.circuit(6)
		.itemInputs(Item.of('6x gtceu:natures_alloy_plate'))
		.itemInputs(Item.of('1x gtceu:natures_alloy_frame'))
		.itemOutputs(Item.of('1x gtceu:solid_machine_casing'))
		.duration(50)
		.EUt(16)
})
