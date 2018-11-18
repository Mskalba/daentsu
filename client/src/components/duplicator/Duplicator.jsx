import React from 'react';

class Duplicator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            array: JSON.stringify([1,2,3,4]),
            result: "",
            withoutEven: ""
        }
    }


    componentDidMount() {
        // eslint-disable-next-line
        Array.prototype.duplicate = function() {
            const j = this.length;

            for(let i= 0; i < j; i++) {
                this[i+j] = this[i];
            }
        };
        const array = JSON.parse(this.state.array);
        array.duplicate();
        this.setState({
            result: JSON.stringify(array)
        });
    }

    handleChange = (event) => {
        try {
            const newArray = JSON.parse(event.target.value);
            const newArrayJSON = JSON.stringify(newArray);
            newArray.duplicate();
            this.setState({
                array: newArrayJSON,
                result: JSON.stringify(newArray)
            });
        } catch(e) {
            this.setState({
                array: event.target.value,
                result: "Please provide valid JSON array"
            })
        }
        event.stopPropagation();
    };

    handleClick = () => {
        try {
            const arrayToRemoveEvenNumbers = JSON.parse(this.state.result);
            let matched = 0;
            for(let i = 0; i < arrayToRemoveEvenNumbers.length; i++) {
                if(arrayToRemoveEvenNumbers[i] % 2) {
                    arrayToRemoveEvenNumbers[matched++] = arrayToRemoveEvenNumbers[i];
                }
            }
            arrayToRemoveEvenNumbers.length = matched;

            this.setState({
                withoutEven: JSON.stringify(arrayToRemoveEvenNumbers)
            });
        } catch(e) {
            this.setState({
                withoutEven: "Please provide valid JSON array"
            })
        }
    };

    render() {
        const {array, result, withoutEven} = this.state;
        return (
            <span>
                Just change array in input:
                <input value={array} onChange={this.handleChange}/>
                Duplicated =>
                <span>{result}</span>
                <button onClick={this.handleClick}>Delete Even Numbers =></button>
                <span>{withoutEven}</span>
            </span>
        );
    }
}

export default Duplicator;
