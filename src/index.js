import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RatingProvider} from "./RatingContext.js";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Home, Thanks, Oops} from "./pages";

const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/thanks",
		element: <Thanks />,
	},
	{
		path: "*",
		element: <Oops />,
	},
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RatingProvider>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Overpass&display=swap');
			</style>
			<RouterProvider router={router} />
		</RatingProvider>
	</React.StrictMode>
);
