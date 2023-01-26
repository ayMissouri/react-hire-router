import PeopleListItem from "./PeopleListItem"

function PeopleList(props) {
  const { people } = props

  return (
    <ul>
      {people ? people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      )) : null}
    </ul>
  )
}

export default PeopleList
