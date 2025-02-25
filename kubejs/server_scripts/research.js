ServerEvents.recipes(event => {	
	event.recipes.gtceu.altar_research('primitive_research')
    .notConsumable('kubejs:primitive_star')
    .itemInputs(
            '1x minecraft:glass_bottle',
            '1x minecraft:andesite',
            '1x minecraft:dirt',
            '1x minecraft:amethyst_shard',
            '1x minecraft:iron_nugget'

    )
    .itemOutputs(
            '1x kubejs:primitive_research'
    )
    .circuit(1)
    .duration(600)
    .rpm(32)

})
