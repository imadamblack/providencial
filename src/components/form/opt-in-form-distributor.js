import Link from 'next/link';
import { info } from '../../../info';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';
import { restrictNumber, emailRegExp } from '../../utils/formValidators';
import fbEvent from '../../services/fbEvents';
import { Radio } from './formAtoms';

export default function OptInFormDistributor({lastClick = ''}) {
  const [sending, setSending] = useState(false);
  const router = useRouter();
  const methods = useForm({mode: 'all'});
  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
  } = methods;

  const onSubmit = (data) => {
    setSending(true);
    data.phone = '521' + data.phone.replace(/^(MX)?\+?(52)?\s?0?1?|\s|\(|\)|-|[a-zA-Z]/g, '');
    data.origin = 'Notoriovs Landing';
    data.lastClick = lastClick;

    const _fbc = getCookie('_fbc');
    const _fbp = getCookie('_fbp');
    const payload = {...data, _fbc, _fbp};

    fetch(info.distributorsOptInWebhook, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((result) => result.json())
      // Send FB Event
      .then(({id}) => {
        fbEvent(
          'Lead',
          {email: data.email, phone: data.phone, externalID: id},
        );
        setCookie('lead', {...data, id});
      })
      .catch(() => {
        fbEvent(
          'Lead',
          {email: data.email, phone: data.phone, externalID: ''},
        );
        setCookie('lead', {...data});
      })
      .then(() => {
        if (info.surveyRedirect !== '') {
          const forwardLink = document.createElement('a');
          forwardLink.href = info.surveyRedirect;
          forwardLink.target = '_blank';
          forwardLink.click();
        }
        router.push(`/thankyou`);
      });
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col w-full space-y-4 rounded-2xl" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register(
            'fullName',
            {
              required: true,
            },
          )}
          className={errors.fullName && '!bg-red-200'}
          placeholder="Tu nombre"
        />
        <input
          {...register(
            'email',
            {
              required: true,
              pattern: {
                value: emailRegExp,
                message: 'Revisa tu correo',
              },
            },
          )}
          className={errors.email && '!bg-red-200'}
          placeholder="Un email activo"
        />
        <input
          {...register(
            'phone',
            {required: true, maxLength: 10, minLength: 10},
          )}
          className={errors.phone && '!bg-red-200'}
          onKeyDown={restrictNumber}
          placeholder="Teléfono de WhatsApp"
        />
        <input
          {...register(
            'city',
            {required: true},
          )}
          className={errors.city && '!bg-red-200'}
          placeholder="Estado o ciudad"
        />
        <div className={`rounded-md px-6 py-4 bg-white ${errors.budget && '!bg-red-200'}`}>
          <p className="mb-4">Cuál sería un estimado de compra mensual?</p>
          <Radio
            name="budget"
            options={[
              {label: '$50,000 a $80,000', value: '50-80'},
              {label: '$80,000 a $150,000', value: '80-150'},
              {label: 'Más de $150,000', value: '150+'},
            ]}
            optCols={1}
            inputOptions={{required: true}}
            className={errors.budget && '!bg-red-200'}
          />
        </div>

        <button
          disabled={sending}
          className={`w-full ${sending ? '!bg-transparent' : 'hover:!bg-brand-3'}`}
        >{
          !sending
            ? 'Contactar vía WhatsApp →'
            : <span className="material-symbols-outlined animate-spin">progress_activity</span>
        }</button>

        <div className="mt-4">
          <p className="-ft-3 text-center text-white">Al dar clic aceptas nuestra&nbsp;
            <Link href={info.privacyNotice}>política de privacidad</Link>
          </p>
        </div>
      </form>
    </FormProvider>
  );
}