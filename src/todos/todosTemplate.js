import Template from '../engine/Template';

export default class Template extends Template {
	
	itemList(items) {
		return items.reduce((a, item) => a + `
<li data-id="${item.id}"${item.completed ? ' class="completed"' : ''}>
	<input class="toggle" type="checkbox" ${item.completed ? 'checked' : ''}>
	<label>${escapeForHTML(item.title)}</label>
	<button class="destroy"></button>
</li>`, '');
	}

	itemCounter(activeTodos) {
		return `${activeTodos} item${activeTodos !== 1 ? 's' : ''} left`;
	}
}