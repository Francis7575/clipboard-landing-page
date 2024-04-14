import devicesImg from '../assets/image-devices.png'

const Devices = () => {
    return (
        <section className='flex flex-col items-center mb-[8.56rem] lg:mb-[10.125rem]'>
            <article className='flex flex-col items-center gap-4 text-center lg:gap-[1.188rem]'>
                <h2 className='text-grayish-blue text-[1.75rem] font-semibold tracking-[0.029em]
                lg:text-[2.25rem] lg:tracking-[0.037em]'>
                    Access Clipboard Anywhere
                </h2>
                <p className='text-light-grayish-blue leadig-[1.62rem] tracking-[0.008em] mb-16 max-w-[19.43rem]
                lg:leading-[1.87rem] lg:max-w-[41.62rem] lg:mb-[6.938rem] lg:text-[1.12rem]'>
                    Whether you're on the go, or at your computer, you can access
                    all your Clipboard snippets in a few simple clicks.
                </p>
            </article>
            <img className='max-w-[18.12rem] lg:max-w-full' src={devicesImg} alt="Devices image" />
        </section>
    )
}

export default Devices