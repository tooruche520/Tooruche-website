import HeadIcon from "../img/Tooru_3_squar.jpg";
import LinkGroup from "./LinkGroup";
import icon_twitter from "../img/twitter.svg";
import icon_twitch from "../img/twitch.svg";
import icon_youtube from "../img/youtube.svg";
import icon_discord from "../img/discord.svg";
import icon_email from "../img/email.svg";
import icon_marshmallow from "../img/marshmallow.svg";
import data_links from "./links.json";
import { IoMdMoon } from "react-icons/io";
import {HiSun} from 'react-icons/hi'
import useLocalStorage from "use-local-storage";

// import "./color.scss";
import "./LinkHub.scss";

function LinkHub() {
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;
    const [theme, setTheme] = useLocalStorage(
        "theme",
        defaultDark ? "dark" : "light"
    );

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

	const test = theme =>{
		if (theme === "light") {
			return <IoMdMoon/>
		}else{
			return <HiSun/>
		}
	}

    return (
        <div className="container" data-theme={theme}>
            <div className="change-theme" onClick={switchTheme}>
                {/* <IoMdMoon /> */}
                {test(theme)}
            </div>
            <div className="head">
                <img src={HeadIcon} width="100" alt="" />
                <h1>⚡晴海徹(小徹)⚡</h1>
                <p>這是小徹的各種酷酷ㄉ連結ㄛ</p>
            </div>

            <div className="icon-container">
                <a href="https://twitter.com/tooruche">
                    {/* <img src={icon_twitter} /> */}
					<svg width="30" height="25" viewBox="0 0 30 25" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M29.2848 3.5462C28.2148 4.01528 27.0694 4.338 25.8622 4.48436C27.094 3.74529 28.0358 2.57622 28.4848 1.18352C27.3294 1.85624 26.0513 2.3435 24.6922 2.61895C23.6086 1.45897 22.0595 0.728989 20.3405 0.728989C17.0451 0.728989 14.3742 3.39893 14.3742 6.68977C14.3742 7.16339 14.4315 7.61793 14.5306 8.04883C9.57343 7.81702 5.17898 5.43525 2.23996 1.83715C1.7236 2.71349 1.42997 3.73165 1.42997 4.83981C1.42997 6.9134 2.4854 8.73154 4.08082 9.80061C3.10539 9.77243 2.18723 9.50243 1.3827 9.0579V9.12971C1.3827 12.0215 3.4372 14.4323 6.16441 14.9814C5.66715 15.1132 5.13626 15.1896 4.59718 15.1896C4.21446 15.1896 3.84901 15.1523 3.48447 15.085C4.25173 17.4523 6.44804 19.1759 9.06617 19.2277C7.03076 20.8231 4.45082 21.774 1.67088 21.774C1.19725 21.774 0.724535 21.7513 0.25 21.694C2.90176 23.3849 6.03169 24.3739 9.41252 24.3739C20.3823 24.3739 26.3767 15.2878 26.3767 7.41884C26.3767 7.16794 26.3767 6.91249 26.3576 6.65613C27.5276 5.82251 28.5403 4.76617 29.3403 3.56893L29.2848 3.5462Z"
							 />
					</svg>
                </a>

                <a href="https://www.twitch.tv/tooruche520">
                    {/* <img src={icon_twitch} /> */}
					<svg width="27" height="31" viewBox="0 0 27 31" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13.0245 6.45906H15.1646V12.8771H13.0232L13.0245 6.45906ZM18.9084 6.45906H21.0474V12.8771H18.9084V6.45906ZM6.07225 0.576332L0.723633 5.92495V25.178H7.14172V30.5266L12.4903 25.178H16.7682L26.396 15.5515V0.576332H6.07225ZM24.2558 14.482L19.9779 18.7599H15.6988L11.955 22.5037V18.7599H7.14172V2.71528H24.2558V14.482Z"
							 />
					</svg>
                </a>

                <a href="https://www.youtube.com/@tooruche/featured">
                    {/* <img src={icon_youtube} /> */}
					<svg width="36" height="25" viewBox="0 0 36 25" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M34.4184 4.25262C34.0233 2.76481 32.8591 1.59305 31.3809 1.1954C28.7016 0.472824 17.9578 0.472824 17.9578 0.472824C17.9578 0.472824 7.21412 0.472824 4.53474 1.1954C3.05656 1.59312 1.89235 2.76481 1.49722 4.25262C0.779297 6.94936 0.779297 12.5759 0.779297 12.5759C0.779297 12.5759 0.779297 18.2024 1.49722 20.8991C1.89235 22.3869 3.05656 23.5098 4.53474 23.9075C7.21412 24.6301 17.9578 24.6301 17.9578 24.6301C17.9578 24.6301 28.7015 24.6301 31.3809 23.9075C32.8591 23.5098 34.0233 22.3869 34.4184 20.8991C35.1363 18.2024 35.1363 12.5759 35.1363 12.5759C35.1363 12.5759 35.1363 6.94936 34.4184 4.25262ZM14.444 17.6843V7.46742L23.4236 12.576L14.444 17.6843Z"
							 />
					</svg>
                </a>

                <a href="https://discord.gg/HeywMdKNf5">
                    {/* <img src={icon_discord} /> */}
					<svg width="37" height="27" viewBox="0 0 37 27" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M25.0276 23.9865L27.038 26.3798C33.7394 26.2841 36.3242 21.7846 36.3242 21.7846C36.3242 11.8282 31.9204 3.88232 31.9204 3.88232C27.4209 0.723099 23.3044 0.723099 23.3044 0.723099L22.8257 1.10603C27.8996 2.44631 31.1545 5.03113 31.0588 5.12686C25.7934 1.10603 12.3907 0.723099 5.88076 5.12686C5.88076 5.12686 8.27411 2.63778 13.8267 1.10603L13.5395 0.723099C13.5395 0.723099 9.42292 0.723099 4.92342 3.88232C4.92342 3.88232 0.519653 11.8282 0.519653 21.7846C0.519653 21.7846 3.10447 26.2841 9.80585 26.3798L12.0077 23.9865C7.98691 22.7419 6.64663 20.2528 6.64663 20.2528C11.912 25.1353 25.5062 24.9438 30.4844 20.2528C30.4844 20.2528 28.9527 22.9334 25.0276 23.9865ZM23.783 18.9125C25.5278 18.9125 26.9422 17.4124 26.9422 15.5619C26.9422 13.7113 25.5278 12.2112 23.783 12.2112C22.0382 12.2112 20.6238 13.7113 20.6238 15.5619C20.6238 17.4124 22.0382 18.9125 23.783 18.9125ZM12.678 18.9126C14.4228 18.9126 15.8372 17.4124 15.8372 15.5619C15.8372 13.7113 14.4228 12.2112 12.678 12.2112C10.9332 12.2112 9.51874 13.7113 9.51874 15.5619C9.51874 17.4124 10.9332 18.9126 12.678 18.9126Z"
							 />
					</svg>
                </a>

                <a href="https://github.com/tooruche520">
                    {/* <img src={icon_discord} /> */}
					<svg width="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m0 0h24v24h-24z" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/><path d="m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77"/></svg>
                </a>

                <a href="mailto:tooruche520@gmail.com">
                    {/* <img src={icon_email} /> */}
					<svg width="31" height="25" viewBox="0 0 31 25" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M27.3081 0.728989H3.66314C2.03755 0.728989 0.722298 2.05902 0.722298 3.68461L0.70752 21.4183C0.70752 23.0439 2.03755 24.3739 3.66314 24.3739H27.3081C28.9337 24.3739 30.2637 23.0439 30.2637 21.4183V3.68461C30.2637 2.05902 28.9337 0.728989 27.3081 0.728989ZM26.717 7.00967L16.2688 13.5416C15.7959 13.8371 15.1753 13.8371 14.7024 13.5416L4.25426 7.00967C3.88481 6.77323 3.66314 6.37422 3.66314 5.94565C3.66314 4.95552 4.74194 4.3644 5.58429 4.88163L15.4856 11.0736L25.3869 4.88163C26.2293 4.3644 27.3081 4.95552 27.3081 5.94565C27.3081 6.37422 27.0864 6.77323 26.717 7.00967Z"
							 />
					</svg>
                </a>

                <a href="https://marshmallow-qa.com/tooruche?utm_medium=url_text&utm_source=promotion">
                    {/* <img src={icon_marshmallow} /> */}
					<svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_132_119)">
							<path
								d="M13.0671 0.129309C10.746 0.749987 8.12108 2.52798 5.39268 5.32103C2.89703 7.8684 1.3324 10.2929 0.776373 12.4718C0.659995 12.9244 0.640599 13.1442 0.659995 13.8295C0.692322 14.7864 0.834561 15.2842 1.33886 16.1118C2.68367 18.3488 8.08229 23.7669 10.4163 25.228C12.149 26.3207 13.9399 26.2366 16.3903 24.963C19.7718 23.1979 23.845 19.1247 25.61 15.7433C26.8837 13.2929 26.9678 11.502 25.8751 9.76924C24.4139 7.43522 18.9959 2.0366 16.7589 0.691799C15.899 0.174566 15.4399 0.0387917 14.4184 0.0193958C13.7072 0.00646591 13.455 0.0258617 13.0671 0.129309ZM13.6102 2.19824C13.843 2.41806 13.8688 2.65728 13.7072 3.13573C13.3775 4.12493 12.3947 5.74129 11.2762 7.14428C10.5262 8.0753 8.3603 10.2477 7.5004 10.9265C6.57585 11.6636 5.60603 12.2907 4.7332 12.7175C3.86684 13.1442 3.7246 13.2929 3.76339 13.7196C3.80219 14.1011 3.95736 14.3403 4.2483 14.4631C4.46166 14.5472 4.51338 14.5472 4.9401 14.4114C7.86246 13.4739 12.6469 9.01278 14.7093 5.31457C15.1748 4.48053 15.608 3.4202 15.7567 2.76073C15.8214 2.48918 15.899 2.26289 15.9313 2.26289C16.1123 2.26289 17.8774 3.70468 19.2157 4.93311C21.22 6.78868 23.6251 9.4589 24.3105 10.6033C25.0734 11.877 25.0217 13.0601 24.123 14.8252C22.5454 17.9221 18.5757 21.8983 15.4852 23.4694C13.7072 24.3746 12.4982 24.4328 11.2568 23.6763C9.49821 22.6031 5.15346 18.3553 3.34314 15.9372C2.15351 14.3403 2.10825 13.2153 3.17504 11.1205C3.98322 9.52355 5.06941 8.11409 6.91851 6.27145C8.98098 4.20252 10.5715 3.03228 12.4076 2.21764C12.9831 1.96548 13.3516 1.95902 13.6102 2.19824Z"
								 />
							<path
								d="M16.1964 8.13995C15.5499 8.43089 15.2266 9.19381 15.4917 9.81449C15.6986 10.3123 16.2029 10.6679 16.7136 10.6679C17.4765 10.6679 18.0326 10.1119 18.039 9.34898C18.039 8.3921 17.0563 7.74556 16.1964 8.13995Z"
								 />
							<path
								d="M20.8579 9.82742C20.5282 9.99552 20.3859 10.1248 20.1984 10.4416C19.8622 11.0235 19.9592 11.7283 20.4441 12.2132C21.3881 13.1442 22.9592 12.4912 22.9527 11.1722C22.9462 10.5774 22.5777 10.0278 22.0346 9.80156C21.7049 9.65932 21.1682 9.67225 20.8579 9.82742Z"
								 />
							<path
								d="M18.0519 13.8166C18.0067 13.836 17.6899 14.1851 17.3407 14.5989C16.6231 15.4653 16.08 16.0148 15.3882 16.5708C14.5865 17.2174 14.483 17.3273 14.483 17.5601C14.483 17.7217 14.5542 17.8251 14.8386 18.0967C15.6339 18.8531 16.6554 18.9889 17.6963 18.4846C19.1381 17.7928 19.8687 16.0471 19.2351 14.8058C18.8472 14.0429 18.4075 13.6743 18.0519 13.8166Z"
								 />
							<path
								d="M9.54346 14.8381C8.88399 15.0709 8.51546 15.8338 8.74175 16.4933C8.98744 17.2239 9.80855 17.5924 10.5262 17.295C11.399 16.9264 11.5865 15.7821 10.8818 15.1161C10.5133 14.7605 10.0348 14.6635 9.54346 14.8381Z"
								 />
							<path
								d="M11.3537 19.4286C9.78264 19.991 10.1641 22.3057 11.8322 22.3057C13.1447 22.3057 13.7847 20.7346 12.8602 19.7971C12.4464 19.3833 11.8774 19.2411 11.3537 19.4286Z"
								 />
							<path
								d="M28.5583 15.8209C28.1057 16.267 28.0346 16.17 30.6013 18.7303C32.6832 20.8186 32.8966 21.0126 33.097 21.0126C33.3944 21.0126 33.75 20.657 33.75 20.3531C33.75 20.1592 33.5625 19.9523 31.4677 17.8575C28.9074 15.2972 29.0044 15.3683 28.5583 15.8209Z"
								 />
							<path
								d="M22.9527 22.3057C22.5001 22.7582 22.4226 22.6419 24.9764 25.2022C26.2242 26.4565 27.3169 27.4974 27.3945 27.5168C27.7177 27.6008 28.2479 27.0707 28.1638 26.7474C28.1445 26.6698 27.1035 25.5772 25.8492 24.3229C23.2889 21.7755 23.4053 21.8531 22.9527 22.3057Z"
								 />
							<path
								d="M16.4679 27.9112C16.0154 28.3638 15.9442 28.2603 18.511 30.8271C20.5929 32.9089 20.8062 33.1029 21.0067 33.1029C21.3041 33.1029 21.6597 32.7473 21.6597 32.4499C21.6597 32.2495 21.4657 32.0361 19.3774 29.9542C16.8171 27.3875 16.9141 27.4586 16.4679 27.9112Z"
								 />
						</g>
						<defs>
							<clipPath id="clip0_132_119">
								<rect width="33.1029" height="33.1029" fill="white" transform="translate(0.647095)" />
							</clipPath>
						</defs>
					</svg>
                </a>
            </div>

            <div className="content">
                {data_links.map(group => {
                    return <LinkGroup group={group} />;
                })}
            </div>
        </div>
    );
}

export default LinkHub;
