import computerImg from '../../assets/image-computer.png'
import { ComputerInfo } from './Data'

const Computer = () => {
    return (
        <section className='mt-[9.37rem] mb-[11.62rem] lg:mb-[9.37rem]'>
            <article className='flex flex-col text-center items-center gap-[1.18rem] mb-20'>
                <h2 className='text-grayish-blue font-semibold tracking-{0.029rem] text-[1.75rem]
                    lg:text-[2.25rem] lg:tracking-[-0.037em]'>
                    Keep track of your snippets
                </h2>
                <p className='text-light-grayish-blue leading-[1.62rem] tracking-[0.008rem] max-w-[19.43rem]
                    lg:max-w-[40rem]'>
                    Clipboard instantly stores any item you copy in the cloud, meaning
                    you can access your snippets immediately on all your devices.
                    Our Mac and iOS apps will help you organize everything.
                </p>
            </article>

            <div className='lg:flex lg:items-center'>
                <div className='flex items-center justify-center mb-[3.5rem] lg:mb-0 lg:relative lg:-ml-12 lg:mr-[6.875rem]'>
                    <img className='max-w-[18.12rem] lg:max-w-[32rem] xl:max-w-full'
                        src={computerImg}
                        alt="Computer image" />
                </div>

                <section className='lg:flex lg:flex-col'>
                    {ComputerInfo.map((item, index) => (
                        <article key={index} className='flex flex-col items-center text-center mb-12 gap-[0.62rem] 
                                lg:text-left lg:items-start lg:gap-[0.5rem]'>
                            <h3 className='text-grayish-blue text-[1.5rem] font-semibold tracking-[-0.024em]'>
                                {item.heading}
                            </h3>
                            <p className='text-light-grayish-blue leading-[1.62rem] tracking-[0.008em] max-w-[19.43rem]
                                lg:leading-[1.87rem] lg:max-w-[21.875rem]'>
                                {item.paragraph}
                            </p>
                        </article>
                    ))}
                </section>

            </div>
        </section>
    )
}

export default Computer