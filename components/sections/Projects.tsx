"use client";
import styles from "../../styles/modules/projects.module.css";
import { motion, useInView } from "framer-motion";
import { slideInFromTop , slideInFromLeft } from "../../utils/motion";
import Card from "../widgets/Card";
import { PROJECTS } from "../../data";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className={styles.projectsSection}
    >
      
      <motion.div
        className={styles.backgroundGradient}
        variants={slideInFromLeft(0.5)}
      />

   
      <motion.div
        className={styles.floatingShape1}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.header}
          variants={containerVariants}
        >
          <motion.h2
            className={styles.sectionTitle}
            variants={headerVariants}
          >
            Innovative <span className={styles.highlight}>Creations</span>
          </motion.h2>

          <motion.p
            className={styles.sectionSubtitle}
            variants={slideInFromTop}
          >
            Where <span className={styles.highlight}>Creativity</span> Meets Code
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.projectsContainer}
          variants={containerVariants}
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={styles.cardWrapper}
            >
              <Card 
                project={project} 
              
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        animate={{
          opacity: [0.6, 1, 0.6],
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity
        }}
      >
        <span className={styles.mouseWheel} />
      </motion.div>
    </motion.section>
  );
};

export default Projects;