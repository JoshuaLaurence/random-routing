import "./pages.css";
import EmptyBlock from "../components/EmptyBlock.js";
import OvalButton from "../components/OvalButton.js";
import {useNavigate} from "react-router-dom";

export default function Oops() {
	const navigate = useNavigate();
	return (
		<div className='outer'>
			<EmptyBlock>
				<img
					src='mickey-confused.png'
					className='mickeyConfused'
					alt='Mickey mouse looking confused, a representation of the 404 page'
				/>
				<p className='headerText centreAligned noMargin'>404</p>
				<p className='standardText centreAligned noMargin'>
					It looks like we couldn't find the page you were looking for! Our
					apologies, click the button below to be taken back to the main ratings page
				</p>
				<OvalButton
					title='Back To Rating'
					isEnabled
					onClick={() => {
						navigate("/");
					}}
				/>
			</EmptyBlock>
		</div>
	);
}
