import React, { memo, useContext } from "react";
import { LanguageContext } from "../context/ChangeLanguage";
import languages from "../translation/Languages";

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  const t = languages[lang];

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-4xl">🍕</div> {/* Qizil yurak logo */}
            <span className="text-xl font-bold">Kuda Pizza</span>
          </div>

          
          <div>
            <h3 className="font-semibold mb-4">Kuda Pizza</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Kompaniya haqida
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Foydalanish shartlari
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Kafolat shartlari
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold mb-4">Yordam</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Restaran
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Kontaktlar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  qo'llab-quvvatlash
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Buyurtmangizni kuzatib boring
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-semibold mb-4">Kontaktlar</h3>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2">
                <span className="text-orange-500 text-xl">☎</span>
                <span>+7 (926) 223-10-11</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-orange-500 text-xl">☎</span>
                <span>+7 (926) 223-10-11</span>
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 text-2xl"
                >
                  f
                </a>
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 text-2xl"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-600 text-sm">
          <h2 className="text-2xl font-bold mb-4">{t.footer_title}</h2>
          <p className="max-w-4xl mx-auto leading-relaxed mb-6">
            {t.footer_text}
          </p>
          <p>© Copyright 2021 — Kuda Pizza</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
