import * as React from 'react'
import { Context } from '../../../../Context/Context'
import { portfolioData } from '../../../../Data/Data'
import Loader from '../../../Ui/Loader/Loader'
import './Portfolio.scss'
import img1 from '../../../../Assets/Img/project1.jpg'
import img2 from '../../../../Assets/Img/logo.jpg'


export default function Portfolio({ projects, loading }) {

    if (loading) {
        return <Loader />
    }

    return (
        <section className='portfolio'>
            {
                projects?.map((e) => (
                    e.project?.map((i) => (
                        <a
                            href={i.link}
                            key={i.id}
                            target="_blank"
                        >
                            <img src={i.id == 1 ? img1 : i.id == 2 ? img2 : ''} alt={i.name} />
                            <p>
                                <em>
                                    {i.name}
                                </em>
                            </p>
                        </a>
                    ))
                ))
            }
        </section>
    )
}
