import * as React from 'react'
import { Context } from '../../../../Context/Context'
import { portfolioData } from '../../../../Data/Data'
import Loader from '../../../Ui/Loader/Loader'
import './Portfolio.scss'
import img from '../../../../Assets/Img/logo.jpg'


export default function Portfolio({ projects, loading }) {

    const { lan } = React.useContext(Context)

    if (loading) {
        return <Loader />
    }

    return (
        <section className='portfolio'>
            {
                projects?.map((e) => (
                    <a
                        href={`#`}
                        key={e.id}
                        target="_blank"
                    >
                        <img src={img} alt="" />
                        <p>
                            <em>
                                dasdas
                            </em>
                        </p>
                    </a>
                ))
            }
        </section>
    )
}
