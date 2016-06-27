import { ColorSet } from "./PieceColors";

export class PieceDef {
    private _width: number
    private _height: number
    private _cost: number

    constructor({ width, height, cost } : {width: number, height: number, cost: number}) {
        this._width = width;
        this._height = height;
        this._cost = cost;
    }

    get cost(): number {
        return this._cost;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get costRatio(): number {
        return this.cost / (this._width * this.height);
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

    setInPlace(x: number, y: number, value: ColorSet): PlacedPieceDef {
        return new PlacedPieceDef(x, y, value, this);
    }
}

export class PlacedPieceDef extends PieceDef {
    private _x: number;
    private _y: number;
    private _value: ColorSet

    constructor(x: number, y: number, value: ColorSet, pieceDef: PieceDef) {
        super(pieceDef);
        this._x = x;
        this._y = y;
        this._value = value;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get value(): ColorSet {
        return this._value;
    }
}

export default PieceDef;