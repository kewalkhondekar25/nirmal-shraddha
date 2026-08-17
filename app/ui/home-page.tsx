'use client'
import Image from'next/image'
import Link from'next/link'
import{HeroLanguage}from'./hero-language'
import{ProductCarousel}from'./product-carousel'
import{useLanguage}from'./language'

const images=[['sacred-flowers-collection.png','01'],['bento-sacred-flowers.png','02'],['bento-collection.png','03'],['bento-crafting.png','04'],['WhatsApp Image 2026-08-04 at 07.34.37.jpeg','05']]

export function HomePage(){
  const{t,lang}=useLanguage()
  const steps=lang==='Marathi'?[['अर्पणाचा सन्मान','श्रद्धेने अर्पण केलेल्या फुलांचा प्रवास इथून सुरू होतो.'],['पवित्र निर्माल्य','प्रत्येक फूल त्याची भावना आणि पवित्रता जपून ठेवते.'],['काळजीपूर्वक संकलन','नद्या व जलमार्गात जाण्यापूर्वी निर्माल्य वेगळे संकलित केले जाते.'],['शास्त्रोक्त प्रक्रिया','फुलांच्या सामग्रीचा पद्धतशीर पुनर्वापर केला जातो.'],['नवीन सुगंध','या फुलांपासून पर्यावरणपूरक अगरबत्ती तयार होते.']]:lang==='Hindi'?[['अर्पण का सम्मान','श्रद्धा से अर्पित फूलों की यात्रा यहाँ से शुरू होती है।'],['पवित्र निर्माल्य','हर फूल अपनी भावना और पवित्रता बनाए रखता है।'],['सावधान संग्रह','नदियों और जलमार्गों में जाने से पहले निर्माल्य अलग एकत्र किया जाता है।'],['वैज्ञानिक प्रक्रिया','फूलों की सामग्री का व्यवस्थित पुनर्चक्रण किया जाता है।'],['नई सुगंध','इन फूलों से पर्यावरण-अनुकूल अगरबत्ती बनाई जाती है।']]:[['The offering','Flowers offered with faith begin their next chapter here.'],['Sacred Nirmalya','Each flower still carries its meaning and reverence.'],['Separated at source','Nirmalya is collected before it can enter rivers and waterways.'],['Scientifically transformed','Floral material is systematically recycled with care.'],['A new fragrance','The flowers become eco-conscious incense for your home.']]

  return <main><HeroLanguage/><ProductCarousel/><section className="intro-section shell"><p className="section-kicker">{t.purpose}</p><div className="story-grid"><h2>{t.storyTitle}</h2><div><p>{t.story2}</p><p>{t.process}</p><Link className="inline-link" href="/contact">{t.contact}<span>↗</span></Link></div></div></section><section className="journey-section"><div className="shell journey-intro"><div><p className="section-kicker">{t.impact}</p><h2>{t.impactTitle}</h2></div><p>{t.impactText}</p></div><div className="shell journey-grid">{images.map(([file,num],i)=><article className={`journey-card jc-${i}`} key={file}><Image src={`/images/${file}`} alt={steps[i][0]} fill sizes="(max-width:700px) 100vw, 50vw"/><div><span>{num}</span><h3>{steps[i][0]}</h3><p>{steps[i][1]}</p></div></article>)}</div></section><section className="ritual-section"><div className="shell"><p className="section-kicker light">{t.ritual}</p><h2>{t.ritualTitle}</h2><p>{t.ritualText}</p><Link href="/shop" className="button light-button">{t.discover}<span>↗</span></Link></div></section></main>
}
