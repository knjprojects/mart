"use client"
import React,{} from 'react'
//import { useRouter } from "next/navigation";
import { useRouter, useSearchParams,usePathname } from "next/navigation";

const Page = (/*{ params }: { params: { slug: string } }*/) => {
  const router = useRouter();
  const params = useSearchParams();
  const search = usePathname();// 

  return (
    <div>
      <h1>Dynamic Page: {params}</h1>
      {/* Your dynamic content goes here */}
    </div>
  );
};

export default Page;