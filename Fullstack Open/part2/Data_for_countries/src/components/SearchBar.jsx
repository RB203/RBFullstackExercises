const SearchBar = ({text,functionSearch}) =>{
    return (
        <>
            find countries <input value = {text} onChange = {functionSearch}/>
        </>
    )
} 

export default SearchBar