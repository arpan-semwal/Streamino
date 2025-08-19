 

 

 const Search : React.FC = () =>{
	return(
		<div className=" flex items-center bg-white rounded-full shadow  px-4 py-1 w-full max-w-lg">
			
		 
				<input 
					type="text"
					placeholder="Search" 
					className="flex flex-grow text-gray-700 focus:outline-none" 
				/>
		 
			
			
			 
			<button>
				  🔍
			</button>
	</div>
		
	 
	)
 }

export default Search;
