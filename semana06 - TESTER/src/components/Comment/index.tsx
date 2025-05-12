import "./styles.css"
import { MdOutlineDeleteForever } from "react-icons/md";
import Avatar from "../Avatar";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import axios from "axios";
import { PiThumbsUpFill } from "react-icons/pi";
import { Dispatch, SetStateAction } from "react";

type Coment = {
    id: string;
    author: Author;
    comment: string;
    like: number;
    publishedAt: Date;
}

type Author = {
    name: string;
    role: string; 
    avatarUrl: string;
}

type CommentProps = {
    handleLike: (event: any, id: string) => void;
    handleDelete: (event: any, id: string) => void;
    comment: {
        id: string;
        author: Author;
        comment: string;
        like: number;
        publishedAt: Date;
    }
}

export default function Comment({ comment, handleDelete, handleLike }: CommentProps) {

    return (
        <div className="commente">
            <Avatar src={comment.author.avatarUrl} />
            <div className="comment-box" >
                <div className="comment-content">
                    <header>
                        <div className="author-and-timer">
                            <strong>{comment.author.name}</strong>
                            <time>
                                {formatDistanceToNow(comment.publishedAt, { locale: ptBR, addSuffix: true })}
                            </time>
                        </div>
                        <button title="Deletar comentário" onClick={(event) => handleDelete(event, comment.id)} data-testid="deleteButton">
                            <MdOutlineDeleteForever size={24} />
                        </button>
                    </header>
                    <p>
                        {comment.comment}
                    </p>
                </div>
                <footer>
                    <button onClick={(event) => handleLike(event, comment.id)}>
                        <PiThumbsUpFill />
                        Aplaudir <span>{comment.like}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}