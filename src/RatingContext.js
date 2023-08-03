import {createContext, useState} from "react";

export const RatingContext = createContext();

export const RatingProvider = (props) => {
	const [selectionValue, setSelectionValue] = useState(null);

	return (
		<RatingContext.Provider value={{selectionValue, setSelectionValue}}>
			{props.children}
		</RatingContext.Provider>
	);
};
