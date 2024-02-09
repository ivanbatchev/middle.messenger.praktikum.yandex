import './input.scss';

export default `<div class='labled-input'>
	<label class='labled-input__label' for="{{name}}">{{ label }}</label>
	<input
		class='labled-input__input {{class}}'
		required
		placeholder='{{ placeholder }}'
		autocomplete='off'
		type='{{ type }}'
		name='{{ name }}'
		id="{{name}}"
	/>
</div>`;
