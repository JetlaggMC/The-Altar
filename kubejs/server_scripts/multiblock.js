MBDMachineEvents.onBeforeRecipeModify('mbd2:andesite_mechanical_drill', (event) => {
    const mbdEvent = event.getEvent();
    const { machine, recipe } = mbdEvent;

    let itemTrait = machine.getTraitByName("item_slot");
    if (itemTrait == null) return;
	
    let storage = itemTrait.storage;
    let upgradeCount = storage.getStackInSlot(0).count;
    let builder = recipe.toBuilder();
    //speed modifier, makes recipe go 1% faster every new upgrade installed
	if (itemTrait = "kubejs:creative_star_shard_alpha"){
    	let reductionFactor = Math.max(1 - 0.10 * upgradeCount, 0.1)
    	builder.duration = Math.ceil(recipe.duration * reductionFactor)
	}
	else if (itemTrait = "kubejs:creative_star_shard_beta"){
		//Input consumption chance reduction
	}
	else if (itemTrait = "kubejs:creative_star_shard_gamma"){
		//energy consumption reduction
	}
	else if (itemTrait = "kubejs:creative_star"){
		//parallel upgrade
	}
		let newRecipe = builder.buildMBDRecipe();
		mbdEvent.setRecipe(newRecipe);
		
	console.log(itemTrait);

});