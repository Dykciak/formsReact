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
		},
		{
			id: 2,
			name: "email",
			type: "email",
			placeholder: "Email",
			label: "Email",
		},
		{
			id: 3,
			name: "name",
			type: "text",
			placeholder: "Name",
			label: "Name",
		},
		{
			id: 4,
			name: "password",
			type: "password",
			placeholder: "Password",
			label: "Password",
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

	const handleSubmit = (e) => {
		e.preventDefault();
	};
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
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
					></FormInput>
				))}

				<button>Submit</button>
			</form>
		</>
	);
}

export default App;
