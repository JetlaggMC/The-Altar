ServerEvents.recipes(event => {
	event.recipes.gtceu.distillery('living_matter')
		.inputFluids(Fluid.of('kubejs:sterile_fluid', 1000))
        .outputFluids(Fluid.of('kubejs:living_matter', 500))
		.itemOutputs(Item.of('1x gtceu:sterile_bio_alloy_dust'))
		.duration(2000)
		.EUt(120)
})