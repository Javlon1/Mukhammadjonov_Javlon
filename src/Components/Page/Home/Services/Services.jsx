import * as React from 'react'
import { Context } from '../../../../Context/Context'
import { servicesData } from '../../../../Data/Data'
import './Services.scss'


export default function Services() {

    const { lan } = React.useContext(Context)

    return (
        <section id='services' className='services'>
            {
                servicesData?.map((e) => (
                    <div key={e.id} className='container'>
                        <h2 className='container__title'>{e[`title_${lan}`]}</h2>
                        <p className='container__text'><em>{e[`text_${lan}`]}</em></p>
                        <ul className='container__list'>
                            {
                                e.info?.map((i) => (
                                    <li className='container__list__item' key={i.id}>
                                        <i className={i.icon}></i>
                                        <div>
                                            <h2>{i[`title_${lan}`]}</h2>
                                            <p>{i[`text_${lan}`]}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </section>
    )
}
