import React from "react";
import ReactDOM from "react-dom/client";

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);

const a = 6;

class App extends React.Component {
    

    num1 = 0;
    num2 = a;
    str1 = '';
    str2 = '';

    state = {
        state1: this.num1,
        state2: this.str1
    }

    setNum(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    setStr(str1, str2){
        this.str1 = str1;
        this.str2 = str2;
    }

    concate(str1, str2) {
        return str1 + str2;
    }

    setState_(numState, stringState) {
        this.setState({state1: numState, state2: stringState})
    }

    event1 = () => {
        this.setState_(this.num1, this.str1);
    }

    render() {
        return (
            <div>
                <div>
                    Num1: {this.num1} <br/>
                    Num2: {this.num2} <br/>
                    Hello world {this.state.state1} {this.state.state2}
                </div>
                
                <button onClick={this.setNum(3,4)} >Add</button>

                <button onClick={this.event1}>Event 1</button>



            </div>
        )
    }

}

root.render(<App/>);