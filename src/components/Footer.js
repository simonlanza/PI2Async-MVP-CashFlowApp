import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-graphiteDark text-goldLight p-6">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-goldLight">
          © 2024 CashFlowHub. Todos los derechos reservados.
        </p>
        <div className="flex space-x-4">
          {/* Enlaces a tus redes sociales */}
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-goldLight hover:text-goldMedium" />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-goldLight hover:text-goldMedium" />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-goldLight hover:text-goldMedium" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;