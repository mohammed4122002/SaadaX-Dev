import styles from "../../styles/modules/buttonUi.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     children   : React.ReactNode;
      width?   : "fit" | "full" ;
      variant? : "primary" | "secondary1" | "secondary2";
}


const Button = ({children, width="fit" , variant="primary" , ...props}:ButtonProps) => {
    const widthClass = width === "full" ? styles.fullWidth : styles.fitWidth;
    const variantClass = styles[variant];
  return (
    <button className={`${styles.button} ${widthClass} ${variantClass}`} {...props}>
      {children}
    </button>
  );
}
export default Button;