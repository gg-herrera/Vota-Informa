'use client';
import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  // Fecha objetivo - Ejemplo: 15 de diciembre de 2025
  const targetDate = new Date('2025-12-14T08:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // Cuando llega a 0
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Limpiar intervalo al desmontar
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-slate-900">
        Faltan para las elecciones
      </h2>
      
      <div className="grid grid-cols-4 gap-4">
        {/* Días */}
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-lg p-4">
            <div className="text-4xl font-bold">{timeLeft.days}</div>
          </div>
          <p className="text-slate-600 mt-2 font-medium">Días</p>
        </div>

        {/* Horas */}
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-lg p-4">
            <div className="text-4xl font-bold">{timeLeft.hours}</div>
          </div>
          <p className="text-slate-600 mt-2 font-medium">Horas</p>
        </div>

        {/* Minutos */}
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-lg p-4">
            <div className="text-4xl font-bold">{timeLeft.minutes}</div>
          </div>
          <p className="text-slate-600 mt-2 font-medium">Minutos</p>
        </div>

        {/* Segundos */}
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-lg p-4">
            <div className="text-4xl font-bold">{timeLeft.seconds}</div>
          </div>
          <p className="text-slate-600 mt-2 font-medium">Segundos</p>
        </div>
      </div>
    </div>
  );
}