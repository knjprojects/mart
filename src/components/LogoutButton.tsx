"use client"
import React from 'react'

type Props = {}
import {signOut}from 'next-auth/react'
const LogoutButton = (props: Props) => {
  return (
    <div><button onClick={() => signOut()} className="bg-white rounded-full border border-gray-200 text-gray-800 px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
    <img
      className="h-8 w-8 rounded-full"
      src="https://xsgames.co/randomusers/avatar.php?g=male"
      alt="User profile"
    />
    <span >Logout</span>
  </button></div>
  )
}

export default LogoutButton