import cover from "@/assets/cover.jpg"
import Image from "next/image"
import "./styles.css"
import Avatar from "../Avatar"
import { PiPencilLineBold } from "react-icons/pi";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <Image src={cover} alt="cover" className="cover" />
            <div className="profile">
                <Avatar src="https://github.com/ValerioMeurerJR.png" hasBorder={true} />
                <strong>Valerio Meurer</strong>
                <span>Técnico em Informática</span>
                <footer>
                    <button className="button-edit-profile">
                        <PiPencilLineBold />
                        Editar seu perfil
                    </button>
                </footer>
            </div>
        </aside>
    )
}  