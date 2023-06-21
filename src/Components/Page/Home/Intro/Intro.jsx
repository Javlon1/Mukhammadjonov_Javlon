import * as React from 'react'
import { Context } from '../../../../Context/Context'
import { introData } from '../../../../Data/Data'
import './Intro.scss'


export default function Intro() {
    const { lan } = React.useContext(Context)
    return (
        <section className='intro'>
            <div className='container'>
                {
                    introData?.map((e) => (
                        <div key={e.id} className="container__content">
                            <h4 className='container__content__title'>{e[`title_${lan}`]}</h4>
                            <h2 className='container__content__name'>{e[`name_${lan}`]}</h2>
                            <p className='container__content__subtitle'>{e[`subtitle_${lan}`]}</p>
                            <span className='container__content__list'>
                                {
                                    e.social?.map((i) => (
                                        <a
                                            className='container__content__list__item'
                                            key={i.id}
                                            href={i.link}
                                            target="_blank"
                                        >
                                            <i className={i.icon}></i>
                                        </a>
                                    ))
                                }
                            </span>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

