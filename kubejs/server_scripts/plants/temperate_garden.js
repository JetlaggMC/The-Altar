
ServerEvents.recipes(event => {

    event.recipes.gtceu.temperate_garden('wheat_0')
    .itemInputs(Item.of('1x minecraft:wheat_seeds'))
    .inputFluids(Fluid.of('gtceu:fermented_biomass', 36))
    .itemOutputs(Item.of('2x minecraft:wheat'))
    .duration(12000)
    .EUt(244)	

    event.recipes.gtceu.temperate_garden('wheat_1')
    .notConsumable(Item.of('1x kubejs:wheat_1'))
    .itemInputs(Item.of('1x kubejs:wheat_seeds_1'))
    .inputFluids(Fluid.of('gtceu:fermented_biomass', 72))
    .itemOutputs(Item.of('4x minecraft:wheat'))
    .chancedOutput('1x kubejs:wheat_1',2000,500)
    .duration(4000)
    .EUt(244)	

    event.recipes.gtceu.temperate_garden('wheat_2')
    .notConsumable(Item.of('1x kubejs:wheat_2'))
    .itemInputs(Item.of('1x kubejs:wheat_seeds_2'))
    .inputFluids(Fluid.of('gtceu:fermented_biomass', 144))
    .itemOutputs(Item.of('8x minecraft:wheat'))
    .chancedOutput('1x kubejs:wheat_2',2000,500)
    .duration(1200)
    .EUt(244)	

})