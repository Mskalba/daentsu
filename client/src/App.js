import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import Header from './components/header/Header';
import Logo from './components/logo/Logo';
import Navigation from './components/navigation/Navigation';
import AboutUs from './components/aboutUs/AboutUs';
import Duplicator from './components/duplicator/Duplicator';
import StringJoiner from './components/stringJoiner/StringJoiner';
import Square from './components/square/Square';
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

class App extends Component {
  render() {
    return (
        <>
            <ReactGridLayout
                className="layout"
                cols={8}
                rowHeight={20}
                width={1200}
            >
                <div key="logo" data-grid={{x: 0, y: 0, w: 8, h: 2}} >
                    <Logo/>
                </div>
                <div key="header" data-grid={{x: 0, y: 2, w: 8, h: 4}}>
                    <Header/>
                </div>
                <div key="navigation" data-grid={{x: 0, y: 6, w: 8, h: 2}}>
                    <Navigation/>
                </div>
                <div key="about" data-grid={{x: 0, y: 8, w: 5, h: 8}}>
                    <AboutUs/>
                </div>
                <div key="quick1" data-grid={{x: 6, y: 8, w: 3, h: 3}}>
                    Quick link 1
                </div>
                <div key="quick2" data-grid={{x: 6, y: 11, w: 3, h: 5}}>
                    Quick link 2
                </div>
                <div key="footer" data-grid={{x: 0, y: 16, w: 8, h: 2}} >
                    Footer
                </div>
            </ReactGridLayout>

            <Duplicator/>
            <br />
            Text from API:
            <br />
            <StringJoiner/>
            <br />
            <Square/>
        </>
    );
  }
}

export default App;
