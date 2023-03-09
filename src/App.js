
import { useEffect, useState } from  "react"

export default function App() {
  const [data, useData] = useState(null);
  

  useEffect(() => {
    fetch(`https://api.github.com/users/jeffersonbalde`)
    .then((response) => response.json())
    .then(useData);
  }, []);
  
  if(data)
    return (
      <GithubUser name={data.name} location={data.location} avatar={data.avatar_url}/>
    )
  }

  const GithubUser = (props) => {
    return (
      <>
        <h1>{props.name}</h1>
        <p>{props.location}</p>
        <img src={props.avatar} height={150} alt={props.name}/>
      </>
    )
  }