ServerEvents.recipes(event => {
	event.remove({ output: 'gtceu:lv_emitter' })
	event.remove({ output: 'gtceu:lv_circuit_assembler' })
	event.remove({ output: 'gtceu:lv_voltage_coil' })
	event.remove({ output: 'gtceu:lv_energy_input_hatch' })

//voltage coil
		event.recipes.gtceu.assembler('lv_voltage_coil')
		.circuit(1)
		.itemInputs(Item.of('1x gtceu:blazing_rod'))
		.itemInputs(Item.of('16x gtceu:fine_natures_alloy_wire'))
		.itemOutputs(Item.of('1x gtceu:lv_voltage_coil'))
		.duration(200)
		.EUt(30)
//energy_hatch
		event.shaped('1x gtceu:lv_energy_input_hatch', [
    ' A ', 
    'BCB'
  ], {
    A: 'gtceu:lv_voltage_coil',
	B: 'gtceu:weak_synthetic_single_cable',
	C: 'gtceu:lv_machine_hull',
  }
)
	event.recipes.gtceu.assembler('lv_energy_input_hatch')
		.itemInputs(Item.of('1x gtceu:lv_voltage_coil'))
		.itemInputs(Item.of('2x gtceu:weak_blazing_single_cable'))
		.itemInputs(Item.of('1x gtceu:lv_machine_hull'))
		.itemOutputs(Item.of('1x gtceu:lv_energy_input_hatch'))
		.duration(200)
		.EUt(30)
//emitter
	event.shaped('1x gtceu:lv_emitter', [
    'ABC', 
    'BDB',
	'CBA'
  ], {
    A: 'gtceu:blazing_single_cable',
	B: 'gtceu:glowing_rod',
	C: '#gtceu:circuits/lv',
	D: 'kubejs:ender_shard'
  }
)
	event.recipes.gtceu.assembler('lv_emitter')
		.circuit(1)
		.itemInputs(Item.of('2x gtceu:blazing_single_cable'))
		.itemInputs(Item.of('4x gtceu:glowing_rod'))
		.itemInputs(Item.of('2x #gtceu:circuits/lv'))
		.itemInputs(Item.of('1x kubejs:ender_shard'))
		.itemOutputs(Item.of('1x gtceu:lv_emitter'))
		.duration(50)
		.EUt(30)
//circuit assembler
	event.shaped('1x gtceu:lv_circuit_assembler', [
    'ABC', 
    'DED',
	'FBF'
  ], {
    A: 'gtceu:lv_robot_arm',
	B: '#gtceu:circuits/mv',
	C: 'gtceu:lv_emitter',
	D: 'gtceu:lv_conveyor_module',
	E: 'gtceu:lv_machine_hull',
	F: 'gtceu:blazing_single_cable'

  }
)
	})