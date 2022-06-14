import { useState } from 'react'
import SearchForm from "../../components/SearchForm/SearchForm"
import { spellSearch } from '../../services/api-calls'

const SpellSearch = (props) => {
  const [spells, setSpells] = useState([])

  const handleSpellSearch = formData => {
    spellSearch(formData)
    .then(spellResults => setSpells(spellResults.results))
  }
  

  return (
    <>
      <h3>Spells</h3>
      <SearchForm handleSpellSearch={handleSpellSearch} />
      {spells.length ?
        <>
          {spells.map(spell => 
            <div key={spell.index}>
              {spell.name}
            </div>
          )}
        </>
        :
        <h3>Search for a spell!</h3>
      }
    </>
  )
}

export default SpellSearch;