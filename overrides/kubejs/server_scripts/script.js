// priority: 9999

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

onEvent('recipes', e => {
  function remove(id) {
	e.remove({id: id})
  }
  remove('moreminecarts:chunk_loader')
  remove('moreminecarts:minecart_with_chunk_loader')

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