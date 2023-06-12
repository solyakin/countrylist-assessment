type PropType = {
  setSearchField : React.Dispatch<React.SetStateAction<string>>;
  handleClick : () => void
}

const SearchBox = ({setSearchField, handleClick} : PropType ) => {

  return (
    <div className="py-4 px-6 border-b">
        <h4 className="text-left mb-2 text-lg font-bold">Keyword</h4>
        <div className="flex gap-3">
            <input 
            className="w-10/12 border p-2 text-sm" 
            type="text" 
            placeholder='search countries'
            onChange={(e) => setSearchField(e.target.value)}
            />
            <button 
            className="w-2/12 bg-black text-white rounded px-4 hover:bg-gray-900"
            onClick={handleClick}
            >
              Search
            </button>
        </div>
    </div>
  )
}

export default SearchBox;