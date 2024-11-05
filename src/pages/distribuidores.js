import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i02 from '../../public/landing/01.png';
import i04 from '../../public/landing/03.png';
import i05 from '../../public/landing/05.png';
import i06 from '../../public/landing/06.png';
import i13 from '../../public/landing/07.png';
import it01 from '../../public/landing/t01.png';
import it02 from '../../public/landing/t02.png';
import it03 from '../../public/landing/t03.png';
import ico04 from '../../public/landing/icons/ico-etiqueta.png';
import ico05 from '../../public/landing/icons/ico-crecimiento.png';
import ico06 from '../../public/landing/icons/ico-entrega.png';
import Faqs from '../components/faqs';
import OptInFormDistributor from '../components/form/opt-in-form-distributor';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Regálanos unos datos para contactarte',
    description: 'Conviértete en distribuidor oficial Providencial 15:5',
  };

  const faqs = [
    {
      q: "¿Cómo garantiza la exclusividad en mi zona?",
      a: "Ofrecemos contratos de exclusividad territorial, asegurando que seas el único distribuidor en tu región, lo que te permite dominar el mercado sin competencia directa."
    },
    {
      q: "¿Cuál es el margen de ganancia que puedo esperar?",
      a: "Con nuestros precios y descuentos por volumen, puedes obtener márgenes atractivos que superan el promedio del mercado, además de promociones exclusivas como litros adicionales por compra."
    },
    {
      q: "¿Qué apoyo técnico y comercial ofrecen?",
      a: "Brindamos un acompañamiento integral, incluyendo pruebas de campo, demostraciones técnicas, y acceso a una base de datos de clientes potenciales en tu región para facilitar tus ventas."
    },
    {
      q: "¿Cómo manejan las garantías del producto?",
      a: "Nuestro fungicida y bactericida está respaldado por estudios de laboratorio. En caso de que el cliente final no obtenga los resultados prometidos dentro de 10 días, ofrecemos una garantía de reembolso total."
    },
    {
      q: "¿Qué tipo de promociones están disponibles para grandes pedidos?",
      a: "Ofrecemos descuentos del 5% en compras de 5 litros y un litro adicional gratuito en pedidos de 11 litros, haciendo que tu inversión sea aún más rentable."
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
            Distribuye el fungicida más buscado del país y ayuda a tus clientes a reducir al menos un 90% las enfermedades de sus plantas.
          </h1>
          <p className="md:w-2/3 ft-2 font-medium md:text-left my-12">{cta.description}</p>
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 md:text-left mb-12">Conviértete en distribuidor de Providencial 15:5</p>
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
          Queremos que crezcas tu negocio y nos ayudes a llevar Providencial 15:5 por todo el país.
          <br/><br/>
          Providencial 15:5 es un potente fungicida, bactericida y potenciador de crecimiento,
          creado para que los productores no tengan que andar invirtiendo en una mezcla de químicos
          para el tallo, para la raíz, para la hoja,
          para el fruto y sabe cuanta madre...<br/><br/>
          Un producto que te va a hacer ganar porque te lo van a estar recomprando cada cosecha.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('story')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="¿Por qué distribuir <nobr>Providencial 15:5</nobr>?"
        image={i02}
      />
      <section className="my-16">
        <p className="reading-container">
          Sé que competir en el mercado agrícola es desafiante.<br/><br/>
          Por eso, ofrecemos una solución única: nuestro producto orgánico, que actúa como fungicida, bactericida y estimulante de crecimiento.<br/><br/>
          Este producto no tiene competencia en el mercado actual y garantiza un rendimiento superior<br/><br/>
          Te doy 3 razones...<br/><br/>
        </p>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          <div className="rounded-2xl border border-brand-6 p-16">
            <h3 className="mb-8">Exclusividad territorial</h3>
            <p className="mb-8">Serás el único distribuidor en tu zona</p>
          </div>
          <div className="rounded-2xl border border-brand-6 p-16">
            <h3 className="mb-8">Pruebas de laboratorio comprobadas</h3>
            <p className="mb-8">Respaldamos la eficacia del producto con estudios científicos</p>
          </div>
          <div className="rounded-2xl border border-brand-6 p-16">
            <h3 className="mb-8">Mayor rentabilidad</h3>
            <p className="mb-8">Aumenta las ventas a través de descuentos por volumen y promociones atractivas</p>
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
        overhead="Que esperar"
        title="Nosotros te ofrecemos una fórmula ganadora"
        image={i04}
      />
      <section className="reading-container my-16">
        <p className="ft-2">
          <b>Muchos distribuidores se preguntan cómo pueden destacar frente a la competencia con un producto.</b>
        </p>
        <ol className="space-y-4">
          <li className="ft-1">Tendrás acceso exclusivo a un producto que puede revolucionar el rendimiento de los cultivos en tu zona.
          </li>
          <li className="ft-1">Nuestro equipo te proporcionará soporte continuo, desde las pruebas en el campo hasta la implementación.</li>
          <li className="ft-1">Además, garantizamos un proceso de venta eficiente, con envío rápido en 48 horas y el respaldo de una garantía de satisfacción.
          </li>
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
            <h4 className="text-center my-8">Recibe descuentos exclusivos de distribuidor</h4>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">
            <div className="relative w-2/3 pt-[100%]">
              <Image src={ico05} layout="fill" objectFit="contain"/>
            </div>
            <h4 className="text-center my-8">Crece tu negocio con el fungicida más buscado del país</h4>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">
            <div className="relative w-2/3 pt-[100%]">
              <Image src={ico06} layout="fill" objectFit="contain"/>
            </div>
            <h4 className="text-center my-8">Envío rápido en 48 horas a toda la república</h4>
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
              Listo, es momento de que platiquemos como crecer tu negocio.
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Ya llegaste hasta acá, <br/>
                ya le dedicaste unos minutos de tu valioso tiempo a saber como puedes crecer las ganancias de tu negocio.
                <br/><br/>
                Regálanos unos datos y mándanos un WhatsApp.
              </p>
            </div>
            <OptInFormDistributor
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
