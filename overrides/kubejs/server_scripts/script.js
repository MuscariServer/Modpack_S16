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
  remove('telepastries:twilight_cake')
  remove('telepastries:end_cake')
  remove('telepastries:nether_cake')
  remove('telepastries:overworld_cake')

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

    e.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
          "AXWXWXB",
          "CDEFGHI",
          "JKLYMNO",
          "ZZZZZZZ"
        ],
        "key": {
          "W": {
            "item": 'croptopia:whipping_cream'
          },
          "X": {
            "item": 'minecraft:chorus_fruit'
          },
          "Y": {
            "item": 'minecraft:cake'
          },
          "Z": {
            "item": 'minecraft:obsidian'
          },
          "A": {
            "item": "endrem:black_eye"
          },
          "B": {
            "item": "endrem:corrupted_eye"
          },
          "C": {
            "item": "endrem:lost_eye"
          },
          "D": {
            "item": "endrem:nether_eye"
          },
          "E": {
            "item": "endrem:old_eye"
          },
          "F": {
            "item": "endrem:rogue_eye"
          },
          "G": {
            "item": "endrem:cursed_eye"
          },
          "H": {
            "item": "endrem:evil_eye"
          },
          "I": {
            "item": "endrem:guardian_eye"
          },
          "J": {
            "item": "endrem:magical_eye"
          },
          "K": {
            "item": "endrem:wither_eye"
          },
          "L": {
            "item": "endrem:witch_eye"
          },
          "M": {
            "item": "endrem:undead_eye"
          },
          "N": {
            "item": "endrem:exotic_eye"
          },
          "O": {
            "item": "endrem:cold_eye"
          }
        },
        "result": {
          "item": "telepastries:end_cake"
        },
        "acceptMirrored": false
    })
})