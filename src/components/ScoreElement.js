import "./components.css";

import {RatingContext} from "../RatingContext.js";
import {useContext} from "react";

export default function ScoreElement() {
	const {selectionValue} = useContext(RatingContext);
	return (
		<div className='scoreElement'>You selected {selectionValue} out of 5</div>
	);
}
