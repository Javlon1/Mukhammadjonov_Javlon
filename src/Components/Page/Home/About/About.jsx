import * as React from 'react'
import { Context } from '../../../../Context/Context'
import { aboutData } from '../../../../Data/Data'
import './About.scss'


export default function About() {

    const { lan } = React.useContext(Context)
    
    return (
        <section id='about' className='about'>
            {
                aboutData?.map((e, i) => (
                    <div key={i} className='container'>
                        <h2 className='container__title'>{e[`title_${lan}`]}</h2>
                        <div className="container__all">

                            <div className="container__all__left">
                                <div className="container__all__left__first">
                                    <h6>{e[`subtitle_${lan}`]}</h6>
                                    <p>{e[`text_${lan}`]}</p>
                                </div>
                                <div className="container__all__left__third">
                                    <ul>
                                        {
                                            e.info?.map((i) => (
                                                <li key={(i.id) + 1}>
                                                    <b>{i[`title_${lan}`]}</b>
                                                    <p>:</p>
                                                    <i>{i[`name_${lan}`]}</i>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>


                            <div className="container__all__second">
                                <h2>MY SKILLS</h2>
                                <span>
                                    {
                                        e.skills?.map((i, k) => (
                                            <p key={k}>{i.name},</p>
                                        ))
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
