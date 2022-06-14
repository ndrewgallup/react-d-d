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
    </>
  )
}

export default SpellSearch;