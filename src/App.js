import React, { useState } from "react";

import SingleColor from "./SingleColor";
//https://github.com/noeldelgado/values.js
import Values from "values.js";

const App = () => {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(10);
			console.log(colors);
			setList(colors);
			setError(false);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<section className="container">
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						placeholder="#f15025"
						type="text"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						className={`${error ? "error" : null}`}
					/>
					<button type="submit" className="btn">
						Submit
					</button>
				</form>
			</section>
			<section className="colors">
				{list.map((color, index) => {
					return <SingleColor key={index} {...color} hexColor={color.hex} />;
				})}
			</section>
		</>
	);
};

export default App;
