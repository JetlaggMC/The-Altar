ServerEvents.recipes(event => {
	event.remove({ output: 'gtceu:hv_electric_motor' })
	event.remove({ output: 'gtceu:hv_electric_piston' })
	event.remove({ output: 'gtceu:hv_electric_pump' })
	event.remove({ output: 'gtceu:hv_robot_arm' })
	event.remove({ output: 'gtceu:hv_conveyor_module' })
	event.remove({ output: 'gtceu:hv_emitter' })
	event.remove({ output: 'gtceu:hv_cutter' })
	event.remove({ output: 'gtceu:hv_assembler' })
	event.remove({ output: 'gtceu:hv_voltage_coil' })
	event.remove({ output: 'gtceu:hv_energy_input_hatch' })
	event.remove({ output: 'gtceu:hv_circuit_assembler' })
	event.remove({ output: 'gtceu:hv_machine_hull' })
	event.remove({ output: 'gtceu:nichrome_coil_block' })
	event.remove({ output: 'gtceu:hv_machine_casing' })
	event.remove({ output: 'gtceu:hv_laser_engraver' })

	event.recipes.extendedcrafting.shaped_table(
		"gtceu:hv_dna_fabricator",
		['ABCDEFA', 
		 'GHIJKHL',
		 'MNOPOQR',
		 'STPUPVS',
		 'XYOPOab',
		 'cHdefHg',
		 'AhijklA'
	], {
	A: 'gtceu:hv_voltage_coil',
	B: 'kubejs:cactus_1',
	C: 'kubejs:glowberries_1',
	D: 'kubejs:trees_1',
	E: 'kubejs:kelp_1',
	F: 'kubejs:wheat_seeds_1',
	G: 'kubejs:carrots_1',
	H: 'gtceu:synthetic_neuron_rotor',
	I: 'kubejs:spider_model_1',
	J: 'kubejs:skeleton_model_1',
    K: 'kubejs:slime_model_1',
	L: 'kubejs:potatoes_1',
	M: 'kubejs:mystical_flowers_1',
	N: 'kubejs:wither_skeleton_model_1',
	O: 'gtceu:awakened_echo_frame',
	P: '#gtceu:circuits/ev',
	Q: 'kubejs:phantom_model_1',
	R: 'kubejs:sourceberries_1',
	S: 'gtceu:hv_conveyor_module',
	T: 'kubejs:blaze_model_1',
	U: 'gtceu:hv_machine_hull',
	V: 'kubejs:shulker_model_1',
	X: 'kubejs:squid_model_2',
	Y: 'kubejs:magma_model_1',
	a: 'kubejs:enderman_model_1',
	b: 'kubejs:bee_model_2',
	c: 'kubejs:cow_model_2',
	d: 'kubejs:ghast_model_1',
	e: 'kubejs:creeper_model_1',
	f: 'kubejs:zombie_model_1',
	g: 'kubejs:fish_model_2',
	h: 'kubejs:sheep_model_2',
	i: 'kubejs:rabbit_model_2',
	j: 'kubejs:pig_model_2',
	k: 'kubejs:chicken_model_2',
	l: 'kubejs:axolotl_model_2'

	}).id('kubejs:extended/hv_dna_fabricator');
	event.shaped('1x gtceu:hv_machine_casing', [
		'AAA', 
		'ABA',
		'AAA'
	  ], {
		A: 'gtceu:sterile_bio_alloy_plate',
		B: '#forge:tools/wrenches'
	  }
	).damageIngredient('#forge:tools/wrenches')	
	event.recipes.gtceu.assembler('hv_machine_casing')
	.circuit(8)
	.itemInputs(Item.of('8x gtceu:sterile_bio_alloy_plate'))
	.itemOutputs(Item.of('1x gtceu:hv_machine_casing'))
	.duration(50)
	.EUt(16)
	event.shaped('1x gtceu:hv_machine_hull', [
    'ABA', 
    'CDC'
  ], {
    A: 'gtceu:synthetic_neuron_plate',
	B: 'gtceu:sterile_bio_alloy_plate',
	C: 'gtceu:awakened_echo_single_cable',
	D: 'gtceu:hv_machine_casing'
  }
)
event.recipes.gtceu.assembler('hv_machine_hull')
.itemInputs(Item.of('1x gtceu:hv_machine_casing'))
.itemInputs(Item.of('2x gtceu:awakened_echo_single_cable'))
.inputFluids(Fluid.of('kubejs:dense_insulator',288))
.itemOutputs(Item.of('1x gtceu:hv_machine_hull'))
.duration(50)
.EUt(16)
	event.shaped('1x gtceu:hv_cutter', [
    'ABC', 
    'DEF',
	'BAG'
  ], {
    A: 'gtceu:awakened_echo_single_cable',
	B: '#gtceu:circuits/hv',
	C: '#forge:glass',
	D: 'gtceu:hv_electric_piston',
	E: 'gtceu:hv_machine_hull',
	F: 'gtceu:sterile_bio_alloy_buzz_saw_blade',
	G: 'gtceu:hv_electric_motor'

  }
)
		
		event.shaped('1x gtceu:hv_steam_turbine', [
    'ABA', 
    'CDC',
	'EFE'
  ], {
    A: 'gtceu:magical_alloy_normal_fluid_pipe',
	B: '#gtceu:circuits/hv',
	C: 'gtceu:sterile_bio_alloy_rotor',
	D: 'gtceu:hv_machine_hull',
	E: 'gtceu:hv_electric_motor',
	F: 'gtceu:awakened_echo_single_cable'
  }
)
	//assembler
		event.shaped('1x gtceu:hv_assembler', [
    'ABA', 
    'CDC',
	'EBE'
  ], {
    A: 'gtceu:hv_robot_arm',
	B: '#gtceu:circuits/hv',
	C: 'gtceu:hv_conveyor_module',
	D: 'gtceu:hv_machine_hull',
	E: 'gtceu:awakened_echo_single_cable'
  }
)
	//circuit_assembler
		event.shaped('1x gtceu:hv_circuit_assembler', [
    'ABC', 
    'DED',
	'FBF'
  ], {
    A: 'gtceu:hv_robot_arm',
	B: '#gtceu:circuits/ev',
	C: 'gtceu:hv_emitter',
	D: 'gtceu:hv_conveyor_module',
	E: 'gtceu:hv_machine_hull',
	F: 'gtceu:awakened_echo_single_cable'
  }
)
	//laser_engraver
	event.shaped('1x gtceu:hv_laser_engraver', [
		'ABA', 
		'CDC',
		'ECE'
	  ], {
		A: 'gtceu:hv_electric_piston',
		B: 'gtceu:hv_emitter',
		C: '#gtceu:circuits/hv',
		D: 'gtceu:hv_machine_hull',
		E: 'gtceu:awakened_echo_single_cable'
	  }
	)
	//voltage coil
		event.recipes.gtceu.assembler('hv_voltage_coil')
		.circuit(1)
		.itemInputs(Item.of('1x gtceu:awakened_echo_rod'))
		.itemInputs(Item.of('16x gtceu:fine_sterile_bio_alloy_wire'))
		.itemOutputs(Item.of('1x gtceu:hv_voltage_coil'))
		.duration(200)
		.EUt(120)
	
	//hv_energy_hatch
	    event.shaped('1x gtceu:hv_energy_input_hatch', [
    ' A ', 
    'BCB',
	' D '
  ], {
    A: 'gtceu:hv_voltage_coil',
	B: 'gtceu:awakened_echo_single_cable',
	C: 'gtceu:hv_machine_hull',
	D: 'gtceu:lpic_chip'
  }
)
	event.recipes.gtceu.assembler('hv_energy_input_hatch')
		.itemInputs(Item.of('1x gtceu:hv_voltage_coil'))
		.itemInputs(Item.of('2x gtceu:awakened_echo_single_cable'))
		.itemInputs(Item.of('1x gtceu:hv_machine_hull'))
		.itemInputs(Item.of('1x gtceu:ulpic_chip'))
		.itemOutputs(Item.of('1x gtceu:hv_energy_input_hatch'))
		.duration(200)
		.EUt(120)

	//electric motor
		event.shaped('1x gtceu:hv_electric_motor', [
    'ABC', 
    'BDB',
	'CBA'
  ], {
    A: 'gtceu:awakened_echo_single_cable',
	B: 'gtceu:synthetic_neuron_double_wire',
	C: 'gtceu:sterile_bio_alloy_rod',
	D: 'gtceu:magnetic_iron_rod'
  }
)
	event.recipes.gtceu.assembler('hv_electric_motor')
		.itemInputs(Item.of('2x gtceu:awakened_echo_single_cable'))
		.itemInputs(Item.of('4x gtceu:synthetic_neuron_double_wire'))
		.itemInputs(Item.of('2x gtceu:sterile_bio_alloy_rod'))
		.itemInputs(Item.of('1x gtceu:magnetic_iron_rod'))
		.itemOutputs(Item.of('1x gtceu:hv_electric_motor'))
		.duration(100)
		.EUt(30)
	
	//electric piston
		event.shaped('1x gtceu:hv_electric_piston', [
    'AAA', 
    'BCC',
	'BDE'
  ], {
    A: 'gtceu:sterile_bio_alloy_plate',
	B: 'gtceu:awakened_echo_single_cable',
	C: 'gtceu:sterile_bio_alloy_rod',
	D: 'gtceu:hv_electric_motor',
	E: 'gtceu:small_sterile_bio_alloy_gear'
  }
)
	event.recipes.gtceu.assembler('hv_electric_piston')
		.itemInputs(Item.of('3x gtceu:sterile_bio_alloy_plate'))
		.itemInputs(Item.of('2x gtceu:awakened_echo_single_cable'))
		.itemInputs(Item.of('2x gtceu:sterile_bio_alloy_rod'))
		.itemInputs(Item.of('1x gtceu:hv_electric_motor'))
		.itemInputs(Item.of('1x gtceu:small_sterile_bio_alloy_gear'))
		.itemOutputs(Item.of('1x gtceu:hv_electric_piston'))
		.duration(100)
		.EUt(30)
	
	//robot arm
		event.shaped('1x gtceu:hv_robot_arm', [
    'AAA', 
    'BCB',
	'DEC'
  ], {
    A: 'gtceu:awakened_echo_single_cable',
	B: 'gtceu:hv_electric_motor',
	C: 'gtceu:sterile_bio_alloy_rod',
	D: 'gtceu:hv_electric_piston',
	E: '#gtceu:circuits/hv'
  }
)
	event.recipes.gtceu.assembler('hv_robot_arm')
		.itemInputs(Item.of('3x gtceu:awakened_echo_single_cable'))
		.itemInputs(Item.of('2x gtceu:hv_electric_motor'))
		.itemInputs(Item.of('2x gtceu:sterile_bio_alloy_rod'))
		.itemInputs(Item.of('1x gtceu:hv_electric_piston'))
		.itemInputs(Item.of('1x #gtceu:circuits/hv'))
		.itemOutputs(Item.of('1x gtceu:hv_robot_arm'))
		.duration(100)
		.EUt(30)
	
//conveyor
	event.shaped('1x gtceu:hv_conveyor_module', [
    'AAA', 
    'BCB',
	'AAA'
  ], {
    A: 'gtceu:rubber_plate',
	B: 'gtceu:hv_electric_motor',
	C: 'gtceu:awakened_echo_single_cable'
  }
)
	event.recipes.gtceu.assembler('hv_conveyor_module')
		.circuit(1)
		.inputFluids(Fluid.of('gtceu:dense_insulator',864))
		.itemInputs(Item.of('2x gtceu:hv_electric_motor'))
		.itemInputs(Item.of('1x gtceu:awakened_echo_single_cable'))
		.itemOutputs(Item.of('1x gtceu:hv_conveyor_module'))

		.duration(100)
		.EUt(30)

//electric pump
	event.shaped('1x gtceu:hv_electric_pump', [
    'ABC', 
    'DEF',
	'CGH'
  ], {
    A: 'gtceu:sterile_bio_alloy_screw',
	B: 'gtceu:sterile_bio_alloy_rotor',
	C: 'gtceu:rubber_ring',
	D: '#forge:tools/screwdrivers',
	E: 'gtceu:magical_alloy_normal_fluid_pipe',
	F: '#forge:tools/wrenches',
	G: 'gtceu:hv_electric_motor',
	H: 'gtceu:awakened_echo_single_cable'
  }
).damageIngredient('#forge:tools/wrenches').damageIngredient('#forge:tools/screwdrivers')	
	
	event.recipes.gtceu.assembler('hv_electric_pump')
		.itemInputs(Item.of('1x gtceu:sterile_bio_alloy_screw'))
		.itemInputs(Item.of('1x gtceu:sterile_bio_alloy_rotor'))
		.itemInputs(Item.of('2x gtceu:rubber_ring'))
		.itemInputs(Item.of('1x gtceu:magical_alloy_normal_fluid_pipe'))
		.itemInputs(Item.of('1x gtceu:hv_electric_motor'))
		.itemInputs(Item.of('1x gtceu:awakened_echo_single_cable'))
		.itemOutputs(Item.of('1x gtceu:hv_electric_pump'))
		.duration(100)
		.EUt(30)	
	
//emitter
	event.shaped('1x gtceu:hv_emitter', [
    'ABC', 
    'BDB',
	'CBA'
  ], {
    A: 'gtceu:awakened_echo_single_cable',
	B: 'gtceu:synthetic_neuron_rod',
	C: '#gtceu:circuits/hv',
	D: 'botania:corporea_spark_master'
  }
)
	event.recipes.gtceu.assembler('hv_emitter')
		.circuit(1)
		.itemInputs(Item.of('2x gtceu:awakened_echo_single_cable'))
		.itemInputs(Item.of('4x gtceu:synthetic_neuron_rod'))
		.itemInputs(Item.of('2x #gtceu:circuits/hv'))
		.itemInputs(Item.of('1x botania:life_essence'))
		.itemOutputs(Item.of('1x gtceu:hv_emitter'))
		.duration(50)
		.EUt(30)
//coil
	event.recipes.gtceu.assembler('nichrome_coil_block')
		.itemInputs(Item.of('8x gtceu:synthetic_neuron_double_wire'))
		.itemInputs(Item.of('8x gtceu:sterile_bio_alloy_foil'))
		.inputFluids(Fluid.of('kubejs:manafloraethylene',144))
		.itemOutputs(Item.of('1x gtceu:nichrome_coil_block'))
		.duration(300)
		.EUt(120)

	})