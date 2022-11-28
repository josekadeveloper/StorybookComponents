/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Contenido de la etiqueta label
    */
    label: string;
    /**
    * Tamaño de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Capitalizar el contenido de la etiqueta
    */
    allCaps?: boolean;
    /**
    * Color de la etiqueta
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Colores básicos de la etiqueta
    */
    fontColor?: string;
    /**
    * Colores básicos del fondo de la etiqueta
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
