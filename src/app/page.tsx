"use client"
import React,{useState,useEffect} from 'react'
import CallGo from "@/components/CallGo";
import Image from "next/image";
import Homey from '../components/Homey'
import logo from "../assets/brand/br-1.png"
import { useTheme } from 'next-themes' //
export default function Home() {
  
  useEffect(()=>{
    
  },[])
  
 
  return (
    <main className="flex min-h-screen flex-grow items-strecth justify-between resize">
       
        <Homey />
    </main>
  );
}
