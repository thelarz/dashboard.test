export class ShelfStat {
    device: string;
    date: Date;
    packageDepth?: number;
    capacity?: string;
    onShelf?: string;

    capacityAsArray = () => {
        return new Array(this.capacity);
    };

    onShelfAsArray = () => {
        return new Array(this.onShelf);
    }
}
