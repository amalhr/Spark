import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react"

type IconName = "arrow" | "award" | "book" | "brain" | "briefcase" | "chart" | "check" | "chevron" | "clock" | "close" | "dashboard" | "download" | "edit" | "file" | "folder" | "gear" | "home" | "logout" | "menu" | "message" | "play" | "plus" | "search" | "send" | "spark" | "star" | "target" | "upload" | "user" | "users" | "wand"

const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 12-1 9 4.5-2 4.5 2-1-9" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v18H7.5A3.5 3.5 0 0 0 4 23zM20 5.5A3.5 3.5 0 0 0 16.5 2H13v18h3.5a3.5 3.5 0 0 1 3.5 3z" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 4.5A3 3 0 0 0 4 6a3 3 0 0 0 .5 5.5A3.5 3.5 0 0 0 8 17h1.5M14.5 4.5A3 3 0 0 1 20 6a3 3 0 0 1-.5 5.5A3.5 3.5 0 0 1 16 17h-1.5M9.5 4.5V20a2.5 2.5 0 0 0 5 0V4.5M7 9h2.5M14.5 13H18" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 20h16" />
    </>
  ),
  edit: (
    <>
      <path d="m14 5 5 5M4 20l3.5-.5L19 8a2.1 2.1 0 0 0-3-3L4.5 16.5z" />
    </>
  ),
  file: (
    <>
      <path d="M6 2h8l4 4v16H6zM14 2v5h5M9 13h6M9 17h4" />
    </>
  ),
  folder: <path d="M3 6h7l2 2h9v11H3z" />,
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10M9 21v-7h6v7" />
    </>
  ),
  logout: (
    <>
      <path d="M10 4H4v16h6M14 8l4 4-4 4M18 12H9" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  message: <path d="M4 4h16v13H8l-4 4z" />,
  play: <path d="m9 7 8 5-8 5z" />,
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  send: (
    <>
      <path d="m3 3 19 9-19 9 4-9zM7 12h15" />
    </>
  ),
  spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7z" />,
  star: (
    <path d="m12 2 3 6 6.5 1-4.7 4.6 1.1 6.4-5.9-3-5.9 3 1.1-6.4L2.5 9 9 8z" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  upload: (
    <>
      <path d="M12 16V4m0 0L7 9m5-5 5 5M4 20h16" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 4a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5" />
    </>
  ),
  wand: (
    <>
      <path d="m4 20 11-11 4 4L8 24zM14 4l1-3 1 3 3 1-3 1-1 3-1-3-3-1zM20 12l.7-2 .8 2 2 .8-2 .7-.8 2-.7-2-2-.7z" />
    </>
  ),
}

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`logo ${light ? "logo-light" : ""}`}>
      <span className="logo-mark">
        <Icon name="spark" size={21} />
      </span>
      <strong>SPARK</strong>
    </div>
  )
}

function notify(message: string) {
  const previous = document.querySelector(".action-toast")
  previous?.remove()
  const toast = document.createElement("div")
  toast.className = "action-toast"
  toast.innerHTML = `<span>✓</span><div><strong>Action effectuée</strong><small>${message}</small></div>`
  document.body.appendChild(toast)
  window.setTimeout(() => toast.classList.add("visible"), 10)
  window.setTimeout(() => {
    toast.classList.remove("visible")
    window.setTimeout(() => toast.remove(), 250)
  }, 2600)
}

function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  type = "button",
}: {
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "dark"
  icon?: IconName
  onClick?: () => void
  type?: "button" | "submit"
}) {
  const fallbackAction = () =>
    notify(
      typeof children === "string"
        ? children
        : "Votre demande a été prise en compte.",
    )
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick ?? fallbackAction}
    >
      {children}
      {icon && <Icon name={icon} size={17} />}
    </button>
  )
}

function Badge({
  children,
  tone = "yellow",
}: {
  children: ReactNode
  tone?: "yellow" | "green" | "blue" | "orange" | "navy"
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}

function Progress({
  value,
  label,
  compact = false,
}: {
  value: number
  label?: string
  compact?: boolean
}) {
  return (
    <div className={`progress-wrap ${compact ? "compact" : ""}`}>
      {label && (
        <div className="progress-label">
          <span>{label}</span>
          <strong>{value}%</strong>
        </div>
      )}
      <div className="progress">
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

const projects = [
  {
    title: "Concevoir une application de gestion de budget",
    category: "UX/UI Design",
    level: "Intermédiaire",
    duration: "3 semaines",
    progress: 65,
    tone: "purple",
    icon: "chart" as IconName,
    skills: ["Figma", "UX Research", "Prototypage"],
  },
  {
    title: "Créer un tableau de bord analytique",
    category: "Data & Web",
    level: "Intermédiaire",
    duration: "4 semaines",
    progress: 32,
    tone: "orange",
    icon: "dashboard" as IconName,
    skills: ["React", "Data viz", "API"],
  },
  {
    title: "Lancer une campagne de marque responsable",
    category: "Marketing",
    level: "Débutant",
    duration: "2 semaines",
    progress: 0,
    tone: "green",
    icon: "target" as IconName,
    skills: ["Stratégie", "Copywriting", "Analyse"],
  },
]

function ProjectCard({
  project,
  onOpen,
  active = false,
}: {
  project: typeof projects[0]
  onOpen: () => void
  active?: boolean
}) {
  return (
    <article className="project-card">
      <div className={`project-cover cover-${project.tone}`}>
        <Badge
          tone={
            project.tone === "green"
              ? "green"
              : project.tone === "orange"
                ? "orange"
                : "blue"
          }
        >
          {project.category}
        </Badge>
        <span className="cover-icon">
          <Icon name={project.icon} size={34} />
        </span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>
            <Icon name="chart" size={15} />
            {project.level}
          </span>
          <span>
            <Icon name="clock" size={15} />
            {project.duration}
          </span>
        </div>
        <h3>{project.title}</h3>
        <div className="skill-list">
          {project.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        {active && (
          <Progress value={project.progress} label="Progression" compact />
        )}
        <Button
          variant={active ? "secondary" : "primary"}
          icon="arrow"
          onClick={onOpen}
        >
          {active ? "Continuer le projet" : "Voir le projet"}
        </Button>
      </div>
    </article>
  )
}

function PublicNav({
  page,
  setPage,
}: {
  page: string
  setPage: (p: string) => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <header className="public-nav">
      <Logo />
      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <Icon name={open ? "close" : "menu"} />
      </button>
      <nav className={open ? "open" : ""}>
        <button
          className={page === "landing" ? "active" : ""}
          onClick={() => {
            setPage("landing")
            setOpen(false)
          }}
        >
          Accueil
        </button>
        <button
          className={page === "about" ? "active" : ""}
          onClick={() => {
            setPage("about")
            setOpen(false)
          }}
        >
          À propos
        </button>
        <button
          onClick={() => {
            setPage("landing")
            setOpen(false)
            setTimeout(
              () =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" }),
              20,
            )
          }}
        >
          Projets
        </button>
        <button
          onClick={() => {
            setPage("login")
            setOpen(false)
          }}
        >
          Se connecter
        </button>
        <Button onClick={() => setPage("signup")}>Commencer</Button>
      </nav>
    </header>
  )
}

function Landing({ setPage }: { setPage: (p: string) => void }) {
  return (
    <div className="public-page">
      <PublicNav page="landing" setPage={setPage} />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <Badge tone="yellow">
              <Icon name="spark" size={14} /> L'apprentissage qui passe à
              l'action
            </Badge>
            <h1>
              Apprenez en pratiquant.
              <br />
              <span>Révélez votre potentiel.</span>
            </h1>
            <p>
              Développez des compétences qui comptent en réalisant des projets
              concrets, personnalisés par l'intelligence artificielle.
            </p>
            <div className="hero-actions">
              <Button icon="arrow" onClick={() => setPage("signup")}>
                Commencer maintenant
              </Button>
              <Button
                variant="secondary"
                icon="play"
                onClick={() =>
                  document
                    .getElementById("method")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Découvrir SPARK
              </Button>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack">
                <span>ML</span>
                <span>YA</span>
                <span>SB</span>
                <span>+2k</span>
              </div>
              <p>
                <strong>4,9/5</strong> par plus de 2 000 apprenants
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="floating-card fc-skill">
              <span className="mini-icon">
                <Icon name="brain" />
              </span>
              <div>
                <small>Compétence renforcée</small>
                <strong>
                  UX Research <em>+18%</em>
                </strong>
              </div>
            </div>
            <div className="dashboard-preview">
              <div className="preview-top">
                <Logo />
                <span className="preview-avatar">NK</span>
              </div>
              <div className="preview-welcome">
                <small>Bonjour Nora</small>
                <h3>Prête à progresser ?</h3>
              </div>
              <div className="preview-content">
                <div className="preview-project">
                  <div className="preview-thumb">
                    <Icon name="chart" size={28} />
                  </div>
                  <div>
                    <small>PROJET EN COURS</small>
                    <strong>Application de gestion de budget</strong>
                    <Progress value={65} compact />
                  </div>
                </div>
                <div className="preview-stats">
                  <div>
                    <Icon name="target" />
                    <strong>12</strong>
                    <small>Compétences</small>
                  </div>
                  <div>
                    <Icon name="award" />
                    <strong>4</strong>
                    <small>Projets réalisés</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-card fc-ai">
              <span className="ai-dot">
                <Icon name="spark" />
              </span>
              <div>
                <small>SPARK IA</small>
                <strong>Nouveau projet recommandé</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="logos">
          <p>Ils développent leurs talents avec SPARK</p>
          <div>
            <strong>novabank</strong>
            <strong>VERTIGO</strong>
            <strong>pulsar</strong>
            <strong>mosaic</strong>
            <strong>Latitude</strong>
          </div>
        </section>

        <section className="section" id="method">
          <div className="section-head centered">
            <Badge>UNE MÉTHODE QUI FONCTIONNE</Badge>
            <h2>
              Du potentiel à la compétence,
              <br />
              en quatre étapes
            </h2>
            <p>
              Pas de vidéos passives. Vous apprenez en faisant, accompagné par
              une IA qui s'adapte vraiment à vous.
            </p>
          </div>
          <div className="steps">
            {[
              [
                "01",
                "target",
                "Évaluez votre profil",
                "Identifiez vos forces, vos intérêts et les compétences à développer.",
              ],
              [
                "02",
                "wand",
                "Recevez vos projets",
                "L’IA sélectionne les défis les plus pertinents selon vos objectifs.",
              ],
              [
                "03",
                "briefcase",
                "Passez à l’action",
                "Construisez pas à pas avec une feuille de route claire et un assistant disponible.",
              ],
              [
                "04",
                "chart",
                "Mesurez vos progrès",
                "Recevez un feedback détaillé et visualisez chaque compétence acquise.",
              ],
            ].map(([n, icon, title, text]) => (
              <article className="step" key={n}>
                <span className="step-number">{n}</span>
                <span className="step-icon">
                  <Icon name={icon as IconName} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ai-section">
          <div className="ai-visual">
            <div className="ai-core">
              <Icon name="spark" size={38} />
              <span />
              <span />
              <span />
            </div>
            <div className="ai-chip chip-one">
              <Icon name="target" /> Analyse de compétences
            </div>
            <div className="ai-chip chip-two">
              <Icon name="wand" /> Parcours personnalisé
            </div>
            <div className="ai-chip chip-three">
              <Icon name="chart" /> Feedback instantané
            </div>
          </div>
          <div className="ai-copy">
            <Badge tone="navy">
              <Icon name="spark" size={14} /> PROPULSÉ PAR L'IA
            </Badge>
            <h2>Un parcours qui évolue avec vous</h2>
            <p>
              L'intelligence artificielle SPARK comprend où vous en êtes et où
              vous souhaitez aller. Chaque recommandation, chaque étape et
              chaque feedback est adapté à votre niveau.
            </p>
            <ul>
              <li>
                <Icon name="check" /> Des projets adaptés à vos ambitions
              </li>
              <li>
                <Icon name="check" /> Une feuille de route créée en temps réel
              </li>
              <li>
                <Icon name="check" /> Un accompagnement disponible 24h/24
              </li>
            </ul>
            <Button
              variant="dark"
              icon="arrow"
              onClick={() => setPage("signup")}
            >
              Découvrir votre parcours
            </Button>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-head split">
            <div>
              <Badge>PROJETS À LA UNE</Badge>
              <h2>Des défis inspirés du monde réel</h2>
            </div>
            <p>
              Construisez un portfolio solide avec des réalisations concrètes,
              pas seulement des certificats.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <ProjectCard
                project={p}
                key={p.title}
                onOpen={() => setPage("signup")}
              />
            ))}
          </div>
        </section>

        <section className="testimonial-section">
          <div className="section-head centered">
            <Badge>ILS SONT PASSÉS À L'ACTION</Badge>
            <h2>Leurs projets ont changé la suite</h2>
          </div>
          <div className="testimonials">
            {[
              [
                "“SPARK m’a permis de passer de la théorie à un vrai portfolio. J’ai décroché mon premier poste en product design trois mois plus tard.”",
                "AM",
                "Amélie Martin",
                "Product Designer · Lyon",
              ],
              [
                "“L’IA ne donne pas simplement la réponse : elle m’aide à comprendre et à trouver ma propre solution. C’est exactement ce qu’il me fallait.”",
                "KB",
                "Karim Benali",
                "Développeur front-end · Paris",
              ],
              [
                "“J’ai enfin pu mesurer mes progrès. Chaque projet me pousse juste assez loin pour que je continue à avancer sans me sentir perdu.”",
                "CL",
                "Chloé Laurent",
                "Marketing digital · Bordeaux",
              ],
            ].map(([quote, initials, name, role], i) => (
              <article
                className={`testimonial ${i === 1 ? "featured" : ""}`}
                key={name}
              >
                <div className="stars">★★★★★</div>
                <blockquote>{quote}</blockquote>
                <div className="person">
                  <span>{initials}</span>
                  <div>
                    <strong>{name}</strong>
                    <small>{role}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta">
          <div>
            <Badge tone="navy">VOTRE PROCHAIN PROJET VOUS ATTEND</Badge>
            <h2>Prêt à apprendre autrement ?</h2>
            <p>
              Créez votre profil, découvrez vos compétences et lancez-vous dans
              un projet fait pour vous.
            </p>
            <Button
              variant="dark"
              icon="arrow"
              onClick={() => setPage("signup")}
            >
              Créer mon compte gratuitement
            </Button>
          </div>
          <div className="cta-art">
            <span>
              <Icon name="spark" size={42} />
            </span>
          </div>
        </section>
      </main>
      <Footer setPage={setPage} />
    </div>
  )
}

function Footer({ setPage }: { setPage: (p: string) => void }) {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <Logo light />
          <p>Développez les compétences de demain, un projet à la fois.</p>
        </div>
        <div>
          <strong>Plateforme</strong>
          <button onClick={() => setPage("about")}>À propos</button>
          <button onClick={() => setPage("landing")}>Projets</button>
          <button onClick={() => setPage("landing")}>Comment ça marche</button>
        </div>
        <div>
          <strong>Ressources</strong>
          <button
            onClick={() => notify("Le centre d'aide sera bientôt disponible.")}
          >
            Centre d'aide
          </button>
          <button onClick={() => notify("Le blog sera bientôt disponible.")}>
            Blog
          </button>
          <button
            onClick={() => notify("La communauté sera bientôt disponible.")}
          >
            Communauté
          </button>
        </div>
        <div>
          <strong>Légal</strong>
          <button
            onClick={() => notify("Politique de confidentialité ouverte.")}
          >
            Confidentialité
          </button>
          <button onClick={() => notify("Conditions d'utilisation ouvertes.")}>
            Conditions
          </button>
          <button onClick={() => notify("Mentions légales ouvertes.")}>
            Mentions légales
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 SPARK. Tous droits réservés.</span>
        <span>Conçu pour apprendre autrement.</span>
      </div>
    </footer>
  )
}

function About({ setPage }: { setPage: (p: string) => void }) {
  return (
    <div className="public-page">
      <PublicNav page="about" setPage={setPage} />
      <main>
        <section className="about-hero">
          <Badge>NOTRE MISSION</Badge>
          <h1>
            Rendre chaque talent capable
            <br />
            de <span>passer à l'action.</span>
          </h1>
          <p>
            Nous croyons que la meilleure façon d'apprendre est de créer. SPARK
            transforme vos ambitions en compétences concrètes grâce à des
            projets qui ont du sens.
          </p>
        </section>
        <section className="about-stats">
          <div>
            <strong>12 000+</strong>
            <span>apprenants actifs</span>
          </div>
          <div>
            <strong>86%</strong>
            <span>terminent leur projet</span>
          </div>
          <div>
            <strong>42 000</strong>
            <span>compétences validées</span>
          </div>
          <div>
            <strong>4,9/5</strong>
            <span>satisfaction moyenne</span>
          </div>
        </section>
        <section className="section story-grid">
          <div>
            <Badge>POURQUOI SPARK</Badge>
            <h2>La compétence ne se regarde pas. Elle se pratique.</h2>
          </div>
          <div>
            <p>
              Les formations traditionnelles nous ont habitués à consommer du
              contenu. Pourtant, c'est en résolvant des problèmes réels que l'on
              apprend durablement.
            </p>
            <p>
              SPARK est né d'une idée simple : chaque apprenant mérite un
              parcours qui comprend son niveau, respecte son rythme et le pousse
              à produire quelque chose dont il peut être fier.
            </p>
          </div>
        </section>
        <section className="values section">
          <div className="section-head centered">
            <Badge>NOTRE PHILOSOPHIE</Badge>
            <h2>Ce qui nous guide</h2>
          </div>
          <div className="value-grid">
            {[
              [
                "briefcase",
                "Apprendre par la pratique",
                "Chaque compétence est reliée à une réalisation concrète et valorisable.",
              ],
              [
                "brain",
                "Une IA au service de l’humain",
                "La technologie s’adapte à l’apprenant, jamais l’inverse.",
              ],
              [
                "chart",
                "Progresser avec confiance",
                "Des retours clairs transforment chaque erreur en prochaine étape.",
              ],
            ].map(([i, t, p]) => (
              <article key={t}>
                <span>
                  <Icon name={i as IconName} />
                </span>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="about-ai">
          <div>
            <Badge tone="navy">L'IA SPARK</Badge>
            <h2>Personnelle, transparente, encourageante.</h2>
            <p>
              Notre IA analyse uniquement les données utiles à votre
              apprentissage. Elle explique ses recommandations, évalue selon des
              critères explicites et vous aide à développer votre autonomie.
            </p>
            <Button
              variant="dark"
              icon="arrow"
              onClick={() => setPage("signup")}
            >
              Découvrir mon parcours
            </Button>
          </div>
          <div className="about-ai-visual">
            <Icon name="brain" size={72} />
            <div>
              Analyse <strong>+</strong> Recommandation <strong>+</strong>{" "}
              Progression
            </div>
          </div>
        </section>
      </main>
      <Footer setPage={setPage} />
    </div>
  )
}

function Auth({
  mode,
  setPage,
  onLogin,
}: {
  mode: "login" | "signup" | "forgot"
  setPage: (p: string) => void
  onLogin: (admin?: boolean, onboarding?: boolean) => void
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [resetSent, setResetSent] = useState(false)
  const title =
    mode === "login"
      ? "Heureux de vous revoir"
      : mode === "signup"
        ? "Commencez votre parcours"
        : "Réinitialiser votre mot de passe"
  return (
    <div className="auth-page">
      <div className="auth-aside">
        <Logo light />
        <div>
          <Badge tone="navy">
            <Icon name="spark" size={14} /> APPRENDRE AUTREMENT
          </Badge>
          <h1>Votre potentiel mérite plus que de la théorie.</h1>
          <p>
            Rejoignez des milliers d'apprenants qui développent leurs
            compétences à travers des projets réels.
          </p>
        </div>
        <blockquote>
          “Le projet recommandé par SPARK est devenu la pièce maîtresse de mon
          portfolio.”<span>— Sarah, Product Designer</span>
        </blockquote>
      </div>
      <div className="auth-main">
        <button className="auth-back" onClick={() => setPage("landing")}>
          ← Retour à l'accueil
        </button>
        <div className="auth-box">
          <span className="auth-icon">
            <Icon name={mode === "forgot" ? "message" : "spark"} />
          </span>
          <h2>{title}</h2>
          <p>
            {mode === "login"
              ? "Connectez-vous pour poursuivre votre progression."
              : mode === "signup"
                ? "Créez votre compte gratuitement. Aucun paiement requis."
                : "Nous vous enverrons un lien sécurisé par e-mail."}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (mode === "forgot") {
                setResetSent(true)
                return
              } else onLogin(false, mode === "signup")
            }}
          >
            {mode === "signup" && (
              <div className="field-row">
                <label>
                  Prénom
                  <input placeholder="Nora" />
                </label>
                <label>
                  Nom
                  <input placeholder="Kaci" />
                </label>
              </div>
            )}
            <label>
              Adresse e-mail
              <input type="email" placeholder="nora@exemple.fr" />
            </label>
            {mode !== "forgot" && (
              <div className="password-field">
                <label>
                  Mot de passe
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="8 caractères minimum"
                    minLength={8}
                    required
                  />
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Masquer le mot de passe"
                      : "Afficher le mot de passe"
                  }
                >
                  {showPassword ? "Masquer" : "Afficher"}
                </button>
              </div>
            )}
            {mode === "signup" && (
              <div className="password-field">
                <label>
                  Confirmer le mot de passe
                  <input
                    type={showConfirmation ? "text" : "password"}
                    placeholder="Saisissez à nouveau votre mot de passe"
                    minLength={8}
                    required
                  />
                </label>
                <button
                  type="button"
                  onClick={() => setShowConfirmation(!showConfirmation)}
                  aria-label={
                    showConfirmation
                      ? "Masquer la confirmation"
                      : "Afficher la confirmation"
                  }
                >
                  {showConfirmation ? "Masquer" : "Afficher"}
                </button>
              </div>
            )}
            {mode === "login" && (
              <button
                type="button"
                className="forgot"
                onClick={() => setPage("forgot")}
              >
                Mot de passe oublié ?
              </button>
            )}
            {mode === "signup" && (
              <label className="check-field">
                <input type="checkbox" required /> J'accepte les conditions
                d'utilisation et la politique de confidentialité.
              </label>
            )}
            <Button type="submit" icon="arrow">
              {mode === "login"
                ? "Se connecter"
                : mode === "signup"
                  ? "Créer mon compte"
                  : "Envoyer le lien"}
            </Button>
          </form>
          {resetSent && (
            <div className="auth-success" role="status">
              <Icon name="check" />
              <div>
                <strong>Lien envoyé</strong>
                <p>
                  Consultez votre boîte de réception et suivez le lien sécurisé.
                </p>
              </div>
            </div>
          )}
          {mode === "login" && (
            <button className="admin-link" onClick={() => onLogin(true)}>
              Accéder à la démo administrateur
            </button>
          )}
          <div className="auth-switch">
            {mode === "login" ? (
              <>
                Pas encore de compte ?{" "}
                <button onClick={() => setPage("signup")}>
                  Créer un compte
                </button>
              </>
            ) : (
              <>
                Déjà un compte ?{" "}
                <button onClick={() => setPage("login")}>Se connecter</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const learnerNav: { key: string label: string icon: IconName }[] = [
  { key: "dashboard", label: "Dashboard", icon: "dashboard" },
  { key: "profile", label: "Mon profil", icon: "user" },
  { key: "skills", label: "Mes compétences", icon: "target" },
  { key: "portfolio", label: "Mon portfolio", icon: "briefcase" },
  { key: "projects", label: "Mes projets", icon: "folder" },
  { key: "diagnostic-intro", label: "Diagnostic", icon: "brain" },
  { key: "recommendations", label: "Recommandations IA", icon: "wand" },
  { key: "learning-path", label: "Mon parcours", icon: "chart" },
  { key: "assistant", label: "Assistant IA", icon: "message" },
  { key: "evaluations", label: "Ma progression", icon: "chart" },
  { key: "settings", label: "Paramètres", icon: "gear" },
  { key: "help", label: "Aide et support", icon: "message" },
]
const adminNav: { key: string label: string icon: IconName }[] = [
  { key: "admin-dashboard", label: "Dashboard", icon: "dashboard" },
  { key: "admin-users", label: "Utilisateurs", icon: "users" },
  { key: "admin-projects", label: "Projets", icon: "briefcase" },
  { key: "admin-skills", label: "Compétences", icon: "target" },
  { key: "admin-content", label: "Contenus", icon: "file" },
  { key: "admin-certificates", label: "Certificats", icon: "award" },
  { key: "admin-stats", label: "Statistiques", icon: "chart" },
  { key: "admin-settings", label: "Paramètres", icon: "gear" },
]

function AppShell({
  admin,
  view,
  setView,
  onLogout,
}: {
  admin: boolean
  view: string
  setView: (v: string) => void
  onLogout: () => void
}) {
  const [menu, setMenu] = useState(false)
  const nav = admin ? adminNav : learnerNav
  const current =
    nav.find((n) => n.key === view)?.label ||
    (view === "project-detail"
      ? "Détail du projet"
      : view === "workspace"
        ? "Espace projet"
        : "SPARK")
  return (
    <div className="app-shell">
      <aside className={menu ? "sidebar open" : "sidebar"}>
        <div className="side-logo">
          <Logo light />
          <button onClick={() => setMenu(false)}>
            <Icon name="close" />
          </button>
        </div>
        <div className="workspace-label">
          {admin ? "ADMINISTRATION" : "ESPACE APPRENANT"}
        </div>
        <nav>
          {nav.map((item) => (
            <button
              key={item.key}
              className={view === item.key ? "active" : ""}
              onClick={() => {
                setView(item.key)
                setMenu(false)
              }}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.key === "assistant" && <em>IA</em>}
            </button>
          ))}
        </nav>
        <div className="side-user">
          <span>{admin ? "TM" : "NK"}</span>
          <div>
            <strong>{admin ? "Thomas Martin" : "Nora Kaci"}</strong>
            <small>{admin ? "Administrateur" : "Niveau intermédiaire"}</small>
          </div>
          <button onClick={onLogout} title="Déconnexion">
            <Icon name="logout" />
          </button>
        </div>
      </aside>
      <div className="app-main">
        <header className="app-header">
          <button className="shell-menu" onClick={() => setMenu(true)}>
            <Icon name="menu" />
          </button>
          <div>
            <small>{admin ? "Administration" : "Mon espace"}</small>
            <strong>{current}</strong>
          </div>
          <div className="header-tools">
            <label className="search">
              <Icon name="search" />
              <input placeholder="Rechercher..." />
            </label>
            <button
              className="notification"
              onClick={() => setView("notifications")}
              aria-label="Ouvrir les notifications"
            >
              3
            </button>
            <span className="header-avatar">{admin ? "TM" : "NK"}</span>
          </div>
        </header>
        <main className="content">
          {admin ? (
            <AdminContent view={view} setView={setView} />
          ) : (
            <LearnerContent view={view} setView={setView} />
          )}
        </main>
      </div>
      {menu && (
        <button
          className="sidebar-overlay"
          onClick={() => setMenu(false)}
          aria-label="Fermer le menu"
        />
      )}
    </div>
  )
}

function PageHead({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="page-head">
      <div>
        {eyebrow && <span>{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {action}
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  detail,
  tone = "yellow",
}: {
  icon: IconName
  label: string
  value: string
  detail: string
  tone?: string
}) {
  return (
    <article className="stat-card">
      <span className={`stat-icon stat-${tone}`}>
        <Icon name={icon} />
      </span>
      <div>
        <small>{label}</small>
        <strong>{value}</strong>
        <em>{detail}</em>
      </div>
    </article>
  )
}

function LearnerContent({
  view,
  setView,
}: {
  view: string
  setView: (v: string) => void
}) {
  if (view.startsWith("onboarding-"))
    return <NewUserOnboarding view={view} setView={setView} />
  if (view.startsWith("progress-"))
    return <ProjectProgression view={view} setView={setView} />
  if (view.startsWith("diagnostic-"))
    return <DiagnosticFlow view={view} setView={setView} />
  if (view === "profile") return <Profile setView={setView} />
  if (view === "skills") return <Skills setView={setView} />
  if (view === "recommendations") return <Recommendations setView={setView} />
  if (view === "project-detail") return <ProjectDetail setView={setView} />
  if (view === "projects") return <MyProjects setView={setView} />
  if (view === "learning-path") return <LearningPath setView={setView} />
  if (view === "portfolio") return <Portfolio setView={setView} />
  if (view.startsWith("autonomy"))
    return <Autonomy view={view} setView={setView} />
  if (view === "workspace") return <Workspace setView={setView} />
  if (view === "assistant") return <Assistant />
  if (view === "evaluations") return <Evaluations />
  if (view === "certificates") return <Certificates />
  if (view === "settings") return <Settings />
  if (view === "notifications") return <Notifications setView={setView} />
  if (view === "help") return <HelpSupport />
  return <Dashboard setView={setView} />
}

function Dashboard({ setView }: { setView: (v: string) => void }) {
  return (
    <>
      <PageHead
        eyebrow="MARDI 14 JANVIER"
        title="Bonjour Nora, prête à avancer ?"
        description="Votre prochain objectif est à portée de main."
        action={
          <Button icon="spark" onClick={() => setView("recommendations")}>
            Voir mes recommandations
          </Button>
        }
      />
      <section className="dashboard-banner">
        <div>
          <Badge tone="navy">
            <Icon name="spark" size={13} /> CONSEIL DU JOUR PAR SPARK IA
          </Badge>
          <h2>Finalisez l'étape “Wireframes” aujourd'hui</h2>
          <p>
            Vous êtes dans un bon rythme. Une session de 45 minutes vous
            permettrait d'atteindre 70% de votre projet.
          </p>
          <Button
            variant="dark"
            icon="arrow"
            onClick={() => setView("workspace")}
          >
            Reprendre le projet
          </Button>
        </div>
        <div className="banner-ring">
          <strong>65%</strong>
          <span>complété</span>
        </div>
      </section>
      <div className="stats-grid">
        <StatCard
          icon="target"
          label="Compétences actives"
          value="12"
          detail="+3 ce mois"
          tone="purple"
        />
        <StatCard
          icon="briefcase"
          label="Projets réalisés"
          value="4"
          detail="1 en cours"
          tone="orange"
        />
        <StatCard
          icon="clock"
          label="Temps de pratique"
          value="38h"
          detail="+4h cette semaine"
          tone="green"
        />
        <StatCard
          icon="award"
          label="Certificats"
          value="3"
          detail="Dernier il y a 8j"
          tone="blue"
        />
      </div>
      <div className="dashboard-columns">
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Projet en cours</h2>
              <p>Continuez là où vous vous êtes arrêtée.</p>
            </div>
            <button onClick={() => setView("projects")}>
              Voir tous <Icon name="arrow" size={15} />
            </button>
          </div>
          <div className="active-project">
            <div className="active-cover">
              <Icon name="chart" size={36} />
              <Badge tone="blue">UX/UI DESIGN</Badge>
            </div>
            <div className="active-info">
              <Badge tone="orange">EN COURS</Badge>
              <h3>Application de gestion de budget</h3>
              <p>
                Concevoir une expérience simple qui aide les jeunes actifs à
                reprendre le contrôle de leurs finances.
              </p>
              <Progress value={65} label="Progression globale" />
              <div className="next-task">
                <span>
                  <Icon name="check" />
                </span>
                <div>
                  <small>PROCHAINE ÉTAPE</small>
                  <strong>Créer les wireframes principaux</strong>
                </div>
                <em>45 min</em>
              </div>
              <Button icon="arrow" onClick={() => setView("workspace")}>
                Continuer
              </Button>
            </div>
          </div>
        </section>
        <section className="panel skills-panel">
          <div className="panel-head">
            <div>
              <h2>Compétences</h2>
              <p>Votre évolution sur 30 jours.</p>
            </div>
            <button onClick={() => setView("skills")}>
              Détails <Icon name="arrow" size={15} />
            </button>
          </div>
          {[
            ["UX Research", 78, "+12%"],
            ["Prototypage", 64, "+18%"],
            ["Design visuel", 71, "+7%"],
            ["Communication", 56, "+9%"],
          ].map(([s, v, d]) => (
            <div className="skill-row" key={s}>
              <div>
                <strong>{s}</strong>
                <em>{d}</em>
              </div>
              <Progress value={v as number} compact />
            </div>
          ))}
          <div className="ai-insight">
            <Icon name="spark" />
            <p>
              <strong>Point fort détecté</strong>Votre progression en
              prototypage est 2× plus rapide ce mois-ci.
            </p>
          </div>
        </section>
      </div>
      <section className="dashboard-evolution">
        <div className="panel improved-skill">
          <span className="stat-icon stat-green">
            <Icon name="chart" />
          </span>
          <div>
            <Badge tone="green">COMPÉTENCE RÉCEMMENT AMÉLIORÉE</Badge>
            <h3>Prototypage : Intermédiaire → Avancé</h3>
            <p>
              Mise à jour après votre projet « Refonte du parcours d'inscription
              ».
            </p>
          </div>
          <Button variant="ghost" onClick={() => setView("skills")}>
            Voir l'évolution
          </Button>
        </div>
        <div className="panel portfolio-preview">
          <span className="stat-icon stat-orange">
            <Icon name="briefcase" />
          </span>
          <div>
            <Badge tone="orange">PORTFOLIO</Badge>
            <h3>4 réalisations concrètes</h3>
            <p>Votre dernier projet a été ajouté automatiquement.</p>
          </div>
          <Button variant="ghost" onClick={() => setView("portfolio")}>
            Ouvrir
          </Button>
        </div>
      </section>
      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Recommandé pour vous</h2>
            <p>Sélectionné selon vos objectifs et votre progression.</p>
          </div>
          <button onClick={() => setView("recommendations")}>
            Tout afficher <Icon name="arrow" size={15} />
          </button>
        </div>
        <div className="mini-project-grid">
          {projects.slice(1).map((p) => (
            <ProjectCard
              project={p}
              key={p.title}
              onOpen={() => setView("project-detail")}
            />
          ))}
        </div>
      </section>
    </>
  )
}

function Profile({ setView }: { setView: (v: string) => void }) {
  return (
    <>
      <PageHead
        title="Mon profil"
        description="Personnalisez votre profil pour recevoir des recommandations toujours plus pertinentes."
        action={
          <Button icon="spark" onClick={() => setView("diagnostic-intro")}>
            Refaire le diagnostic
          </Button>
        }
      />
      <div className="profile-grid">
        <section className="panel profile-card">
          <div className="profile-avatar">
            NK
            <span>
              <Icon name="edit" size={14} />
            </span>
          </div>
          <h2>Nora Kaci</h2>
          <p>Product designer en transition</p>
          <Badge tone="orange">NIVEAU INTERMÉDIAIRE</Badge>
          <div className="profile-complete">
            <div>
              <strong>Profil complété</strong>
              <span>85%</span>
            </div>
            <Progress value={85} compact />
            <small>Ajoutez votre portfolio pour atteindre 100%</small>
          </div>
          <div className="profile-facts">
            <span>
              <Icon name="clock" /> 6h disponibles / semaine
            </span>
            <span>
              <Icon name="target" /> Objectif : devenir Product Designer
            </span>
            <span>
              <Icon name="briefcase" /> Paris, France
            </span>
          </div>
        </section>
        <section className="panel profile-details">
          <h2>Informations personnelles</h2>
          <div className="info-grid">
            {[
              ["Prénom", "Nora"],
              ["Nom", "Kaci"],
              ["Adresse e-mail", "nora.kaci@exemple.fr"],
              ["Téléphone", "+33 6 12 34 56 78"],
              ["Domaine principal", "Design produit"],
              ["Expérience", "1 à 2 ans"],
            ].map(([l, v]) => (
              <label key={l}>
                {l}
                <span>{v}</span>
              </label>
            ))}
          </div>
          <hr />
          <h2>Objectifs d'apprentissage</h2>
          <div className="goal-box">
            <Icon name="target" />
            <div>
              <strong>Décrocher un poste de Product Designer junior</strong>
              <p>
                Développer un portfolio de 3 projets solides et renforcer mes
                compétences en recherche utilisateur.
              </p>
            </div>
          </div>
          <h2>Centres d'intérêt</h2>
          <div className="skill-list big">
            <span>UX Research</span>
            <span>Design systems</span>
            <span>Accessibilité</span>
            <span>Fintech</span>
            <span>Impact social</span>
          </div>
        </section>
      </div>
      <section className="panel dynamic-profile">
        <div className="dynamic-profile-head">
          <span>
            <Icon name="spark" />
          </span>
          <div>
            <Badge tone="green">
              PROFIL DYNAMIQUE · MIS À JOUR PAR SPARK IA
            </Badge>
            <h2>Vos niveaux évoluent avec vos projets</h2>
            <p>
              Chaque niveau ci-dessous est ajusté selon les compétences
              réellement démontrées, et non uniquement selon votre déclaration.
            </p>
          </div>
          <button onClick={() => setView("learning-path")}>
            Voir mon parcours <Icon name="arrow" size={15} />
          </button>
        </div>
        <div className="dynamic-skill-grid">
          {[
            ["Prototypage", "Avancé", 82, "+18 pts", "green"],
            ["UX Research", "Intermédiaire", 68, "+9 pts", "blue"],
            ["Design visuel", "Intermédiaire +", 74, "+7 pts", "orange"],
            ["Communication", "Intermédiaire", 61, "+5 pts", "purple"],
          ].map(([skill, level, value, change, tone]) => (
            <div key={skill}>
              <div>
                <span className={`stat-icon stat-${tone}`}>
                  <Icon name="target" />
                </span>
                <Badge tone="green">{change}</Badge>
              </div>
              <strong>{skill}</strong>
              <small>{level}</small>
              <Progress value={value as number} compact />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function Skills({ setView }: { setView: (v: string) => void }) {
  return (
    <>
      <PageHead
        eyebrow="ANALYSE MISE À JOUR IL Y A 3 JOURS"
        title="Évaluation des compétences"
        description="Comprenez vos forces et identifiez les meilleures opportunités de progression."
        action={
          <Button icon="play" onClick={() => setView("diagnostic-intro")}>
            Démarrer une évaluation
          </Button>
        }
      />
      <section className="skills-hero panel">
        <div className="score-ring">
          <strong>68</strong>
          <span>/100</span>
        </div>
        <div>
          <Badge tone="green">PROFIL ÉQUILIBRÉ</Badge>
          <h2>Votre niveau global est intermédiaire</h2>
          <p>
            Vous maîtrisez les fondamentaux du design produit. Pour passer au
            niveau supérieur, concentrez-vous sur la recherche utilisateur et
            les systèmes de design.
          </p>
          <div className="skill-list big">
            <span>
              <Icon name="star" size={14} /> Force : prototypage
            </span>
            <span>
              <Icon name="target" size={14} /> Priorité : UX research
            </span>
          </div>
        </div>
        <div className="ai-analysis">
          <Icon name="spark" />
          <strong>Analyse SPARK IA</strong>
          <p>Basée sur 42 réponses et 4 projets réalisés</p>
        </div>
      </section>
      <div className="dashboard-columns">
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Carte de compétences</h2>
              <p>Votre niveau actuel par domaine.</p>
            </div>
          </div>
          {[
            ["Prototypage", 82, "Avancé"],
            ["Design visuel", 74, "Intermédiaire"],
            ["Architecture de l’information", 68, "Intermédiaire"],
            ["UX Research", 54, "À renforcer"],
            ["Design system", 46, "À renforcer"],
          ].map(([s, v, l]) => (
            <div className="competency" key={s}>
              <div>
                <strong>{s}</strong>
                <Badge
                  tone={
                    v as number > 75
                      ? "green"
                      : v as number > 60
                        ? "blue"
                        : "orange"
                  }
                >
                  {l}
                </Badge>
              </div>
              <Progress value={v as number} compact />
            </div>
          ))}
        </section>
        <section className="panel">
          <h2>Plan de progression suggéré</h2>
          <div className="roadmap-mini">
            {[
              [
                "1",
                "Mener des entretiens utilisateurs",
                "Projet recommandé · 2 semaines",
              ],
              ["2", "Synthétiser des insights", "Exercice pratique · 3 heures"],
              [
                "3",
                "Créer un mini design system",
                "Projet recommandé · 3 semaines",
              ],
            ].map(([n, t, d]) => (
              <div key={n}>
                <span>{n}</span>
                <div>
                  <strong>{t}</strong>
                  <small>{d}</small>
                </div>
                <Icon name="chevron" />
              </div>
            ))}
          </div>
          <div className="ai-insight">
            <Icon name="spark" />
            <p>
              <strong>Pourquoi cet ordre ?</strong>Ce parcours cible vos écarts
              prioritaires tout en s'appuyant sur votre maîtrise du prototypage.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

function Recommendations({ setView }: { setView: (v: string) => void }) {
  const [filter, setFilter] = useState("Tous les projets")
  const allProjects = projects.concat([
    {
      ...projects[0],
      title: "Auditer l’accessibilité d’un service public",
      category: "Accessibilité",
      tone: "green",
    },
  ])
  const visibleProjects = allProjects.filter((project) => {
    if (filter === "Tous les projets") return true
    if (filter === "Design")
      return (
        project.category.includes("UX") ||
        project.category.includes("Accessibilité")
      )
    if (filter === "Développement") return project.category.includes("Web")
    return project.category.includes("Marketing")
  })
  return (
    <>
      <PageHead
        title="Projets recommandés"
        description="Des défis sélectionnés par l'IA selon vos compétences, vos objectifs et votre rythme."
      />
      <section className="recommend-banner">
        <span>
          <Icon name="spark" size={28} />
        </span>
        <div>
          <strong>Sélection personnalisée mise à jour</strong>
          <p>
            3 nouveaux projets correspondent à votre objectif “Product Designer”
            et renforcent vos compétences prioritaires.
          </p>
        </div>
        <Badge tone="navy">98% DE PERTINENCE</Badge>
      </section>
      <div className="filter-bar">
        <div>
          {["Tous les projets", "Design", "Développement", "Marketing"].map(
            (item) => (
              <button
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
                key={item}
              >
                {item}
              </button>
            ),
          )}
        </div>
        <button
          onClick={() =>
            notify("Les recommandations sont déjà classées par pertinence IA.")
          }
        >
          <Icon name="chart" /> Filtres
        </button>
      </div>
      <div className="project-grid recommendations">
        {visibleProjects.length ? (
          visibleProjects.map((p, i) => (
            <div className="recommend-wrap" key={p.title}>
              <span className="match">
                <Icon name="spark" size={14} /> {98 - i * 4}% compatible
              </span>
              <ProjectCard
                project={p}
                onOpen={() => setView("project-detail")}
              />
              {i === 0 && (
                <div className="why">
                  <strong>Pourquoi ce projet ?</strong>
                  <p>
                    Il combine votre intérêt pour la fintech et votre priorité
                    UX Research.
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="empty-filter">
            <Icon name="search" size={28} />
            <strong>Aucun projet dans cette catégorie</strong>
            <p>Essayez un autre filtre pour découvrir plus de projets.</p>
          </div>
        )}
      </div>
    </>
  )
}

function ProjectDetail({ setView }: { setView: (v: string) => void }) {
  return (
    <>
      <button className="back-link" onClick={() => setView("recommendations")}>
        ← Retour aux recommandations
      </button>
      <section className="detail-hero">
        <div>
          <div className="detail-badges">
            <Badge tone="blue">UX/UI DESIGN</Badge>
            <Badge tone="green">
              <Icon name="spark" size={13} /> 98% compatible
            </Badge>
          </div>
          <h1>Concevoir une application de gestion de budget</h1>
          <p>
            Imaginez une expérience mobile qui aide les jeunes actifs à
            comprendre leurs dépenses et à prendre de meilleures décisions
            financières.
          </p>
          <div className="detail-meta">
            <span>
              <Icon name="chart" /> Intermédiaire
            </span>
            <span>
              <Icon name="clock" /> 3 semaines
            </span>
            <span>
              <Icon name="briefcase" /> 6 livrables
            </span>
          </div>
        </div>
        <div className="detail-action">
          <small>PRÊTE À COMMENCER ?</small>
          <strong>Environ 5h par semaine</strong>
          <Button icon="arrow" onClick={() => setView("workspace")}>
            Commencer ce projet
          </Button>
          <span>Votre progression est sauvegardée automatiquement</span>
        </div>
      </section>
      <div className="detail-layout">
        <div>
          <section className="panel content-panel">
            <h2>Ce que vous allez construire</h2>
            <p>
              Vous suivrez l'ensemble du processus de conception produit :
              comprendre les besoins, définir le problème, imaginer des
              solutions et tester un prototype interactif.
            </p>
            <div className="deliverables">
              {[
                "Plan de recherche",
                "Personas & insights",
                "Parcours utilisateur",
                "Wireframes",
                "Prototype interactif",
                "Rapport de test",
              ].map((x, i) => (
                <div key={x}>
                  <span>{i + 1}</span>
                  {x}
                  <Icon name="check" />
                </div>
              ))}
            </div>
          </section>
          <section className="panel content-panel">
            <div className="panel-head">
              <div>
                <h2>Feuille de route générée par l'IA</h2>
                <p>Personnalisée selon votre niveau et vos disponibilités.</p>
              </div>
              <Badge tone="yellow">
                <Icon name="spark" size={13} /> SPARK IA
              </Badge>
            </div>
            <div className="timeline">
              {[
                [
                  "01",
                  "Comprendre le problème",
                  "Recherche exploratoire et cadrage",
                  "3 tâches · 4h",
                ],
                [
                  "02",
                  "Définir les utilisateurs",
                  "Entretiens, synthèse et personas",
                  "4 tâches · 6h",
                ],
                [
                  "03",
                  "Concevoir l’expérience",
                  "Parcours, wireframes et prototype",
                  "6 tâches · 12h",
                ],
                [
                  "04",
                  "Tester et améliorer",
                  "Tests utilisateurs et itérations",
                  "4 tâches · 6h",
                ],
              ].map(([n, t, p, d], i) => (
                <div className={i === 0 ? "active" : ""} key={n}>
                  <span>{n}</span>
                  <section>
                    <strong>{t}</strong>
                    <p>{p}</p>
                    <small>{d}</small>
                  </section>
                </div>
              ))}
            </div>
          </section>
        </div>
        <aside>
          <section className="panel">
            <h3>Compétences développées</h3>
            {[
              ["UX Research", 85],
              ["Prototypage", 70],
              ["Tests utilisateurs", 65],
              ["Communication", 45],
            ].map(([s, v]) => (
              <div className="side-skill" key={s}>
                <div>
                  <span>{s}</span>
                  <strong>+{v} XP</strong>
                </div>
                <Progress value={v as number} compact />
              </div>
            ))}
          </section>
          <section className="panel ai-note">
            <Icon name="spark" />
            <h3>Pourquoi SPARK vous le recommande</h3>
            <p>
              Ce projet cible précisément votre écart en recherche utilisateur
              tout en valorisant votre force en prototypage.
            </p>
          </section>
        </aside>
      </div>
    </>
  )
}

function MyProjects({ setView }: { setView: (v: string) => void }) {
  const [tab, setTab] = useState("En cours")
  return (
    <>
      <PageHead
        title="Mes projets"
        description="Tous vos défis, votre progression et vos réalisations au même endroit."
        action={
          <Button icon="plus" onClick={() => setView("recommendations")}>
            Trouver un nouveau projet
          </Button>
        }
      />
      <div className="tabs">
        {[
          ["En cours", "2"],
          ["Terminés", "4"],
          ["Sauvegardés", "3"],
        ].map(([label, count]) => (
          <button
            className={tab === label ? "active" : ""}
            onClick={() => setTab(label)}
            key={label}
          >
            {label} <span>{count}</span>
          </button>
        ))}
      </div>
      {tab !== "Terminés" && (
        <div className="project-grid">
          {(tab === "En cours" ? projects.slice(0, 2) : projects.slice(2)).map(
            (p) => (
              <ProjectCard
                key={p.title}
                project={p}
                active={tab === "En cours"}
                onOpen={() =>
                  setView(tab === "En cours" ? "workspace" : "project-detail")
                }
              />
            ),
          )}
        </div>
      )}
      {tab !== "Sauvegardés" && (
        <section className="panel completed-section">
          <div className="panel-head">
            <div>
              <h2>Derniers projets terminés</h2>
              <p>Vos réalisations récentes.</p>
            </div>
          </div>
          {[
            "Diagnostic initial · Parcours d’inscription",
            "Refonte du parcours d’inscription",
            "Créer une landing page responsable",
            "Étude utilisateur : mobilité urbaine",
          ].map((x, i) => (
            <div className="completed-row" key={x}>
              <span className="completed-icon">
                <Icon name="check" />
              </span>
              <div>
                <strong>{x}</strong>
                <small>
                  {i === 0
                    ? "Diagnostic pratique · Rapport disponible"
                    : `Terminé le ${15 - i * 3} décembre 2024`}
                </small>
              </div>
              <Badge tone="green">{i === 0 ? 76 : 95 - i * 3}/100</Badge>
              <Button variant="ghost" icon="arrow">
                Voir l'évaluation
              </Button>
            </div>
          ))}
        </section>
      )}
    </>
  )
}

function Workspace({ setView }: { setView: (v: string) => void }) {
  const [task, setTask] = useState(2)
  const [completed, setCompleted] = useState([true, true, false, false])
  const [files, setFiles] = useState<string[]>(["", "", "", ""])
  const [resource, setResource] = useState<string | null>(null)
  const fileInput = useRef<HTMLInputElement>(null)
  const taskData = [
    {
      title: "Préparer le guide d’entretien",
      duration: "45 MIN",
      description:
        "Construisez un guide court et neutre pour comprendre les habitudes financières de vos participants.",
      advice:
        "Privilégiez les questions ouvertes et évitez de suggérer une réponse dans leur formulation.",
      upload: "guide-entretien",
      instructions: [
        [
          "Définissez votre objectif",
          "Écrivez en une phrase ce que vous cherchez à apprendre.",
        ],
        [
          "Préparez 6 à 8 questions",
          "Commencez par les habitudes avant d'aborder les frustrations.",
        ],
        [
          "Testez votre guide",
          "Relisez chaque question pour vérifier qu'elle reste neutre.",
        ],
      ],
    },
    {
      title: "Conduire 3 entretiens",
      duration: "120 MIN",
      description:
        "Menez trois conversations courtes et documentez les comportements, besoins et frustrations observés.",
      advice:
        "Laissez quelques secondes de silence après chaque réponse : les informations les plus utiles arrivent souvent ensuite.",
      upload: "notes-entretiens",
      instructions: [
        [
          "Présentez le contexte",
          "Expliquez le sujet sans dévoiler la solution envisagée.",
        ],
        [
          "Conduisez les entretiens",
          "Prenez des notes fidèles sans interpréter trop tôt.",
        ],
        [
          "Rassemblez les verbatims",
          "Conservez les citations qui illustrent un comportement précis.",
        ],
      ],
    },
    {
      title: "Synthétiser les observations",
      duration: "90 MIN",
      description:
        "Transformez vos notes d'entretien en observations structurées afin de faire émerger des besoins, frustrations et comportements récurrents.",
      advice:
        "Vous avez tendance à formuler rapidement des solutions. Pour cette étape, restez centrée sur ce que les participants ont dit et fait.",
      upload: "synthese-observations",
      instructions: [
        [
          "Relisez vos notes d'entretien",
          "Surlignez les citations, comportements et frustrations significatifs.",
        ],
        [
          "Regroupez les observations similaires",
          "Créez des thèmes sans chercher à les nommer parfaitement au départ.",
        ],
        [
          "Formulez 3 à 5 insights",
          "Chaque insight doit exprimer une tension ou un besoin vérifiable.",
        ],
      ],
    },
    {
      title: "Créer un persona",
      duration: "60 MIN",
      description:
        "Créez un persona synthétique fondé sur vos observations pour guider les prochaines décisions du projet.",
      advice:
        "Votre persona doit refléter des comportements observés, et non une accumulation de détails démographiques imaginés.",
      upload: "persona-principal",
      instructions: [
        [
          "Choisissez un profil central",
          "Sélectionnez le groupe qui représente le besoin prioritaire.",
        ],
        [
          "Décrivez ses motivations",
          "Reliez chaque motivation à une observation de vos entretiens.",
        ],
        [
          "Ajoutez objectifs et frustrations",
          "Gardez uniquement les éléments utiles à la conception.",
        ],
      ],
    },
  ]
  const currentTask = taskData[task]
  const progress = Math.round(
    (completed.filter(Boolean).length / completed.length) * 100,
  )

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0]
    if (!selected) return
    setFiles((current) =>
      current.map((file, index) => (index === task ? selected.name : file)),
    )
    notify(`Le fichier « ${selected.name} » a été ajouté.`)
    event.target.value = ""
  }

  const completeTask = () => {
    setCompleted((current) =>
      current.map((value, index) => (index === task ? true : value)),
    )
    if (task < taskData.length - 1) {
      setTask(task + 1)
      notify("Tâche terminée. La suivante est maintenant ouverte.")
    } else {
      notify("Étape terminée. Votre travail est prêt à être soumis.")
    }
  }

  return (
    <>
      <PageHead
        eyebrow="PROJET EN COURS · ÉTAPE 2 SUR 4"
        title="Application de gestion de budget"
        description="Définir les utilisateurs et leurs besoins"
        action={
          <>
            <Button
              variant="secondary"
              onClick={() => notify("Votre progression a été enregistrée.")}
            >
              Enregistrer
            </Button>
            <Button
              icon="upload"
              onClick={() => setView("progress-evaluation")}
            >
              Soumettre
            </Button>
          </>
        }
      />
      <Progress value={progress} label="Progression de l'étape" />
      <div className="workspace-layout">
        <aside className="panel roadmap">
          <h3>Feuille de route</h3>
          {[
            "Cadrer le problème",
            "Définir les utilisateurs",
            "Concevoir l’expérience",
            "Tester et améliorer",
          ].map((x, i) => (
            <div className={i === 1 ? "current" : i < 1 ? "done" : ""} key={x}>
              <span>{i < 1 ? <Icon name="check" size={15} /> : i + 1}</span>
              <div>
                <strong>{x}</strong>
                <small>
                  {i === 1 ? "3 sur 4 tâches" : i < 1 ? "Terminé" : "À venir"}
                </small>
              </div>
            </div>
          ))}
          <hr />
          <h4>Tâches de l'étape</h4>
          {taskData.map((item, i) => (
            <button
              className={task === i ? "active" : ""}
              onClick={() => setTask(i)}
              key={item.title}
            >
              <span>
                {completed[i] ? <Icon name="check" size={14} /> : i + 1}
              </span>
              {item.title}
            </button>
          ))}
        </aside>
        <section className="panel task-content">
          <div className="task-title">
            <div>
              <Badge tone={completed[task] ? "green" : "orange"}>
                TÂCHE {task + 1} · {currentTask.duration}
              </Badge>
              <h2>{currentTask.title}</h2>
            </div>
            <span className="task-status">
              <Icon name={completed[task] ? "check" : "clock"} />{" "}
              {completed[task] ? "Terminée" : "En cours"}
            </span>
          </div>
          <p>{currentTask.description}</p>
          <div className="instruction">
            <span>
              <Icon name="spark" />
            </span>
            <div>
              <strong>Conseil personnalisé</strong>
              <p>{currentTask.advice}</p>
            </div>
          </div>
          <h3>Instructions</h3>
          <ol>
            {currentTask.instructions.map(([title, description], index) => (
              <li key={title}>
                <span>{index + 1}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className={`upload-zone ${files[task] ? "has-file" : ""}`}>
            <Icon name={files[task] ? "check" : "upload"} size={28} />
            <strong>
              {files[task] ||
                `Déposez votre livrable « ${currentTask.upload} »`}
            </strong>
            <p>
              {files[task]
                ? "Fichier prêt et enregistré avec votre progression"
                : "PDF, FigJam ou image · 20 Mo maximum"}
            </p>
            <input
              ref={fileInput}
              type="file"
              accept=".pdf,.png,.jpg,.jpeg,.fig"
              onChange={handleFile}
              hidden
            />
            <Button
              variant="secondary"
              onClick={() => fileInput.current?.click()}
            >
              {files[task] ? "Remplacer le fichier" : "Choisir un fichier"}
            </Button>
          </div>
          <div className="task-footer">
            <Button
              variant="ghost"
              onClick={() => {
                if (task === 0) {
                  notify("Vous êtes déjà sur la première tâche.")
                  return
                }
                setTask(task - 1)
              }}
            >
              Étape précédente
            </Button>
            <Button icon="check" onClick={completeTask}>
              {completed[task] ? "Continuer" : "Marquer comme terminée"}
            </Button>
          </div>
        </section>
        <aside className="panel resource-panel">
          <h3>Ressources utiles</h3>
          {[
            ["file", "Modèle de synthèse", "Fichier FigJam"],
            ["book", "Transformer une note en insight", "Guide · 5 min"],
            ["play", "L’affinity mapping", "Vidéo · 8 min"],
          ].map(([i, t, d]) => (
            <button key={t} onClick={() => setResource(t)}>
              <span>
                <Icon name={i as IconName} />
              </span>
              <div>
                <strong>{t}</strong>
                <small>{d}</small>
              </div>
              <Icon name="chevron" />
            </button>
          ))}
          <div className="assistant-prompt">
            <Icon name="spark" />
            <strong>Un blocage ?</strong>
            <p>
              L'assistant connaît votre projet et peut vous guider sans faire le
              travail à votre place.
            </p>
            <Button
              variant="dark"
              icon="message"
              onClick={() => setView("assistant")}
            >
              Demander à l'IA
            </Button>
          </div>
          {resource && (
            <div className="resource-preview">
              <button
                className="resource-close"
                onClick={() => setResource(null)}
                aria-label="Fermer"
              >
                <Icon name="close" />
              </button>
              <Badge tone="yellow">RESSOURCE OUVERTE</Badge>
              <h3>{resource}</h3>
              <p>
                Cette ressource est maintenant disponible pour vous aider dans
                la tâche « {currentTask.title} ».
              </p>
              <Button
                icon="check"
                onClick={() => {
                  notify("Ressource ajoutée à vos favoris.")
                  setResource(null)
                }}
              >
                Ajouter à mes ressources
              </Button>
            </div>
          )}
        </aside>
      </div>
    </>
  )
}

const onboardingSteps = [
  "Profil",
  "Formation",
  "Compétences",
  "Portfolio",
  "Vérification",
  "Analyse IA",
  "Projet diagnostic",
]

function OnboardingProgress({ active }: { active: number }) {
  return (
    <div className="onboarding-progress">
      {onboardingSteps.map((label, index) => (
        <div
          className={index === active ? "active" : index < active ? "done" : ""}
          key={label}
        >
          <span>
            {index < active ? <Icon name="check" size={13} /> : index + 1}
          </span>
          <strong>{label}</strong>
        </div>
      ))}
    </div>
  )
}

function NewUserOnboarding({
  view,
  setView,
}: {
  view: string
  setView: (v: string) => void
}) {
  if (view === "onboarding-education")
    return <OnboardingEducation setView={setView} />
  if (view === "onboarding-skills")
    return <OnboardingSkills setView={setView} />
  if (view === "onboarding-portfolio")
    return <OnboardingPortfolio setView={setView} />
  if (view === "onboarding-review")
    return <OnboardingReview setView={setView} />
  if (view === "onboarding-analysis")
    return <OnboardingAnalysis setView={setView} />
  if (view === "onboarding-project")
    return <OnboardingProject setView={setView} />
  return <OnboardingProfile setView={setView} />
}

function OnboardingProfile({ setView }: { setView: (v: string) => void }) {
  return (
    <div className="onboarding-page">
      <OnboardingProgress active={0} />
      <div className="onboarding-layout">
        <section className="onboarding-copy">
          <Badge tone="yellow">ÉTAPE 1 SUR 7</Badge>
          <h1>Commençons par mieux vous connaître</h1>
          <p>
            Votre profil aide SPARK IA à comprendre votre contexte, vos
            ambitions et le type de projets qui vous fera réellement progresser.
          </p>
          <div className="onboarding-ai-note">
            <Icon name="spark" />
            <div>
              <strong>Vos réponses façonnent votre parcours</strong>
              <p>
                Il n'y a pas de bonne ou de mauvaise réponse. Vous pourrez tout
                modifier plus tard.
              </p>
            </div>
          </div>
        </section>
        <form
          className="panel onboarding-form"
          onSubmit={(event) => {
            event.preventDefault()
            setView("onboarding-education")
          }}
        >
          <div className="form-title">
            <span>
              <Icon name="user" />
            </span>
            <div>
              <h2>Créez votre profil</h2>
              <p>Quelques informations pour personnaliser votre expérience.</p>
            </div>
          </div>
          <div className="field-row">
            <label>
              Prénom
              <input defaultValue="Nora" required />
            </label>
            <label>
              Nom
              <input defaultValue="Kaci" required />
            </label>
          </div>
          <label>
            Photo de profil
            <span className="profile-upload">
              <span>NK</span>
              <span>
                <strong>Ajouter une photo</strong>
                <small>JPG ou PNG · 5 Mo maximum</small>
              </span>
              <Button variant="secondary" icon="upload">
                Choisir
              </Button>
            </span>
          </label>
          <label>
            Courte biographie
            <textarea
              defaultValue="Étudiante passionnée par le design de services utiles, inclusifs et faciles à comprendre."
              rows={3}
              required
            />
          </label>
          <div className="field-row">
            <label>
              Date de naissance <small>Optionnel</small>
              <input type="date" defaultValue="2001-05-18" />
            </label>
            <label>
              Pays et ville <small>Optionnel</small>
              <input defaultValue="France, Lyon" />
            </label>
          </div>
          <label>
            Situation actuelle
            <select defaultValue="Étudiante">
              <option>Étudiante</option>
              <option>En activité</option>
              <option>En recherche d'emploi</option>
              <option>En reconversion</option>
            </select>
          </label>
          <div className="form-actions">
            <small>Vos informations restent modifiables à tout moment.</small>
            <Button type="submit" icon="arrow">
              Continuer vers ma formation
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

function OnboardingEducation({ setView }: { setView: (v: string) => void }) {
  return (
    <div className="onboarding-page">
      <OnboardingProgress active={1} />
      <div className="onboarding-layout">
        <section className="onboarding-copy">
          <Badge tone="yellow">ÉTAPE 2 SUR 7</Badge>
          <h1>Votre formation et vos ambitions</h1>
          <p>
            Ces informations permettent à SPARK de sélectionner des défis
            pertinents pour votre domaine, votre niveau et votre objectif.
          </p>
          <div className="onboarding-ai-note">
            <Icon name="target" />
            <div>
              <strong>Une trajectoire, pas une étiquette</strong>
              <p>
                Votre parcours s'adaptera à ce que vous démontrez dans vos
                projets.
              </p>
            </div>
          </div>
        </section>
        <form
          className="panel onboarding-form"
          onSubmit={(event) => {
            event.preventDefault()
            setView("onboarding-skills")
          }}
        >
          <div className="form-title">
            <span>
              <Icon name="book" />
            </span>
            <div>
              <h2>Formation et domaine</h2>
              <p>Décrivez votre contexte académique ou professionnel.</p>
            </div>
          </div>
          <div className="field-row">
            <label>
              Niveau d'études
              <select defaultValue="Bac +3" required>
                <option>Lycée</option>
                <option>Bac +2</option>
                <option>Bac +3</option>
                <option>Master ou plus</option>
                <option>Autodidacte</option>
              </select>
            </label>
            <label>
              Domaine
              <input defaultValue="Design numérique" required />
            </label>
          </div>
          <label>
            Établissement <small>Optionnel</small>
            <input defaultValue="Université Lumière Lyon 2" />
          </label>
          <label>
            Spécialisation
            <input defaultValue="UX/UI Design" required />
          </label>
          <label>
            Intérêts professionnels
            <input defaultValue="Design de services, accessibilité numérique, impact social" />
          </label>
          <label>
            Objectif professionnel
            <textarea
              rows={3}
              defaultValue="Devenir Product Designer capable de mener un projet de la recherche au prototype testé."
              required
            />
          </label>
          <div className="form-actions">
            <Button
              variant="ghost"
              onClick={() => setView("onboarding-profile")}
            >
              Retour
            </Button>
            <Button type="submit" icon="arrow">
              Continuer vers mes compétences
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

function OnboardingSkills({ setView }: { setView: (v: string) => void }) {
  const [skills, setSkills] = useState([
    { name: "Figma", level: "Intermédiaire" },
    { name: "Wireframing", level: "Intermédiaire" },
    { name: "Résolution de problèmes", level: "Intermédiaire" },
  ])
  const [newSkill, setNewSkill] = useState("")
  const addSkill = () => {
    if (!newSkill.trim()) return
    setSkills([...skills, { name: newSkill.trim(), level: "Débutant" }])
    setNewSkill("")
  }
  return (
    <div className="onboarding-page">
      <OnboardingProgress active={2} />
      <PageHead
        eyebrow="ÉTAPE 3 SUR 7"
        title="Quelles sont vos compétences aujourd'hui ?"
        description="Ajoutez ce que vous savez déjà faire et estimez votre niveau. SPARK affinera ensuite ces informations grâce à vos projets."
      />
      <div className="skills-onboarding-grid">
        <section className="panel skill-builder">
          <h2>Mes compétences</h2>
          <p>
            Choisissez un niveau selon votre aisance actuelle, sans chercher à
            vous surévaluer ou vous sous-évaluer.
          </p>
          <div className="add-skill">
            <Icon name="search" />
            <input
              value={newSkill}
              onChange={(event) => setNewSkill(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault()
                  addSkill()
                }
              }}
              placeholder="Ajouter une compétence..."
            />
            <Button icon="plus" onClick={addSkill}>
              Ajouter
            </Button>
          </div>
          <div className="declared-skills">
            {skills.map((skill, index) => (
              <div key={`${skill.name}-${index}`}>
                <span className="skill-letter">{skill.name[0]}</span>
                <strong>{skill.name}</strong>
                <select
                  value={skill.level}
                  onChange={(event) =>
                    setSkills(
                      skills.map((item, itemIndex) =>
                        itemIndex === index
                          ? { ...item, level: event.target.value }
                          : item,
                      ),
                    )
                  }
                >
                  <option>Débutant</option>
                  <option>Intermédiaire</option>
                  <option>Avancé</option>
                </select>
                <button
                  onClick={() =>
                    setSkills(skills.filter((_, item) => item !== index))
                  }
                  aria-label={`Supprimer ${skill.name}`}
                >
                  <Icon name="close" size={16} />
                </button>
              </div>
            ))}
          </div>
          <div className="form-actions">
            <Button
              variant="ghost"
              onClick={() => setView("onboarding-education")}
            >
              Retour
            </Button>
            <Button
              icon="arrow"
              onClick={() =>
                skills.length > 0 && setView("onboarding-portfolio")
              }
            >
              Continuer vers mon portfolio
            </Button>
          </div>
        </section>
        <aside className="panel skill-suggestions">
          <h3>Suggestions populaires</h3>
          <p>Cliquez pour ajouter rapidement une compétence.</p>
          <div>
            {[
              "UX Research",
              "Prototypage",
              "Développement web",
              "Design",
              "Communication",
              "Travail en équipe",
            ].map((skill) => (
              <button
                onClick={() =>
                  !skills.some((item) => item.name === skill) &&
                  setSkills([...skills, { name: skill, level: "Débutant" }])
                }
                key={skill}
              >
                <Icon name="plus" size={14} /> {skill}
              </button>
            ))}
          </div>
          <div className="onboarding-ai-note">
            <Icon name="brain" />
            <p>
              <strong>Pourquoi déclarer un niveau ?</strong>
              Cette première estimation sert de point de départ. Elle évoluera
              automatiquement selon les compétences démontrées.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}

function OnboardingPortfolio({ setView }: { setView: (v: string) => void }) {
  const [hasProject, setHasProject] = useState(true)
  return (
    <div className="onboarding-page">
      <OnboardingProgress active={3} />
      <PageHead
        eyebrow="ÉTAPE 4 SUR 7"
        title="Ajoutez vos expériences précédentes"
        description="Votre portfolio aide l'IA à distinguer les compétences déclarées de celles déjà mises en pratique. Cette étape reste facultative."
        action={
          <Button
            variant="secondary"
            onClick={() => setView("onboarding-review")}
          >
            Je n'ai pas encore de projet
          </Button>
        }
      />
      <div className="portfolio-onboarding-grid">
        <form
          className="panel onboarding-form"
          onSubmit={(event) => {
            event.preventDefault()
            setView("onboarding-review")
          }}
        >
          <div className="form-title">
            <span>
              <Icon name="briefcase" />
            </span>
            <div>
              <h2>Projet précédent</h2>
              <p>
                Ajoutez une réalisation académique, personnelle ou
                professionnelle.
              </p>
            </div>
          </div>
          {hasProject ? (
            <>
              <label>
                Titre du projet
                <input
                  defaultValue="Refonte d'une application étudiante"
                  required
                />
              </label>
              <label>
                Description
                <textarea
                  rows={3}
                  defaultValue="Prototype mobile simplifiant la recherche de salles et de services sur le campus."
                  required
                />
              </label>
              <div className="field-row">
                <label>
                  Technologies utilisées
                  <input defaultValue="Figma, FigJam" />
                </label>
                <label>
                  Votre rôle
                  <input defaultValue="Recherche et conception UX/UI" />
                </label>
              </div>
              <label>
                Compétences démontrées
                <input defaultValue="Wireframing, prototypage, résolution de problèmes" />
              </label>
              <label>
                Lien ou image <small>Optionnel</small>
                <input type="url" placeholder="https://..." />
              </label>
            </>
          ) : (
            <div className="empty-onboarding">
              <Icon name="folder" size={34} />
              <strong>Aucun projet ajouté</strong>
              <p>
                Ce n'est pas un problème : le diagnostic pratique servira de
                premier projet.
              </p>
            </div>
          )}
          <div className="form-actions">
            <Button
              variant="ghost"
              onClick={() => setView("onboarding-skills")}
            >
              Retour
            </Button>
            <div className="inline-actions">
              <Button
                variant="secondary"
                icon={hasProject ? "close" : "plus"}
                onClick={() => setHasProject(!hasProject)}
              >
                {hasProject ? "Retirer" : "Ajouter un projet"}
              </Button>
              <Button type="submit" icon="arrow">
                Vérifier mon profil
              </Button>
            </div>
          </div>
        </form>
        <aside className="panel portfolio-tip">
          <span>
            <Icon name="spark" />
          </span>
          <h3>Ce que SPARK recherche</h3>
          <p>
            Pas un portfolio parfait, mais des indices concrets sur votre façon
            de construire, résoudre et expliquer.
          </p>
          <ul>
            <li>
              <Icon name="check" /> Votre contribution réelle
            </li>
            <li>
              <Icon name="check" /> Les outils déjà utilisés
            </li>
            <li>
              <Icon name="check" /> Les problèmes rencontrés
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )
}

function OnboardingReview({ setView }: { setView: (v: string) => void }) {
  return (
    <div className="onboarding-page">
      <OnboardingProgress active={4} />
      <PageHead
        eyebrow="ÉTAPE 5 SUR 7"
        title="Vérifiez votre profil"
        description="Relisez les informations utilisées par SPARK IA avant de générer votre projet diagnostique."
      />
      <div className="review-grid">
        {[
          [
            "Informations personnelles",
            "user",
            "Nora Kaci · Étudiante · Lyon",
            "onboarding-profile",
          ],
          [
            "Formation et objectif",
            "book",
            "Bac +3 · Design numérique · UX/UI Design",
            "onboarding-education",
          ],
          [
            "Compétences déclarées",
            "target",
            "Figma — Intermédiaire · Wireframing — Intermédiaire · Résolution de problèmes — Intermédiaire",
            "onboarding-skills",
          ],
          [
            "Portfolio initial",
            "briefcase",
            "1 projet · Refonte d'une application étudiante",
            "onboarding-portfolio",
          ],
        ].map(([title, icon, detail, target]) => (
          <section className="panel review-card" key={title}>
            <span>
              <Icon name={icon as IconName} />
            </span>
            <div>
              <h2>{title}</h2>
              <p>{detail}</p>
            </div>
            <Button variant="ghost" icon="edit" onClick={() => setView(target)}>
              Modifier
            </Button>
          </section>
        ))}
      </div>
      <section className="review-confirm panel">
        <div>
          <Icon name="brain" />
          <p>
            <strong>Prochaine étape : analyse par l'IA</strong> SPARK croisera
            votre profil, vos compétences et votre portfolio pour créer un défi
            pratique adapté.
          </p>
        </div>
        <Button icon="spark" onClick={() => setView("onboarding-analysis")}>
          Valider mon profil
        </Button>
      </section>
    </div>
  )
}

function OnboardingAnalysis({ setView }: { setView: (v: string) => void }) {
  const [phase, setPhase] = useState(0)
  const phases = [
    "Lecture de votre profil",
    "Analyse des compétences déclarées",
    "Analyse de votre portfolio",
    "Création de votre projet diagnostique",
  ]
  useEffect(() => {
    const interval = window.setInterval(
      () => setPhase((current) => Math.min(current + 1, 3)),
      800,
    )
    const timeout = window.setTimeout(() => setView("onboarding-project"), 3600)
    return () => {
      window.clearInterval(interval)
      window.clearTimeout(timeout)
    }
  }, [setView])
  return (
    <div className="onboarding-analysis">
      <OnboardingProgress active={5} />
      <div className="analysis-orb">
        <Icon name="spark" size={38} />
        <i />
        <i />
      </div>
      <Badge tone="yellow">ANALYSE PERSONNALISÉE</Badge>
      <h1>SPARK IA analyse votre profil et votre portfolio...</h1>
      <p>
        Nous relions vos acquis, vos intérêts et votre objectif pour construire
        un point de départ réellement adapté.
      </p>
      <div className="analysis-list">
        {phases.map((item, index) => (
          <div className={index <= phase ? "active" : ""} key={item}>
            <span>
              {index < phase ? (
                <Icon name="check" size={13} />
              ) : (
                <Icon name="spark" size={13} />
              )}
            </span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
      <button onClick={() => setView("onboarding-project")}>
        Voir le projet maintenant
      </button>
    </div>
  )
}

function OnboardingResults({ setView }: { setView: (v: string) => void }) {
  return (
    <div className="onboarding-page">
      <OnboardingProgress active={3} />
      <PageHead
        eyebrow="ANALYSE TERMINÉE"
        title="Votre point de départ personnalisé"
        description="Cette première estimation repose sur votre profil et vos déclarations. Vos projets permettront à SPARK de l'affiner."
        action={
          <Button icon="arrow" onClick={() => setView("onboarding-project")}>
            Voir mon premier projet
          </Button>
        }
      />
      <section className="onboarding-result-hero">
        <div className="result-level">
          <span>
            <Icon name="chart" size={28} />
          </span>
          <small>NIVEAU GLOBAL ESTIMÉ</small>
          <strong>Débutant avancé</strong>
          <p>Vous avez déjà de bonnes bases pratiques à consolider.</p>
        </div>
        <div>
          <Badge tone="navy">
            <Icon name="spark" size={13} /> SYNTHÈSE SPARK IA
          </Badge>
          <h2>Un profil orienté vers la création concrète</h2>
          <p>
            Votre expérience Arduino et votre capacité à résoudre des problèmes
            sont de vrais atouts. Le prochain cap consiste à structurer votre
            code Python et à connecter plusieurs composants dans un même projet.
          </p>
        </div>
      </section>
      <div className="result-columns">
        <section className="panel">
          <div className="result-title">
            <span className="stat-icon stat-green">
              <Icon name="star" />
            </span>
            <div>
              <h2>Vos forces actuelles</h2>
              <p>Les acquis sur lesquels votre parcours va s'appuyer.</p>
            </div>
          </div>
          {[
            ["Arduino", 72, "Bonne autonomie sur les montages simples"],
            ["Résolution de problèmes", 68, "Démarche logique et persévérante"],
            ["Curiosité technique", 82, "Intérêts variés et cohérents"],
          ].map(([skill, value, detail]) => (
            <div className="result-skill" key={skill}>
              <div>
                <strong>{skill}</strong>
                <span>{value}%</span>
              </div>
              <Progress value={value as number} compact />
              <small>{detail}</small>
            </div>
          ))}
        </section>
        <section className="panel">
          <div className="result-title">
            <span className="stat-icon stat-orange">
              <Icon name="target" />
            </span>
            <div>
              <h2>Compétences à développer</h2>
              <p>Les priorités qui vous feront progresser efficacement.</p>
            </div>
          </div>
          {[
            [
              "Python structuré",
              "Priorité haute",
              "Passer de scripts isolés à une petite application.",
            ],
            [
              "Communication réseau",
              "Priorité moyenne",
              "Comprendre les échanges entre objets connectés.",
            ],
            [
              "Documentation",
              "Priorité moyenne",
              "Rendre un projet lisible et reproductible.",
            ],
          ].map(([skill, priority, detail]) => (
            <div className="improvement-item" key={skill}>
              <Icon name="arrow" />
              <div>
                <strong>{skill}</strong>
                <small>{detail}</small>
              </div>
              <Badge tone="orange">{priority}</Badge>
            </div>
          ))}
        </section>
      </div>
      <section className="panel recommendation-summary">
        <Icon name="brain" size={28} />
        <div>
          <h2>Recommandation personnalisée</h2>
          <p>
            Commencez par un projet IoT court qui combine Arduino et Python.
            Vous valoriserez une compétence déjà solide tout en développant
            progressivement la programmation et la communication de données.
          </p>
        </div>
        <Button icon="arrow" onClick={() => setView("onboarding-project")}>
          Découvrir le projet
        </Button>
      </section>
    </div>
  )
}

function OnboardingProject({ setView }: { setView: (v: string) => void }) {
  return (
    <div className="onboarding-page">
      <OnboardingProgress active={6} />
      <div className="first-project-layout">
        <section className="first-project-visual">
          <Badge tone="navy">VOTRE PROJET DIAGNOSTIQUE</Badge>
          <span>
            <Icon name="spark" size={48} />
          </span>
          <div>
            <strong>94%</strong>
            <small>adapté à votre profil</small>
          </div>
        </section>
        <section className="panel first-project-content">
          <Badge tone="orange">UX/UI · DIAGNOSTIC INITIAL</Badge>
          <h1>Améliorer l'inscription d'une application solidaire</h1>
          <p>
            Analysez un parcours d'inscription existant puis proposez un
            wireframe plus clair et argumenté. Ce défi observe vos acquis : il
            ne vous demande pas d'apprendre un nouvel outil.
          </p>
          <div className="project-facts">
            <span>
              <Icon name="chart" /> Difficulté adaptée
            </span>
            <span>
              <Icon name="clock" /> 60 à 90 minutes
            </span>
            <span>
              <Icon name="file" /> 2 livrables
            </span>
          </div>
          <h3>Compétences observées</h3>
          <div className="skill-list big">
            <span>Analyse UX</span>
            <span>Wireframing</span>
            <span>Hiérarchie visuelle</span>
            <span>Argumentation</span>
          </div>
          <div className="project-reason">
            <Icon name="spark" />
            <p>
              <strong>Pourquoi ce projet ?</strong>
              Votre portfolio montre déjà une première pratique de Figma. Ce
              défi vérifie votre capacité à analyser et à justifier vos choix
              avant de construire vos recommandations.
            </p>
          </div>
          <Button icon="arrow" onClick={() => setView("diagnostic-workspace")}>
            Commencer le diagnostic
          </Button>
          <button
            className="later-link"
            onClick={() => setView("diagnostic-intro")}
          >
            Consulter toutes les consignes
          </button>
        </section>
      </div>
    </div>
  )
}

function ProjectProgression({
  view,
  setView,
}: {
  view: string
  setView: (v: string) => void
}) {
  if (view === "progress-update")
    return <ProfileSkillUpdate setView={setView} />
  if (view === "progress-next")
    return <NextProgressiveProject setView={setView} />
  return <ProgressEvaluation setView={setView} />
}

function ProgressEvaluation({ setView }: { setView: (v: string) => void }) {
  const [phase, setPhase] = useState(0)
  useEffect(() => {
    const interval = window.setInterval(
      () => setPhase((current) => Math.min(3, current + 1)),
      700,
    )
    const timeout = window.setTimeout(() => setView("progress-update"), 3200)
    return () => {
      window.clearInterval(interval)
      window.clearTimeout(timeout)
    }
  }, [setView])
  const checks = [
    "Qualité du livrable",
    "Compétences démontrées",
    "Autonomie et résolution de problèmes",
    "Progression depuis le projet précédent",
  ]
  return (
    <div className="progress-evaluation">
      <div className="analysis-orb">
        <Icon name="brain" size={38} />
        <i />
        <i />
      </div>
      <Badge tone="yellow">PROJET TERMINÉ · ÉVALUATION IA</Badge>
      <h1>SPARK analyse votre progression</h1>
      <p>
        Votre travail est comparé à vos objectifs et à vos projets précédents
        pour mettre à jour votre profil.
      </p>
      <div className="evaluation-checks">
        {checks.map((check, index) => (
          <div className={index <= phase ? "done" : ""} key={check}>
            <span>
              <Icon name={index < phase ? "check" : "spark"} size={14} />
            </span>
            <strong>{check}</strong>
          </div>
        ))}
      </div>
      <button onClick={() => setView("progress-update")}>
        Voir immédiatement l'évaluation
      </button>
    </div>
  )
}

function ProfileSkillUpdate({ setView }: { setView: (v: string) => void }) {
  return (
    <div className="onboarding-page">
      <section className="skill-updated-hero">
        <span>
          <Icon name="chart" size={31} />
        </span>
        <Badge tone="navy">PROFIL MIS À JOUR AUTOMATIQUEMENT</Badge>
        <h1>Votre niveau en Python est passé de Débutant à Intermédiaire !</h1>
        <p>
          Cette évolution repose sur la qualité de votre code, votre autonomie
          et les solutions démontrées dans votre projet.
        </p>
      </section>
      <div className="profile-update-grid">
        <section className="panel skill-level-change">
          <h2>Évolution détectée</h2>
          <div className="level-before">
            <small>AVANT LE PROJET</small>
            <strong>Python · Débutant</strong>
            <Progress value={38} compact />
          </div>
          <div className="change-arrow">
            <Icon name="arrow" />
            <span>+24 points</span>
          </div>
          <div className="level-after">
            <small>NIVEAU ACTUEL</small>
            <strong>Python · Intermédiaire</strong>
            <Progress value={62} compact />
          </div>
        </section>
        <section className="panel evaluation-breakdown">
          <h2>Ce qui a fait la différence</h2>
          {[
            ["Qualité du travail", 84],
            ["Compétences démontrées", 78],
            ["Autonomie", 72],
            ["Résolution de problèmes", 86],
            ["Amélioration", 81],
          ].map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <Progress value={value as number} compact />
              <strong>{value}%</strong>
            </div>
          ))}
        </section>
      </div>
      <section className="panel update-explanation">
        <Icon name="spark" />
        <div>
          <h2>Votre profil évolue avec des preuves concrètes</h2>
          <p>
            SPARK ne modifie un niveau que lorsqu'une compétence est démontrée
            dans plusieurs tâches. Cette mise à jour influence directement la
            difficulté et les objectifs de votre prochain projet.
          </p>
        </div>
        <Button icon="arrow" onClick={() => setView("progress-next")}>
          Voir mon prochain projet
        </Button>
      </section>
    </div>
  )
}

function NextProgressiveProject({ setView }: { setView: (v: string) => void }) {
  return (
    <div className="onboarding-page">
      <PageHead
        eyebrow="NOUVELLE RECOMMANDATION · NIVEAU AJUSTÉ"
        title="Prêt pour un défi un peu plus ambitieux"
        description="La difficulté augmente progressivement selon votre dernière évaluation."
      />
      <section className="next-level-card">
        <div className="next-level-visual">
          <span>02</span>
          <Icon name="briefcase" size={42} />
          <Badge tone="navy">+1 NIVEAU DE DIFFICULTÉ</Badge>
        </div>
        <div className="next-level-content">
          <Badge tone="orange">IOT · INTERMÉDIAIRE</Badge>
          <h2>Créer un système d'arrosage intelligent</h2>
          <p>
            Automatisez l'arrosage selon l'humidité du sol et construisez un
            tableau de bord Python pour suivre les mesures à distance.
          </p>
          <div className="project-facts">
            <span>
              <Icon name="clock" /> 3 semaines
            </span>
            <span>
              <Icon name="target" /> 5 compétences
            </span>
          </div>
          <div className="project-reason">
            <Icon name="spark" />
            <p>
              <strong>Pourquoi maintenant ?</strong>
              Votre niveau Python est désormais suffisant pour gérer plusieurs
              capteurs et structurer une application plus complète.
            </p>
          </div>
          <Button icon="arrow" onClick={() => setView("workspace")}>
            Commencer ce nouveau projet
          </Button>
          <Button variant="ghost" onClick={() => setView("learning-path")}>
            Voir ma progression complète
          </Button>
        </div>
      </section>
    </div>
  )
}

function LearningPath({ setView }: { setView: (v: string) => void }) {
  return (
    <>
      <PageHead
        title="Mon parcours de progression"
        description="Chaque projet s'adapte à vos résultats et prépare le défi suivant."
        action={
          <Button icon="spark" onClick={() => setView("autonomy")}>
            Voir le stade autonomie
          </Button>
        }
      />
      <section className="path-overview">
        <div>
          <small>NIVEAU ACTUEL</small>
          <strong>Intermédiaire confirmé</strong>
          <p>4 projets terminés · 12 compétences démontrées</p>
        </div>
        <div className="path-overview-progress">
          <div>
            <span>Progression vers l'autonomie</span>
            <strong>86%</strong>
          </div>
          <Progress value={86} compact />
        </div>
      </section>
      <div className="learning-journey">
        {[
          {
            number: "01",
            title: "Station météo connectée",
            level: "Débutant avancé",
            score: "84/100",
            update: "Python : Débutant → Intermédiaire",
            state: "done",
          },
          {
            number: "02",
            title: "Système d'arrosage intelligent",
            level: "Intermédiaire",
            score: "89/100",
            update: "IoT : Intermédiaire → Avancé",
            state: "done",
          },
          {
            number: "03",
            title: "Dashboard énergétique temps réel",
            level: "Intermédiaire +",
            score: "92/100",
            update: "Autonomie : +18 points",
            state: "done",
          },
          {
            number: "04",
            title: "Solution domotique multi-capteurs",
            level: "Avancé",
            score: "En cours",
            update: "Prochaine validation",
            state: "current",
          },
        ].map((project) => (
          <article
            className={`journey-project ${project.state}`}
            key={project.number}
          >
            <span className="journey-number">
              {project.state === "done" ? (
                <Icon name="check" />
              ) : (
                project.number
              )}
            </span>
            <div className="journey-card panel">
              <div>
                <Badge tone={project.state === "done" ? "green" : "orange"}>
                  {project.state === "done" ? "TERMINÉ" : "EN COURS"}
                </Badge>
                <h2>{project.title}</h2>
                <p>{project.level}</p>
              </div>
              <strong>{project.score}</strong>
              <div className="journey-update">
                <Icon name="chart" />
                <span>{project.update}</span>
              </div>
            </div>
          </article>
        ))}
        <article className="journey-project autonomy">
          <span className="journey-number">
            <Icon name="star" />
          </span>
          <div className="journey-card panel">
            <div>
              <Badge tone="yellow">STADE DÉBLOQUÉ</Badge>
              <h2>Créer votre projet autonome</h2>
              <p>Vous avez démontré les compétences nécessaires.</p>
            </div>
            <Button icon="arrow" onClick={() => setView("autonomy")}>
              Découvrir
            </Button>
          </div>
        </article>
      </div>
    </>
  )
}

function Portfolio({ setView }: { setView: (v: string) => void }) {
  const portfolioProjects = [
    {
      title: "Station météo connectée",
      description:
        "Prototype Arduino et interface Python de visualisation des mesures.",
      skills: ["Python", "Arduino", "Data visualisation"],
      level: "Débutant avancé",
      date: "12 janvier 2025",
      score: "84",
    },
    {
      title: "Système d'arrosage intelligent",
      description:
        "Automatisation multi-capteurs avec suivi de l'humidité à distance.",
      skills: ["IoT", "Python", "Capteurs"],
      level: "Intermédiaire",
      date: "3 février 2025",
      score: "89",
    },
    {
      title: "Dashboard énergétique temps réel",
      description:
        "Tableau de bord connecté pour analyser la consommation d'un bâtiment.",
      skills: ["API", "Data", "Résolution de problèmes"],
      level: "Intermédiaire +",
      date: "28 février 2025",
      score: "92",
    },
  ]
  return (
    <>
      <PageHead
        title="Mon portfolio"
        description="Les projets terminés sont ajoutés automatiquement avec les compétences démontrées."
        action={
          <Button
            variant="secondary"
            icon="download"
            onClick={() =>
              notify("Votre portfolio a été préparé au format PDF.")
            }
          >
            Exporter le portfolio
          </Button>
        }
      />
      <section className="portfolio-banner">
        <div>
          <Badge tone="navy">PORTFOLIO DE NORA KACI</Badge>
          <h2>Des compétences prouvées par la pratique</h2>
          <p>
            3 projets terminés · 9 compétences validées · Score moyen 88/100
          </p>
        </div>
        <div className="portfolio-score">
          <strong>88</strong>
          <span>score moyen</span>
        </div>
      </section>
      <div className="portfolio-grid">
        {portfolioProjects.map((project, index) => (
          <article className="panel portfolio-card" key={project.title}>
            <div className={`portfolio-cover portfolio-cover-${index + 1}`}>
              <Badge tone="navy">{project.level}</Badge>
              <span>
                <Icon
                  name={
                    index === 0 ? "spark" : index === 1 ? "target" : "chart"
                  }
                  size={31}
                />
              </span>
              <strong>
                {project.score}
                <small>/100</small>
              </strong>
            </div>
            <div className="portfolio-body">
              <Badge tone="green">PROJET TERMINÉ</Badge>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="skill-list">
                {project.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <small>
                <Icon name="check" size={13} /> Terminé le {project.date}
              </small>
              <Button
                variant="secondary"
                icon="arrow"
                onClick={() => setView("evaluations")}
              >
                Voir le projet et l'évaluation
              </Button>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

function Autonomy({
  view,
  setView,
}: {
  view: string
  setView: (v: string) => void
}) {
  const [idea, setIdea] = useState("")
  const [selectedIdea, setSelectedIdea] = useState("")
  if (view === "autonomy-own")
    return (
      <div className="onboarding-page">
        <button className="back-link" onClick={() => setView("autonomy")}>
          ← Retour aux options
        </button>
        <PageHead
          eyebrow="PROJET AUTONOME · VOTRE IDÉE"
          title="Parlez-nous de votre projet"
          description="SPARK IA vérifiera sa faisabilité et créera une feuille de route adaptée à votre niveau."
        />
        <div className="autonomy-builder">
          <section className="panel own-idea-form">
            <label>
              Votre idée en quelques mots
              <input
                value={idea}
                onChange={(event) => setIdea(event.target.value)}
                placeholder="Ex. Un système qui surveille la qualité de l'air..."
              />
            </label>
            <label>
              Quel problème souhaitez-vous résoudre ?
              <textarea
                rows={4}
                placeholder="Décrivez le besoin, les personnes concernées et le résultat attendu..."
              />
            </label>
            <div className="field-row">
              <label>
                Temps disponible
                <select>
                  <option>3 à 4 semaines</option>
                  <option>1 à 2 mois</option>
                  <option>Plus de 2 mois</option>
                </select>
              </label>
              <label>
                Travail
                <select>
                  <option>En autonomie</option>
                  <option>En équipe</option>
                </select>
              </label>
            </div>
            <Button
              icon="spark"
              onClick={() => {
                if (!idea.trim()) {
                  notify("Décrivez votre idée avant de lancer l'analyse.")
                  return
                }
                notify("Idée analysée : elle correspond à votre niveau actuel.")
                setSelectedIdea(idea)
              }}
            >
              Analyser mon idée
            </Button>
          </section>
          <aside className="panel idea-analysis">
            {selectedIdea ? (
              <>
                <Badge tone="green">IDÉE VALIDÉE · 91% ADAPTÉE</Badge>
                <h2>{selectedIdea}</h2>
                <p>
                  Ce projet mobilise vos compétences IoT et vous fera progresser
                  en architecture et en gestion de données.
                </p>
                <div className="mini-roadmap">
                  {[
                    "Cadrer le besoin",
                    "Concevoir l'architecture",
                    "Construire le prototype",
                    "Tester et documenter",
                  ].map((step, index) => (
                    <div key={step}>
                      <span>{index + 1}</span>
                      <strong>{step}</strong>
                    </div>
                  ))}
                </div>
                <Button icon="arrow" onClick={() => setView("workspace")}>
                  Créer ma feuille de route
                </Button>
              </>
            ) : (
              <div className="idea-empty">
                <Icon name="brain" size={38} />
                <h3>L'analyse apparaîtra ici</h3>
                <p>
                  SPARK évaluera la difficulté, les compétences nécessaires et
                  proposera des étapes claires.
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>
    )
  if (view === "autonomy-ideas")
    return (
      <div className="onboarding-page">
        <button className="back-link" onClick={() => setView("autonomy")}>
          ← Retour aux options
        </button>
        <PageHead
          eyebrow="PROJET AUTONOME · IDÉES SPARK IA"
          title="Choisissez l'idée qui vous inspire"
          description="Trois propositions compatibles avec vos compétences et vos centres d'intérêt."
        />
        <div className="ai-idea-grid">
          {[
            [
              "Potager connecté autonome",
              "Un système qui surveille et optimise les conditions de culture.",
              "IoT · Capteurs · Python",
              "4 semaines",
            ],
            [
              "Moniteur de qualité de l'air",
              "Un objet connecté qui analyse l'environnement et alerte l'utilisateur.",
              "Arduino · Data · API",
              "5 semaines",
            ],
            [
              "Assistant de consommation énergétique",
              "Une interface qui aide un foyer à comprendre et réduire sa consommation.",
              "Python · UX · Data",
              "6 semaines",
            ],
          ].map(([title, description, skills, duration], index) => (
            <article className={`panel ai-idea idea-${index + 1}`} key={title}>
              <span>
                <Icon
                  name={
                    index === 0 ? "spark" : index === 1 ? "chart" : "target"
                  }
                  size={30}
                />
              </span>
              <Badge tone="green">{94 - index * 3}% ADAPTÉE</Badge>
              <h2>{title}</h2>
              <p>{description}</p>
              <small>{skills}</small>
              <div>
                <Icon name="clock" size={14} /> {duration}
              </div>
              <Button icon="arrow" onClick={() => setView("workspace")}>
                Choisir cette idée
              </Button>
            </article>
          ))}
        </div>
      </div>
    )
  return (
    <div className="onboarding-page">
      <section className="autonomy-hero">
        <span>
          <Icon name="award" size={42} />
        </span>
        <Badge tone="navy">STADE AUTONOMIE DÉBLOQUÉ</Badge>
        <h1>
          🎉 Vous êtes prêt(e) à créer votre propre projet de manière autonome !
        </h1>
        <p>
          Vous avez démontré que vous savez cadrer un problème, construire une
          solution et surmonter les blocages. SPARK reste à vos côtés, mais
          c'est désormais vous qui choisissez la direction.
        </p>
      </section>
      <div className="autonomy-options">
        <article className="autonomy-option own">
          <span>
            <Icon name="edit" size={34} />
          </span>
          <Badge tone="yellow">OPTION 1</Badge>
          <h2>J'ai ma propre idée</h2>
          <p>
            Soumettez votre concept. SPARK vérifiera son adéquation, organisera
            les étapes et créera une feuille de route sur mesure.
          </p>
          <ul>
            <li>
              <Icon name="check" /> Analyse de faisabilité
            </li>
            <li>
              <Icon name="check" /> Roadmap personnalisée
            </li>
            <li>
              <Icon name="check" /> Accompagnement jusqu'au résultat
            </li>
          </ul>
          <Button icon="arrow" onClick={() => setView("autonomy-own")}>
            Présenter mon idée
          </Button>
        </article>
        <article className="autonomy-option suggested">
          <span>
            <Icon name="wand" size={34} />
          </span>
          <Badge tone="navy">OPTION 2</Badge>
          <h2>Proposez-moi une idée</h2>
          <p>
            Recevez plusieurs idées adaptées à vos compétences, vos intérêts et
            au niveau de défi que vous êtes prêt à relever.
          </p>
          <ul>
            <li>
              <Icon name="check" /> Idées personnalisées
            </li>
            <li>
              <Icon name="check" /> Difficulté adaptée
            </li>
            <li>
              <Icon name="check" /> Compétences clairement ciblées
            </li>
          </ul>
          <Button
            variant="dark"
            icon="spark"
            onClick={() => setView("autonomy-ideas")}
          >
            Découvrir les idées SPARK
          </Button>
        </article>
      </div>
    </div>
  )
}

const diagnosticSteps = [
  "Votre défi",
  "Réalisation",
  "Évaluation IA",
  "Vos résultats",
  "Nouveau parcours",
]

function DiagnosticProgress({ active }: { active: number }) {
  return (
    <div className="diagnostic-progress">
      {diagnosticSteps.map((step, index) => (
        <div
          className={index === active ? "active" : index < active ? "done" : ""}
          key={step}
        >
          <span>
            {index < active ? <Icon name="check" size={14} /> : index + 1}
          </span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  )
}

function DiagnosticFlow({
  view,
  setView,
}: {
  view: string
  setView: (v: string) => void
}) {
  if (view === "diagnostic-workspace")
    return <DiagnosticWorkspace setView={setView} />
  if (view === "diagnostic-submission")
    return <DiagnosticSubmission setView={setView} />
  if (view === "diagnostic-loading")
    return <DiagnosticLoading setView={setView} />
  if (view === "diagnostic-report")
    return <DiagnosticReport setView={setView} />
  if (view === "diagnostic-comparison")
    return <DiagnosticComparison setView={setView} />
  if (view === "diagnostic-confirm")
    return <DiagnosticConfirmation setView={setView} />
  if (view === "diagnostic-next")
    return <DiagnosticNextProject setView={setView} />
  return <DiagnosticIntro setView={setView} />
}

function DiagnosticIntro({ setView }: { setView: (v: string) => void }) {
  return (
    <div className="diagnostic-page">
      <DiagnosticProgress active={0} />
      <section className="diagnostic-hero">
        <div className="diagnostic-hero-copy">
          <Badge tone="navy">
            <Icon name="spark" size={13} /> DIAGNOSTIC PRATIQUE GÉNÉRÉ PAR L'IA
          </Badge>
          <h1>Votre premier défi : découvrons votre véritable niveau !</h1>
          <p>
            À partir de votre profil, SPARK a créé un mini-projet court pour
            observer vos compétences en situation réelle. Ce n'est ni un examen
            scolaire, ni un projet d'apprentissage ordinaire.
          </p>
          <div className="diagnostic-meta">
            <span>
              <Icon name="clock" /> 60 à 90 minutes
            </span>
            <span>
              <Icon name="target" /> 4 compétences observées
            </span>
            <span>
              <Icon name="file" /> 2 livrables
            </span>
          </div>
          <Button
            variant="dark"
            icon="arrow"
            onClick={() => setView("diagnostic-workspace")}
          >
            Commencer mon diagnostic
          </Button>
        </div>
        <div className="diagnostic-visual">
          <span className="diagnostic-orbit">
            <Icon name="brain" size={52} />
          </span>
          <div className="diagnostic-float float-a">
            <Icon name="check" />
            <span>
              Profil analysé<strong>UX/UI · Intermédiaire déclaré</strong>
            </span>
          </div>
          <div className="diagnostic-float float-b">
            <Icon name="wand" />
            <span>
              Défi sur mesure<strong>Généré en 8 secondes</strong>
            </span>
          </div>
        </div>
      </section>
      <div className="diagnostic-intro-grid">
        <section className="panel diagnostic-brief">
          <div className="panel-head">
            <div>
              <Badge tone="orange">VOTRE MINI-PROJET</Badge>
              <h2>Améliorer l'inscription d'une application solidaire</h2>
            </div>
            <span className="diagnostic-match">96% adapté</span>
          </div>
          <p>
            Une association constate que de nombreux bénévoles abandonnent
            pendant leur inscription. Analysez le parcours actuel et proposez
            une amélioration simple et argumentée.
          </p>
          <div className="diagnostic-objectives">
            <div>
              <span>
                <Icon name="target" />
              </span>
              <strong>Objectif</strong>
              <p>Identifier les principaux points de friction du parcours.</p>
            </div>
            <div>
              <span>
                <Icon name="briefcase" />
              </span>
              <strong>Livrables</strong>
              <p>Un audit annoté et un wireframe de votre solution.</p>
            </div>
            <div>
              <span>
                <Icon name="chart" />
              </span>
              <strong>Compétences testées</strong>
              <p>Analyse UX, hiérarchie, wireframing et argumentation.</p>
            </div>
          </div>
        </section>
        <aside className="panel diagnostic-why">
          <Icon name="spark" />
          <h3>Pourquoi ce défi ?</h3>
          <p>
            Vous avez déclaré maîtriser Figma et les fondamentaux UX. Cette
            mission permet de vérifier ces acquis sans vous demander de
            connaissances nouvelles.
          </p>
          <small>
            Le résultat servira uniquement à personnaliser votre parcours.
          </small>
        </aside>
      </div>
    </div>
  )
}

function DiagnosticWorkspace({ setView }: { setView: (v: string) => void }) {
  const [completed, setCompleted] = useState([true, false, false])
  const progress = completed.filter(Boolean).length * 33
  return (
    <div className="diagnostic-page">
      <DiagnosticProgress active={1} />
      <PageHead
        eyebrow="DIAGNOSTIC INITIAL · 60 À 90 MIN"
        title="Améliorer un parcours d'inscription"
        description="Travaillez comme vous le feriez habituellement. Nous évaluons votre démarche autant que le résultat."
        action={
          <Button
            icon="upload"
            onClick={() => setView("diagnostic-submission")}
          >
            Préparer l'envoi
          </Button>
        }
      />
      <section className="diagnostic-work-head panel">
        <div>
          <strong>Progression du mini-projet</strong>
          <span>{Math.min(progress, 100)}%</span>
        </div>
        <Progress value={Math.min(progress, 100)} compact />
        <p>
          Vos modifications sont enregistrées automatiquement dans votre
          portfolio.
        </p>
      </section>
      <div className="diagnostic-work-grid">
        <section className="panel diagnostic-task-list">
          <h2>Votre mission</h2>
          <p>
            Lisez le scénario, réalisez les trois tâches puis déposez vos deux
            livrables.
          </p>
          {[
            [
              "Analyser le parcours",
              "Repérez au moins 3 problèmes dans les écrans fournis.",
              "20 min",
            ],
            [
              "Prioriser les frictions",
              "Classez-les et justifiez le problème le plus critique.",
              "15 min",
            ],
            [
              "Proposer une solution",
              "Créez un wireframe amélioré et expliquez vos choix.",
              "35 min",
            ],
          ].map(([title, text, time], index) => (
            <button
              className={completed[index] ? "complete" : ""}
              onClick={() =>
                setCompleted(
                  completed.map((value, item) =>
                    item === index ? !value : value,
                  ),
                )
              }
              key={title}
            >
              <span>
                {completed[index] ? <Icon name="check" /> : index + 1}
              </span>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
              <em>{time}</em>
            </button>
          ))}
        </section>
        <aside className="panel diagnostic-rules">
          <span>
            <Icon name="brain" />
          </span>
          <h3>Conditions du diagnostic</h3>
          <ul>
            <li>
              <Icon name="check" /> Utilisez vos outils habituels
            </li>
            <li>
              <Icon name="check" /> Expliquez vos décisions
            </li>
            <li>
              <Icon name="check" /> Pas de réponse unique attendue
            </li>
          </ul>
          <div>
            <strong>Besoin d'une précision ?</strong>
            <p>
              L'assistant peut clarifier la consigne, mais ne proposera pas de
              solution pendant le diagnostic.
            </p>
            <Button
              variant="secondary"
              icon="message"
              onClick={() =>
                notify(
                  "Consigne clarifiée : concentrez-vous sur la démarche et justifiez chaque choix.",
                )
              }
            >
              Clarifier une consigne
            </Button>
          </div>
        </aside>
      </div>
    </div>
  )
}

function DiagnosticSubmission({ setView }: { setView: (v: string) => void }) {
  const [files, setFiles] = useState([true, false])
  return (
    <div className="diagnostic-page">
      <DiagnosticProgress active={1} />
      <PageHead
        eyebrow="DERNIÈRE ÉTAPE DU MINI-PROJET"
        title="Soumettez votre travail"
        description="Vérifiez vos livrables avant de lancer l'évaluation pratique par l'IA."
      />
      <div className="submission-grid">
        <section className="panel submission-main">
          <h2>Livrables attendus</h2>
          <p>
            Formats acceptés : PDF, PNG, JPG ou lien Figma. 20 Mo maximum par
            fichier.
          </p>
          {[
            ["Audit du parcours annoté", "audit-inscription-nora.pdf"],
            ["Wireframe amélioré", "wireframe-inscription.fig"],
          ].map(([label, file], index) => (
            <div
              className={`deliverable-upload ${files[index] ? "ready" : ""}`}
              key={label}
            >
              <span>
                <Icon name={files[index] ? "file" : "upload"} />
              </span>
              <div>
                <strong>{label}</strong>
                <small>
                  {files[index] ? file : "Aucun fichier sélectionné"}
                </small>
              </div>
              <button
                onClick={() =>
                  setFiles(files.map((value, item) => item === index || value))
                }
              >
                {files[index] ? "Remplacer" : "Ajouter"}
              </button>
              {files[index] && <Icon name="check" />}
            </div>
          ))}
          <label className="submission-note">
            Note à l'attention de l'évaluation IA
            <textarea placeholder="Expliquez brièvement votre démarche ou les contraintes rencontrées..." />
          </label>
        </section>
        <aside className="panel submission-summary">
          <Badge tone={files.every(Boolean) ? "green" : "orange"}>
            {files.every(Boolean) ? "PRÊT À ENVOYER" : "1 LIVRABLE MANQUANT"}
          </Badge>
          <h2>Récapitulatif</h2>
          <div>
            <span>Défi</span>
            <strong>Parcours d'inscription</strong>
          </div>
          <div>
            <span>Temps passé</span>
            <strong>1 h 14 min</strong>
          </div>
          <div>
            <span>Livrables</span>
            <strong>{files.filter(Boolean).length} sur 2</strong>
          </div>
          <p>
            Après l'envoi, vos fichiers seront analysés selon des critères
            transparents et ajoutés à votre portfolio.
          </p>
          <Button
            icon="spark"
            onClick={() =>
              files.every(Boolean) && setView("diagnostic-loading")
            }
          >
            Soumettre pour évaluation
          </Button>
          {!files.every(Boolean) && (
            <small>Ajoutez les deux livrables pour continuer.</small>
          )}
        </aside>
      </div>
    </div>
  )
}

function DiagnosticLoading({ setView }: { setView: (v: string) => void }) {
  const [phase, setPhase] = useState(0)
  const phases = [
    "Analyse de la démarche",
    "Lecture des livrables",
    "Comparaison avec le profil déclaré",
    "Création des recommandations",
  ]
  useEffect(() => {
    const phaseTimer = window.setInterval(
      () => setPhase((current) => Math.min(current + 1, phases.length - 1)),
      850,
    )
    const completeTimer = window.setTimeout(
      () => setView("diagnostic-report"),
      3900,
    )
    return () => {
      window.clearInterval(phaseTimer)
      window.clearTimeout(completeTimer)
    }
  }, [setView])
  return (
    <div className="diagnostic-loading">
      <DiagnosticProgress active={2} />
      <div className="loading-core">
        <span>
          <Icon name="spark" size={38} />
        </span>
        <i />
        <i />
        <i />
      </div>
      <Badge tone="yellow">SPARK IA ANALYSE VOTRE TRAVAIL</Badge>
      <h1>Votre évaluation prend forme</h1>
      <p>
        Nous comparons les compétences démontrées avec votre profil pour vous
        proposer un niveau plus précis et un parcours réellement personnalisé.
      </p>
      <div className="loading-phases">
        {phases.map((item, index) => (
          <div className={index <= phase ? "done" : ""} key={item}>
            <span>
              {index < phase ? (
                <Icon name="check" size={13} />
              ) : index === phase ? (
                <Icon name="spark" size={13} />
              ) : (
                index + 1
              )}
            </span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
      <button onClick={() => setView("diagnostic-report")}>
        Voir immédiatement le rapport
      </button>
    </div>
  )
}

const diagnosticSkills = [
  {
    name: "Analyse UX",
    declared: 75,
    actual: 68,
    label: "Intermédiaire confirmé",
  },
  {
    name: "Wireframing",
    declared: 70,
    actual: 82,
    label: "Avancé",
  },
  {
    name: "Hiérarchie visuelle",
    declared: 65,
    actual: 74,
    label: "Intermédiaire +",
  },
  {
    name: "Argumentation",
    declared: 70,
    actual: 58,
    label: "À renforcer",
  },
]

function DiagnosticReport({ setView }: { setView: (v: string) => void }) {
  return (
    <div className="diagnostic-page">
      <DiagnosticProgress active={3} />
      <PageHead
        eyebrow="DIAGNOSTIC TERMINÉ · AJOUTÉ À VOTRE PORTFOLIO"
        title="Votre rapport d'évaluation pratique"
        description="Une lecture détaillée de ce que votre travail démontre aujourd'hui."
        action={
          <Button icon="chart" onClick={() => setView("diagnostic-comparison")}>
            Comparer mes niveaux
          </Button>
        }
      />
      <section className="diagnostic-score-card">
        <div className="diagnostic-score">
          <strong>76</strong>
          <span>/100</span>
          <Badge tone="green">SOLIDE</Badge>
        </div>
        <div>
          <Badge tone="navy">
            <Icon name="spark" size={13} /> SYNTHÈSE SPARK IA
          </Badge>
          <h2>Un niveau intermédiaire solide, avec un vrai potentiel visuel</h2>
          <p>
            Votre solution est claire et directement exploitable. Vous démontrez
            une meilleure maîtrise du wireframing que vous ne le pensiez. Votre
            principal axe de progression concerne la profondeur de l'analyse et
            la justification des priorités.
          </p>
        </div>
        <div className="score-context">
          <small>NIVEAU DÉCLARÉ</small>
          <strong>Intermédiaire</strong>
          <Icon name="arrow" />
          <small>NIVEAU ESTIMÉ</small>
          <strong>Intermédiaire confirmé</strong>
        </div>
      </section>
      <div className="report-skills">
        {diagnosticSkills.map((skill) => (
          <article className="panel report-skill" key={skill.name}>
            <div>
              <span>
                <Icon
                  name={skill.actual >= skill.declared ? "check" : "target"}
                />
              </span>
              <Badge tone={skill.actual >= skill.declared ? "green" : "orange"}>
                {skill.actual >= skill.declared ? "DÉMONTRÉE" : "À DÉVELOPPER"}
              </Badge>
            </div>
            <h3>{skill.name}</h3>
            <strong>{skill.actual}%</strong>
            <Progress value={skill.actual} compact />
            <small>{skill.label}</small>
          </article>
        ))}
      </div>
      <div className="report-grid">
        <section className="panel feedback">
          <h2>Forces observées</h2>
          <div className="feedback-good">
            <Icon name="check" />
            <div>
              <strong>Une solution simple et cohérente</strong>
              <p>
                Votre wireframe réduit efficacement la charge cognitive et
                améliore la compréhension des étapes.
              </p>
            </div>
          </div>
          <div className="feedback-good">
            <Icon name="check" />
            <div>
              <strong>Une bonne hiérarchie de l'information</strong>
              <p>Les actions principales sont immédiatement identifiables.</p>
            </div>
          </div>
        </section>
        <section className="panel feedback">
          <h2>Faiblesses et erreurs détectées</h2>
          <div className="feedback-improve">
            <Icon name="target" />
            <div>
              <strong>Priorisation peu documentée</strong>
              <p>
                Deux problèmes ont été classés sans critère d'impact explicite.
              </p>
            </div>
          </div>
          <div className="feedback-improve">
            <Icon name="target" />
            <div>
              <strong>Un cas d'erreur oublié</strong>
              <p>
                Le wireframe ne montre pas le comportement en cas d'adresse
                e-mail déjà utilisée.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="panel detailed-feedback">
        <span>
          <Icon name="brain" />
        </span>
        <div>
          <Badge tone="yellow">FEEDBACK DÉTAILLÉ DE L'IA</Badge>
          <h2>Votre prochaine progression passe par la preuve</h2>
          <p>
            Vous savez proposer rapidement une interface convaincante. Pour
            franchir un cap, rendez chaque décision traçable : reliez un constat
            précis à une priorité, puis cette priorité à un choix de conception.
            Lors de votre prochain projet, utilisez une matrice impact / effort
            avant de commencer vos wireframes.
          </p>
        </div>
        <Button
          variant="secondary"
          icon="arrow"
          onClick={() => setView("diagnostic-comparison")}
        >
          Voir le comparatif
        </Button>
      </section>
    </div>
  )
}

function DiagnosticComparison({ setView }: { setView: (v: string) => void }) {
  return (
    <div className="diagnostic-page">
      <DiagnosticProgress active={3} />
      <PageHead
        eyebrow="PROFIL DE COMPÉTENCES"
        title="Déclaré vs démontré"
        description="Comparez votre perception initiale aux compétences observées dans votre travail."
        action={
          <Button icon="arrow" onClick={() => setView("diagnostic-confirm")}>
            Examiner les mises à jour
          </Button>
        }
      />
      <section className="panel comparison-panel">
        <div className="comparison-legend">
          <span>
            <i className="declared" /> Niveau déclaré
          </span>
          <span>
            <i className="actual" /> Niveau estimé par la pratique
          </span>
        </div>
        {diagnosticSkills.map((skill) => (
          <div className="comparison-row" key={skill.name}>
            <div>
              <strong>{skill.name}</strong>
              <small>{skill.label}</small>
            </div>
            <div className="comparison-bars">
              <span>
                <i style={{ width: `${skill.declared}%` }} />
                <em>{skill.declared}%</em>
              </span>
              <span>
                <i style={{ width: `${skill.actual}%` }} />
                <em>{skill.actual}%</em>
              </span>
            </div>
            <Badge tone={skill.actual >= skill.declared ? "green" : "orange"}>
              {skill.actual - skill.declared > 0 ? "+" : ""}
              {skill.actual - skill.declared} pts
            </Badge>
          </div>
        ))}
      </section>
      <div className="comparison-summary">
        <section className="panel">
          <span className="stat-icon stat-green">
            <Icon name="star" />
          </span>
          <div>
            <strong>Potentiel sous-estimé</strong>
            <h3>Wireframing · +12 points</h3>
            <p>Votre exécution démontre des automatismes d'un niveau avancé.</p>
          </div>
        </section>
        <section className="panel">
          <span className="stat-icon stat-orange">
            <Icon name="target" />
          </span>
          <div>
            <strong>Priorité de progression</strong>
            <h3>Argumentation · −12 points</h3>
            <p>Structurez vos décisions avec des critères observables.</p>
          </div>
        </section>
        <section className="panel comparison-note">
          <Icon name="spark" />
          <p>
            <strong>Comment lire ces résultats ?</strong> Une différence ne
            signifie pas que votre déclaration était « fausse ». Elle indique
            simplement ce qui a été observable dans ce travail précis.
          </p>
        </section>
      </div>
    </div>
  )
}

function DiagnosticConfirmation({ setView }: { setView: (v: string) => void }) {
  const [selected, setSelected] = useState([true, true, true, true])
  return (
    <div className="diagnostic-page">
      <DiagnosticProgress active={3} />
      <PageHead
        eyebrow="VALIDATION DU PROFIL"
        title="Mettez à jour votre profil"
        description="Vous gardez le contrôle : examinez et confirmez les niveaux proposés par SPARK."
      />
      <section className="profile-validation panel">
        <div className="validation-head">
          <span>
            <Icon name="brain" size={28} />
          </span>
          <div>
            <h2>4 mises à jour proposées</h2>
            <p>
              Ces estimations reposent sur votre mini-projet et pourront évoluer
              avec vos prochaines réalisations.
            </p>
          </div>
        </div>
        {diagnosticSkills.map((skill, index) => (
          <label className="validation-row" key={skill.name}>
            <input
              type="checkbox"
              checked={selected[index]}
              onChange={() =>
                setSelected(
                  selected.map((value, item) =>
                    item === index ? !value : value,
                  ),
                )
              }
            />
            <span className="validation-check">
              <Icon name="check" size={14} />
            </span>
            <div>
              <strong>{skill.name}</strong>
              <small>
                {skill.declared}% déclaré
                <Icon name="arrow" size={13} />
                {skill.actual}% proposé
              </small>
            </div>
            <Badge tone={skill.actual >= skill.declared ? "green" : "orange"}>
              {skill.label}
            </Badge>
          </label>
        ))}
        <div className="validation-disclaimer">
          <Icon name="spark" />
          <p>
            <strong>Une estimation, pas une étiquette.</strong> Ces niveaux sont
            basés uniquement sur les compétences visibles dans le travail
            soumis. Ils ne constituent pas une mesure absolue de vos capacités
            et seront affinés au fil de vos projets.
          </p>
        </div>
        <div className="validation-actions">
          <Button
            variant="secondary"
            onClick={() => setView("diagnostic-comparison")}
          >
            Retour au comparatif
          </Button>
          <Button icon="check" onClick={() => setView("diagnostic-next")}>
            Confirmer {selected.filter(Boolean).length} mises à jour
          </Button>
        </div>
      </section>
    </div>
  )
}

function DiagnosticNextProject({ setView }: { setView: (v: string) => void }) {
  return (
    <div className="diagnostic-page">
      <DiagnosticProgress active={4} />
      <section className="next-path-hero">
        <span>
          <Icon name="check" size={28} />
        </span>
        <Badge tone="navy">PROFIL VALIDÉ ET MIS À JOUR</Badge>
        <h1>Votre parcours peut vraiment commencer</h1>
        <p>
          SPARK a transformé votre diagnostic en un plan d'apprentissage
          personnalisé. Votre mini-projet et son rapport sont maintenant
          enregistrés dans votre portfolio.
        </p>
      </section>
      <div className="next-path-grid">
        <section className="panel path-roadmap">
          <div className="panel-head">
            <div>
              <Badge tone="yellow">
                <Icon name="spark" size={13} /> PARCOURS GÉNÉRÉ PAR L'IA
              </Badge>
              <h2>Cap vers Product Designer</h2>
              <p>3 projets · environ 8 semaines · 7 compétences ciblées</p>
            </div>
          </div>
          {[
            [
              "01",
              "Mener une recherche utilisateur express",
              "Prochain projet",
              "UX Research · Argumentation",
            ],
            [
              "02",
              "Concevoir un service financier accessible",
              "À venir",
              "Accessibilité · Design visuel",
            ],
            [
              "03",
              "Créer un mini design system",
              "À venir",
              "Systèmes · Documentation",
            ],
          ].map(([number, title, status, skills], index) => (
            <div className={index === 0 ? "active" : ""} key={number}>
              <span>{number}</span>
              <div>
                <Badge tone={index === 0 ? "orange" : "blue"}>{status}</Badge>
                <strong>{title}</strong>
                <small>{skills}</small>
              </div>
              {index === 0 && <Icon name="arrow" />}
            </div>
          ))}
        </section>
        <section className="next-project-card">
          <div className="next-project-cover">
            <Badge tone="navy">98% ADAPTÉ À VOTRE PROFIL</Badge>
            <span>
              <Icon name="message" size={38} />
            </span>
          </div>
          <div className="next-project-body">
            <Badge tone="orange">PROCHAIN PROJET RECOMMANDÉ</Badge>
            <h2>Mener une recherche utilisateur express</h2>
            <p>
              Préparez et conduisez trois entretiens pour aider une association
              à comprendre les motivations de ses futurs bénévoles.
            </p>
            <div className="detail-meta">
              <span>
                <Icon name="chart" /> Intermédiaire
              </span>
              <span>
                <Icon name="clock" /> 2 semaines
              </span>
            </div>
            <div className="next-reason">
              <Icon name="spark" />
              <p>
                <strong>Pourquoi maintenant ?</strong> Ce projet renforce votre
                argumentation sans vous ralentir sur le wireframing, déjà bien
                maîtrisé.
              </p>
            </div>
            <Button icon="arrow" onClick={() => setView("project-detail")}>
              Découvrir ce projet
            </Button>
            <Button variant="ghost" onClick={() => setView("dashboard")}>
              Aller à mon dashboard
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

function Assistant() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState("")
  const sendSuggestedMessage = (message: string) =>
    setMessages((current) => [...current, message])
  return (
    <div className="chat-page">
      <PageHead
        title="Assistant IA"
        description="Un accompagnement contextualisé pour avancer sans rester bloquée."
      />
      <div className="chat-layout">
        <aside className="panel chat-side">
          <Button
            icon="plus"
            onClick={() => {
              setMessages([])
              notify("Nouvelle conversation démarrée.")
            }}
          >
            Nouvelle conversation
          </Button>
          <h4>AUJOURD'HUI</h4>
          <button
            className="active"
            onClick={() =>
              notify("Conversation « Synthétiser mes entretiens » ouverte.")
            }
          >
            Synthétiser mes entretiens
          </button>
          <button
            onClick={() =>
              sendSuggestedMessage("Aide-moi à mieux comprendre les personas.")
            }
          >
            Comprendre les personas
          </button>
          <h4>CETTE SEMAINE</h4>
          <button
            onClick={() =>
              sendSuggestedMessage("Comment préparer un test utilisateur ?")
            }
          >
            Préparer un test utilisateur
          </button>
          <button
            onClick={() =>
              sendSuggestedMessage("Aide-moi à choisir les bons KPI.")
            }
          >
            Choisir les bons KPI
          </button>
        </aside>
        <section className="panel chat-main">
          <div className="chat-context">
            <span>
              <Icon name="briefcase" />
            </span>
            <div>
              <small>CONTEXTE ACTIF</small>
              <strong>Application de gestion de budget</strong>
            </div>
            <Badge tone="green">Étape 2</Badge>
          </div>
          <div className="messages">
            <div className="bot-message">
              <span>
                <Icon name="spark" />
              </span>
              <div>
                <strong>SPARK IA</strong>
                <p>
                  Bonjour Nora. Je vois que vous travaillez sur la synthèse de
                  vos entretiens. Comment puis-je vous aider ?
                </p>
              </div>
            </div>
            <div className="user-message">
              <p>
                J'ai beaucoup de notes, mais je ne sais pas comment identifier
                les vrais insights.
              </p>
              <span>NK</span>
            </div>
            <div className="bot-message">
              <span>
                <Icon name="spark" />
              </span>
              <div>
                <strong>SPARK IA</strong>
                <p>
                  Commencez par chercher les répétitions, mais aussi les
                  contradictions entre ce que les personnes disent et ce
                  qu'elles font. Pour chaque observation, posez-vous trois
                  questions :
                </p>
                <ol>
                  <li>Quel comportement ai-je observé ?</li>
                  <li>Quelle motivation ou tension peut l'expliquer ?</li>
                  <li>Qu'est-ce que cela change pour le produit ?</li>
                </ol>
                <p>
                  Souhaitez-vous travailler ensemble sur une de vos observations
                  ?
                </p>
                <div className="quick-replies">
                  <button onClick={() => setInput("Voici une observation : ")}>
                    Oui, voici une observation
                  </button>
                  <button
                    onClick={() =>
                      sendSuggestedMessage("Montre-moi un exemple concret.")
                    }
                  >
                    Montre-moi un exemple
                  </button>
                </div>
              </div>
            </div>
            {messages.map((m, i) => (
              <div className="user-message" key={i}>
                <p>{m}</p>
                <span>NK</span>
              </div>
            ))}
          </div>
          <form
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault()
              if (input.trim()) {
                setMessages([...messages, input])
                setInput("")
              }
            }}
          >
            <button
              type="button"
              onClick={() =>
                notify("Vous pouvez joindre une image ou un document.")
              }
            >
              <Icon name="plus" />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question..."
            />
            <button type="submit">
              <Icon name="send" />
            </button>
          </form>
          <small className="chat-disclaimer">
            SPARK IA peut faire des erreurs. Vérifiez les informations
            importantes.
          </small>
        </section>
      </div>
    </div>
  )
}

function Evaluations() {
  return (
    <>
      <PageHead
        title="Évaluations & résultats"
        description="Des retours détaillés pour comprendre vos progrès et améliorer vos prochaines réalisations."
      />
      <section className="evaluation-feature">
        <div className="eval-score">
          <strong>92</strong>
          <span>/100</span>
          <Badge tone="green">EXCELLENT</Badge>
        </div>
        <div>
          <Badge tone="yellow">
            <Icon name="spark" size={13} /> ÉVALUÉ PAR SPARK IA
          </Badge>
          <h2>Refonte du parcours d'inscription</h2>
          <p>
            Votre proposition est cohérente, bien argumentée et démontre une
            forte compréhension des besoins utilisateurs.
          </p>
          <div className="eval-meta">
            <span>
              <Icon name="clock" /> Évalué le 12 décembre
            </span>
            <span>
              <Icon name="briefcase" /> Projet terminé
            </span>
          </div>
        </div>
        <Button variant="dark" icon="download">
          Rapport complet
        </Button>
      </section>
      <div className="dashboard-columns">
        <section className="panel">
          <h2>Détail par critère</h2>
          {[
            ["Compréhension du problème", 95],
            ["Qualité de la recherche", 88],
            ["Pertinence de la solution", 94],
            ["Exécution visuelle", 90],
            ["Clarté de la présentation", 93],
          ].map(([s, v]) => (
            <div className="criteria" key={s}>
              <div>
                <strong>{s}</strong>
                <span>{v}/100</span>
              </div>
              <Progress value={v as number} compact />
            </div>
          ))}
        </section>
        <section className="panel feedback">
          <h2>Feedback de l'IA</h2>
          <div className="feedback-good">
            <Icon name="check" />
            <div>
              <strong>Points forts</strong>
              <ul>
                <li>Décisions de design clairement justifiées</li>
                <li>Parcours fluide et accessible</li>
                <li>Prototype très abouti</li>
              </ul>
            </div>
          </div>
          <div className="feedback-improve">
            <Icon name="target" />
            <div>
              <strong>À améliorer</strong>
              <ul>
                <li>Documenter davantage les cas d'erreur</li>
                <li>Élargir l'échantillon de test</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Historique des évaluations</h2>
            <p>Vos derniers projets notés.</p>
          </div>
        </div>
        {[
          [
            "Refonte du parcours d’inscription",
            "12 déc. 2024",
            "92",
            "UX/UI Design",
          ],
          ["Landing page responsable", "28 nov. 2024", "89", "Design web"],
          ["Étude mobilité urbaine", "8 nov. 2024", "85", "UX Research"],
        ].map(([t, d, s, c]) => (
          <div className="history-row" key={t}>
            <span className="history-icon">
              <Icon name="file" />
            </span>
            <div>
              <strong>{t}</strong>
              <small>
                {c} · {d}
              </small>
            </div>
            <span className="history-score">
              {s}
              <small>/100</small>
            </span>
            <button onClick={() => notify(`Rapport « ${t} » ouvert.`)}>
              Voir le rapport <Icon name="chevron" />
            </button>
          </div>
        ))}
      </section>
    </>
  )
}

function Certificates() {
  return (
    <>
      <PageHead
        title="Mes certificats"
        description="Partagez les compétences acquises et valorisez vos réalisations."
      />
      <section className="certificate-feature">
        <div className="certificate">
          <div className="cert-top">
            <Logo />
            <Badge tone="yellow">CERTIFICAT DE RÉUSSITE</Badge>
          </div>
          <div className="cert-center">
            <Icon name="award" size={54} />
            <small>CE CERTIFICAT EST DÉCERNÉ À</small>
            <h2>Nora Kaci</h2>
            <p>pour avoir validé avec succès le parcours</p>
            <strong>Fondamentaux de l'UX Design</strong>
          </div>
          <div className="cert-bottom">
            <span>12 DÉCEMBRE 2024</span>
            <span>ID : SPK-UX-240812</span>
          </div>
        </div>
        <div className="cert-detail">
          <Badge tone="green">DERNIER CERTIFICAT</Badge>
          <h2>Fondamentaux de l'UX Design</h2>
          <p>Obtenu après la validation de 3 projets et 8 compétences clés.</p>
          <div className="skill-list big">
            <span>UX Research</span>
            <span>Prototypage</span>
            <span>Tests utilisateurs</span>
          </div>
          <Button icon="download">Télécharger en PDF</Button>
          <Button variant="secondary">Partager sur LinkedIn</Button>
        </div>
      </section>
      <h2 className="section-title">
        Tous mes certificats <span>3</span>
      </h2>
      <div className="cert-grid">
        {[
          ["Design d’interfaces", "Obtenu le 28 nov. 2024", "Design visuel"],
          ["Recherche utilisateur", "Obtenu le 8 nov. 2024", "UX Research"],
          ["Fondamentaux de l’UX", "Obtenu le 12 déc. 2024", "UX Design"],
        ].map(([t, d, c]) => (
          <article className="panel cert-card" key={t}>
            <span>
              <Icon name="award" size={30} />
            </span>
            <Badge tone="blue">{c}</Badge>
            <h3>{t}</h3>
            <p>{d}</p>
            <Button variant="ghost" icon="download">
              Télécharger
            </Button>
          </article>
        ))}
      </div>
    </>
  )
}

function Notifications({ setView }: { setView: (v: string) => void }) {
  const [items, setItems] = useState([
    {
      title: "Votre rapport IA est prêt",
      detail: "Le projet « Parcours d'inscription » a obtenu 76/100.",
      time: "Il y a 8 min",
      unread: true,
    },
    {
      title: "Profil de compétences mis à jour",
      detail: "Votre niveau en Wireframing progresse de 12 points.",
      time: "Il y a 12 min",
      unread: true,
    },
    {
      title: "Nouveau projet recommandé",
      detail:
        "Mener une recherche utilisateur express correspond à 98% à votre profil.",
      time: "Hier",
      unread: true,
    },
    {
      title: "Projet ajouté au portfolio",
      detail:
        "Votre diagnostic initial est désormais visible dans votre portfolio.",
      time: "Hier",
      unread: false,
    },
  ])
  return (
    <>
      <PageHead
        eyebrow="CENTRE DE NOTIFICATIONS"
        title="Restez au fil de votre progression"
        description={`${items.filter((item) => item.unread).length} notifications non lues`}
        action={
          <Button
            variant="secondary"
            icon="check"
            onClick={() =>
              setItems(items.map((item) => ({ ...item, unread: false })))
            }
          >
            Tout marquer comme lu
          </Button>
        }
      />
      <section className="panel notification-list">
        {items.map((item, index) => (
          <button
            className={item.unread ? "unread" : ""}
            key={item.title}
            onClick={() => {
              setItems(
                items.map((entry, itemIndex) =>
                  itemIndex === index ? { ...entry, unread: false } : entry,
                ),
              )
              if (index === 0) setView("diagnostic-report")
              if (index === 1) setView("skills")
              if (index === 2) setView("recommendations")
              if (index === 3) setView("portfolio")
            }}
          >
            <span>
              <Icon
                name={
                  index === 2 ? "wand" : index === 3 ? "briefcase" : "spark"
                }
              />
            </span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
              <small>{item.time}</small>
            </div>
            <Icon name="chevron" />
          </button>
        ))}
      </section>
    </>
  )
}

function HelpSupport() {
  const [query, setQuery] = useState("")
  const [sent, setSent] = useState(false)
  const topics = [
    [
      "Diagnostic IA",
      "Comprendre le projet initial et son évaluation",
      "brain",
    ],
    [
      "Projets et livrables",
      "Déposer, remplacer ou soumettre un fichier",
      "folder",
    ],
    ["Profil et compétences", "Modifier vos informations et niveaux", "user"],
    ["Compte et sécurité", "Mot de passe, données et confidentialité", "gear"],
  ]
  return (
    <>
      <PageHead
        eyebrow="CENTRE D'AIDE"
        title="Comment pouvons-nous vous aider ?"
        description="Trouvez une réponse ou contactez l'équipe SPARK."
      />
      <label className="help-search">
        <Icon name="search" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Rechercher dans le centre d'aide..."
        />
      </label>
      <div className="help-grid">
        {topics
          .filter(([title, description]) =>
            `${title} ${description}`
              .toLowerCase()
              .includes(query.toLowerCase()),
          )
          .map(([title, description, icon]) => (
            <button
              className="panel help-card"
              key={title}
              onClick={() => notify(`Rubrique « ${title} » ouverte.`)}
            >
              <span>
                <Icon name={icon as IconName} />
              </span>
              <strong>{title}</strong>
              <p>{description}</p>
              <small>
                Consulter les articles <Icon name="arrow" size={14} />
              </small>
            </button>
          ))}
      </div>
      <section className="panel support-card">
        <div>
          <Badge tone="navy">SUPPORT SPARK</Badge>
          <h2>Vous n'avez pas trouvé votre réponse ?</h2>
          <p>
            Décrivez votre problème. Notre équipe vous répondra sous un jour
            ouvré.
          </p>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setSent(true)
          }}
        >
          <label>
            Objet
            <input required placeholder="Ex. problème lors de la soumission" />
          </label>
          <label>
            Votre message
            <textarea
              required
              rows={4}
              placeholder="Décrivez les étapes et ce que vous observez..."
            />
          </label>
          <Button type="submit" icon="send">
            Envoyer ma demande
          </Button>
          {sent && (
            <span className="form-success">
              <Icon name="check" /> Demande envoyée. Nous revenons vers vous
              rapidement.
            </span>
          )}
        </form>
      </section>
    </>
  )
}

function Settings() {
  const [section, setSection] = useState("Compte")
  const [passwordSaved, setPasswordSaved] = useState(false)
  return (
    <>
      <PageHead
        title="Paramètres"
        description="Gérez vos préférences, votre confidentialité et votre compte."
      />
      <div className="settings-layout">
        <nav className="panel settings-nav">
          {[
            ["Compte", "user"],
            ["Notifications", "message"],
            ["Préférences IA", "brain"],
            ["Sécurité", "gear"],
            ["Confidentialité", "gear"],
          ].map(([label, icon]) => (
            <button
              className={section === label ? "active" : ""}
              onClick={() => {
                setSection(label)
              }}
              key={label}
            >
              <Icon name={icon as IconName} /> {label}
            </button>
          ))}
        </nav>
        <section className="panel settings-content">
          {section === "Compte" && (
            <>
              <h2>Informations du compte</h2>
              <p>Mettez à jour les informations associées à votre compte.</p>
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  notify("Vos informations ont été enregistrées.")
                }}
              >
                <div className="field-row">
                  <label>
                    Prénom
                    <input defaultValue="Nora" />
                  </label>
                  <label>
                    Nom
                    <input defaultValue="Kaci" />
                  </label>
                </div>
                <label>
                  Adresse e-mail
                  <input type="email" defaultValue="nora.kaci@exemple.fr" />
                </label>
                <label>
                  Langue
                  <select defaultValue="fr">
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                  </select>
                </label>
                <Button type="submit">Enregistrer les modifications</Button>
              </form>
            </>
          )}
          {section === "Notifications" && (
            <>
              <h2>Préférences de notification</h2>
              <p>
                Choisissez les événements pour lesquels SPARK doit vous
                prévenir.
              </p>
              {[
                "Rapports d'évaluation IA",
                "Nouvelles recommandations",
                "Rappels de projet",
                "Conseils de progression",
              ].map((label, index) => (
                <div className="setting-row" key={label}>
                  <div>
                    <strong>{label}</strong>
                    <p>
                      {index < 2
                        ? "E-mail et notification dans l'application"
                        : "Notification dans l'application"}
                    </p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" defaultChecked={index < 3} />
                    <span />
                  </label>
                </div>
              ))}
            </>
          )}
          {section === "Préférences IA" && (
            <>
              <h2>Préférences de l'assistant IA</h2>
              <p>
                Adaptez le niveau d'accompagnement sans changer les critères
                d'évaluation.
              </p>
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  notify("Vos préférences IA ont été enregistrées.")
                }}
              >
                <label>
                  Style d'accompagnement
                  <select defaultValue="coach">
                    <option value="coach">Coach — questions et pistes</option>
                    <option value="direct">
                      Direct — réponses synthétiques
                    </option>
                    <option value="detail">
                      Détaillé — explications approfondies
                    </option>
                  </select>
                </label>
                <label>
                  Niveau de détail
                  <select defaultValue="balanced">
                    <option value="short">Concis</option>
                    <option value="balanced">Équilibré</option>
                    <option value="full">Approfondi</option>
                  </select>
                </label>
                <Button type="submit">Enregistrer mes préférences</Button>
              </form>
            </>
          )}
          {section === "Sécurité" && (
            <>
              <h2>Changer mon mot de passe</h2>
              <p>
                Utilisez au moins huit caractères et évitez un mot de passe déjà
                employé.
              </p>
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setPasswordSaved(true)
                }}
              >
                <label>
                  Mot de passe actuel
                  <input type="password" required />
                </label>
                <label>
                  Nouveau mot de passe
                  <input type="password" minLength={8} required />
                </label>
                <label>
                  Confirmer le nouveau mot de passe
                  <input type="password" minLength={8} required />
                </label>
                <Button type="submit">Mettre à jour le mot de passe</Button>
                {passwordSaved && (
                  <span className="form-success">
                    <Icon name="check" /> Mot de passe mis à jour.
                  </span>
                )}
              </form>
              <hr />
              <div className="setting-row">
                <div>
                  <strong>Authentification à deux facteurs</strong>
                  <p>Ajoutez une couche de sécurité supplémentaire.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span />
                </label>
              </div>
            </>
          )}
          {section === "Confidentialité" && (
            <>
              <h2>Confidentialité et données</h2>
              <p>
                Gardez le contrôle sur les données utilisées pour personnaliser
                votre parcours.
              </p>
              <div className="setting-row">
                <div>
                  <strong>Personnalisation du parcours</strong>
                  <p>Autoriser l'IA à utiliser vos projets et compétences.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span />
                </label>
              </div>
              <div className="setting-row">
                <div>
                  <strong>Profil public</strong>
                  <p>Permettre le partage public de votre portfolio.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span />
                </label>
              </div>
              <Button variant="secondary" icon="download">
                Télécharger mes données
              </Button>
              <hr />
              <h2 className="danger">Supprimer le compte</h2>
              <p>
                Cette action est définitive. Toutes vos données seront
                supprimées.
              </p>
              <Button variant="secondary">Supprimer mon compte</Button>
            </>
          )}
        </section>
      </div>
    </>
  )
}

function AdminContent({
  view,
  setView,
}: {
  view: string
  setView: (v: string) => void
}) {
  if (view === "admin-users") return <AdminTable type="users" />
  if (view === "admin-projects") return <AdminTable type="projects" />
  if (view === "admin-skills") return <AdminSkills />
  if (view === "admin-content") return <AdminTable type="content" />
  if (view === "admin-certificates") return <AdminTable type="certificates" />
  if (view === "admin-stats") return <AdminStats />
  if (view === "admin-settings") return <Settings />
  return <AdminDashboard setView={setView} />
}

function AdminDashboard({ setView }: { setView: (v: string) => void }) {
  return (
    <>
      <PageHead
        eyebrow="APERÇU DE LA PLATEFORME"
        title="Bonjour Thomas"
        description="Voici ce qui se passe sur SPARK aujourd'hui."
        action={
          <Button icon="plus" onClick={() => setView("admin-projects")}>
            Nouveau projet
          </Button>
        }
      />
      <div className="stats-grid">
        <StatCard
          icon="users"
          label="Apprenants actifs"
          value="12 482"
          detail="+8,2% ce mois"
          tone="purple"
        />
        <StatCard
          icon="briefcase"
          label="Projets en cours"
          value="3 248"
          detail="+12,4% ce mois"
          tone="orange"
        />
        <StatCard
          icon="check"
          label="Taux de complétion"
          value="86,4%"
          detail="+2,1 pts"
          tone="green"
        />
        <StatCard
          icon="spark"
          label="Interactions IA"
          value="48,2k"
          detail="+18% ce mois"
          tone="blue"
        />
      </div>
      <div className="admin-grid">
        <section className="panel chart-panel">
          <div className="panel-head">
            <div>
              <h2>Activité de la plateforme</h2>
              <p>Apprenants actifs sur les 7 derniers jours.</p>
            </div>
            <select>
              <option>7 derniers jours</option>
            </select>
          </div>
          <div className="fake-chart">
            <div className="y-labels">
              <span>2k</span>
              <span>1,5k</span>
              <span>1k</span>
              <span>500</span>
              <span>0</span>
            </div>
            <svg viewBox="0 0 700 220" preserveAspectRatio="none">
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#f6b80e" stopOpacity=".32" />
                  <stop offset="1" stopColor="#f6b80e" stopOpacity=".02" />
                </linearGradient>
              </defs>
              <path
                className="area"
                d="M0 190 C80 180 80 130 150 145 S250 95 310 115 S400 75 460 90 S560 35 700 45 L700 220 L0 220Z"
              />
              <path
                className="line"
                d="M0 190 C80 180 80 130 150 145 S250 95 310 115 S400 75 460 90 S560 35 700 45"
              />
            </svg>
            <div className="x-labels">
              <span>Lun</span>
              <span>Mar</span>
              <span>Mer</span>
              <span>Jeu</span>
              <span>Ven</span>
              <span>Sam</span>
              <span>Dim</span>
            </div>
          </div>
        </section>
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Répartition des projets</h2>
              <p>Par domaine de compétence.</p>
            </div>
          </div>
          <div className="donut-wrap">
            <div className="donut">
              <span>
                <strong>286</strong>projets
              </span>
            </div>
            <div className="legend">
              {[
                ["Design", "34%"],
                ["Développement", "28%"],
                ["Marketing", "21%"],
                ["Data", "17%"],
              ].map(([l, v], i) => (
                <div key={l}>
                  <span className={`dot d${i}`} />
                  <strong>{l}</strong>
                  <em>{v}</em>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="admin-grid lower">
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Activité récente</h2>
              <p>Derniers événements importants.</p>
            </div>
            <button
              onClick={() => notify("Toute l'activité récente est affichée.")}
            >
              Tout voir
            </button>
          </div>
          {[
            [
              "user",
              "Nouvelle inscription",
              "Lina Moreau a rejoint SPARK",
              "Il y a 4 min",
            ],
            [
              "check",
              "Projet terminé",
              "Yanis B. a terminé “Dashboard analytique”",
              "Il y a 12 min",
            ],
            [
              "spark",
              "Évaluation IA",
              "Score de 94/100 généré pour un projet",
              "Il y a 22 min",
            ],
            [
              "award",
              "Certificat délivré",
              "Certificat UX Design attribué à Sarah L.",
              "Il y a 38 min",
            ],
          ].map(([i, t, p, d]) => (
            <div className="activity" key={p}>
              <span>
                <Icon name={i as IconName} />
              </span>
              <div>
                <strong>{t}</strong>
                <p>{p}</p>
              </div>
              <small>{d}</small>
            </div>
          ))}
        </section>
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Santé de l'IA</h2>
              <p>Activité des services intelligents.</p>
            </div>
            <Badge tone="green">TOUS OPÉRATIONNELS</Badge>
          </div>
          {[
            ["Recommandations", "12 845", "98,2%"],
            ["Feuilles de route", "4 218", "97,8%"],
            ["Évaluations", "3 106", "99,1%"],
            ["Assistant", "28 062", "98,7%"],
          ].map(([l, v, p]) => (
            <div className="ai-health" key={l}>
              <span className="status-dot" />
              <strong>{l}</strong>
              <span>{v} requêtes</span>
              <em>{p}</em>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

function AdminTable({
  type,
}: {
  type: "users" | "projects" | "content" | "certificates"
}) {
  const config = {
    users: {
      title: "Utilisateurs",
      desc: "Gérez les apprenants et suivez leur activité.",
      action: "Inviter un utilisateur",
      heads: [
        "UTILISATEUR",
        "STATUT",
        "PROJETS",
        "NIVEAU",
        "DERNIÈRE ACTIVITÉ",
      ],
      rows: [
        [
          "Lina Moreau|lina@exemple.fr",
          "Actif",
          "3",
          "Intermédiaire",
          "Il y a 4 min",
        ],
        [
          "Yanis Benali|yanis@exemple.fr",
          "Actif",
          "5",
          "Avancé",
          "Il y a 12 min",
        ],
        [
          "Sarah Lopez|sarah@exemple.fr",
          "Inactif",
          "2",
          "Débutant",
          "Il y a 3 jours",
        ],
        ["Marc Dupont|marc@exemple.fr", "Actif", "7", "Avancé", "Il y a 1h"],
      ],
    },
    projects: {
      title: "Gestion des projets",
      desc: "Créez, publiez et analysez les projets proposés.",
      action: "Créer un projet",
      heads: ["PROJET", "CATÉGORIE", "STATUT", "INSCRITS", "COMPLÉTION"],
      rows: [
        [
          "Application de budget|Mis à jour hier",
          "UX/UI Design",
          "Publié",
          "1 248",
          "82%",
        ],
        [
          "Dashboard analytique|Mis à jour il y a 3j",
          "Data & Web",
          "Publié",
          "986",
          "76%",
        ],
        ["Campagne responsable|Brouillon", "Marketing", "Brouillon", "—", "—"],
        [
          "Audit accessibilité|Mis à jour il y a 8j",
          "Accessibilité",
          "Publié",
          "624",
          "88%",
        ],
      ],
    },
    content: {
      title: "Contenus",
      desc: "Gérez les ressources et les contenus de la plateforme.",
      action: "Ajouter un contenu",
      heads: ["CONTENU", "TYPE", "CATÉGORIE", "STATUT", "MISE À JOUR"],
      rows: [
        [
          "Guide de l’entretien utilisateur|12 min de lecture",
          "Guide",
          "UX Research",
          "Publié",
          "Hier",
        ],
        [
          "L’affinity mapping|8 min",
          "Vidéo",
          "Méthodologie",
          "Publié",
          "3 janv.",
        ],
        [
          "Modèle de synthèse|FigJam",
          "Ressource",
          "UX Research",
          "Brouillon",
          "28 déc.",
        ],
      ],
    },
    certificates: {
      title: "Certificats",
      desc: "Configurez les modèles et suivez les certificats délivrés.",
      action: "Nouveau modèle",
      heads: ["CERTIFICAT", "DOMAINE", "DÉLIVRÉS", "STATUT", "MISE À JOUR"],
      rows: [
        [
          "Fondamentaux UX Design|3 projets requis",
          "UX Design",
          "1 842",
          "Actif",
          "12 déc.",
        ],
        [
          "Développement front-end|4 projets requis",
          "Développement",
          "1 265",
          "Actif",
          "8 déc.",
        ],
        [
          "Marketing digital|3 projets requis",
          "Marketing",
          "986",
          "Actif",
          "2 déc.",
        ],
      ],
    },
  }[type]
  return (
    <>
      <PageHead
        title={config.title}
        description={config.desc}
        action={<Button icon="plus">{config.action}</Button>}
      />
      <section className="panel table-panel">
        <div className="table-tools">
          <label className="search">
            <Icon name="search" />
            <input placeholder="Rechercher..." />
          </label>
          <Button variant="secondary">Filtres</Button>
        </div>
        <div className="admin-table">
          <div className="table-row table-head">
            {config.heads.map((h) => (
              <span key={h}>{h}</span>
            ))}
            <span />
          </div>
          {config.rows.map((row, i) => (
            <div className="table-row" key={row[0]}>
              {row.map((cell, j) =>
                j === 0 ? (
                  <div className="table-main" key={cell}>
                    <span>
                      {type === "users" ? (
                        cell
                          .split("|")[0]
                          .split(" ")
                          .map((x) => x[0])
                          .join("")
                      ) : (
                        <Icon
                          name={
                            type === "projects"
                              ? "briefcase"
                              : type === "content"
                                ? "file"
                                : "award"
                          }
                        />
                      )}
                    </span>
                    <div>
                      <strong>{cell.split("|")[0]}</strong>
                      <small>{cell.split("|")[1]}</small>
                    </div>
                  </div>
                ) : j === 1 ? (
                  <span key={cell}>{cell}</span>
                ) : j === 2 ? (
                  <Badge
                    key={cell}
                    tone={
                      cell === "Actif" || cell === "Publié"
                        ? "green"
                        : cell === "Inactif" || cell === "Brouillon"
                          ? "orange"
                          : "blue"
                    }
                  >
                    {cell}
                  </Badge>
                ) : (
                  <span key={cell}>{cell}</span>
                ),
              )}
              <button
                onClick={() =>
                  notify("Menu d'actions ouvert pour cet élément.")
                }
              >
                •••
              </button>
            </div>
          ))}
        </div>
        <div className="table-footer">
          Affichage de {config.rows.length} éléments{" "}
          <div>
            {["←", "1", "2", "3", "→"].map((page) => (
              <button
                className={page === "1" ? "active" : ""}
                onClick={() =>
                  notify(
                    page === "1"
                      ? "Vous êtes déjà sur la page 1."
                      : `Page ${page} sélectionnée.`,
                  )
                }
                key={page}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function AdminSkills() {
  return (
    <>
      <PageHead
        title="Compétences"
        description="Structurez le référentiel de compétences utilisé par l'IA."
        action={<Button icon="plus">Ajouter une compétence</Button>}
      />
      <div className="stats-grid three">
        <StatCard
          icon="target"
          label="Compétences actives"
          value="142"
          detail="+8 ce mois"
          tone="purple"
        />
        <StatCard
          icon="folder"
          label="Domaines"
          value="12"
          detail="4 principaux"
          tone="orange"
        />
        <StatCard
          icon="spark"
          label="Analyses IA"
          value="8 624"
          detail="Ce mois-ci"
          tone="blue"
        />
      </div>
      <div className="skill-admin-grid">
        {[
          [
            "Design & UX",
            "34 compétences",
            "purple",
            ["UX Research", "Prototypage", "Design visuel", "Accessibilité"],
          ],
          [
            "Développement",
            "42 compétences",
            "blue",
            ["React", "JavaScript", "API REST", "Tests"],
          ],
          [
            "Marketing",
            "28 compétences",
            "orange",
            ["Stratégie", "SEO", "Copywriting", "Analytics"],
          ],
          [
            "Data",
            "24 compétences",
            "green",
            ["Data visualisation", "SQL", "Python", "Statistiques"],
          ],
        ].map(([t, c, tone, skills]) => (
          <article className="panel domain-card" key={t as string}>
            <div>
              <span className={`stat-icon stat-${tone}`}>
                <Icon name="target" />
              </span>
              <button
                onClick={() => notify(`Actions du domaine « ${t} » ouvertes.`)}
              >
                •••
              </button>
            </div>
            <h2>{t}</h2>
            <p>{c}</p>
            <div className="skill-list">
              {(skills as string[]).map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <Button variant="ghost" icon="arrow">
              Gérer le domaine
            </Button>
          </article>
        ))}
      </div>
    </>
  )
}

function AdminStats() {
  const [period, setPeriod] = useState("30 derniers jours")
  return (
    <>
      <PageHead
        title="Statistiques"
        description="Analysez l'engagement, la progression et la performance de la plateforme."
        action={
          <Button variant="secondary" icon="download">
            Exporter le rapport
          </Button>
        }
      />
      <div className="filter-bar admin-filters">
        <div>
          {["30 derniers jours", "3 mois", "12 mois"].map((item) => (
            <button
              className={period === item ? "active" : ""}
              onClick={() => {
                setPeriod(item)
                notify(`Statistiques mises à jour sur ${item}.`)
              }}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
        <button onClick={() => notify("Tous les domaines sont affichés.")}>
          Tous les domaines
        </button>
      </div>
      <div className="stats-grid">
        <StatCard
          icon="users"
          label="Utilisateurs uniques"
          value="9 842"
          detail="+11,4%"
          tone="purple"
        />
        <StatCard
          icon="clock"
          label="Temps moyen / semaine"
          value="4h 18"
          detail="+24 min"
          tone="orange"
        />
        <StatCard
          icon="check"
          label="Projets terminés"
          value="2 486"
          detail="+16,8%"
          tone="green"
        />
        <StatCard
          icon="star"
          label="Score moyen"
          value="84,6"
          detail="+3,2 pts"
          tone="blue"
        />
      </div>
      <div className="admin-grid">
        <section className="panel chart-panel">
          <div className="panel-head">
            <div>
              <h2>Progression des apprenants</h2>
              <p>Compétences validées chaque semaine.</p>
            </div>
          </div>
          <div className="bar-chart">
            {[45, 62, 54, 78, 68, 86, 92, 76, 96, 88, 100, 94].map((h, i) => (
              <div key={i}>
                <span style={{ height: `${h}%` }} />
                <small>S{i + 1}</small>
              </div>
            ))}
          </div>
        </section>
        <section className="panel">
          <h2>Top compétences</h2>
          {[
            ["Prototypage", "1 842 validations", 92],
            ["React", "1 506 validations", 78],
            ["UX Research", "1 284 validations", 67],
            ["Data visualisation", "1 064 validations", 56],
            ["Copywriting", "948 validations", 48],
          ].map(([s, d, v], i) => (
            <div className="rank" key={s}>
              <span>{i + 1}</span>
              <div>
                <strong>{s}</strong>
                <small>{d}</small>
              </div>
              <Progress value={v as number} compact />
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default function App() {
  const [page, setPage] = useState("landing")
  const [app, setApp] = useState<{ admin: boolean view: string } | null>(null)
  if (app)
    return (
      <AppShell
        admin={app.admin}
        view={app.view}
        setView={(view) => setApp({ ...app, view })}
        onLogout={() => {
          setApp(null)
          setPage("landing")
        }}
      />
    )
  if (page === "about") return <About setPage={setPage} />
  if (page === "login" || page === "signup" || page === "forgot")
    return (
      <Auth
        mode={page}
        setPage={setPage}
        onLogin={(admin = false, onboarding = false) =>
          setApp({
            admin,
            view: admin
              ? "admin-dashboard"
              : onboarding
                ? "onboarding-profile"
                : "dashboard",
          })
        }
      />
    )
  return <Landing setPage={setPage} />
}
