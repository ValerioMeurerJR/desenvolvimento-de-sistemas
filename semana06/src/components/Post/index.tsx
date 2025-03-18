import Avatar from "../Avatar"
import "./styles.css"

type Author = {
    name: string;
    role: string;
    avatarURL: string;
}

// type Comments = {
//     message: string;
//     publishedAt: Date;
//     like: number;
//     author: Author;
// }

type PostProps = {
    post: {
        author: Author;
        publishedAt: Date;
        content: string;
    }
}

export default function Post({ post }: PostProps) {
    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src="https://github.com/Fillipecota.png" hasBorder />
                    <div className="author-info">
                        <strong>Fillipe Cota</strong>
                        <span>Garoto de Programa</span>
                    </div>
                </div>
                <time>
                    Públicado há 1h
                </time>
            </header>
            <div className="content">
                <p>
                    O pedaço mais habitual do Lorem Ipsum
                    usado desde os anos 1500 é reproduzido
                    abaixo para os interessados.
                    As secções 1.10.32 e 1.10.33 do
                    "de Finibus Bonorum et Malorum" do
                    Cícero também estão reproduzidos na
                    sua forma original, acompanhados pela
                    sua tradução em Inglês, versões da
                    tradução de 1914 por H. Rackham.
                </p>
            </div>
        </article>
    )
}  