import React from 'react'
import { useEffect, useRef } from 'react';
import "./Aboutme.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

const Aboutme = () => {
  const arcRef = useRef(null);

  useEffect(() => {
    gsap.to(arcRef.current, {
      rotate: 360,
      duration: 4,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });
  }, []);

    return (
        <div class="mainbody">
            <div class="heading logo mb-5"><h1>About Me </h1></div>
            <div class="img-wrapper">
                <img class="pic" src="./src/Mine.jpg" alt="profile"></img>
                <div className='glitter-arc' ref={arcRef}></div>
            </div>
            <div class="content1 mt-5">
                <section>
                    <p>Hi! I'm <strong>Gayatri</strong>, a B.Tech IIIrd year student passionate about <strong>Full Stack Web Development</strong>. I’m currently learning and building projects using <strong>HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB</strong>.</p>

                    <p>I enjoy turning ideas into responsive and functional web applications. My goal is to keep growing and learning new <strong>programming languages</strong> to become a well-rounded developer.</p>

                    <div class="text-5xl p-5">Tech Stack:</div>
                    <div class="techstart">
                        <ul class="skill">
                            <li>HTML, CSS, JavaScript</li>
                            <li>React.js</li>
                            <li>Node.js & Express.js</li>
                            <li>MongoDB</li>
                            <li>Git & GitHub</li>
                        </ul>
                    </div>

                    <p>Beyond coding, I enjoy <strong>singing</strong> and find creative energy in both music and programming. I'm always looking for new opportunities to grow, collaborate, and contribute to meaningful tech projects and love expressing creativity through both music and code.</p>
                </section>
            </div>
        </div>
    )
}

export default Aboutme