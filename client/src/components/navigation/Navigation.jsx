import React from 'react';
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

class Navigation extends React.Component {
    render() {
        return (
            <ReactGridLayout
                className="layout"
                cols={4}
                rowHeight={20}
                width={1200}
            >
                <div key="1" data-grid={{x: 0, y: 0, w: 1, h: 1}} > 1 </div>
                <div key="2" data-grid={{x: 1, y: 0, w: 1, h: 1}} > 2 </div>
                <div key="3" data-grid={{x: 2, y: 0, w: 1, h: 1}} > 3 </div>
                <div key="4" data-grid={{x: 3, y: 0, w:1, h: 1}} > 4 </div>
            </ReactGridLayout>
        );
    }
}

export default Navigation;
