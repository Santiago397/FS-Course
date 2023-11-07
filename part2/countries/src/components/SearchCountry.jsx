const SearchCountry = ({ search, setSearch }) => {

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault() }>
        <label>Search countries: </label>
        <input value={search} onChange={handleSearch} type="text" />
      </form> 
    </>
  )
}

export default SearchCountry
