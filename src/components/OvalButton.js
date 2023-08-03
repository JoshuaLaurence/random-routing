import "./components.css";
export default function OvalButton(props) {
	return (
		<div
			className={`ovalButton ${props.isEnabled !== true ? "isntEnabled" : null}`}
			onClick={() => {
				if (props.isEnabled) props.onClick();
			}}>
			{props.title}
		</div>
	);
}
