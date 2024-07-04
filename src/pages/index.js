import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect } from 'react';
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
import ico01 from '../../public/landing/icons/ico-botella.png'
import ico02 from '../../public/landing/icons/ico-botellas-5.png'
import ico03 from '../../public/landing/icons/ico-botellas-caja.png'
import ico04 from '../../public/landing/icons/ico-etiqueta.png'
import ico05 from '../../public/landing/icons/ico-crecimiento.png'
import ico06 from '../../public/landing/icons/ico-entrega.png'
import Faqs from '../components/faqs';

export default function Home() {
  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Mándanos un WhatsApp',
    description: 'Solicita una asesoría de nuestro ingeniero sin costo',
  };

  return (
    <>
      <section
        className="relative h-[80vh] w-full flex flex-col justify-center items-center bg-[url('/landing/17.png')] bg-cover bg-bottom">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 z-10"/>

        <div className="container w-full text-center md:text-left text-white z-10 p-8">
          <h1
            className="md:w-2/3 relative font-medium ft-11 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Reduce hasta un 90% las enfermedades fitopatógenas y aumenta tu producción agrícola al menos un 15%
          </h1>
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start mt-12">
            <p className="ft-2 font-medium md:text-left mb-12">{cta.description}</p>
            <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
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
          Queremos que tengas cures tus plantas en tiempo exprés y tengas cultivos más saludables y fuertes, libres de
          hongos y enfermedades.<br/><br/>
          <nobr>Providencial 15:5</nobr>
          es un producto creado para que no tengas que andar invirtiendo en una mezcla de químicos
          para el tallo, para la raíz, para la hoja,
          para el fruto y sabe cuanta madre...<br/><br/>
          Y así, produzcas más, con más calidad y sigas poniendo en alto la agricultura de México.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Garantías"
        title="Las cosechas de nuestros clientes son nuestra mejor garantía"
        image={i13}
      />
      <section className="my-16">
        <div className="flex flex-col items-center justify-center md:mx-52 mx-8 space-y-8">
          <div
            className="w-full grid grid-cols-1 md:grid-cols-2 md:flex-row bg-brand-4 rounded-2xl overflow-hidden shadow-lg border border-brand-3">
            <div className="relative min-h-[24rem]">
              <Image src={it01} layout="fill" objectFit="cover"/>
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
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="¿Por qué <nobr>Providencial 15:5</nobr> no es como los otros fungicidas que has probado?"
        image={i02}
      />
      <section className="my-16">
        <p className="reading-container">
          Un día andábamos perdiendo casi toda una plantación de frambuesa y para salvarla tuvimos que usar todo un
          coctél de fungicidas.
          Casi no la libramos.<br/><br/>
          Y como ningún producto me funcionó, siendo un buen regio, me tuve que inventar el mío.<br/>
          <b>Estas son 3 razones para cambiar a Providencial 15:5</b>
        </p>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          <div className="rounded-2xl border border-brand-6 p-16">
            <h3 className="mb-8">Controla y reduce enfermedades fitopatógenas en 4 días</h3>
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

        <div className="flex flex-col justify-center items-center">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Precio"
        title="Deja de gastar un buen de lana en el coctel de productos que le avientas a tus cultivos"
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
              <p className="text-center -ft-1">Descuento del 10%</p>
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
        <p className="reading-container">
          Una inversión que cura tus plantas, que genera más follaje, más flor y frutos más grandes para aumentar tu
          exportación.</p>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Proceso"
        title="¿Qué esperar al usar <nobr>Providencial 15:5</nobr>?"
        image={i04}
      />
      <section className="reading-container my-16">
        <p className="ft-2">
          <b>Me gusta ser claro y por eso te voy a decir que puedes esperar al cambiar tu fungicida por Providencial
            15:5</b>
        </p>
        <ol className="space-y-4">
          <li className="ft-1">Hacemos una inspección de cultivos dañados con bacterias fitopatógenas</li>
          <li className="ft-1">Aplicamos en una zona controlada para poder medir los cambios</li>
          <li className="ft-1">En un par de semanas notas como, además de reducir las enfermedades, empieza a potenciar
            el crecimiento
          </li>
          <li className="ft-1">Aplicas en zonas no dañadas como prevención contra bacterias fitopatógenas y hongos.</li>
          <li className="ft-1">Aumentas el rendimiento de tus cosechas hasta un 15%</li>
          <li className="ft-1">Te acompañamos con soporte post-compra y asesoramiento técnico continuo</li>
        </ol>
        <p className="ft-2">
          Contamos con un equipo de ingenieros especializados en agricultura sustentable.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
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
            <div className='relative w-2/3 pt-[100%]'>
              <Image src={ico04} layout="fill" objectFit='contain'/>
            </div>
            <h4 className="text-center my-8">Recibe descuentos a partir de la compra de 5 lts</h4>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">
            <div className='relative w-2/3 pt-[100%]'>
              <Image src={ico05} layout="fill" objectFit='contain'/>
            </div>
            <h4 className="text-center my-8">Resultados visibles al 4to. día</h4>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">
            <div className='relative w-2/3 pt-[100%]'>
              <Image src={ico06} layout="fill" objectFit='contain'/>
            </div>
            <h4 className="text-center my-8">Envío gratis a toda la República Mexicana</h4>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>


      <Blockbuster
        overhead="Preguntas frecuentes"
        title="Si tienes dudas, probablemente estén aquí"
        image={i06}
      />
      <section className="container py-8">
        <Faqs/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-brand-1 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="font-semibold text-white tracking-wide">
              Listo, es momento de contactar a uno de nuestros ingenieros
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Ya llegaste hasta acá, <br/>
                ya le dedicaste unos minutos de tu valioso tiempo a saber como puedes ahorrar agua y contribuir al medio
                ambiente.
                <br/><br/>
                Regálanos unos datos y envíanos un WhatsApp.
              </p>
            </div>
            <OptInForm/>
          </div>
        </div>
      </section>
    </>
  );
}
