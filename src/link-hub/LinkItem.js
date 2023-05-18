import img_googleDrive from '../img/icon_GoogleDrive_.png';
import img_youtube from '../img/icon_youtube_.png';
import img_flickr from '../img/img_flickr.png';

import img_googleForm from '../img/google_form.png';
import img_tooruche from '../img/Tooru_3_squar.jpg';


// import img_2023paroto from '../img/2023_paroto.jpg';


import './LinkItem.scss';

function LinkItem(props) {
	var title = props.item.title;
	var description = props.item.description;
	var url = props.item.url;
	var backimage = props.item.backimage;

	

	// let img_ = require(backimage)

	let img = url => {
		if (url.includes('drive.google.com')) {
			return img_googleDrive;
		} else if (url.includes('youtube.com')) {
			return img_youtube;
		} else if (url.includes('flic.kr')) {
			return img_flickr;
		} else {
			return img_tooruche;
		}
	};

	return (
		<a className="link-item" href={url}>
			<h2>
				{title}
			</h2>
			<p>
				{description}
			</p>
			<img className="background" src={backimage}/>
			<img className="icon" src={img(url)} width="35px" />
		</a>
	);
}

export default LinkItem;

