"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Lightbulb, Info, Mail } from "lucide-react";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-night">

      {/* Menu mobile overlay */}
      <div className={`wrapper-mobile md:hidden${menuOpen ? " appear" : ""}`}>
        <ul>
          <li><a href="/#skills"   onClick={closeMenu}>Compétences</a></li>
          <li><a href="/#services" onClick={closeMenu}>Services</a></li>
          <li><a href="/#contact"  onClick={closeMenu}>Contact</a></li>
          <li><a href="/#contact"  onClick={closeMenu}>Une idée de projet ?</a></li>
        </ul>
      </div>

      {/* Bouton hamburger */}
      <button
        className={`menu-btn md:hidden${menuOpen ? " appear" : ""}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        {menuOpen ? <X size={48} /> : <Menu size={48} />}
      </button>

      <div className="flex flex-col flex-1">

        {/* Navbar */}
        <nav className="flex flex-wrap items-center py-4">
          <div className="container flex items-center justify-between w-full">
            <a className="logo text-white" href="/">
              <Image src="/img/logo-fire-pixel.webp" width={190} height={60} alt="logo" priority />
            </a>
            <ul className="hidden md:flex ml-auto uppercase list-none items-center m-0 p-0">
              <li className="flex flex-col justify-center mx-1">
                <a className="nav-link text-white" href="/#skills">Compétences</a>
              </li>
              <li className="flex flex-col justify-center mx-1">
                <a className="nav-link text-white" href="/#services">Services</a>
              </li>
              <li className="flex flex-col justify-center mx-1">
                <a className="nav-link text-white" href="/#contact">Contact</a>
              </li>
              <li className="ml-6">
                <a href="/#contact" className="btn hero-button my-4 red-button inline-flex items-center gap-2">
                  <Lightbulb size={18} />
                  Une idée de projet ?
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Contenu hero */}
        <div className="container flex justify-center flex-1">
          <div className="hero flex flex-wrap w-full mb-4 items-center">

            <div className="text-white flex flex-col flex-1 lg:flex-[3]">
              <h1 className="font-bold my-4 text-shadow-dark">
                Votre <span className="highlighted">Image</span> de marque propulsée !
              </h1>
              <p className="info">
                Créateur de visuels, site vitrine et d&apos;e-commerce Wordpress
              </p>
              <div className="flex justify-center lg:justify-start">
                <a href="/#services" className="btn hero-button my-4 red-button inline-flex items-center gap-2">
                  <Info size={18} />
                  EN SAVOIR PLUS
                </a>
                <a href="/#contact" className="btn hero-button my-4 ml-2 lg:ml-4 light-button inline-flex items-center gap-2">
                  <Mail size={18} />
                  ME CONTACTER ?
                </a>
              </div>
              <Image
                className="mobile-banner"
                src="/img/dark-craft.png"
                width={400}
                height={400}
                alt="dark-craft"
              />
            </div>

            <div className="flex flex-col items-center flex-1 lg:flex-[2] fade-in">
              <Image
                className="text-center"
                src="/img/hero-logo.webp"
                width={450}
                height={450}
                style={{ width: "85%", height: "auto" }}
                alt="banner-logo"
                priority
              />
            </div>

          </div>
        </div>

        {/* Ville de nuit : socle du bloc Compétences.
            Dans le flux et en dernier : sa base reste toujours collée au haut
            de #skills, et le contenu du hero ne peut plus passer dessous. */}
        <div className="city-skyline">
          <Image src="/img/city-night.svg" alt="city-night-image" width={1920} height={150} priority />
        </div>
      </div>

    </header>
  );
}
