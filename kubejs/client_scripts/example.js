JEIEvents.hideItems(event => {
  event.hide('gtceu:andesite_alloy_ingot')
  event.hide('ad_astra:hammer')
  event.hide('gtceu:ulv_dna_fabricator')
  event.hide('mekanism:block_charcoal')
  event.hide('mekanism:dust_charcoal')
  event.hide('thermal:charcoal_block')
  event.hide('thermal:machine_pyrolyzer')
  event.hide('thermal:dynamo_stirling')
  event.hide('gtceu:brittle_charcoal')
  event.hide('gtceu:charcoal_pile_igniter')
  event.hide('gtceu:firebrick')

})

ClientEvents.lang('en_us', event => {
  event.renameBlock('create:copper_casing', 'Cupronickel Casing')
  event.renameBlock('create:copper_valve_handle', 'Cupronickel Valve Handle')
})