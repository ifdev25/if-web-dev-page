"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-night">

      {/* Menu mobile overlay */}
      <div className={`wrapper-mobile lg:hidden${menuOpen ? " appear" : ""}`}>
        <ul>
          <li><a href="/#skills"   onClick={closeMenu}>Compétences</a></li>
          <li><a href="/#services" onClick={closeMenu}>Services</a></li>
          <li><a href="/#contact"  onClick={closeMenu}>Contact</a></li>
          <li><a href="/#contact"  onClick={closeMenu}>Une idée de projet ?</a></li>
        </ul>
      </div>

      {/* Bouton hamburger */}
      <button
        className={`menu-btn lg:hidden${menuOpen ? " appear" : ""}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <i className="fas fa-bars" />
      </button>

      <div className="flex flex-col h-full">

        {/* Navbar */}
        <nav className="flex flex-wrap items-center py-4">
          <div className="container-lg flex items-center justify-between w-full">
            <a className="logo text-white" href="/">
              <Image src="/img/logo-fire-pixel.png" width={190} height={60} alt="logo" priority />
            </a>
            <ul className="hidden lg:flex ml-auto uppercase list-none items-center m-0 p-0">
              <li className="flex flex-col justify-center mx-4">
                <a className="nav-link text-white" href="/#skills">Compétences</a>
              </li>
              <li className="flex flex-col justify-center mx-4">
                <a className="nav-link text-white" href="/#services">Services</a>
              </li>
              <li className="flex flex-col justify-center mx-4">
                <a className="nav-link text-white" href="/#contact">Contact</a>
              </li>
              <li className="mx-4">
                <a href="/#contact" className="btn hero-button my-4 red-button">
                  <i className="fa-solid fa-lightbulb mr-2" />
                  Une idée de projet ?
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Contenu hero */}
        <div className="container flex justify-center flex-1">
          <div className="hero flex flex-wrap w-full mb-4 items-center">

            <div className="text-white flex flex-col flex-1 lg:w-2/3">
              <h1 className="font-bold my-4 text-shadow-dark">
                Votre <span className="highlighted">Image</span> de marque propulsée !
              </h1>
              <p className="text-star info">
                Créateur de visuels, site vitrine et d&apos;e-commerce Wordpress
              </p>
              <div className="flex justify-center lg:justify-start">
                <a href="/#services" className="btn hero-button my-4 red-button">
                  <i className="fa-solid fa-circle-info mr-2" />
                  EN SAVOIR PLUS
                </a>
                <a href="/#contact" className="btn hero-button my-4 ml-2 lg:ml-4 light-button">
                  <i className="fa-regular fa-envelope mr-2" />
                  ME CONTACTER ?
                </a>
              </div>
              <Image
                className="mobile-banner"
                src="/img/dark-craft.png"
                width={300}
                height={300}
                style={{ width: "55%" }}
                alt="dark-craft"
              />
            </div>

            <div className="flex flex-col items-center flex-1 lg:w-1/3 fade-in">
              <Image
                className="text-center"
                src="/img/hero-logo.png"
                width={450}
                height={450}
                style={{ width: "100%", height: "auto" }}
                alt="banner-logo"
                priority
              />
            </div>

          </div>
        </div>
      </div>

      {/* Séparateur ville de nuit */}
      <div className="custom-shape-divider-bottom-1692800020">
        <Image src="/img/city-night.svg" alt="city-night-image" width={1400} height={150} />
      </div>

    </header>
  );
}
