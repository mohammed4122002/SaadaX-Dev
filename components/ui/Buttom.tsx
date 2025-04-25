
import styles from "../../styles/modules/buttomUi.module.css"

interface ButtomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     children   : React.ReactNode;
      width?   : "fit" | "full" ;
      variations? : "primary" | "secondary1" | "secondary2";
}


const Buttom = ({children, width="fit" , variations="primary" , ...props}:ButtomProps) => {
    const widthClass = width === "full" ? styles.fullWidth : styles.fitWidth;
    const variantClass = styles[variations];
  return (
    <button className={`${styles.buttom} ${widthClass} ${variantClass}`} {...props}>
      {children}
    </button>
  );
}
export default Buttom;