
ServerEvents.recipes(event => {

    event.recipes.gtceu.temperate_garden('wheat_0')
    .circuit(1)
    .itemInputs(Item.of('1x minecraft:wheat_seeds'))
    .inputFluids(Fluid.of('gtceu:fermented_biomass', 36))
    .itemOutputs(Item.of('2x minecraft:wheat'))
    .duration(12000)
    .EUt(244)	

    event.recipes.gtceu.temperate_garden('wheat_1')
    .circuit(2)

    .notConsumable(Item.of('1x kubejs:wheat_1'))
    .itemInputs(Item.of('1x minecraft:wheat_seeds'))
    .inputFluids(Fluid.of('gtceu:fermented_biomass', 72))
    .itemOutputs(Item.of('4x minecraft:wheat'))
    .chancedOutput('1x kubejs:wheat_1',2000,500)
    .duration(4000)
    .EUt(244)	
    event.recipes.gtceu.temperate_garden('wheat_1_with_seed')
    .circuit(3)

    .notConsumable(Item.of('1x kubejs:wheat_1'))
    .itemInputs(Item.of('1x kubejs:wheat_seeds_1'))
    .inputFluids(Fluid.of('gtceu:fermented_biomass', 72))
    .inputFluids(Fluid.of('kubejs:growth_medium', 72))
    .itemOutputs('2x kubejs:wheat_1')
    .duration(4000)
    .EUt(244)	

    event.recipes.gtceu.temperate_garden('wheat_2_with_seed')
    .circuit(4)

    .notConsumable(Item.of('1x kubejs:wheat_2'))
    .itemInputs(Item.of('1x kubejs:wheat_seeds_2'))
    .inputFluids(Fluid.of('gtceu:fermented_biomass', 144))
    .inputFluids(Fluid.of('kubejs:growth_medium', 72))
    .itemOutputs('2x kubejs:wheat_2')
    .duration(1200)
    .EUt(244)	
})