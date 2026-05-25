const ShapeDividerTop = () => (
  <div className="custom-shape-divider-top-1">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" />
    </svg>
  </div>
);

export default function Footer() {
  return (
    <footer className="text-center bg-night pt-12">
      <ShapeDividerTop />

      <div className="container pt-12 px-4">
        <div className="flex flex-wrap text-white">

          {/* Plan du site */}
          <div className="w-full lg:w-1/3 mb-12 lg:mb-0 py-4">
            <h4 className="uppercase mb-6 text-shadow-dark">PLAN DU SITE</h4>
            <ul className="list-none text-lg mb-0 p-0">
              <li><a href="/#skills"   className="text-white">Compétences</a></li>
              <li><a href="/#services" className="text-white">Services</a></li>
              <li><a href="/#contact"  className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="w-full lg:w-1/3 mb-12 lg:mb-0 py-4 web">
            <h4 className="uppercase mb-6 text-shadow-dark">Autour du web</h4>
            <a className="btn-social rounded-full mx-1" href="mailto:ifwebdev@hotmail.com">
              <i className="fa-solid fa-envelope" />
            </a>
            <a className="btn-social mx-1" href="https://www.linkedin.com/in/ishake-fouhal/" target="_blank" rel="noreferrer">
              <i className="fab fa-fw fa-linkedin" />
            </a>
            <a className="btn-social mx-1" href="https://wa.me/+213542341497?text=urlencodedtext" target="_blank" rel="noreferrer">
              <i className="fab fa-fw fa-whatsapp" />
            </a>
          </div>

          {/* À propos */}
          <div className="w-full lg:w-1/3 py-4">
            <h4 className="uppercase mb-6 text-shadow-dark">À propos</h4>
            <p className="text-lg">
              J&apos;aide les artisans du bâtiment, PME et industriels à promouvoir leur activité en
              ligne. Démarquez-vous en collaborant avec un professionnel indépendant passionné du
              design et du web. Ce site est protégé par reCAPTCHA et Google.{" "}
              <a href="https://policies.google.com/privacy" className="text-white">Politique de confidentialité</a>{" "}
              et{" "}
              <a href="https://policies.google.com/terms" className="text-white">Conditions d&apos;utilisation</a>{" "}
              appliquées.
            </p>
          </div>

        </div>

        <div className="py-6 text-center text-white">
          <div className="container">
            <small suppressHydrationWarning>
              Copyright &copy; If-Web-Dev {new Date().getFullYear()}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
