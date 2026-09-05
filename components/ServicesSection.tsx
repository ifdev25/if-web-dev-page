import { Check } from "lucide-react";

const CheckItem = ({ text }: { text: string }) => (
  <li className="text-center flex items-center justify-center gap-2">
    <Check size={14} className="shrink-0 text-white/75" />
    {text}
  </li>
);

export default function ServicesSection() {
  return (
    <section className="bg-night pb-12">
      <div className="container" id="services">
        <div className="container text-white text-center ad slide-in from-left">
          <p className="info text-2xl text-white">
            Pour concevoir des visuels et des sites personnalisés répondant aux besoins de mes
            clients, je collabore étroitement avec eux, garantissant ainsi une présence en ligne
            digne d&apos;un professionnel. Profitez dès maintenant de nos tarifs de lancement !
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-white uppercase ml-4 text-shadow-dark">Services</h2>
          <span className="divider-separator text-center mt-6 ml-4 trait-shadow-dark" />
        </div>

        <div className="flex flex-wrap justify-center py-6 services">

          {/* Carte 1 — Logos & visuels */}
          <div className="w-full md:w-1/2 xl:w-1/3 fade-in flex justify-center">
            <a href="/#contact" className="flex no-underline" aria-label="Demander un devis pour conception de logos et visuels">
              <div className="p-6 m-4 md:m-2 lg:m-12 xl:m-4 bg-black/75 rounded-lg card flex-fill">
                <h3 className="text-center m-4 text-white font-semibold">
                  Conception Logos et visuels personnalisés
                </h3>
                <p className="text-center text-white/75">à partir de</p>
                <p className="text-center price">50 euros*</p>
                <ul className="list-none text-white/75 p-0">
                  <CheckItem text="Création de logos" />
                  <CheckItem text="Conception de flyers, affiches" />
                  <CheckItem text="Design de cartes de visite" />
                  <CheckItem text="Design de bannières et d'images pour les réseaux sociaux" />
                  <CheckItem text="Design moderne et épuré" />
                  <CheckItem text="Travail sur mesure" />
                </ul>
                <div className="flex justify-center">
                  <span className="btn hero-button my-4 red-button">un devis ?</span>
                </div>
              </div>
            </a>
          </div>

          {/* Carte 2 — Site Vitrine */}
          <div className="w-full md:w-1/2 xl:w-1/3 fade-in flex justify-center">
            <a href="/#contact" className="flex no-underline" aria-label="Demander un devis pour site vitrine WordPress ou Symfony">
              <div className="p-6 m-4 md:m-2 lg:m-12 xl:m-4 bg-black/75 rounded-lg card flex-fill head-2">
                <h3 className="text-center my-4 text-white font-semibold">
                  Site Vitrine Wordpress ou Symfony
                </h3>
                <p className="text-center text-white/75">à partir de</p>
                <p className="text-center price">500 euros*</p>
                <ul className="list-none text-white/75 p-0">
                  <CheckItem text="Design moderne" />
                  <CheckItem text="Site Responsive" />
                  <CheckItem text="1 à 5 pages" />
                  <CheckItem text="Formulaire de contact" />
                  <CheckItem text="Optimisation SEO" />
                  <CheckItem text="Hébergement O2switch" />
                  <CheckItem text="Optimisation vitesse et performance" />
                </ul>
                <div className="flex justify-center">
                  <span className="btn hero-button my-4 red-button">un devis ?</span>
                </div>
              </div>
            </a>
          </div>

          {/* Carte 3 — E-commerce */}
          <div className="w-full md:w-1/2 xl:w-1/3 fade-in flex justify-center">
            <a href="/#contact" className="flex no-underline" aria-label="Demander un devis pour création de site e-commerce WordPress">
              <div className="p-6 m-4 md:m-2 lg:m-12 xl:m-4 bg-black/75 text-white rounded-lg card flex-fill flex flex-col head-3">
                <h3 className="text-center my-4 text-white font-semibold">
                  Création Site e-commerce Wordpress
                </h3>
                <p className="text-center text-white/75">à partir de</p>
                <p className="text-center price">900 euros*</p>
                <ul className="list-none text-white/75 p-0">
                  <CheckItem text="Design moderne" />
                  <CheckItem text="Site Responsive" />
                  <li className="text-center flex items-center justify-center gap-2">
                    <Check size={14} className="shrink-0 text-white/75" />
                    Intégration jusqu&apos;à 20 produits
                  </li>
                  <CheckItem text="Formulaire de contact" />
                  <CheckItem text="Optimisation SEO" />
                  <CheckItem text="Hébergement O2switch" />
                  <CheckItem text="Optimisation vitesse et performance" />
                  <CheckItem text="Boutique Woocommerce" />
                </ul>
                <div className="flex justify-center">
                  <span className="btn hero-button my-4 red-button">un devis ?</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="container text-white text-center py-12 slide-in from-right">
          <p className="info italic text-white">
            (*) Les Tarifs affichés sont à titre indicatifs, un devis devra être réalisé. Les prix
            sont hors frais d&apos;hébergeur et de nom de domaine. Plusieurs fois sans frais possible.
          </p>
        </div>
      </div>
    </section>
  );
}
