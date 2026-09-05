import Image from "next/image";
import { Code2, Paintbrush } from "lucide-react";

export default function SkillsSection() {
  return (
    <section className="relative bg-black" id="skills">

      <div className="container text-white text-center ad">
        <p className="info text-2xl text-white">
          Vous souhaitez mettre en avant votre activité sur le web ? Démarquez-vous avec des
          créations uniques. Boostez votre visibilité dès aujourd&apos;hui.
        </p>
      </div>

      <div className="flex flex-col justify-center container">
        <h2 className="text-white uppercase ml-4 text-shadow-light">Compétences</h2>
        <span className="divider-separator text-center mt-6 ml-4 trait-shadow-light" />
      </div>

      <div className="container">
        <div className="flex flex-wrap justify-center">

          {/* Texte gauche */}
          <div className="w-full lg:w-5/12 flex justify-center items-center">
            <p className="p-2 text-2xl info sm:hidden lg:block lg:mr-12 text-white skills-text">
              Freelance passionné de création visuelle, je conçois des sites web et des applications
              sur mesure avec Next.js et Symfony, en optimisant mon développement grâce aux outils
              d&apos;IA. Mon objectif est d&apos;aider les artisans et les PME à propulser leur image
              et leur activité en ligne.
            </p>
          </div>

          {/* Grille de cartes */}
          <div className="w-full lg:w-7/12 flex flex-wrap skills-container skills overflow-hidden">

            {/* FrontEnd */}
            <div className="w-full sm:w-1/2 flex fade-in pt-12">
              <div className="card bg-night flex-fill mx-auto my-12 p-6">
                <span className="skill-icon"><Code2 size={40} /></span>
                <h4>FrontEnd</h4>
                <p>Maitrise des technologies, HTML CSS et REACT.</p>
              </div>
            </div>

            {/* BackEnd */}
            <div className="w-full sm:w-1/2 flex fade-in pb-12">
              <div className="card bg-night flex-fill mx-auto my-12 p-6">
                <Image src="/img/Symfony-logo.png" width={75} height={75} alt="symfony-logo" loading="lazy" />
                <h4>BackEnd</h4>
                <p>Diplômé titre RNCP (bac+3/bac+4) créateur d&apos;application PHP/Symfony.</p>
              </div>
            </div>

            {/* Design */}
            <div className="w-full sm:w-1/2 flex fade-in">
              <div className="card bg-night flex-fill mx-auto my-12 p-6">
                <span className="skill-icon"><Paintbrush size={40} /></span>
                <h4>Design</h4>
                <p>Dispose des meilleurs outils tel que Photoshop et Canvas.</p>
              </div>
            </div>

            {/* WordPress */}
            <div className="w-full sm:w-1/2 flex fade-in pb-12">
              <div className="card bg-night flex-fill mx-auto mb-12 p-6">
                <Image src="/img/wordpress-logo.png" width={75} height={75} alt="wordpress-logo" loading="lazy" />
                <h4>Wordpress</h4>
                <p>Créateur de Site Vitrine et E-commerce avec le célèbre CMS</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
