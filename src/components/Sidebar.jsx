import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div class="sidebar pt-4">
            <div class="Sidehead flex"><span><img class="sidelogo invert" src="./src/sidebar.svg" /></span><span class="porthead logo text-3xl">MY PORTFOLIO</span></div>
            <div class="flex listbox">
                <ul class="side-list">
                    <li>About me</li>
                    <li>My Skills</li>
                    <li class="leading-10">Cerificates & Achievement</li>
                    <li>My Projects</li>
                    <li>Contact me</li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
