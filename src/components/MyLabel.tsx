import './mylabel.css';

export interface MyLabelProps {
    /**
    * Contenido de la etiqueta label
    */
    label: string;
    
    /**
    * Tamaño de la etiqueta
    */
    size: 'normal'|'h1'|'h2'|'h3';
    
    /**
    * Capitalizar el contenido de la etiqueta
    */
    allCaps?: boolean;
    
    /**
    * Color de la etiqueta
    */
    color?: 'primary'|'secondary'|'tertiary';

    /**
    * Colores básicos del botón
    */
    fontColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    color   = 'primary',
    label   = 'No Label',
    size    = 'normal',
    fontColor
}: MyLabelProps) => {
  return (
    <span
        className={[`label ${size}`, `text-${color}`].join(' ')}
        style={{color: fontColor}}>
        {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
