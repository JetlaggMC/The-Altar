ServerEvents.recipes(event => {
	event.recipes.gtceu.centrifuge('noodles')
        .itemInputs(Item.of('1x #forge:dough'))
        .itemOutputs('1x farmersdelight:raw_pasta')
		.duration(200)
		.EUt(30)

})