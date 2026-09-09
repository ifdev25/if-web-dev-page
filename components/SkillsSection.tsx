import SkillsOrbit from "./SkillsOrbit";

export default function SkillsSection() {
  return (
    <section className="relative bg-black" id="skills">

      <div className="container text-white text-center ad">
        <p className="info text-white">
          Vous souhaitez mettre en avant votre activité sur le web ? Démarquez-vous avec des
          créations uniques. Boostez votre visibilité dès aujourd&apos;hui.
        </p>
      </div>

      <div className="flex flex-col justify-center container">
        <h2 className="text-white uppercase text-shadow-light">Compétences</h2>
        <span className="divider-separator text-center mt-6 trait-shadow-light" />
      </div>

      <div className="container">
        <div className="flex flex-wrap justify-center">

          {/* Texte gauche */}
          <div className="w-full lg:w-5/12 flex justify-center items-center">
            <p className="p-2 info sm:hidden lg:block lg:mr-12 text-white skills-text">
              Freelance passionné de création visuelle, je conçois des sites web et des applications
              sur mesure avec Next.js et Symfony, en optimisant mon développement grâce aux outils
              d&apos;IA. Mon objectif est d&apos;aider les artisans et les PME à propulser leur image
              et leur activité en ligne.
            </p>
          </div>

          {/* Anneaux animés (ex-grille de cartes) */}
          <div id="competences_items" className="w-full lg:w-7/12 flex flex-wrap skills-container overflow-hidden">

            <SkillsOrbit />

          </div>
        </div>
      </div>
    </section>
  );
}
