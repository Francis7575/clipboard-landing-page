import DownloadButtons from "./DownloadButtons"

const Download = () => {
    return (
        <section className="mb-[10.62rem]">
            <article className="flex flex-col items-center gap-4 text-center lg:gap-[1.18rem]">
                <h2 className="text-grayish-blue font-semibold text-[1.75rem] tracking-[0.029rem] max-w-[19.43rem]
                lg:max-w-none lg:text-[2.25rem]">
                    Clipboard for iOS and Mac OS
                </h2>
                <p className="text-light-grayish-blue tracking-[0.008em] leading-[1.62rem] max-w-[19.43rem] text-[1.12rem]
                lg:max-w-[42.62rem]"> 
                    Available for free on the App Store. Download for Mac or iOS,
                    sync with iCloud and you're ready to start adding to your clipboard.
                </p>
            </article>
            <DownloadButtons />
        </section>
    )
}

export default Download