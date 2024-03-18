"use client"
import Heading from '@/components/Shared/Heading'
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
    <div  className='w-screen h-screen bg-blend-darken bg-to-tr from-purple-300 to-green-400 via-yellow-400 flex pb-12'>
      <div data-aos="zoom-in" data-aos-duration="3000" className='flex items-center'><Heading title={'All Products'} subtitle={'View all products in our store'} /></div>
      {
        posts? <div><p>gettingdata</p>
        {posts.map((post:Post,index:any)=>(
          <li key={post.slug}>
            <p> {post.title}</p>
            <p>{post.description}</p>
            <p>{post.image}</p>
            {<Image src={post.image} width={100} height={200} alt='image' />}
            <Link
              className="hover:underline"
              href={`/products/${index}`}
            >
              <h2 className="text-xl font-semibold">{post?.title}</h2>
            </Link></li>
          
        ))}
        </div>  : <p>not gettin posts</p>
      }
    </div>
  )
}

export default ProductsPage