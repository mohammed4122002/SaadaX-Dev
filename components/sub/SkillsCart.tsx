 import { ISkill } from "../../interfaces";
import styles from "../../styles/modules/skillsCart.module.css";
import Image from "next/image";
const SkillsCart = ({name , img}:ISkill) => {
    return (
        <div className={styles.skillItem} >
        <Image src={img} alt={name} width={40} height={40} />
        <span>{name}</span>
      </div>
    );
    }

export default SkillsCart;