import { Navigate } from 'react-router-dom'
import '../styles/NotFound.css'
export const NotFound = () => {
  return (
    <Navigate to={'/bit02spa'} />
  )
}