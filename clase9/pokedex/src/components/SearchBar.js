import { useState } from 'react';

const SearchBar = (props) => {
    const doSearch = props.doSearch;
    const [search, setSearch] = useState("")
    const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            doSearch(search)
        }
    }

    const updateInput = async (input) => {
        setSearch(input.target.value);
    }
    return (
        <input
            style={BarStyling}
            key="random1"
            value={search}
            placeholder={"Search Pokemon By Number"}
            onChange={updateInput}
            onKeyUp={(e) => handleKeyPress(e)}
        />
    );
}

export default SearchBar