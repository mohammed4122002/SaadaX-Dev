import React from "react";
import { FiCode, FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "../../styles/modules/card.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

interface IProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
    image: string;
    demoLink: string;
    githubLink: string;
  };
}

const Card = React.memo(function Card({ project }: IProps) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardVisual}>
        <div className={styles.imageWrapper}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.projectImage}
          />
        </div>
        <div className={styles.cardOverlay}>
          <div className={styles.techBadges}>
            {project.techStack.map((tech, idx) => (
              <span key={idx} className={styles.techBadge}>
                <FiCode className={styles.techIcon} />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>

        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.actionButtons}>
          <Link href={project.demoLink} className={styles.demoButton}>
            <Button variant={"secondary1"}>
              <FiExternalLink />
              Live Demo
            </Button>
          </Link>
          <Link href={project.githubLink} className={styles.codeButton}>
            <Button variant={"secondary2"}>
              <FiGithub />
              Source Code
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Card;
