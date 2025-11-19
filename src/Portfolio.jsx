import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";

/* ========= TUS PROYECTOS ========= */
const projects = [
  {
    title: "E-commerce",
    description:
      "Tienda en línea básica con navegación entre productos, filtros y simulación de carrito.",
    year: "2025",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://afedo-al.github.io/e-commerce/",
    repo: "https://github.com/afedo-al/e-commerce"
  },
  {
    title: "Formulario CRUD",
    description:
      "Aplicación CRUD que permite crear, leer, actualizar y eliminar registros mediante React.",
    year: "2025",
    tags: ["React", "JavaScript", "Estado"],
    link: "https://afedo-al.github.io/formulario_CRUD/",
    repo: "https://github.com/afedo-al/formulario_CRUD"
  },
  {
    title: "PacBoard (Juego)",
    description:
      "Mini juego estilo Pac-Man con movimiento en grid y lógica de colisión sencilla.",
    year: "2024",
    tags: ["JavaScript", "Juego", "Lógica"],
    link: "https://afedo-al.github.io/PacBoard/",
    repo: "https://github.com/afedo-al/PacBoard"
  },
  {
    title: "Apple vs Microsoft (Juego)",
    description:
      "Juego interactivo donde el usuario elige entre dos opciones y gana puntos en función de la elección.",
    year: "2024",
    tags: ["JavaScript", "Juego", "Interacción"],
    link: "https://afedo-al.github.io/APPLEvsMICROSOFT/",
    repo: "https://github.com/afedo-al/APPLEvsMICROSOFT"
  },
  {
    title: "Glosario HTML",
    description:
      "Página educativa con definiciones claras de las etiquetas HTML más importantes.",
    year: "2024",
    tags: ["HTML", "CSS", "Educativo"],
    link: "https://afedo-al.github.io/GLOSARIO-HTML/",
    repo: "https://github.com/afedo-al/GLOSARIO-HTML"
  },
  {
    title: "Red Social (Mini)",
    description:
      "Mini red social donde los usuarios pueden publicar mensajes, verlos y navegar entre publicaciones.",
    year: "2025",
    tags: ["React", "Estado", "UI"],
    link: "https://afedo-al.github.io/RED_SOCIAL/",
    repo: "https://github.com/afedo-al/RED_SOCIAL"
  },
  {
    title: "Formulario de Registro",
    description:
      "Formulario con validaciones que recoge datos del usuario para registro, con diseño limpio y funcional.",
    year: "2025",
    tags: ["React", "Forms", "Validación"],
    link: "https://afedo-al.github.io/formulario_registro/",
    repo: "https://github.com/afedo-al/formulario_registro"
  }
];

/* ========= COMPONENTE 3D: BLOB FUTURISTA ========= */
function FloatingBlob() {
  return (
    <mesh>
      <icosahedronGeometry args={[1.8, 40]} />
      <MeshDistortMaterial
        color="#8b5cff"
        emissive="#4f46e5"
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.3}
        speed={2}
        distort={0.45}
      />
    </mesh>
  );
}

/* ========= PORTAFOLIO ========= */
export default function Portfolio() {
  return (
    <div className="container">
      {/* HERO CON 3D FUTURISTA */}
      <section className="hero">
        {/* Fondo 3D */}
        <div className="hero-3d-wrapper">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            className="hero-canvas"
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 4, 5]} intensity={1.5} />
            <pointLight position={[-4, -3, -2]} intensity={0.8} />
            <FloatingBlob />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={1.5}
            />
          </Canvas>
          <div className="hero-gradient-overlay" />
        </div>

        {/* Contenido delante del 3D */}
        <div className="hero-content">
          <p className="hero-kicker">PORTAFOLIO · 2025</p>
          <h1 className="hero-title">
            Hola, soy <span className="accent">Alfredo J. Cruz Miss</span>
            <br />
            ME GUSTA SEGUIR APRENDIENDO.
          </h1>
          <p className="hero-subtitle">
            Frontend que crea interfaces limpias, dinámicas
            usando React, JavaScript y CSS. Combino diseño y
            tecnología para lograr experiencias web atractivas.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              Ver proyectos
            </a>
            <a href="#contact" className="btn-outline">
              Contacto
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="hero-meta-number">+7</span>
              <span className="hero-meta-label">Proyectos del parcial</span>
            </div>
            <div>
              <span className="hero-meta-number">100%</span>
              <span className="hero-meta-label">Ganas de seguir mejorando</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="about" className="about">
        <h2 className="section-title">Sobre mí</h2>
        <p className="section-text">
          Soy estudiante de Ingenieria en Tecnologia de Software con enfoque en frontend. Me gusta
          crear interfaces modernas, animadas y centradas en el usuario.
          Trabajo con React, JavaScript y CSS para construir proyectos como
          juegos, CRUDs, formularios avanzados y un e-commerce sencillo.
        </p>
        <p className="section-text">
          Me interesa seguir aprendiendo sobre diseño de interfaces,
          animaciones con buen gusto, manejo de estado en React y buenas
          prácticas de código para aplicaciones web.
        </p>
      </section>

      {/* PROYECTOS (usando el array de arriba) */}
      <section id="projects" className="projects">
        <h2 className="section-title">Proyectos</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="contact">
        <h2 className="section-title">Contacto</h2>
        <p className="contact-text">
          Si te interesan colaboraciones, prácticas o proyectos donde pueda
          aportar como frontend, puedes contactarme aquí:
        </p>
        <ul className="contact-list">
          <li>
            Email:{" "}
            <a href="mailto:al066340@uacam.mx">al066340@uacam.mx</a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/afedo-al" target="_blank" rel="noreferrer">
              @afedo-al
            </a>
          </li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} ALFREDO CRUZ MISS
      </footer>
    </div>
  );
}
