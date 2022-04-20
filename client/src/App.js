import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			axios
				.post("http://localhost:3000/mailer", { email })
				.then((res) => {
					alert("Mail sent successfully");
					setEmail("");
				});
		} catch (error) {
			console.log(error.message);
		}
	};

	const emailHandler = (e) => {
		setEmail(e.target.value);
	};
	return (
		<div className="App">
			<h1>React app</h1>
			<form>
				<input
					type="text"
					id="text"
					value={email}
					onChange={emailHandler}
					name="text"
				></input>
				<input
					type="submit"
					id="submit"
					name="submit"
					onClick={handleSubmit}
				></input>
			</form>
		</div>
	);
}

export default App;
