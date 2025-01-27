ServerEvents.tags('item', event => {
    event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')
    event.remove('forge:ores/niter', 'thermal:niter_ore')
    event.remove('forge:ores/niter', 'thermal:deepslate_niter_ore')
    event.remove('forge:dusts/niter', 'thermal:niter_dust')
    event.remove('forge:gems/niter', 'thermal:niter')
    event.remove('forge:storage_blocks/niter', 'thermal:niter_block')
})