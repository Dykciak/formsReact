import React from "react";

export default function FormInput(props) {
	const { errorMessage, isPasswordMatch, label, onChange, id, ...inputProps } =
		props;

	return (
		<div className="flex flex-col gap-1">
			<label className="text-sm font-medium text-black p-2">{label}</label>
			<input
				className="peer h-12 w-full border border-black rounded-lg px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				{...inputProps}
				onChange={onChange}
				required
			/>

			{/* Stałe miejsce dla error message */}
			{inputProps.name !== "confirm_password" && (
				<span className="p-1 text-red-500 bg-red-950 text-sm min-h-[20px] invisible peer-invalid:visible">
					{errorMessage}
				</span>
			)}

			{/* Specjalny error message dla confirm_password */}
			{inputProps.name === "confirm_password" && (
				<span
					className={`p-1 text-red-500 bg-red-950 text-sm min-h-[20px] ${
						!isPasswordMatch ? "visible" : "invisible"
					}`}
				>
					Passwords don't match!
				</span>
			)}
		</div>
	);
}
