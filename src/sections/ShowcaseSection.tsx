import { NavLink } from 'react-router-dom'
import showcaseImgLeft from '../assets/images/showcase-1.svg'
import showcaseImgRight from '../assets/images/showcase-2.svg'


const ShowcaseSection: React.FC = () => {
  return (

<header className="gradient-grey">
    <section className="showcase container">
        <img src={showcaseImgLeft} className="img-left" alt="showcase-img-1"/>
        <div className="showcase-body">
            <h1>SALE UP</h1>
            <h1>To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <NavLink className="btn-theme" to={''}>
                <span className="btn-theme-left"></span>
                    SHOP NOW
                <span className="btn-theme-right"></span>
            </NavLink>
        </div>
        <img src={showcaseImgRight} className="img-right" alt="showcas-img-2"/>
    </section>
</header>
  )
}

export default ShowcaseSection