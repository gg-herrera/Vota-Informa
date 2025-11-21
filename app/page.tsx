import Image from "next/image";
import Jara from '../public/Jara2.webp';
import Kast from '../public/Kast.webp';
import debate from '../public/elecciones2025.jpg';
import CountdownTimer from "./components/timer";
import './pageStyle.css';
export default function Home() {
  const candidatos = [
    {
      id: 'jara',
      nombre: 'Jeannette Jara Román',
      partido: 'Chile Digno',
      imagen: Jara.src,
      descripcion: 'Chile y su gente merecen respuestas frente a las urgencias'
    },
    {
      id: 'kast',
      nombre: 'José Antonio Kast',
      partido: 'Frente Social Cristiano',
      imagen: Kast.src,
      descripcion: 'Orden, progreso económico y libertad. Súmate hoy al proyecto que devolverá dignidad, libertad y seguridad a todos los chilenos.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header con imagen principal */}
      <header className="relative h-64 bg-slate-800">
        <img 
          src={debate.src}
          alt="Chile - Elecciones 2025"
          className="w-full h-full object-cover opacity-40"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-2">
              Vota Informa 2025
            </h1>
            <p className="text-xl">
              Segunda Vuelta Presidencial
            </p>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
          Candidatos
        </h2>

        {/* Grid de candidatos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {candidatos.map((candidato) => (
            <div 
              key={candidato.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Imagen */}
              <div className="h-64 bg-slate-200">
                <img 
                  src={candidato.imagen}
                  alt={candidato.nombre}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">
                  {candidato.nombre}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {candidato.partido}
                </p>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {candidato.descripcion}
                </p>
                
                <a
                  href={`/candidatos/${candidato.id}`}
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Ver más detalles →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div id="timeLeft">
          <div className="loader">
            <span className="hour"></span>
            <span className="min"></span>
            <span className="circel"></span>

          </div>
          <CountdownTimer/>
        </div>
        <a
          href={`/creditos`}
                  className="w-64 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition absolute left-[50%] -translate-[50%] mt-20"
                >
                  Creditos →
        </a>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg mb-2">© 2025 Vota Informa</p>
          <p className="text-slate-400 text-sm">
            Información electoral objetiva para Chile
          </p>
        </div>
      </footer>
    </div>
  );
}
