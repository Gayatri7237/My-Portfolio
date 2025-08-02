import React from 'react'

const Certificate = () => {
  return (
    <div>
      <div className='logo heading'><h1>Certifications & Achievements</h1></div>
      <div class="p-8">
        <div class="bg-white/10 backdrop-blur-md text-white p-6 rounded-lg shadow-lg mx-auto mt-4">
          <h3 class="text-2xl font-semibold mb-2">📜 Basic Web Development Workshop - IIT Kanpur</h3>
          <p class="text-white/90 leading-relaxed">
            Completed a certified workshop conducted by <strong>IIT Kanpur</strong>, where I learned the fundamentals of modern web development including
            <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. This experience strengthened my foundation for building responsive and user-friendly websites.
          </p>
          <div className='pt-9'><img src="./src/kanpur workshop certificate.jpg" /></div>
        </div>

      </div>
    </div>
  )
}

export default Certificate