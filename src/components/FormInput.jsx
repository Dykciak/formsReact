import React from "react";
import { useRef } from "react";

export default function FormInput(props) {
	return (
		<div className="py-2">
			<label>Username</label>
			<input
				ref={props.ref}
				name={props.name}
                type="text"
				className="border-1 ml-2 p-1 rounded-sm"
				placeholder={props.placeholder}
			/>
		</div>
	);
}
