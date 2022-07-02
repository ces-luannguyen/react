import React, {useState, useEffect} from 'react';


const num2 = 10;

const Search = () => {


    const [state1, setState1] = useState('')
    const [state2, setState2] = useState(2);



    let var1 = 0;

    const increment = ()=>{
        return ++var1;
    }

    console.log(increment());


    const num1= 5;

    const num2=9; // ghi de num2 global ben ngoai

    const comp1 = <div>Hello world</div>


    const renderluckhoitao = () =>{
        console.log('Render init');
    }

    const rendermoilanrender = ()=>{
        console.log('Moi lan render moi lan chay');
    }

    const rendermoilanthaydoidulieu = () =>{
        console.log('co thay doi state2');
    }

    // 
    useEffect(()=>{
        rendermoilanthaydoidulieu();

        return (
            ()=>{
                console.log('return;')
            }
        )
    }, [state2]);

    const event1 = ()=>{
        alert('Hello');
        setState1('Luan Nguyen');
        setState2(11);
    }

    const event2 = ()=>{
        alert('Event2');

        const function1 = () =>{
            alert('Function1');
        }

        function1();
    }


    console.log('Hello moi lan render');

    // const event3 = ()=>{
    //     function1();
    // }

    return (
        <div>Search {num1+num2}
        {comp1}
        <br />
        <button onClick={event1}>Event1</button>
        {state1} {state2}
        <br />
        <button onClick={event2}>Event2</button>

        </div>
    )

}
export default Search;