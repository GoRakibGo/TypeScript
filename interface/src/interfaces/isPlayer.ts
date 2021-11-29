export interface isPlayer{
    name: string;
    age: number;
    readonly country: string;

    play(): void;
}