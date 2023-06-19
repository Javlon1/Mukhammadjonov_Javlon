import * as React from 'react'
import { Context } from '../../../../Context/Context'
import { Lang } from '../../../../Data/Data'
import './Language.scss'


const Language = () => {

    const { lan, setLan } = React.useContext(Context)

    const handleChange = (e) => {
        setLan(e.target.value)
    };

    React.useEffect(() => {
        window.localStorage.setItem('lan', lan)
    }, [lan])

    return (
        <section className='language'>
            <select className='select' defaultValue={lan} onChange={handleChange} name="" id="">
                {
                    Lang?.map((e) => (
                        <option key={e.id} value={e.lang}>{e.lang}</option>
                    ))
                }
            </select>
        </section>
    )
}

export default Language;