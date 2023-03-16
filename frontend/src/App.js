import React, {useEffect, useState} from 'react'

// functions
import { getTest } from './functions/test'

function App() {
  // traverse through an array
  // const [backendData, setBackendData] = useState([{}])

  // Traverse through an array
  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  const [data, setData] = useState("Hello World")

  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
      })
      .catch(err => console.log(err))

  }, []);

  return (
    // Traverse through an array
    // 
    // <div>
    //   {(typeof backendData.users == 'undefined') ? (
    //     <p>Loading...</p>
    //   ): (
    //     backendData.users.map((user,i) => (
    //       <p key={i}>{user}</p>
    //     ))
    //   )}
    // </div>
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default App