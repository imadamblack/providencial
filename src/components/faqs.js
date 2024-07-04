import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(1);

  const questions = [
    {
      q: "¿Qué tan efectivo es Providencial 15:5 contra enfermedades específicas?",
      a: "Probado y 100% efectivo contra una amplia gama de enfermedades fitopatógenas."
    },
    {
      q: "¿En qué momento puedo comenzar a ver resultados?",
      a: "Si tus cosechas tienen alguna enfermedad, a partir del día 4 podrás ver las mejorías. En caso de que se presenten sanas y lo uses de manera preventiva, podrás ver resultados desde el primer día."
    },
    {
      q: "¿Es seguro mezclarlo con otros productos?",
      a: "Evita mezclarlo con otros productos que puedan ser contraproducentes para tus plantas, Providencial 15:5 cuenta con los activos necesarios para ayudar y cuidar tus cultivos."
    },
    {
      q: "¿Providencial 15:5 se puede utilizar en cualquier cultivo?",
      a: "Sí! Providencial 15:5 se puede utilizar en cualquier cultivo."
    },
    {
      q: "¿Qué hace a Providencial 15:5 diferente de otros productos similares?",
      a: "Su fórmula orgánica que no genera resistencia ni un intérvalo de seguridad y su garantía de rendimiento lo hacen único en el mercado."
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