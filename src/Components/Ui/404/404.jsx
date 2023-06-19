import * as React from 'react'
import './404.scss'


const NotFound = () => {

    return (
        <section className='notFound'>
            <div className='container'>
                <div className="container__item">
                    <h1>404!</h1>
                    <p>Sorry! The Page Not Found</p>
                    <span>Oops! The page you are looking for does not exit. it might been moved or deleted.</span>
                    <a href="/"
                    onClick={() => {
                      localStorage.setItem('menu', 1)
                    }}>Return to Home</a>
                </div>
            </div>
        </section>
    )
}
 
export default NotFound;