import { info } from '../../info';

export default function ThankYou() {
  return (
    <section className="relative flex flex-col flex-grow justify-center py-20 px-0">
      <div className="container md:w-1/2 flex flex-col items-center">
        <h2 className="ft-8 text-center">
          Gracias por contactarnos y sumarte al cambio de una agricultura sustentable.
        </h2>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center ft-4 mt-16">Si sólo quieres probar <nobr>Providencial 15:5</nobr></p>
          <a
            className="button-secondary !bg-brand-3 ft-4 flex justify-center items-center mt-6"
            href={`https://articulo.mercadolibre.com.mx/MLM-2117512569-fungicida-providencial-155-fusarium-antracnosis-rhizocton-_JM`}
            target="_blank"
          >
            Compra en MercadoLibre<span className="ml-2 material-icons">arrow_forward</span>
          </a>
          <p className="mt-4">Recuerda no mezclar con otros productos</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center ft-4 mt-16">O continúa a WhatsApp para más información</p>
          <a
            className="button !bg-brand-5 ft-4 flex justify-center items-center mt-6"
            href={`https://wa.me/${info.whatsapp.value}?text=${info.whatsapp.message}`}
            target="_blank"
          >
            <span className="material-icons">arrow_forward</span>Da click aquí<span
            className="text-white material-icons">arrow_back</span>
          </a>
        </div>

      </div>
    </section>
  );
}
