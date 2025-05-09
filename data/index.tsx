import { FiMail } from "react-icons/fi";
import { InavLink, ISocialLink } from "../types";
import { 
  Home,
  User,
  Mail,
  BookOpen,
  Linkedin,
  Github,
  Code

 
} from "lucide-react";

export const NAVLINKS: InavLink[] = [
    { href: "/#home", label: "Home", icon: <Home /> },
    { href: "/#about", label: "About", icon: <User /> },
    { href: "/#projects", label: "Projects", icon: <Code/> },
    { href: "/#contact", label: "Contact", icon: <Mail /> },
    { href: "/blog", label: "Blog", icon: <BookOpen /> },
];

export const SOCIALLINKS: ISocialLink[] = [ 
    { href: "https://www.linkedin.com/in/mohammed-abu-saada-858159265", icon: <Linkedin/>  },
    { href: "https://github.com/mohammed4122002", icon: <Github/>  },
    { href: "mohammedsaadaang@gmail.com", icon:  <Mail /> },
];


export const SKILLS = [
    { name: "HTML", img: "/html.png" },
    { name: "CSS", img: "/css.png" },
    { name: "JavaScript", img: "/js.png" },
    { name: "React", img: "/react.png" },
    { name: "React Query", img: "/reactquery.png" },
    { name: "Next.js", img: "/next.png" },
    { name: "TypeScript", img: "/ts.png" },
    { name: "Redux", img: "/redux.png" },
    { name: "Tailwind", img: "/tailwind.png" },
  ];

 export const PROJECTS = [
    {
      title: "VS Code Clone",
      description:
        "A web-based clone of Visual Studio Code built with React, TypeScript, Tailwind CSS, and Redux Toolkit.",
      techStack: ["React", "TypeScript", "Redux", "Tailwind CSS"],
      image: "/vscode.png",
      demoLink: "https://vs-code-eight-sepia.vercel.app/",
      githubLink: "https://github.com/mohammed4122002/VS-code",
    },
    {
      title: "Personal Portfolio",
      description:
        "A modern, responsive portfolio website to showcase my projects and skills, built with Next.js and Framer Motion.",
      techStack: ["Next.js", "Framer Motion", "CSS Modules"],
      image: "/protfolio.png",
      demoLink: "https://saada-x-dev-92f4.vercel.app/",
      githubLink: "https://github.com/mohammed4122002/SaadaX-Dev",
    },
    {
      title: "E-Commerce Store",
      description:
        "A full-featured e-commerce web app with product search, cart, and checkout, using React and Redux.",
      techStack: ["React", "Redux", "Node.js", "Express"],
      image: "/shopCars.png",
      demoLink: "https://github.com/mohammed4122002/ReactShopCars",
      githubLink: "https://github.com/mohammed4122002/ReactShopCars",
    },
    {
      title: "Blog Platform",
      description:
        "A Markdown-powered blog platform with dynamic routing and SEO optimization, built with Next.js.",
      techStack: ["Next.js", "Markdown", "SEO"],
      image: "/blog.png",
      demoLink: "https://saada-x-dev-92f4.vercel.app/blog",
      githubLink: "https://github.com/mohammed4122002/SaadaX-Dev",
    },
    {
      title: "Ninja Turtles Game",
      description:
        "A fun and interactive game featuring Ninja Turtles, built with React and CSS animations.",
      techStack: ["React", "CSS Animations"],
      image: "/ninja.png",
      demoLink: "https://github.com/mohammed4122002/Ninja-project",
      githubLink: "https://github.com/mohammed4122002/Ninja-project",
    },
    {
      title: "protfolio website",
      description:
        "A portfolio website to showcase my projects and skills, built with HTML and CSS.",
      techStack: ["HTML", "CSS"],
      image: "/pr2.png",
      demoLink: "https://mohammed4122002.github.io/Responsive_project_html_css-js_1/",
      githubLink: "https://github.com/mohammed4122002/Responsive_project_html_css-js_1",
    },
    {
      title: "lecture website",
      description:
        "A lecture website for a university, built with html and CSS ",
      techStack: ["HTML", "CSS"],
      image: "/un.png",
      demoLink: "https://vs-code-3awd.vercel.app/",
      githubLink: "https://github.com/mohammed4122002/University-project",
    },
  ];
  


















  /******************************************** */



