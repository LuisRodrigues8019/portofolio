import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {

    return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
            <AnimatedLetters 
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
            />
            </h1>
            <p>Passionate about the web, I started a professional 
            retraining by following a Junior web developer training at Becode.
            </p>
            <p>
            Organized and dynamic, I also have a seriousness and rigor 
            that have always helped me adapt with a lot of versatility. 
            </p>
        </div>
    </div>
    )
}

export default About;
