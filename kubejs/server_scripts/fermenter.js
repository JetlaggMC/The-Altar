ServerEvents.recipes(event => {
	event.recipes.gtceu.fermenter('fermented_garlic_honey')
		.itemInputs(Item.of('8x veggiesdelight:garlic_clove'))
		.inputFluids(Fluid.of('create:honey',144))
		.itemOutputs(Item.of('veggiesdelight:fermented_garlic_honey'))
		.duration(150)
		.EUt(2)	
})
