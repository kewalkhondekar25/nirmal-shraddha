'use client'
import { FormEvent, useState } from 'react'
import { useLanguage } from './language'

const WHATSAPP_URL = 'https://wa.me/917304071999'

function WhatsAppIcon() {
  return (
    <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function ContactPage() {
  const [sent, setSent] = useState(false)
  const { lang } = useLanguage()
  const d =
    lang === 'Marathi'
      ? [
          'संपर्क करा',
          'अधिक जाणीवपूर्ण उपासनेची सुरुवात करा.',
          'उत्पादन, विक्री किंवा आमच्या उद्देशाबद्दल जाणून घेण्यासाठी आम्हाला संदेश पाठवा.',
          'तुमचे नाव',
          'ईमेल पत्ता',
          'तुमचा संदेश',
          'संदेश पाठवा',
          'धन्यवाद.',
          'तुमचा संदेश प्राप्त झाला आहे. आम्ही लवकरच संपर्क करू.',
          'व्हॉट्सअ‍ॅपवर संपर्क करा',
          '+91 73040 71999',
          'त्वरित उत्तर',
        ]
      : lang === 'Hindi'
        ? [
            'संपर्क',
            'एक और सचेत पूजा-अनुष्ठान की शुरुआत करें।',
            'उत्पाद, विक्रय या हमारे उद्देश्य के बारे में जानने के लिए हमें संदेश भेजें।',
            'आपका नाम',
            'ईमेल पता',
            'आपका संदेश',
            'संदेश भेजें',
            'धन्यवाद।',
            'आपका संदेश प्राप्त हो गया है। हम शीघ्र संपर्क करेंगे।',
            'व्हाट्सऐप पर संपर्क करें',
            '+91 73040 71999',
            'त्वरित उत्तर',
          ]
        : [
            'GET IN TOUCH',
            'Begin a more conscious ritual.',
            'For product enquiries, retail opportunities, or to learn more about our mission, leave us a note.',
            'Your name',
            'Email address',
            'Your message',
            'Send message',
            'Thank you.',
            'Your message has been received. We’ll be in touch soon.',
            'Chat on WhatsApp',
            '+91 73040 71999',
            'Usually replies quickly',
          ]

  function submit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="contact-page shell">
      <section>
        <p className="section-kicker">{d[0]}</p>
        <h1>{d[1]}</h1>
        <p>{d[2]}</p>
        <a
          className="whatsapp-link"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="whatsapp-badge" aria-hidden="true">
            <WhatsAppIcon />
          </span>
          <span className="whatsapp-copy">
            <strong>{d[9]}</strong>
            <em>{d[10]}</em>
            <small>{d[11]}</small>
          </span>
          <span className="whatsapp-arrow" aria-hidden="true">↗</span>
        </a>
      </section>
      <form onSubmit={submit}>
        {sent ? (
          <div className="form-thanks">
            <span>✦</span>
            <h2>{d[7]}</h2>
            <p>{d[8]}</p>
          </div>
        ) : (
          <>
            <label>
              {d[3]}
              <input required name="name" placeholder={d[3]} />
            </label>
            <label>
              {d[4]}
              <input required name="email" type="email" placeholder={d[4]} />
            </label>
            <label>
              {d[5]}
              <textarea required name="message" rows={5} placeholder={d[5]} />
            </label>
            <button className="button dark-button">
              {d[6]}
              <span>↗</span>
            </button>
          </>
        )}
      </form>
    </main>
  )
}
