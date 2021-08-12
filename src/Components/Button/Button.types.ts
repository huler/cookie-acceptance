export interface ButtonProps {
    text: string;
    click: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type: string;
    className: string;
}