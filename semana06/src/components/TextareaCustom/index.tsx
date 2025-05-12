import "./styles.css"

type TextareaProps = {
    hasPosts?: boolean,
    message: string,
    setMessage: (value: string) => void,
    placeHolder: string
}

export default function TextareaCustom({ hasPosts = false, message, setMessage, placeHolder: placeholder }: TextareaProps) {
    return (
        <textarea
            placeholder={placeholder}
            value={message}
            onChange={(e) => { setMessage(e.target.value) }}
            className={hasPosts ? 'new-post' : 'comment'}
        />
    )
}  