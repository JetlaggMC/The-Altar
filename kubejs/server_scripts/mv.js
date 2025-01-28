ServerEvents.recipes(event => {
	event.remove({ output: 'gtceu:mv_electric_motor' })
	event.remove({ output: 'gtceu:mv_electric_piston' })
	event.remove({ output: 'gtceu:mv_electric_pump' })
	event.remove({ output: 'gtceu:mv_robot_arm' })
	event.remove({ output: 'gtceu:mv_conveyor_module' })
	event.remove({ output: 'gtceu:mv_emitter' })
	event.remove({ output: 'gtceu:mv_cutter' })
	event.remove({ output: 'gtceu:mv_assembler' })
	event.remove({ output: 'gtceu:mv_voltage_coil' })
	event.remove({ output: 'gtceu:mv_energy_input_hatch' })
	event.remove({ output: 'gtceu:mv_circuit_assembler' })
	event.remove({ output: 'gtceu:kanthal_coil_block' })
	event.remove({ output: 'gtceu:mv_machine_casing' })
	event.remove({ output: 'gtceu:mv_laser_engraver' })

	event.recipes.extendedcrafting.shaped_table(
		"gtceu:mv_dna_fabricator",
		['ABCDA', 
		 'EFGHI',
		 'JKLKJ',
		 'MNOPQ',
		 'ARSTA'
	], {
	A: 'gtceu:mv_voltage_coil',
	B: 'botania:life_essence',
	C: 'botania:gaia_pylon',
	D: 'minecraft:echo_shard',
	E: 'kubejs:axolotl_model_1',
	F: 'kubejs:snow_golem_model_1',
	G: 'kubejs:pig_model_1',
	H: 'kubejs:sheep_model_1',
	I: 'kubejs:rabbit_model_1',
	J: 'gtceu:mv_conveyor_module',
    K: '#gtceu:circuits/hv',
	L: 'gtceu:mv_machine_hull',
	M: 'kubejs:cow_model_1',
	N: 'kubejs:squid_model_1',
	O: 'kubejs:chicken_model_1',
	P: 'kubejs:fish_model_1',
	Q: 'kubejs:bee_model_1',
	R: 'minecraft:nether_star',
	S: 'botania:gaia_pylon',
	T: 'minecraft:end_crystal'
	}).id('kubejs:extended/mv_dna_fabricator');
	event.shaped('1x gtceu:mv_machine_casing', [
		'AAA', 
		'ABA',
		'AAA'
	  ], {
		A: 'gtceu:magical_alloy_plate',
		B: '#forge:tools/wrenches'
	  }
	).damageIngredient('#forge:tools/wrenches')	
	event.shaped('1x gtceu:mv_machine_hull', [
    'ABA', 
    'CDC'
  ], {
    A: 'gtceu:elementium_plate',
	B: 'gtceu:magical_alloy_plate',
	C: 'gtceu:weak_synthetic_single_cable',
	D: 'gtceu:mv_machine_casing'
  }
)
	event.shaped('1x gtceu:mv_cutter', [
    'ABC', 
    'DEF',
	'BAG'
  ], {
    A: 'gtceu:weak_synthetic_single_cable',
	B: '#gtceu:circuits/mv',
	C: '#forge:glass',
	D: 'gtceu:mv_electric_piston',
	E: 'gtceu:mv_machine_hull',
	F: 'gtceu:magical_alloy_buzz_saw_blade',
	G: 'gtceu:mv_electric_motor'

  }
)
		
		event.shaped('1x gtceu:mv_steam_turbine', [
    'ABA', 
    'CDC',
	'EFE'
  ], {
    A: 'gtceu:natures_alloy_normal_fluid_pipe',
	B: '#gtceu:circuits/mv',
	C: 'gtceu:magical_alloy_rotor',
	D: 'gtceu:mv_machine_hull',
	E: 'gtceu:mv_electric_motor',
	F: 'gtceu:weak_synthetic_single_cable'
  }
)
	//assembler
		event.shaped('1x gtceu:mv_assembler', [
    'ABA', 
    'CDC',
	'EBE'
  ], {
    A: 'gtceu:mv_robot_arm',
	B: '#gtceu:circuits/mv',
	C: 'gtceu:mv_conveyor_module',
	D: 'gtceu:mv_machine_hull',
	E: 'gtceu:weak_synthetic_single_cable'
  }
)
	//circuit_assembler
		event.shaped('1x gtceu:mv_circuit_assembler', [
    'ABC', 
    'DED',
	'FBF'
  ], {
    A: 'gtceu:mv_robot_arm',
	B: '#gtceu:circuits/mv',
	C: 'gtceu:mv_emitter',
	D: 'gtceu:mv_conveyor_module',
	E: 'gtceu:mv_machine_hull',
	F: 'gtceu:weak_synthetic_single_cable'
  }
)
	//laser_engraver
	event.shaped('1x gtceu:mv_laser_engraver', [
		'ABA', 
		'CDC',
		'ECE'
	  ], {
		A: 'gtceu:mv_electric_piston',
		B: 'gtceu:mv_emitter',
		C: '#gtceu:circuits/mv',
		D: 'gtceu:mv_machine_hull',
		E: 'gtceu:weak_synthetic_single_cable'
	  }
	)
	//voltage coil
		event.recipes.gtceu.assembler('mv_voltage_coil')
		.circuit(1)
		.itemInputs(Item.of('1x gtceu:weak_synthetic_rod'))
		.itemInputs(Item.of('16x gtceu:fine_magical_alloy_wire'))
		.itemOutputs(Item.of('1x gtceu:mv_voltage_coil'))
		.duration(200)
		.EUt(120)
	
	//mv_energy_hatch
		event.shaped('1x gtceu:mv_energy_input_hatch', [
    ' A ', 
    'BCB',
	' D '
  ], {
    A: 'gtceu:mv_voltage_coil',
	B: 'gtceu:weak_synthetic_single_cable',
	C: 'gtceu:mv_machine_hull',
	D: 'gtceu:ulpic_chip'
  }
)
	event.recipes.gtceu.assembler('mv_energy_input_hatch')
		.itemInputs(Item.of('1x gtceu:mv_voltage_coil'))
		.itemInputs(Item.of('2x gtceu:weak_synthetic_single_cable'))
		.itemInputs(Item.of('1x gtceu:mv_machine_hull'))
		.itemInputs(Item.of('1x gtceu:ulpic_chip'))
		.itemOutputs(Item.of('1x gtceu:mv_energy_input_hatch'))
		.duration(200)
		.EUt(120)

	//electric motor
		event.shaped('1x gtceu:mv_electric_motor', [
    'ABC', 
    'BDB',
	'CBA'
  ], {
    A: 'gtceu:weak_synthetic_single_cable',
	B: 'gtceu:elementium_double_wire',
	C: 'gtceu:magical_alloy_rod',
	D: 'gtceu:magnetic_iron_rod'
  }
)
	event.recipes.gtceu.assembler('mv_electric_motor')
		.itemInputs(Item.of('2x gtceu:weak_synthetic_single_cable'))
		.itemInputs(Item.of('4x gtceu:elementium_double_wire'))
		.itemInputs(Item.of('2x gtceu:magical_alloy_rod'))
		.itemInputs(Item.of('1x gtceu:magnetic_iron_rod'))
		.itemOutputs(Item.of('1x gtceu:mv_electric_motor'))
		.duration(100)
		.EUt(30)
	
	//electric piston
		event.shaped('1x gtceu:mv_electric_piston', [
    'AAA', 
    'BCC',
	'BDE'
  ], {
    A: 'gtceu:magical_alloy_plate',
	B: 'gtceu:weak_synthetic_single_cable',
	C: 'gtceu:magical_alloy_rod',
	D: 'gtceu:mv_electric_motor',
	E: 'gtceu:small_magical_alloy_gear'
  }
)
	event.recipes.gtceu.assembler('mv_electric_piston')
		.itemInputs(Item.of('3x gtceu:magical_alloy_plate'))
		.itemInputs(Item.of('2x gtceu:weak_synthetic_single_cable'))
		.itemInputs(Item.of('2x gtceu:magical_alloy_rod'))
		.itemInputs(Item.of('1x gtceu:mv_electric_motor'))
		.itemInputs(Item.of('1x gtceu:small_magical_alloy_gear'))
		.itemOutputs(Item.of('1x gtceu:mv_electric_piston'))
		.duration(100)
		.EUt(30)
	
	//robot arm
		event.shaped('1x gtceu:mv_robot_arm', [
    'AAA', 
    'BCB',
	'DEC'
  ], {
    A: 'gtceu:weak_synthetic_single_cable',
	B: 'gtceu:mv_electric_motor',
	C: 'gtceu:magical_alloy_rod',
	D: 'gtceu:mv_electric_piston',
	E: '#gtceu:circuits/mv'
  }
)
	event.recipes.gtceu.assembler('mv_robot_arm')
		.itemInputs(Item.of('3x gtceu:weak_synthetic_single_cable'))
		.itemInputs(Item.of('2x gtceu:mv_electric_motor'))
		.itemInputs(Item.of('2x gtceu:magical_alloy_rod'))
		.itemInputs(Item.of('1x gtceu:mv_electric_piston'))
		.itemInputs(Item.of('1x #gtceu:circuits/mv'))
		.itemOutputs(Item.of('1x gtceu:mv_robot_arm'))
		.duration(100)
		.EUt(30)
	
//conveyor
	event.shaped('1x gtceu:mv_conveyor_module', [
    'AAA', 
    'BCB',
	'AAA'
  ], {
    A: 'gtceu:rubber_plate',
	B: 'gtceu:mv_electric_motor',
	C: 'gtceu:weak_synthetic_single_cable'
  }
)
	event.recipes.gtceu.assembler('mv_conveyor_module')
		.circuit(1)
		.inputFluids(Fluid.of('gtceu:crude_insulator',864))
		.itemInputs(Item.of('2x gtceu:mv_electric_motor'))
		.itemInputs(Item.of('1x gtceu:weak_synthetic_single_cable'))
		.itemOutputs(Item.of('1x gtceu:mv_conveyor_module'))

		.duration(100)
		.EUt(30)

//electric pump
	event.shaped('1x gtceu:mv_electric_pump', [
    'ABC', 
    'DEF',
	'CGH'
  ], {
    A: 'gtceu:magical_alloy_screw',
	B: 'gtceu:magical_alloy_rotor',
	C: 'gtceu:rubber_ring',
	D: '#forge:tools/screwdrivers',
	E: 'gtceu:natures_alloy_normal_fluid_pipe',
	F: '#forge:tools/wrenches',
	G: 'gtceu:mv_electric_motor',
	H: 'gtceu:weak_synthetic_single_cable'
  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers')	
	
	event.recipes.gtceu.assembler('mv_electric_pump')
		.itemInputs(Item.of('1x gtceu:magical_alloy_screw'))
		.itemInputs(Item.of('1x gtceu:magical_alloy_rotor'))
		.itemInputs(Item.of('2x gtceu:rubber_ring'))
		.itemInputs(Item.of('1x gtceu:natures_alloy_normal_fluid_pipe'))
		.itemInputs(Item.of('1x gtceu:mv_electric_motor'))
		.itemInputs(Item.of('1x gtceu:weak_synthetic_single_cable'))
		.itemOutputs(Item.of('1x gtceu:mv_electric_pump'))
		.duration(100)
		.EUt(30)	
	
//emitter
	event.shaped('1x gtceu:mv_emitter', [
    'ABC', 
    'BDB',
	'CBA'
  ], {
    A: 'gtceu:weak_synthetic_single_cable',
	B: 'gtceu:elementium_rod',
	C: '#gtceu:circuits/mv',
	D: 'botania:life_essence'
  }
)
	event.recipes.gtceu.assembler('mv_emitter')
		.circuit(1)
		.itemInputs(Item.of('2x gtceu:weak_synthetic_single_cable'))
		.itemInputs(Item.of('4x gtceu:elementium_rod'))
		.itemInputs(Item.of('2x #gtceu:circuits/mv'))
		.itemInputs(Item.of('1x botania:life_essence'))
		.itemOutputs(Item.of('1x gtceu:mv_emitter'))
		.duration(50)
		.EUt(30)
//coil
	event.recipes.gtceu.assembler('kanthal_coil_block')
		.itemInputs(Item.of('8x gtceu:elementium_double_wire'))
		.itemInputs(Item.of('8x gtceu:magical_alloy_foil'))
		.inputFluids(Fluid.of('kubejs:infused_source',144))
		.itemOutputs(Item.of('1x gtceu:kanthal_coil_block'))
		.duration(300)
		.EUt(120)

	})