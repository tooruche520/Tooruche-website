import img_googleDrive from '../img/icon_GoogleDrive_.png';
import img_youtube from '../img/icon_youtube_.png';
import img_googleForm from '../img/google_form.png';
import img_tooruche from '../img/Tooru_3_squar.jpg'

import './LinkItem.scss';

function LinkItem(props) {
	var title = props.item.title;
	var description = props.item.description;
	var url = props.item.url;

	let img = url => {
		if (url.includes('drive.google.com')) {
			return img_googleDrive;
		} else if (url.includes('www.youtube.com')) {
			return img_youtube;
		} else {
			return img_tooruche;
		}
	};

	return (
		<a class="link-item" href={url}>
			<h2>
				{title}
			</h2>
			<p>
				{description}
			</p>
			<img src={img(url)} width="35px" />
		</a>
	);
}

export default LinkItem;
