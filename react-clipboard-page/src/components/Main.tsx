import ClipboardLogo from '../assets/logo.svg'
import bgMobile from '../assets/bg-header-mobile.png'
import bgDesktop from '../assets/bg-header-desktop.png'
import DownloadButtons from './DownloadButtons'
import Computer from './Computer/Computer'
import Devices from './Devices'
import Supercharge from './Supercharge/Supercharge'
import ImagesSection from './ImagesSection'
import Download from './Download'

const Logo = () => {
    return (
        <>
            <div className="absolute inset-0 h-85 w-full bg-no-repeat bg-cover lg:hidden"
                style={{ backgroundImage: `url(${bgMobile})` }}>
            </div>

            <div className="hidden lg:block absolute inset-0 h-1/2 w-full bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${bgDesktop})` }}>
            </div>
            
            <main className="mt-[7.68rem] pr-4 pl-4 relative z-10 lg:mt-32 lg:pr-0 lg:pl-0">
                <div className=" flex justify-center">
                    <img src={ClipboardLogo} alt="" />
                </div>

                <article className="flex flex-col items-center gap-4 text-center mt-16 lg:mt-[3.5rem]">
                    <h1 className="text-grayish-blue text-[2rem] font-semibold 
                        tracking-[0.033em] min-w-[19.438rem] leading-normal lg:text-[2.87rem] lg:tracking-[-0.0047em]">
                        A history of everything you copy
                    </h1>
                    <p className="text-light-grayish-blue tracking-[0.008em] leading-[1.625em] max-w-[19.6rem]
                        lg:text-[1.25rem] lg:leading-[1.87rem] lg:tracking-[0.009em] lg:max-w-[45.62rem]">
                        Clipboard allows you to track and organize everything you copy.
                        Instantly access your clipboard on all your devices.
                    </p>
                </article>

                <DownloadButtons />
                <Computer />
                <Devices />
                <Supercharge />
                <ImagesSection />
                <Download />
            </main>
        </>
    )
}

export default Logo