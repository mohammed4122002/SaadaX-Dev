// components/sub/SkillsCart.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ISkill } from "../../types";
import styles from "../../styles/modules/skillsCart.module.css";

const SkillsCart = React.memo(function SkillsCart({ name, img }: ISkill) {
  return (
    <motion.div
      className={styles.skillItem}
      whileHover={{
        y: -3,
        transition: { type: "spring", stiffness: 400 },
      }}
    >
      <div className={styles.iconFrame}>
        <Image
          src={img}
          alt={name}
          width={36}
          height={36}
          className={styles.icon}
        />
      </div>
      <span className={styles.name}>{name}</span>
    </motion.div>
  );
});

export default SkillsCart;