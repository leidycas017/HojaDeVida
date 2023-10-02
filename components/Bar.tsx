interface BarProps {
    porcentaje: number;
  }

const Bar = ({ porcentaje = 0 }: BarProps) => {
    const porcentajeEstilo = {
      width: `${porcentaje}%`,
    };
  
    return (
      <div className="language-bar">
        <div style={porcentajeEstilo}></div>
      </div>
    );
  };

  export {Bar};