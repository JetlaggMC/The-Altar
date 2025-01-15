const $WireProperties = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties")

	GTCEuStartupEvents.registry('gtceu:material', event => {

        GTMaterials.get('gtceu:plutonium').addFlags(GTMaterialFlags.GENERATE_FRAME); // This is for materials already in GTCEU
        GTMaterials.get('gtceu:americium').addFlags(GTMaterialFlags.GENERATE_FRAME); 
        GTMaterials.get('gtceu:plutonium_241').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE); // This is for materials already in GTCEU

    	GTMaterials.get('gtceu:plutonium_241').setProperty(PropertyKey.WIRE, new $WireProperties(GTValues.V[GTValues.IV],16,1))

});