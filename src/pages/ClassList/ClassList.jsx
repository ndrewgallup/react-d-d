import { useState } from 'react'

const ClassList = (props) => {
  const [results, setResults] = useState(['Paladin', 'Bard', 'Rogue'])
  return (
    <>
      <div>
        <h3>Class List</h3>
      </div>
    </>
  )
}

export default ClassList;