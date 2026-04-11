ServerEvents.tags('item', event => {
    event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')

    event.remove('forge:ores/niter', 'thermal:niter_ore')
    event.remove('forge:ores/niter', 'thermal:deepslate_niter_ore')
    event.remove('forge:dusts/niter', 'thermal:niter_dust')
    event.remove('forge:gems/niter', 'thermal:niter')
    event.remove('forge:storage_blocks/niter', 'thermal:niter_block')
})


ServerEvents.tags('block', event => {
	event.add('create:wrench_pickup', 'mbd2:andesite_input_bus')
	event.add('create:wrench_pickup', 'mbd2:andesite_output_bus')
	event.add('create:wrench_pickup', 'mbd2:brass_input_bus')
	event.add('create:wrench_pickup', 'mbd2:brass_output_bus')
	event.add('create:wrench_pickup', 'mbd2:cupronickel_input_hatch')
	event.add('create:wrench_pickup', 'mbd2:cupronickel_output_hatch')
	event.add('create:wrench_pickup', 'mbd2:kinetic_stress_input')
	event.add('create:wrench_pickup', 'mbd2:kinetic_foundry')
	event.add('create:wrench_pickup', 'mbd2:casting_tower')
	event.add('create:wrench_pickup', 'mbd2:large_mechanical_press')
	event.add('create:wrench_pickup', 'mbd2:large_mechanical_mixer')
	event.add('create:wrench_pickup', 'mbd2:andesite_mechanical_drill')
	event.add('create:wrench_pickup', 'mbd2:brass_mechanical_drill')
	event.add('forge:stripped_logs', 'gtceu:stripped_rubber_log')

})
