import { useState } from "react"
import { useNavigate, Link } from "react-router"

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault()
    const personAndWage = {...props.person, wage: wage}
    const hired = [...props.hiredPeople, personAndWage]
    props.setHiredPeople(hired)
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
