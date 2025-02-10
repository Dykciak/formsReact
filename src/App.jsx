import { useState, useRef } from "react";
import FormInput from "./components/FormInput";
import "./App.css";

function App() {
	const [values, setValues] = useState({
		username: "",
		name: "",
		email: "",
		tel: "",
	});

	const inputs = [
		{
			id: 1,
			name: "username",
			type: "text",
			placeholder: "Username",
			label: "Username",
			errorMessage:
				"username should be 3-16 characters and shouldn't include any special character!",
			pattern: "^[A-Za-z0-9]{3,16}$",
			required: true,
		},
		{
			id: 2,
			name: "email",
			type: "email",
			placeholder: "Email",
			label: "Email",
			errorMessage: "It should be a valid email address!",
			required: true,
		},
		{
			id: 3,
			name: "name",
			type: "text",
			placeholder: "Name",
			label: "Name",
			errorMessage: "It should be a valid name",
			pattern: "^[A-Za-zÀ-ÿ\\s]{2,20}$",
			required: true,
		},
		{
			id: 4,
			name: "password",
			type: "password",
			placeholder: "Password",
			label: "Password",
			errorMessage:
				"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
			required: true,
			pattern:
				"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$",
		},
		{
			id: 5,
			name: "confirm_password",
			type: "password",
			placeholder: "Confirm password",
			label: "Confirm password",
		},
	];
	// const usernameRef = useRef();
	const isPasswordMatch = values.password === values.confirm_password;

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handleChange = (e) => {
		setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	console.log(values);
	return (
		<>
			<form onSubmit={handleSubmit}>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={handleChange}
						isPasswordMatch={
							input.name === "confirm_password" ? isPasswordMatch : true
						}
					></FormInput>
				))}

				<button className="mt-2 h-12 w-full">Submit</button>
			</form>
		</>
	);
}

export default App;
