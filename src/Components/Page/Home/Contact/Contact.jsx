import * as React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../../Context/Context'
import { contactData } from '../../../../Data/Data'
import './Contact.scss'

export default function Contact() {

    const [suc, setSuc] = React.useState(false)
    const [err, setErr] = React.useState(false)

    const { lan } = React.useContext(Context)

    const TOKEN = "6444223689:AAFxMZ7OtGgRxLIy6IfhzxBXXJ9tHmUd-WY"
    const chatId = "-1001860144177"
    const urlApi = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    const formReg = (e) => {

        e.preventDefault()
        const el = e.target.elements

        let message = `<b>Сообщения от клиентов</b>\n\n`
        message += `<em>Имя: </em> ${el.name.value}\n`
        message += `<em>Number: </em> ${el.number.value}\n`
        message += `<em>Subject: </em> ${el.subject.value}\n`
        message += `<em>Text: </em> ${el.text.value}`

        const getCounteries = async () => {
            await fetch(urlApi, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    parse_mode: "html",
                    text: message
                })
            })
                .then(resp => setSuc(true))
                .catch(error => setErr(true))
        }

        getCounteries()

        e.target.elements.name.value = ''
        e.target.elements.number.value = ''
        e.target.elements.subject.value = ''
        e.target.elements.text.value = ''

        setTimeout(() => {
            setSuc(false)
            setErr(false)
        }, 5000)
    }

    return (
        <section id='contact' className='contact'>
            <div className='container'>
                {
                    contactData?.map((e, i) => (
                        <div key={i}>
                            <h2 className='container__title'>{e[`title_${lan}`]}</h2>
                            <p className='container__subtitle'><em>{e[`text_${lan}`]}</em></p>
                            <div className="container__contactUs">
                                <div className={suc ? "send acti" : "send"}>{lan == 'en' ? 'sent' : 'отправлено'}</div>
                                <div className={err ? "error acti" : "error"}>{lan == 'en' ? 'error' : 'ошибка'}</div>

                                <div className="container__contactUs__map">
                                    <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4876.99878707187!2d72.3288522771734!3d40.739349435939225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced2ca7c5470d%3A0x94dd6d4ba9d395e1!2z0YPQu9C40YbQsCDQnNGD0YHRgtCw0LrQuNC70LvQuNC6IDIsINCQ0L3QtNC40LbQsNC9LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e1!3m2!1sru!2s!4v1689419610812!5m2!1sru!2s`} width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className="container__contactUs__info">
                                    <ul className='container__contactUs__info__list'>
                                        {
                                            e.info?.map((j) => (
                                                <Link
                                                    to={j.tel ? `tel:${j.tel}` : j.email ? `mailto:${j.email}` : j.link}
                                                    target="_blank"
                                                    key={j.id}
                                                    className='container__contactUs__info__list__item'
                                                >
                                                    <i className={`bi ${j.icon}`}></i>
                                                    <li key={j.id}>
                                                        <p>
                                                            {j.text}
                                                        </p>
                                                    </li>
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <form className='container__contactUs__form' onSubmit={formReg} action="#">
                                    <input type="text" name="name" placeholder="Name:" required />
                                    <input type="number" name="number" placeholder="Number:" required />
                                    <input type="text" name="subject" placeholder="Subject:" required />
                                    <textarea rows="5" name="text" placeholder="Text:" required />
                                    <button type='submit'>submit</button>
                                </form>

                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}