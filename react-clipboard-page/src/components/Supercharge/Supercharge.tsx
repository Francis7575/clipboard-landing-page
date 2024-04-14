import { SuperchargeInfo } from "./Data"

const Supercharge = () => {
    return (
        <section className="mb-[8.18rem] lg:mb-[8.875rem]">
            <article className="flex flex-col text-center gap-[0.68rem] mb-[5.62rem] lg:gap-[1.18rem] lg:mb-[4.75rem]">
                <h2 className="text-grayish-blue font-semibold tracking-[0.029em] text-[1.75rem]
                    lg:text-[2.25rem] lg:tracking-[0.037em]">
                    Supercharge your workflow
                </h2>
                <p className="text-light-grayish-blue leading-[1.62rem] tracking-[0.008em]
                    lg:leading-[1.87rem] lg:text-[1.12rem]">
                    We've got the tools to boost your productivity.
                </p>
            </article>

            <section className="lg:flex lg:items-start lg:justify-center lg:gap-[1.87rem]">
                {SuperchargeInfo.map((item, index) => (
                    <div key={index} className={`flex flex-col items-center  ${index > 0 && 'mt-[3.5rem]'} lg:mt-0`}>
                        <img className='mb-[2.5rem]' src={item.image} alt="" />
                        <article className="flex flex-col gap-[1.12rem] items-center text-center lg:gap-4">
                            <h3 className="text-grayish-blue font-semibold tracking-[0.024em] text-[1.5rem]">
                                {item.heading}
                            </h3>
                            <p className="text-light-grayish-blue leading-[1.62rem] tracking-[0.008em] max-w-[19.5rem]
                                lg:leading-[1.875rem] lg:max-w-[21.87rem]">
                                {item.paragraph}
                            </p>
                        </article>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default Supercharge