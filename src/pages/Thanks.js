import "./pages.css";
import {ReactSVG} from "react-svg";
import EmptyBlock from "../components/EmptyBlock.js";
import ScoreElement from "../components/ScoreElement.js";
import OvalButton from "../components/OvalButton.js";
import {RatingContext} from "../RatingContext.js";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

export default function Thanks(props) {
	const {setSelectionValue} = useContext(RatingContext);
	const navigate = useNavigate();
	return (
		<div className='outer'>
			<EmptyBlock>
				<ReactSVG src='illustration-thank-you.svg' />
				<ScoreElement />
				<p className='headerText centreAligned noMargin'>Thank You!</p>
				<p className='standardText centreAligned noMargin'>
					We appreciate you taking the time to give a rating. If you ever need more
					support, don't hesitate to get in touch!
				</p>
				<OvalButton
					title='Rate Again'
					isEnabled={true}
					onClick={() => {
						setSelectionValue(null);
						navigate("/");
					}}
				/>
			</EmptyBlock>
		</div>
	);
}
