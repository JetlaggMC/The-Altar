ServerEvents.recipes(event => {
    event.remove({ output: "ad_astra:tier_1_rocket" })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "input": [
        {"item": "ad_astra:rocket_nose_cone"},
        {"tag": "ad_astra_platform:steel_blocks"},
        {"tag": "ad_astra_platform:steel_blocks"},
        {"tag": "ad_astra_platform:steel_blocks"},
        {"tag": "ad_astra_platform:steel_blocks"},
        {"tag": "ad_astra_platform:steel_blocks"},
        {"tag": "ad_astra_platform:steel_blocks"},
        {"item": "mekanism:basic_energy_cube"},
        {"item": "ad_astra:steel_tank"},
        {"item": "ad_astra:steel_tank"},
        {"item": "mekanism:basic_energy_cube"},
        {"item": "ad_astra:rocket_fin"},
        {"item": "ad_astra:steel_engine"},
        {"item": "ad_astra:rocket_fin"}
        ],
        "output": { item: "ad_astra:tier_1_rocket" }
    })
})