/**
 * Anneaux animés du bloc Compétences (remplace les anciennes cartes).
 * 100 % CSS : pas de JS, pas d'état, le composant reste rendu côté serveur.
 * Les styles vivent dans app/globals.css, section « Compétences — anneaux animés » :
 * tout est dimensionné à partir de --ringsize, seule valeur à changer pour
 * agrandir ou réduire l'ensemble (anneaux, ronds et logos suivent).
 */
export default function SkillsOrbit() {
  return (
    <div className="rings-wrap fade-in">
      {/* les 4 logos remplacent le texte des cartes : on garde l'info pour les lecteurs d'écran */}
      <div
        className="rings-stage"
        role="img"
        aria-label="Compétences : React, Symfony, WordPress et outils d'IA"
      >
        <span className="rings-ring rings-red" />
        <span className="rings-ring rings-violet" />
        <span className="rings-ring rings-blue" />
        <span className="rings-ring rings-white" />

        <div className="rings-orbit">
          <div className="rings-dot">
            <span className="rings-logo rings-logo-ai">AI</span>
          </div>
        </div>

        <div className="rings-orbit rings-phase-1">
          <div className="rings-dot">
            <span className="rings-logo">
              <svg className="rings-logo-wordpress" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
              </svg>
            </span>
          </div>
        </div>

        <div className="rings-orbit rings-phase-2">
          <div className="rings-dot">
            <span className="rings-logo">
              <svg className="rings-logo-react" viewBox="-11.5 -10.23174 23 20.46348" aria-hidden="true" focusable="false">
                <circle r="2.05" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div className="rings-orbit rings-phase-3">
          <div className="rings-dot">
            <span className="rings-logo">
              <svg className="rings-logo-symfony" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M17.247 4.439c-1.22.042-2.283.715-3.075 1.644-.878 1.02-1.461 2.229-1.881 3.461-.753-.614-1.332-1.414-2.539-1.761-.966-.297-2.015-.105-2.813.514-.41.319-.71.757-.861 1.254-.36 1.176.381 2.225.719 2.6l.737.79c.15.154.519.56.339 1.138-.193.631-.951 1.037-1.732.799-.348-.106-.848-.366-.734-.73.045-.15.152-.263.21-.391.052-.11.077-.194.095-.242.141-.465-.053-1.07-.551-1.223-.465-.143-.939-.03-1.125.566-.209.68.117 1.913 1.86 2.449 2.04.628 3.765-.484 4.009-1.932.153-.907-.255-1.582-1.006-2.447l-.612-.677c-.371-.37-.497-1.002-.114-1.485.324-.409.785-.584 1.539-.379 1.103.3 1.594 1.063 2.412 1.68-.338 1.11-.56 2.223-.759 3.222l-.123.746c-.585 3.07-1.033 4.757-2.194 5.726-.234.166-.57.416-1.073.434-.266.005-.352-.176-.355-.257-.006-.184.15-.271.255-.353.154-.083.39-.224.372-.674-.016-.532-.456-.994-1.094-.973-.477.017-1.203.465-1.176 1.286.028.85.819 1.485 2.012 1.444.638-.021 2.062-.281 3.464-1.949 1.633-1.911 2.09-4.101 2.434-5.706l.383-2.116c.213.024.441.042.69.048 2.032.044 3.049-1.01 3.064-1.776.01-.464-.304-.921-.744-.91-.386.009-.718.278-.806.654-.094.428.646.813.068 1.189-.41.266-1.146.452-2.184.3l.188-1.042c.386-1.976.859-4.407 2.661-4.467.132-.007.612.006.623.323.003.105-.022.134-.147.375-.115.155-.174.345-.168.537.017.504.4.836.957.816.743-.023.955-.748.945-1.119-.032-.874-.952-1.424-2.17-1.386z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
