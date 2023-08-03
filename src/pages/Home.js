import "./pages.css";
import EmptyBlock from "../components/EmptyBlock.js";
import CircularButton from "../components/CircularButton.js";
import OvalButton from "../components/OvalButton.js";
import {ReactSVG} from "react-svg";
import {useContext} from "react";
import {RatingContext} from "../RatingContext.js";
import {useNavigate} from "react-router-dom";

export default function Home(props) {
	const {selectionValue} = useContext(RatingContext);
	const navigate = useNavigate();
	return (
		<div className='outer'>
			<EmptyBlock>
				<div style={{width: "100%", marginBottom: "10px"}}>
					<CircularButton
						number={<ReactSVG src='icon-star.svg' />}
						value='star_icon'
					/>
				</div>
				<p className='headerText noMargin'>How did we do?</p>
				<p className='standardText noMargin'>
					Please let us know how we did with your support request. All feedback is
					appreciated to help us improve our offering!
				</p>
				<div className='numberRow'>
					<CircularButton number={1} value={1} hasHover />
					<CircularButton number={2} value={2} hasHover />
					<CircularButton number={3} value={3} hasHover />
					<CircularButton number={4} value={4} hasHover />
					<CircularButton number={5} value={5} hasHover />
				</div>
				<OvalButton
					title='Submit'
					isEnabled={selectionValue != null}
					onClick={() => {
						navigate("/thanks");
					}}
				/>
			</EmptyBlock>
		</div>
	);
}
