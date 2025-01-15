ServerEvents.recipes(event => {
	event.recipes.gtceu.alloy_smelter('sourcestone')
		.itemInputs(Item.of('1x kubejs:source_gem_dust'))
		.itemInputs(Item.of('8x #forge:stone'))
		.itemOutputs(Item.of('8x ars_nouveau:sourcestone'))
		.duration(200)
		.EUt(8)	
})
