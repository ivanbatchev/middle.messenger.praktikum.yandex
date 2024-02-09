import avatar from '../../../static/images/user-image.svg';
import './profile-picture.scss';

export default `<img
	src='${avatar}'
	alt='аватар'
	class='avatar'
	width='{{ width }}'
	height={{ height }}
/>`;
