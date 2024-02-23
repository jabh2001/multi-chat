import './textButton.css'

interface TextButtonProps {
  text: string,
  color: string
}

export const TextButton: React.FC<TextButtonProps> = ({ text, color }) => {
  return (
    <div className='contenedorPrincipal'>
      <div className='textButton' style={{ color: color }}>
        <button>{text}</button>
        <div className='mesagesNumber'>
          4
        </div>
      </div>
      <div className='barra'>

      </div>
    </div>

  );
};