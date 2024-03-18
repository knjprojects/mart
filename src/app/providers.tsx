"use client"
import React from 'react'
import { Geiger } from 'react-geiger'
type Props = {}
import { ThemeProvider } from 'next-themes'
const Providers = ({children}:any) => {
  return (
    //set geigger to 25-50
    //make sure to disable geiger when finished with website dev
    <Geiger renderTimeThreshold={50} enabled={true}>
        <ThemeProvider  disableTransitionOnChange
          attribute="class"
          value={{ light: "light", dark: "dark" }}
          defaultTheme="system">{children}</ThemeProvider>
          </Geiger>
  )
}

export default Providers