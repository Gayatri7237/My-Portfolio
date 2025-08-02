import React from 'react'
import "./Contactme.css"

const Contactme = () => {
    return (
        <div class="mainbody">
            <div class="heading logo"><h1>Contact Me</h1></div>
            <div class="img2"><img class="pic2" src="./src/contacts.png" alt=""></img></div>
            <div class="content2 mt-0 p-0">
                <section>
                    <div class="grid-container">
                        <div class="contactbox logo">
                            <div class="whats flex items-center gap-2"><span><img src="./src/whatsapp.png" height="30px" width="30px"/></span><h3>WhatsApp:</h3></div>
                            <div class="detail">
                                <ul>
                                    <li>+91 9389691214</li>
                                </ul>
                                <div>Whatsapp me for furthur queries 💬</div>
                            </div>

                        </div>
                        <div class="contactbox logo">
                            <div class="phone flex items-center gap-2 text-blue-600"><span><img src="./src/phone.svg" /></span><h3>Phone:</h3><span></span></div>
                            <div class="detail">
                                <ul>
                                    <li>+91 9389691214</li>
                                    <li>+91 8445868162</li>
                                </ul>
                            </div>
                        </div>
                        <div class="contactbox logo">
                            <div class="mail flex items-center gap-2"><span><img src="./src/mail.png" height="30px" width="30px" /></span><h3>Gmail:</h3></div>
                            <div class="detail">
                                <ul>
                                    <li><a target='_blank' rel='noopener noreferrer' href='https://mail.google.com/mail/u/0/#search/gayatri7127%40gmail.com'>gayatri7127@gmail.com</a></li>
                                    <li><a target='_blank' rel='noopener noreferrer' href='https://mail.google.com/mail/u/0/#search/gayatrigupta707%40gmail.com' >gayatrigupta707@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="contactbox logo">
                            <div class="insta gap-2 flex items-center"><span><img src="./src/insta.png" height="30px" width="30px" /></span><h3>Instagram:</h3></div>
                            <div class="detail">
                                <ul>
                                    <li><a class="link" target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/gayatri_789_/">Gayatri_789_</a></li>
                                </ul>
                                <div>Dm for any queries</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contactme
