
const DownloadButtons = () => {
    return (
        <div className="flex flex-col items-center gap-[1.5rem] text-white mt-12 justify-center
            lg:flex-row lg:gap-4">
            <button className="bg-turquoise-color rounded-[1.75rem] pt-[.81rem] pb-[.81rem] 
                        max-w-[19.43rem] w-full shadow-ios-button hover:bg-opacity-60 text-[1.12rem]
                        lg:max-w-[14.18rem]">
                Download for iOS
            </button>
            <button className="bg-royal-blue rounded-[1.75rem] pt-[.81rem] pb-[.81rem]
                        max-w-[19.43rem] w-full shadow-mac-button hover:bg-opacity-60 text-[1.12rem]
                        lg:max-w-[14.18rem]">
                Download for Mac
            </button>
        </div>
    )
}

export default DownloadButtons