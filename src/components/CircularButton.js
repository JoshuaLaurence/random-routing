import "./components.css";
import {RatingContext} from "../RatingContext.js";
import {useContext} from "react";

export default function CircularButton(props) {
	const {selectionValue, setSelectionValue} = useContext(RatingContext);
	const isSelected = props.value === selectionValue;
	return (
		<div
			className={`circularButton ${isSelected ? "isSelected" : "nonSelected"} ${
				props.hasHover ? "circularButtonHover" : null
			}`}
			onClick={() => {
				if (props.hasHover) setSelectionValue(props.value);
			}}>
			{props.number}
		</div>
	);
}
