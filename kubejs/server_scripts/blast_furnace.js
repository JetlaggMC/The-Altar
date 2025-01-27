ServerEvents.recipes(event => {
	event.remove({ output: 'gtceu:phosphorus_boule' })

	event.recipes.gtceu.electric_blast_furnace('awakened_echo')
		.itemInputs(Item.of('1x gtceu:awakened_echo_dust'))
		.itemOutputs(Item.of('1x gtceu:awakened_echo_ingot'))
		.blastFurnaceTemp(2700)
		.duration(400)
		.EUt(480)	
	event.recipes.gtceu.electric_blast_furnace('natures_alloy')
		.itemInputs(Item.of('1x gtceu:natures_alloy_dust'))
		.itemOutputs(Item.of('1x gtceu:natures_alloy_ingot'))
		.blastFurnaceTemp(1000)
		.duration(300)
		.EUt(120)	
	event.recipes.gtceu.electric_blast_furnace('black_iron')
		.itemInputs(Item.of('1x minecraft:iron_ingot'))
		.inputFluids(Fluid.of('kubejs:infused_source'),200)
		.itemOutputs(Item.of('1x extended_crafting:black_iron_ingot'))
		.blastFurnaceTemp(1000)
		.duration(300)
		.EUt(120)	
	event.recipes.gtceu.electric_blast_furnace('silicon_boule')
		.itemInputs(Item.of('32x gtceu:silicon_dust'))
		.itemInputs(Item.of('1x gtceu:arcane_gold_dust'))
		.inputFluids(Fluid.of('kubejs:infused_source'),200)
		.itemOutputs(Item.of('1x gtceu:silicon_boule'))
		.blastFurnaceTemp(1000)
		.duration(6000)
		.EUt(120)	
		event.recipes.gtceu.electric_blast_furnace('phosphorous_boule')
		.itemInputs(Item.of('64x gtceu:silicon_dust'))
		.itemInputs(Item.of('8x gtceu:awakened_echo_dust'))
		.itemInputs(Item.of('2x gtceu:small_weak_synthetic_dust'))
		.inputFluids(Fluid.of('kubejs:living_matter'),8000)
		.itemOutputs(Item.of('1x gtceu:phosphorus_boule'))
		.blastFurnaceTemp(2484)
		.duration(12000)
		.EUt(480)	
	event.recipes.gtceu.electric_blast_furnace('weak_synthetic')
		.itemInputs(Item.of('1x gtceu:weak_synthetic_dust'))
		.itemOutputs(Item.of('1x gtceu:weak_synthetic_ingot'))
		.blastFurnaceTemp(1700)
		.duration(300)
		.EUt(120)	
	event.recipes.gtceu.electric_blast_furnace('magical_alloy')
		.itemInputs(Item.of('1x gtceu:magical_alloy_dust'))
		.itemOutputs(Item.of('1x gtceu:magical_alloy_ingot'))
		.blastFurnaceTemp(1700)
		.duration(600)
		.EUt(120)	
		event.recipes.gtceu.electric_blast_furnace('synthetic_neuron')
		.itemInputs(Item.of('1x gtceu:synthetic_neuron_dust'))
		.itemOutputs(Item.of('1x gtceu:synthetic_neuron_ingot'))
		.blastFurnaceTemp(2700)
		.duration(500)
		.EUt(480)	
	event.recipes.gtceu.electric_blast_furnace('sterile_bio_alloy')
		.itemInputs(Item.of('1x gtceu:sterile_bio_alloy_dust'))
		.itemOutputs(Item.of('1x gtceu:sterile_bio_alloy_ingot'))
		.blastFurnaceTemp(2700)
		.duration(700)
		.EUt(480)	
})
