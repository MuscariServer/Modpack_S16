// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	function jeihide(output) {
      event.hide(output)
	}
	jeihide('moreminecarts:chunk_loader');
	jeihide('moreminecarts:minecart_with_chunk_loader');
})