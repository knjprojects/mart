"use client"
import React,{useEffect, useState} from 'react'
import axios from 'axios';
type Props = {}

const CallGo = (props: Props) => {
    const[go1,setGo1]:any=useState(null)
    const[go2,setGo2]:any=useState(null)
    const parseJSONString=(jsonString:string)=> {
        try {
          const jsonObject = JSON.parse(jsonString);
          return jsonObject;
        } catch (error) {
          console.error('Error parsing JSON string:', error);
          return null;
        }
      }

    const fetchGo1 = async () => {
        try {
           /* fetch('/api/gofootprint')
            .then(response => response.json())
            .then(data => {
                const { message } = data;
                setGo1(message);
            })
            .catch(error => console.error(error));*/
            const response = await fetch('/api/gofootprint')
              
            if (response.ok) {
              //notice the curly brackets in data
              const {data}:any = await response.json()//.text()
             // const object=parseJSONString(data)
              setGo1(data);
            } else {
              //setMessage({map:'failed'});
            }
          } catch (error) {
           // setMessage(`{map:'error:${error}'}`);
          }
          
      };
      const fetchGo2 = async () => {
        try {
            const response = await fetch('/api/gofootprint2');
            if (response.ok) {
              const data = await response.text();//.json();
              //const object=parseJSONString(data)
              setGo2(data);
            } else {
              //setMessage({map:'failed'});
            }
          } catch (error) {
           // setMessage(`{map:'error:${error}'}`);
          }
          
      };


  useEffect(()=>{
    fetchGo1();
  })
  return (
    <div>
        <p>CallingGo</p>
        <div>
            {
                go1?  <p>{go1}</p> : <p>No data received from go backend</p>
            }
           
        </div>
    </div>
  )
}

export default CallGo