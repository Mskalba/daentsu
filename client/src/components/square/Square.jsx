import React from 'react';
import './square.css';
class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width:1200,
            position:0,
            squareInitHeight:50,
            squareInitWidth: 50,
            squareHeight:50,
            squareWidth: 50,
            maxSquareHeight: 100,
            maxSquareWidth: 100,
            color: "red",
            direction: "right",
        }
    }

    componentDidMount() {
        setInterval(this.frame, 5);
    }

    frame = () => {
        let {width, position, color, maxSquareHeight, maxSquareWidth, direction, squareInitHeight, squareInitWidth} = this.state;
        direction === "right" ? position++ : position--;

        if(position === 0) {
            direction = "right"
        } else if (position === width) {
            direction = "left"
        }

        const squareHeight = squareInitHeight + (position/width * (maxSquareHeight - squareInitHeight));
        const squareWidth = squareInitWidth + (position/width * (maxSquareWidth - squareInitWidth));



        if(!(position % 20)) {
            color = Square.getRandomColor();
        }
        this.setState({
            position, color, direction, squareHeight, squareWidth
        })
    };

    static getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        const {width, position, squareHeight, squareWidth, maxSquareWidth, color} = this.state;
        const containerStyle = {
            width: width+maxSquareWidth
        };
        const squareStyle = {
            backgroundColor: color,
            width: squareWidth,
            height: squareHeight,
            left: position

        };
        return(
            <div id ="container" style={containerStyle}>
                <div id ="animate" style={squareStyle}/>
            </div>
        )
    }
}

export default Square;
