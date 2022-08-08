import axios from 'axios'
import React, { useEffect } from 'react'
import useEnvironment from '../Hooks/useEnvironment'

const Dashboard = () => {
const {API_KEY} = useEnvironment()

useEffect(() => {
  handleApiCall()  
}, [])

const handleApiCall = async () => {
  const data = await axios.get();
}

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard