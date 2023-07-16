import * as React from 'react'
import { Context } from '../../../../Context/Context'
import { portfolioData } from '../../../../Data/Data'
import Loader from '../../../Ui/Loader/Loader'
import './Portfolio.scss'
import img1 from '../../../../Assets/Img/project1.jpg'
import img2 from '../../../../Assets/Img/project1.jpg'


export default function Portfolio({ projects, loading }) {

    if (loading) {
        return <Loader />
    }

    const projectImg = `${img1}`

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
                            <img src={projectImg} alt="" />
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
