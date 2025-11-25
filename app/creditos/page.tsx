import NextImg from '@/public/next.svg';
import ReactImg from '@/public/reactone.webp';
import TailwindImg from '@/public/tailwindcss.webp';
import VercelImg from '@/public/vercel.webp';
import TSImg from '@/public/ts.webp';
import VSCodeImg from '@/public/vscode.webp';
import NodeJSImg from '@/public/nodejs.webp';
import FontawesomeImg from '@/public/fahh.webp';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/app/creditos/pagestyle.css';
import Magata from '@/public/magata.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fah from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';
import { link } from 'fs';
export default function creditos() {

  const herramientas: Array<{ id: string, nombre: string, descripcion: string, link: string, img: string }> = [
    {
      id: 'magata',
      nombre: "Magata Innovations",
      descripcion: "Creadores de la Pagina",
      link: "https://instagram.com/magata_innovations/",
      img: Magata.src
    },
    {
      id: 'next',
      nombre: "NextJS",
      descripcion: "Framework Principal del Desarrollo de la Pagina",
      link: "https://nextjs.org/",
      img: NextImg.src
    },
    {
      id: 'react',
      nombre: "React",
      descripcion: "Librería usada como Base de NextJS",
      link: "https://reactjs.org/",
      img: ReactImg.src
    },
    {
      id: 'tailwind',
      nombre: "Tailwindcss",
      descripcion: "Framework de manejo de estilos y diseño",
      link: "https://tailwindcss.com",
      img: TailwindImg.src
    },
    {
      id: "vercel",
      nombre: "Vercel",
      descripcion: "Servidor de Hosting, Desarrollo y Almacenamiento de datos",
      link: "https://vercel.com/",
      img: VercelImg.src
    },
    {
      id: 'font',
      nombre: "FontAwesome",
      descripcion: "Proveedor gratuito de iconos",
      link: "https://fontawesome.com/",
      img: FontawesomeImg.src
    },
    {
      id: 'type',
      nombre: "Typescript",
      descripcion: "Lenguaje de Programación robusto y útil",
      link: "https://typescriptlang.org/",
      img: TSImg.src
    },
    {
      id: 'vsc',
      nombre: "Visual Studio Code",
      descripcion: "Editor de codigo gratuito, personalizable y extremadamente popular",
      link: "https://code.visualstudio.com/",
      img: VSCodeImg.src
    },
    {
      id: 'node',
      nombre: "NodeJS",
      descripcion: "Entorno de ejecución de JavaScript de código abierto",
      link: "https://nodejs.org/",
      img: NodeJSImg.src
    },
  ]

  return (
    <div>
      <main className='bg-white'>
        <header className="relative h-64 bg-slate-800">
          <img
            src={Lyra.src}
            alt="Lyra Productions"
            className="w-full h-full object-cover opacity-40"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-2">
                Vota Informa 2025
              </h1>
              <p className="text-xl">
                Creditos y Desarrollo
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-rows-4 gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(40rem, 1fr))' }}>
          {herramientas.map((herramienta) => (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" key={herramienta.id}>
              {/* Imagen */}
              <div className="h-64 bg-slate-200">
                <img
                  src={herramienta.img}
                  alt={herramienta.nombre}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">
                  {herramienta.nombre}
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {herramienta.descripcion}
                </p>

                <a
                  href={herramienta.link}
                  target='blank'
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Ver más detalles →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}