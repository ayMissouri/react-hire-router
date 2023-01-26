import { useState, useEffect } from "react"
import HireForm from "./components/HireForm"
import { useLocation } from "react-router"
function PersonProfile(props) {
  const [person, setPerson] = useState(null)

  const location = useLocation()
  useEffect(()=>{
    setPerson(location.state.person)
  }, [location])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <img width="200px" src={person.picture.large} alt={person.name.first} />
      <h2>{person.name.first} {person.name.last}</h2>
      <p>{person.email}</p>
      <ul><strong>Based in:</strong>
        <li>{person.location.city}</li>
        <li>{person.location.country}</li>
      </ul>
      <HireForm person={person} hiredPeople={props.hiredPeople} setHiredPeople={props.setHiredPeople} />
    </article>
  )
}

export default PersonProfile
