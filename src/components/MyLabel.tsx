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
    * Colores básicos de la etiqueta
    */
    fontColor?: string;

    /**
    * Colores básicos del fondo de la etiqueta
    */
    backgroundColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    color   = 'primary',
    label   = 'No Label',
    size    = 'normal',
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span
        className={[`label ${size}`, `text-${color}`].join(' ')}
        style={{color: fontColor, backgroundColor}}>
        {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

export default MyLabel;
