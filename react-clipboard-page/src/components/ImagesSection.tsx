import GoogleLogo from '../assets/logo-google.png'
import IBMLogo from '../assets/logo-ibm.png'
import MicrosoftLogo from '../assets/logo-microsoft.png'
import HPLogo from '../assets/logo-hp.png'
import VectorGraphicsLogo from '../assets/logo-vector-graphics.png'

const ImagesSection = () => {
    return (
        <section className='mb-[10.62rem] lg:mb-[9.375rem]'>
            <div className='flex flex-col items-center justify-center gap-[4.18rem] 
            lg:flex-row xl:gap-[5.938rem]'>
                <img src={GoogleLogo} alt="Google Logo" />
                <img src={IBMLogo} alt="IBM Logo" />
                <img src={MicrosoftLogo} alt="Microsoft Logo" />
                <img src={HPLogo} alt="HP Logo" />
                <img src={VectorGraphicsLogo} alt="Vector Graphics Logo" />
            </div>
        </section>
    )
}

export default ImagesSection