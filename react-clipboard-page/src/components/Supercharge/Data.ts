import blacklistIcon from '../../assets/icon-blacklist.svg'
import textIcon from '../../assets/icon-text.svg'
import previewIcon from '../../assets/icon-preview.svg'

type SuperchargeProps = {
    image: string,
    heading: string,
    paragraph: string
}

const SuperchargeInfo: SuperchargeProps[] = [
    {
        image: blacklistIcon,
        heading: "Create blacklists",
        paragraph: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
    },
    {
        image: textIcon,
        heading: "Plain text snippets",
        paragraph: "Remove unwanted formatting from copied text for a consistent look."
    },
    {
        image: previewIcon,
        heading: "Sneak preview",
        paragraph: "Quick preview of all snippets on your Clipboard for easy access."
    }
]

export { SuperchargeInfo }