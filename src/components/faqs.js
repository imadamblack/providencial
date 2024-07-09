import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(1);

  const questions = [
    {
      q: "¿Qué tan efectivo es Providencial 15:5 contra enfermedades específicas?",
      a: "Probado y 100% efectivo contra una amplia gama de enfermedades como: Fusarium, Rhizoctonia, Antracnosis, Roya, Cenicilla, Peca bacteriana, Mildui, entre otras."
    },
    {
      q: "¿En qué momento puedo comenzar a ver resultados?",
      a: "Resultados de control de enfermedades de 36 a 48 horas después de aplicar Providencial 15:5. Para mejores resultados como preventivo y potenciador de crecimiento."
    },
    {
      q: "¿Es seguro mezclarlo con otros productos?",
      a: "EVITA MEZCLARLO con otros productos, Providencial 15:5 se aplica únicamente con agua."
    },
    {
      q: "¿Providencial 15:5 se puede utilizar en cualquier cultivo?",
      a: "Sí! Providencial 15:5 se puede utilizar en cualquier cultivo. Aplica 500 ml diluido en 200 litros de agua directo a la raíz y foliar. Repetir la aplicación a los 15 o 20 días después de la primer aplicación."
    },
    {
      q: "¿Qué hace a Providencial 15:5 diferente de otros productos similares?",
      a: "Su fórmula a base de ácidos carboxílicos como fungicida bactericida y potenciador de crecimiento la hace única. No genera resistencia, 0 días de intervalo de seguridad, es un producto orgánico."
    }
  ]

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-200 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}