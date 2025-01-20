ServerEvents.recipes(event => {
	event.remove({output:"botania:mana_powder"})
	event.remove({output:"botania:pure_daisy"})
	event.remove({output:"botania:endoflame"})
	event.remove({output:"botania:hydroangea"})
	event.remove({output:"botania:gaia_pylon"})
	event.remove({output:"mythicbotany:alfsteel_pylon"})

    event.recipes.botania.mana_infusion( "botania:mana_powder","gtceu:natures_alloy_dust", 200,"botania:mana_powder")
    event.recipes.botania.mana_infusion( "gtceu:phenolic_circuit_board","botania:livingwood_planks", 200,"gtceu:phenolic_circuit_board")
	
	event.shaped('1x botania:gaia_pylon', [
    ' A ', 
    'BCB',
	' A '
  ], {
    A: 'botania:pixie_dust',
	B: 'gtceu:elementium_ingot',
	C: 'botania:natura_pylon'

  }
)
})