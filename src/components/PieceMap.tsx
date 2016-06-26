import * as React from "react";
import * as ReactDom from "react-dom";
import { PlacedPieceDef } from "../brix/PieceDef";

interface Props {
    pieces: PlacedPieceDef[],
    scale: number,
    userScale: number,
    imgWidth: number,
    imgHeight: number
}

interface State {
    fitToWindow: boolean,
    hideBorders: boolean
}

class PieceMap extends React.Component<Props, State> {
    refs: {
        [key: string]: Element,
        pieceMapCanvas: HTMLCanvasElement
    }

    constructor(props) {
        super(props);
        this.state = {
            fitToWindow: false,
            hideBorders: false
        };
    }

    componentDidMount() {
        this.drawImage();
    }

    componentDidUpdate() {
        this.drawImage();
    }

    drawImage() {
        let s = this.props.scale;
        let us = this.props.userScale;

        if (this.state.fitToWindow) {
            s = (window.innerWidth - 40) / (this.props.imgWidth * us);
        }

        let canvas: HTMLCanvasElement = ReactDom.findDOMNode(this.refs.pieceMapCanvas) as HTMLCanvasElement;
        canvas.width = this.props.imgWidth * s * us;
        canvas.height = this.props.imgHeight * s * us;
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = 'pink';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        this.props.pieces.forEach((p) => {
            ctx.fillStyle = p.value.color;
            // pieces don't get multiplied by userScale
            // because they already have it factored in from the algorithm
            let x = p.x * s;
            let y = p.y * s;
            let w = p.width * s;
            let h = p.height * s;

            if (this.state.hideBorders) {
                ctx.fillRect(x, y, w, h);
            } else {
                ctx.fillRect(x + 1, y + 1, w - 2, h - 2);
            }
        });
    }

    render() {
        return (
            <div className="piece-map">
                <div className="piece-map-options">
                </div>
                <canvas ref="pieceMapCanvas" />
            </div>
        );
    }

}

export default PieceMap;
