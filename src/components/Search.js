import React, {useState, useEffect} from 'react';


const num2 = 10;

const Search = () => {

    const num1= 5;

    const num2=9; // ghi de num2 global ben ngoai

    const comp1 = <div>Hello world</div>

    return (
        <div>Search {num1+num2}
        {comp1}
        </div>
    )

}
export default Search;