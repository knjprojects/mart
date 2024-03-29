import React,{useState,useEffect} from 'react'

type Props = {}

const CallApiRoute = (props: Props) => {
    const [message, setMessage]:any = useState(null);
    const [object,setObject]:any=useState({})
    const parseJSONString=(jsonString:string)=> {
        try {
          const jsonObject = JSON.parse(jsonString);
          return jsonObject;
        } catch (error) {
          console.error('Error parsing JSON string:', error);
          return null;
        }
      }

    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await fetch('/api/register');
            if (response.ok) {
              const data = await response.text();//.json();
              //const object=parseJSONString(data)
              setMessage(data);
            } else {
              //setMessage({map:'failed'});
            }
          } catch (error) {
           // setMessage(`{map:'error:${error}'}`);
          }
          
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <p>Below i am trying to render a messsage response from my register/route.ts file</p>
        {message?<p>{message}</p> : <></>}
        
      </div>
    );
  }


export default CallApiRoute