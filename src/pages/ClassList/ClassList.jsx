import { useEffect } from 'react'
import { useState } from 'react'
import { getClassList } from '../../services/api-calls'

const ClassList = (props) => {
  const [results, setResults] = useState([])

  useEffect(() => {
    getClassList()
    .then(classData => setResults(classData.results))
  })

  return (
    <>
      <div>
        <h3>Class List</h3>
        <div className='icon-container'>
          {results.map((classTitle) => (
            <div id='classDiv' key={classTitle.index}>
              <img 
                style= {{ width: '100px', height: '100px'}}
                src={`/images/${classTitle.name}.svg`}
                alt='class-logo'
              />
              {classTitle.name}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ClassList;