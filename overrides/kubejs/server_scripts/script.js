// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', e => {
	e.remove({id: 'moreminecarts:chunk_loader'})
	function press(held, output) {
	e.custom({
		"type": "create:deploying",
        "ingredients": [
            {
                "item": "minecraft:iron_block"
            },
            {
                "item": held
            }
        ],
        "results": [
            {
                "item": output
            }
        ],
        "keepHeldItem": true
	})}
	press('create:zinc_nugget', 'ae2:calculation_processor_press')
	press('create:brass_nugget', 'ae2:engineering_processor_press')
	press('minecraft:gold_nugget', 'ae2:logic_processor_press')
	press('create:copper_nugget', 'ae2:silicon_press')
})
