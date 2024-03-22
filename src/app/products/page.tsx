"use client"
import Heading from '@/components/Shared/Heading'
import Posting from '@/components/Shared/Posting'
import React,{useEffect,useState} from 'react'
import {Post} from '../../../typings'
import Link from 'next/link'
import Image from 'next/image'
//import {client} from '../../utils/sanity/client'
import {getPosts,saniClient} from '../../utils/sanity/client'
type Props = {}

const ProductsPage = (props: Props) => {
  const [posts,setPosts]:any =useState([])
  const getPostsData=async()=>{//Post[]
    getPosts().then((data: any) => { 
      console.log(data)
    setPosts((data))
  })
    

  }
  useEffect(()=>{
    getPostsData();
  })
  return (
    <div  className='w-screen h-screen bg-blend-darken bg-to-tr from-purple-300 to-green-400 via-yellow-400 flex flex-col pb-12 justify-center '>
      <div data-aos="fade-in" data-aos-duration="300" className='flex flex-col'><Heading title={'All Products'} subtitle={'View all products in our store'} /></div>
      {
        posts? <div className='resize'>
        {posts.map((post:Post,index:any)=>(
          <li key={post.slug}>
            <Posting title={post.title} subtitle={post.description} />
            
            
            {<Image src={post.image} width={100} height={200} alt='image' />}
            <Link
              className="hover:underline"
              href={`/products/${index}`}
            >
              <h2 className="text-xl font-semibold">Details</h2>
            </Link></li>
          
        ))}
        </div>  : <p>not gettin posts</p>
      }
    </div>
  )
}

export default ProductsPage