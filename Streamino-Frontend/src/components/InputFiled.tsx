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
			className="w-full px-4 py-2 rounded-lg bg-transparent focus:outline-none border-6 border-white  placeholder:white  text-amber-300 "
			//w-full px-4 py-2 rounded-lg bg-transparent focus:outline-none border-2 border-white text-white placeholder-white ${props.className}`}
		/>
	);
};


export default InputField;