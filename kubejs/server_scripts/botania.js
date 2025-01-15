ServerEvents.recipes(event => {
	event.remove({output:"botania:mana_powder"})
	event.remove({output:"botania:pure_daisy"})
	event.remove({output:"botania:endoflame"})
	event.remove({output:"botania:hydroangea"})

    event.recipes.botania.mana_infusion( "botania:mana_powder","gtceu:natures_alloy_dust", 200,"botania:mana_powder")
    event.recipes.botania.mana_infusion( "gtceu:phenolic_circuit_board","botania:livingwood_planks", 200,"gtceu:phenolic_circuit_board")

})