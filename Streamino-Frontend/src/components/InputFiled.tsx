import React from "react";

interface InputFieldProps{
	type:string;
	placeholder:string;
	value:string;
	onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
	name:string;
	
}


const InputField :React.FC<InputFieldProps> = ({type , placeholder , value , onChange ,name}) => {
	return(
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			name={name}
			className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			
		/>
	);
};


export default InputField;