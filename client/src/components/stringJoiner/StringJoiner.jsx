import React from 'react';

class StringJoiner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            result: ""
        }
    }


    componentDidMount() {
        Promise.all([
            fetch("https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=json").then(res => res.json()),
            fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=json").then(res => res.json())
        ])
            .then((values) => {
                let result = "";
                values.forEach((value) => {
                    result += value.join();
                });
                this.setState({
                    isLoaded: true,
                    result: result
                });
            })
            .catch((error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
    }

    render() {
        const {error, isLoaded, result} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <span>
                    {result}
                </span>
            );
        }
    }
}

export default StringJoiner;
