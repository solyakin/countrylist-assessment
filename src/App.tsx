import { useEffect, useState } from 'react';

import SearchBox from './components/SearchBox'
import { useSearchResult } from '../hooks/useSearch'
import Pagination from './components/Pagination';
import './App.css'

function App() {

  const [searchField, setSearchField] = useState('')
  const [results, setResult] = useState([])
  const { data } = useSearchResult();

  const handleClick = () => {
    console.log('click')
  }

  useEffect(() => {
    //handling the filter functionality
    //loop through each element of the array and capitalize the first letter.
    const arr = searchField.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    //Join all the elements of the array back into a string 
    const str = arr.join(" ");

    if(searchField){
      const newArr = data?.filter((item: { name: { common: string | string[]; }; }) => item.name.common.includes(str))
      setResult(newArr)
    }else{
      setResult(data)
    }

  },[searchField, data])

  return (
    <main className='max-w-2xl mx-auto border'>
    <SearchBox 
      setSearchField={setSearchField} 
      handleClick={handleClick} 
    />
    <Pagination 
      data={results}
      searchField={searchField}
    />
    </main>
  )
}

export default App
