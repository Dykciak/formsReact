import React from "react";
import { useRef } from "react";

export default function FormInput(props) {
	const { label, onChange, id, ...inputProps } = props;
	return (
		<div className="flex flex-col gap-1">
			<label className="text-sm font-medium text-black">{label}</label>
			<input
				className="h-12 w-full border border-gray-300 rounded-lg px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				{...inputProps}
				onChange={onChange}
			/>
		</div>
	);
}
