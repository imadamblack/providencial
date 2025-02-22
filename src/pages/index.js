import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i02 from '../../public/landing/01.png';
import i03 from '../../public/landing/02.png';
import i04 from '../../public/landing/03.png';
import i05 from '../../public/landing/05.png';
import i06 from '../../public/landing/06.png';
import i13 from '../../public/landing/07.png';
import it01 from '../../public/landing/t01.png';
import it02 from '../../public/landing/t02.png';
import it03 from '../../public/landing/t03.png';
import ico01 from '../../public/landing/icons/ico-botella.png';
import ico02 from '../../public/landing/icons/ico-botellas-5.png';
import ico03 from '../../public/landing/icons/ico-botellas-caja.png';
import ico04 from '../../public/landing/icons/ico-etiqueta.png';
import ico05 from '../../public/landing/icons/ico-crecimiento.png';
import ico06 from '../../public/landing/icons/ico-entrega.png';
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Mándanos un WhatsApp',
    // description: 'Solicita una asesoría de nuestro ingeniero sin costo',
    description: 'Controla enfermedades como: Fusarium, Rhizoctonia, Antracnosis, Roya, Cenicilla, Peca bacteriana, Mildui, entre otras. ',
  };

  const faqs = [
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
    <>
      <section
        className="relative min-h-[80vh] w-full flex flex-col justify-center items-center bg-[url('/landing/17.png')] bg-cover bg-bottom">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 z-10"/>

        <div className="container w-full text-center md:text-left text-white z-10 p-8">
          <h1
            className="md:w-2/3 relative font-medium ft-9 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Reduce al menos un 90% las enfermedades fitopatógenas y aumenta el rendimiento de tu cosecha al menos un 15%
          </h1>
          <p className="md:w-2/3 ft-2 font-medium md:text-left my-12">{cta.description}</p>
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 md:text-left mb-12">Conoce todos los beneficios de Providencial 15:5</p>
          </div>
        </div>
        <div className="absolute flex flex-col justify-center items-center text-white bottom-8 mt-8 md:mt-20 z-10">
          <p className="ft-1">Sigue leyendo</p>
          <div className="animate-bounce">
            <div className="ft-3 material-icons mx-auto">expand_more</div>
          </div>
        </div>
        <div className="w-full h-full absolute bg-black/30 -z-1"/>
      </section>

      <section className="reading-container mb-16">
        <div className="flex border-b border-brand-1 pb-4 mb-8">
          <span className="material-icons mr-2 -ft-2">timer</span>
          <p className="-ft-2" style={{marginBlockEnd: 0}}>Conoce los principales beneficios en 4 min</p>
        </div>
        <p className="ft-2">
          Queremos que tus plantas estén más saludables, fuertes, libres de hongos y bacterias.
          <br/><br/>
          Providencial 15:5 es un potente fungicida, bactericida y potenciador de crecimiento,
          creado para que no tengas que andar invirtiendo en una mezcla de químicos
          para el tallo, para la raíz, para la hoja,
          para el fruto y sabe cuanta madre...<br/><br/>
          Queremos que produzcas más, con más calidad y sigas poniendo en alto la agricultura de México.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('story')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Garantías"
        title="Las cosechas de nuestros clientes son nuestra mayor satisfacción y garantía"
        image={i13}
      />
      <section className="my-16">
        <div className="flex flex-col items-center justify-center md:mx-52 mx-8 space-y-8">
          <div
            className="w-full grid grid-cols-1 md:grid-cols-2 md:flex-row bg-brand-4 rounded-2xl overflow-hidden shadow-lg border border-brand-3">
            <div className="relative min-h-[24rem]">
              <Image src={it01} layout="fill" objectFit="cover"/>
              <div className="bg-brand-1 absolute grid grid-cols-2 items-center bottom-0 inset-x-0 h-[4rem] divide-x-4">
                <p className="text-white text-center">Testigo</p>
                <p className="text-white text-center">Providencial 15:5</p>
              </div>
            </div>
            <div className="flex flex-col px-12 py-16 flex-grow">
              <p className="ft-4">Lupe González <span className="ft-1">(San Luis Potosí)</span></p>
              <p className="font-bold text-white ft-1 mt-4">Cultivo:</p>
              <p className="ft-2">Chile</p>
              <p className="font-bold text-white ft-1 mt-4">Aplicación:</p>
              <p className="ft-2">2 hectáreas</p>
              <p className="font-bold text-white ft-1 mt-4">Resultados:</p>
              <p className="ft-2">95% más de chiles en 5 días menos de siembra</p>
            </div>
          </div>
          <div
            className="w-full grid grid-cols-1 md:grid-cols-2 md:flex-row bg-brand-4 rounded-2xl overflow-hidden shadow-lg border border-brand-3">
            <div className="relative min-h-[24rem]">
              <Image src={it02} layout="fill" objectFit="cover"/>
              <div className="bg-brand-1 absolute grid grid-cols-2 items-center bottom-0 inset-x-0 h-[4rem] divide-x-4">
                <p className="text-white text-center">Testigo</p>
                <p className="text-white text-center">Providencial 15:5</p>
              </div>
            </div>
            <div className="flex flex-col px-12 py-16 flex-grow">
              <p className="ft-4">Agroberries <span className="ft-1">(Jalisco)</span></p>
              <p className="font-bold text-white ft-1 mt-4">Cultivo:</p>
              <p className="ft-2">Frambuesa</p>
              <p className="font-bold text-white ft-1 mt-4">Aplicación:</p>
              <p className="ft-2">1/2 hectárea</p>
              <p className="font-bold text-white ft-1 mt-4">Resultados:</p>
              <p className="ft-2">Incremento del 122% en el peso del fruto</p>
            </div>
          </div>
          <div
            className="w-full grid grid-cols-1 md:grid-cols-2 md:flex-row bg-brand-4 rounded-2xl overflow-hidden shadow-lg border border-brand-3">
            <div className="relative min-h-[24rem]">
              <Image src={it03} layout="fill" objectFit="cover"/>
              <div className="bg-brand-1 absolute grid grid-cols-2 items-center bottom-0 inset-x-0 h-[4rem] divide-x-4">
                <p className="text-white text-center">Testigo</p>
                <p className="text-white text-center">Providencial 15:5</p>
              </div>
            </div>
            <div className="flex flex-col px-12 py-16 flex-grow">
              <p className="ft-4">Jaime Camacho <span className="ft-1">(Nayarit)</span></p>
              <p className="font-bold text-white ft-1 mt-4">Cultivo:</p>
              <p className="ft-2">Pepino</p>
              <p className="font-bold text-white ft-1 mt-4">Aplicación:</p>
              <p className="ft-2">2 hectáreas</p>
              <p className="font-bold text-white ft-1 mt-4">Resultados:</p>
              <p className="ft-2">Incremento del 71% en floración y un 38% más de fruto</p>
            </div>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center mt-16">
            <Link href="#contact">
              <a onClick={() => setLastClick('testimonials')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="¿Por qué <nobr>Providencial 15:5</nobr> no es como los otros fungicidas que has probado?"
        image={i02}
      />
      <section className="my-16">
        <p className="reading-container">
          Te cuento una de muchas historias...<br/><br/>
          Andábamos perdiendo casi toda una plantación de frambuesa y para salvarla tuvimos que usar todo un
          coctél de fungicidas.
          Casi no la libramos.<br/><br/>
          Y como ningún producto me funcionó, siendo un buen regio, me tuve que inventar el mío.<br/>
          <b>Estas son 3 razones para cambiar a Providencial 15:5</b>
        </p>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          <div className="rounded-2xl border border-brand-6 p-16">
            <h3 className="mb-8">Controla y reduce enfermedades fitopatógenas en menos de 48 hrs</h3>
            <p className="mb-8">Inhibe la producción de esporas y evita el proceso reproductivo de hongos y
              bacterias</p>
          </div>
          <div className="rounded-2xl border border-brand-6 p-16">
            <h3 className="mb-8">Estimula el crecimiento</h3>
            <p className="mb-8">Favorece el desarrollo de raíces fuertes y fortalece los mecanismos de floración y
              fructificación</p>
          </div>
          <div className="rounded-2xl border border-brand-6 p-16">
            <h3 className="mb-8">Aumenta el peso de tu cosecha</h3>
            <p className="mb-8">Incrementa significativamente la calidad y el rendimiento de tus cultivos</p>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Precio"
        title="Deja de gastar tanta lana en el coctel de productos que le avientas a tus cultivos"
        image={i03}
      />
      <section className="container my-16 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full flex flex-col bg-white shadow-md rounded-2xl overflow-hidden">
            <div className="relative flex justify-center p-16">
              <Image src={ico01}/>
            </div>
            <div className="flex flex-col px-4 py-8 flex-grow">
              <p className="text-center"><span className="ft-4 font-bold">$1,500 mxn</span> / litro</p>
              <p className="text-center -ft-1">Rinde para 1 hectárea por aplicación</p>
            </div>
          </div>
          <div className="w-full flex flex-col bg-white shadow-md rounded-2xl overflow-hidden">
            <div className="relative flex justify-center p-16">
              <Image src={ico02}/>
            </div>
            <div className="flex flex-col px-4 py-8 flex-grow">
              <p className="text-center"><span className="ft-4 font-bold">$7,125 mxn</span> / 5 litros</p>
              <p className="text-center -ft-1">Descuento del 5%</p>
            </div>
          </div>
          <div className="w-full flex flex-col bg-white shadow-md rounded-2xl overflow-hidden">
            <div className="relative flex justify-center p-16">
              <Image src={ico03}/>
            </div>
            <div className="flex flex-col px-4 py-8 flex-grow">
              <p className="text-center"><span className="ft-4 font-bold">$16,500 mxn</span> / 11 litros</p>
              <p className="text-center -ft-1">Te regalamos 1 litro extra</p>
            </div>
          </div>
        </div>
        <div className="reading-container">
          <p className="ft-2 text-center">
            Una inversión inteligente que cura tus plantas y genera más rendimientos en tus cosechas.
          </p>
          <div className="flex flex-col justify-center items-center mt-16">
            <Link href="#contact">
              <a onClick={() => setLastClick('price')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Proceso"
        title="¿Qué esperar al aplicar <nobr>Providencial 15:5</nobr>?"
        image={i04}
      />
      <section className="reading-container my-16">
        <p className="ft-2">
          <b>Me gusta ser claro y por eso te voy a decir que puedes esperar al aplicar Providencial
            15:5</b>
        </p>
        <ol className="space-y-4">
          <li className="ft-1">Se hace una inspección del cultivo, se toman evidencias fotográficas de las enfermedades
            por hongos y bacterias
          </li>
          <li className="ft-1">Aplicamos en una zona controlada para poder medir los cambios</li>
          <li className="ft-1">A los 2-3 días se observa el control y la reducción de la enfermedad causada por hongos
            y/o bacterias
          </li>
          <li className="ft-1">Aplicas 500ml en zonas no dañadas como prevención contra bacterias fitopatógenas y
            hongos.
          </li>
          <li className="ft-1">A parte de tener una planta sana, verás el incremento de floración, amarre de fruto y
            desarrollo vegetativo de la planta
          </li>
          <li className="ft-1">Aumentas el rendimiento de tus cosechas hasta un 15%</li>
          <li className="ft-1">Te acompañamos con soporte post-compra y asesoramiento técnico continuo</li>
        </ol>
        <p className="ft-2">
          Contamos con un equipo técnico especializado en agricultura sustentable.
        </p>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('process')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Extras"
        title="3 beneficios a tu medida"
        image={i05}
      />
      <section className="container my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">
            <div className="relative w-2/3 pt-[100%]">
              <Image src={ico04} layout="fill" objectFit="contain"/>
            </div>
            <h4 className="text-center my-8">Recibe descuentos a partir de la compra de 5 lts</h4>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">
            <div className="relative w-2/3 pt-[100%]">
              <Image src={ico05} layout="fill" objectFit="contain"/>
            </div>
            <h4 className="text-center my-8">Resultados visibles en 48 hrs</h4>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">
            <div className="relative w-2/3 pt-[100%]">
              <Image src={ico06} layout="fill" objectFit="contain"/>
            </div>
            <h4 className="text-center my-8">Envío gratis a toda la República Mexicana</h4>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('extras')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>


      <Blockbuster
        overhead="Preguntas frecuentes"
        title="Si tienes dudas, probablemente estén aquí"
        image={i06}
      />
      <section className="container py-8">
        <Faqs questions={faqs}/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-brand-1 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="font-semibold text-white tracking-wide">
              Listo, es momento de contactar a uno de nuestros técnicos
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Ya llegaste hasta acá, <br/>
                ya le dedicaste unos minutos de tu valioso tiempo a saber como puedes curar tus cultivos en tiempo
                exprés.
                <br/><br/>
                Regálanos unos datos y mándanos un WhatsApp.
                <br/><br/>
                O si te interesa distribuir da <Link href="/distribuidores#contact"><span className="underline cursor-pointer">clic aquí</span></Link>
              </p>

            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
