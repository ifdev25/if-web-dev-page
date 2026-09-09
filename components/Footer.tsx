import { Mail } from "lucide-react";

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="text-center bg-night pt-12">
      <div className="container pt-12">
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
          <div className="w-full lg:w-1/3 mb-12 lg:mb-0 py-4">
            <h4 className="uppercase mb-6 text-shadow-dark">Autour du web</h4>
            <a className="btn-social rounded-full mx-1" href="mailto:ifwebdev@hotmail.com" aria-label="Envoyer un e-mail">
              <Mail size={20} />
            </a>
            <a className="btn-social mx-1" href="https://www.linkedin.com/in/ishake-fouhal/" target="_blank" rel="noreferrer" aria-label="Profil LinkedIn">
              <LinkedInIcon />
            </a>
            <a className="btn-social mx-1" href="https://wa.me/+213542341497?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mon%20projet%20web." target="_blank" rel="noreferrer" aria-label="Contacter sur WhatsApp">
              <WhatsAppIcon />
            </a>
          </div>

          {/* À propos */}
          <div className="w-full lg:w-1/3 py-4">
            <h4 className="uppercase mb-6 text-shadow-dark">À propos</h4>
            <p className="text-lg">
              J&apos;aide les artisans du bâtiment, PME et industriels à promouvoir leur activité en
              ligne. Démarquez-vous en collaborant avec un professionnel indépendant passionné du
              design et du web.
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
