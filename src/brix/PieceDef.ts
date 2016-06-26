import { ColorSet } from "./PieceColors";

export class PieceDef {
    width: number
    height: number
    cost: number

    constructor({ width, height, cost } : {width: number, height: number, cost: number}) {
        this.width = width;
        this.height = height;
        this.cost = cost;
    }

    get costRatio(): number {
        return this.cost / (this.width * this.height);
    }

    get area(): number {
        return this.width * this.height;
    }

    clone(): PieceDef {
        return new PieceDef({
            width: this.width, 
            height: this.height, 
            cost: this.cost
        });
    }

    setInPlace(x: number, y: number): PlacedPieceDef {
        return new PlacedPieceDef(x, y, this);
    }
}

export class PlacedPieceDef extends PieceDef {
    value: ColorSet
    constructor(public x: number, public y: number, pieceDef: PieceDef) {
        super(pieceDef);
    }
}

export default PieceDef;