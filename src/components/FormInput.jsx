import React from "react";

export default function FormInput(props) {
	return (
		<div className="py-2">
			<label>Username</label>
			<input
				type="text"
				className="border-1 ml-2 p-1 rounded-sm"
				placeholder={props.placeholder}
				onChange={(e) => props.setUsername(e.target.value)}
			/>
		</div>
	);
}
