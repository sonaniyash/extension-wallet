import React, { useState } from 'react'
import HeaderBg from '../../components/layouts/HeaderBg'
import './Home.scss';
interface Props {
    
}

const Home = (props: Props) => {

    const [typeLogin, setTypeLogin] = useState('email')

    return (
        <section className="App-header">
            <HeaderBg/>
            <div className="home">
                <div className="home__selectors"> {}
                    <a className={ typeLogin === 'email' ? 'home__selectors__button --btn-active' : 'home__selectors__button'} onClick={()=> { setTypeLogin('email')  }}>Email</a>
                    <a className={ typeLogin === 'phone' ? 'home__selectors__button --btn-active' : 'home__selectors__button '} onClick={()=> { setTypeLogin('phone')  }}>Phone</a>
                </div>
                {
                    typeLogin === 'email' &&
                        (<input type="text" placeholder="Ex. (373) 378 8383" className="home__selectors__input" />)
                }
                {
                    typeLogin === 'phone' &&
                    (<input type="text" placeholder="Email" className="home__selectors__input" />)
                }
            </div>
        </section>
    )
}

export default Home

