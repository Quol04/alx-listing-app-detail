
import { ButtonProps } from "@/interfaces/index";

const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {

  const getButtonClasses = () => {
    const baseClasses = "px-6 py-2 text-sm font-semibold rounded-lg transition duration-300 text-white";
    
    switch (buttonBackgroundColor) {
      case 'white':
        return `${baseClasses} bg-#ECECEC hover:bg-gray-100`;
      case 'blue':
        return `${baseClasses} bg-blue-500 hover:bg-blue-400`;
      case 'orange':
        return `${baseClasses} bg-orange-500 hover:bg-orange-400`;
      case 'green':
        return `${baseClasses} bg-#34967C hover:bg-green-400`;
      default:
        return `${baseClasses} bg-slate-500 hover:bg-slate-400`;
    }
  }


  return (
    <button onClick={action} className={`${getButtonClasses()} ${buttonSize || ''}`}>
      {buttonLabel}
    </button>
  )
}

export default Button;