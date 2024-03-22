"use client"
import React,{useState,useEffect} from 'react'
import CallGo from "@/components/CallGo";
import Image from "next/image";
import Homey from '../components/Homey'
import logo from "../assets/brand/br-1.png"
import { useTheme } from 'next-themes' //
import { redirect } from 'next/navigation';
import { authConfig } from '@/utils/lib/auth';
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession(authConfig);
  if (session) return redirect("/admin");
  else redirect('/')
  useEffect(()=>{
    
  },[])
  
 
  return (
    <main className="flex min-h-screen flex-grow items-strecth justify-between resize">
       
        <Homey />
    </main>
  );
}
