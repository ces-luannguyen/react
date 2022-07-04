import React, {useState, useEffect} from 'react';


const num2 = 10;

const Search = () => {


    const [state1, setState1] = useState('')
    const [state2, setState2] = useState(2);

    const event1 = ()=>{
        console.log('event1');
    }

    const event2 = () =>{
        setState2(state2+1);
    }

    useEffect(()=>{
        event1();

        return (
            () =>{
                console.log('return');
            }
        )
    },[])

    return (
        <div>
        <button onClick={event1}>Event1</button>
        <button onClick={event2}>Event2</button>
        

        </div>
    )

}
export default Search;