"use client";

import styles from "../../styles/projects.module.css";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import Image from "next/image";
import Link from "next/link";
import { FiCode, FiExternalLink, FiGithub } from "react-icons/fi";
import Buttom from "../ui/Buttom";
import {PROJECTS} from "../../data"
import Card from "../sub/Card";

const Projects = () => {

      
        const RenderProjectsCard = PROJECTS.map((project , idx) =>(
          <Card key={idx}
         project={project}
           />
        ))



  return (
    <section className={styles.projectsSection}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleAccent}>Innovative</span> Creations
        </h2>
        <p className={styles.sectionSubtitle}>
          Selected projects that showcase technical excellence
        </p>
      </div>

      <div className={styles.projectsContainer}>
     {RenderProjectsCard}
      </div>
    </section>
  );
};
export default Projects;