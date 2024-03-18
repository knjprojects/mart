import React from 'react'

type Props = {}
//animation video on hover on tv. change some animations when dark mode changes
//add autoplay on scroll thumbnail videos to cards with showcase 
const Joshua = (props: Props) => {
  return (
    <div data-aos="zoom-in">
        <h1 className="flex font-semibold text-emerald-500">Hello <span className="animate-wave_5s_ease-in-out_2">👋🏻</span>, arbitrary values</h1>
    <p className="text-center text-xs text-gray-400">Wave animation, 5 seconds duration, ease-in-out, 2 iterations</p>
    </div>
  )
}

export default Joshua