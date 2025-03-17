'use client'
import Sidebar from "@/components/Sidebar";
import "./styles.css"
import Header from "@/components/Header"

export default function Feed() {

    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar></Sidebar>
                <main className="main">

                </main>
            </div>
        </div>
    );
}
