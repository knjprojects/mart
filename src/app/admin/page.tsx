
"use client"
import React from 'react'
import { getSession } from 'next-auth/react'
type Props = {}
import LogoutButton from '@/components/LogoutButton'
const Admin = (props: Props) => {
  return (
    <div><p>   You are logged in with:</p>
    <LogoutButton />
      </div>

  )
}

export default Admin