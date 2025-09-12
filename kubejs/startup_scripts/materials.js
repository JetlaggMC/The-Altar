const $WireProperties = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties")

	GTCEuStartupEvents.registry('gtceu:material', event => {

        GTMaterials.get('gtceu:plutonium').addFlags(GTMaterialFlags.GENERATE_FRAME); // This is for materials already in GTCEU
        GTMaterials.get('gtceu:americium').addFlags(GTMaterialFlags.GENERATE_FRAME); 
        GTMaterials.get('gtceu:plutonium_241').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE); // This is for materials already in GTCEU
        GTMaterials.get('gtceu:brass').addFlags(GTMaterialFlags.GENERATE_GEAR); // This is for materials already in GTCEU
        GTMaterials.get('gtceu:cupronickel').addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW); // This is for materials already in GTCEU

    	GTMaterials.get('gtceu:plutonium_241').setProperty(PropertyKey.WIRE, new $WireProperties(GTValues.V[GTValues.IV],16,1))

});

GTCEuStartupEvents.materialModification( event => {
    TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("andesite_alloy"))
    //TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("manasteel"), $BotaniaItems.manaSteel)
    //TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("terrasteel"), $BotaniaItems.terrasteel)
    //TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("elementium"), $BotaniaItems.elementium)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('alloy')
        .parent('metallic')
    event.create('botanic')
        .parent('shiny')
})