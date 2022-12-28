import HeadIcon from '../img/Tooru_3_squar.jpg';
import LinkGroup from './LinkGroup';
import icon_twitter from '../img/twitter.svg';
import icon_twitch from '../img/twitch.svg';
import icon_youtube from '../img/youtube.svg';
import icon_discord from '../img/discord.svg';
import icon_email from '../img/email.svg';
import icon_marshmallow from '../img/marshmallow.svg';
import data_links from './links.json';

import './color.scss';
import './LinkHub.scss';

function LinkHub() {
	return (
		<div class="container">
			<div class="head">
				<img src={HeadIcon} width="100" alt="" />
				<h1>⚡晴海徹(小徹)⚡</h1>
				<p>這是小徹的各種酷酷ㄉ連結ㄛ</p>
			</div>

			<div class="icon-container">
				<a href="https://twitter.com/tooruche">
					<img src={icon_twitter} />
				</a>

				<a href="https://www.twitch.tv/tooruche520">
					<img src={icon_twitch} />
				</a>

				<a href="https://www.youtube.com/@tooruche/featured">
					<img src={icon_youtube} />
				</a>

				<a href="https://discord.gg/HeywMdKNf5">
					<img src={icon_discord} />
				</a>

				<a href="mailto:tooruche520@gmail.com">
					<img src={icon_email} />
				</a>

				<a href="https://marshmallow-qa.com/tooruche?utm_medium=url_text&utm_source=promotion">
					<img src={icon_marshmallow} />
				</a>
			</div>

			<div class="content">
				{data_links.map(group => {
					return <LinkGroup group={group} />;
				})}
			</div>
		</div>
	);
}

export default LinkHub;
