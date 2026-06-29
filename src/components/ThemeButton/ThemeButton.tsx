import "./ThemeButton.scss"

import MoonIcon from "~/assets/icons/moon.svg?react";

const ThemeButton = () => {
	return (
		<button type="button" className="theme-button">
			<MoonIcon/>
		</button>
	)
}

export default ThemeButton