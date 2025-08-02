import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Aboutme from './components/Aboutme'
import Sidebar from './components/Sidebar'
import Contactme from './components/Contactme'
import Skill from './components/Skill'
import Project from './components/Project'
import Certificate from './components/Certificate'
import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

function App() {
  // const [count, setCount] = useState(0)
  const [rightcontent, setRightcontent] = useState(<Aboutme />)
  const [activeList, setActiveList] = useState('Aboutme')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sidebarRef = useRef(null);
  const rightRef = useRef(null);

    // Initial Setup
  useEffect(() => {
    gsap.set(sidebarRef.current, { x:0 })
    gsap.set(rightRef.current, { width: 'calc(100vw - 30vw)' })
  }, [])

  // Toggle Sidebar
  const toggleSidebar = () => {
    if (isSidebarOpen) {
      // Shrink Sidebar
      gsap.to(sidebarRef.current, {
        x: '-79%',
        duration: 0.3,
        ease: 'power2.inOut'
      })
      gsap.to(rightRef.current, {
        width:'94vw',
        duration: 0.3,
        ease: 'power2.inOut'
      })
    } else {
      // Expand Sidebar
      gsap.to(sidebarRef.current, {
        x:'0%',
        duration: 0.4,
        ease: 'power2.inOut'
      })
      gsap.to(rightRef.current, {
        width: 'calc(100vw - 30vw)',
        duration: 0.4,
        ease: 'power2.inOut'
      })
    }
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleChangeContact = () => {
    setRightcontent(<Contactme />)
    setActiveList('Contactme');
  }

  const handleChangeAbout = () => {
    setRightcontent(<Aboutme />)
    setActiveList('Aboutme');
  }

  const handleChangeSkills = () => {
    setRightcontent(<Skill />)
    setActiveList('Skill');
  }

  const handleChangeCertifications = () => {
    setRightcontent(<Certificate />)
    setActiveList('Certificate');
  }
  
  const handleChangeProjects = () => {
    setRightcontent(<Project />)
    setActiveList('Projects');
  }
  
  return (
    < >
      <div class="maincontainer flex h-screen relative overflow-hidden gap-2">
        <div className="left  relative transition-all duration-500 z-10" ref={sidebarRef} style={{ minWidth: '60px' }}>
          <div class="sidebar">
            <div className="Sidehead flex pt-4"><span className="porthead logo text-3xl">MY PORTFOLIO</span><span><img onClick={toggleSidebar} className="sidelogo invert" src="./src/sidebar.svg" /></span></div>
            {isSidebarOpen &&(
            <div className="flex listbox">
              <ul className="side-list">
                <li onClick={handleChangeAbout} className={activeList === "Aboutme" ? 'text-[#800080]' : ''}>
                  About me</li>
                <li onClick={handleChangeSkills} className={activeList === "Skill" ? 'text-[#800080]' : ''}>Skills</li>
                <li class="leading-8" onClick={handleChangeCertifications} className={activeList === "Certificate" ? 'text-[#800080]' : ''}>Cerificates & Achievement</li>
                <li onClick={handleChangeProjects} className={activeList === "Project" ? 'text-[#800080]' : ''}>My Projects</li>
                <li onClick={handleChangeContact} className={activeList === "Contactme" ? 'text-[#800080]' : ''}>Contact me</li>
              </ul>
            </div>
            )}
          </div>
        </div>
        <div className="right transition-all duration-500 p-4 overflow-auto" ref={rightRef}>{rightcontent}</div>
      </div>
    </>
  )
}

export default App
