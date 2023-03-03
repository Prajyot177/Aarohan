import React from 'react'

const Competition = ({ title, text }) => {
  return (
    <>
      <div className="bg-gray-200 text-purple-900 opacity-80 w-72 p-2">
        <h2 className="text-center text-2xl font-bold mt-4">{title}</h2>
        <p className="p-5 text-center text-sm">{text}</p>
        <div className="w-36 m-auto mt-24 mb-6">
        <a className="bg-white text-black font-bold shadow-md border-4 border-purple-900 px-3 py-2" href="https://docs.google.com/forms/d/e/1FAIpQLSckbQPKXAp8O-0VuZ5gJWYK63Xo57_nVyY61Vy7ymlfY8S6Hg/viewform">Register Now</a>
        </div>
      </div>
    </>
  )
}

export default Competition
