/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react'

type PropType = {
  data : any,
  searchField : string
}

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

const Pagination = ({ data, searchField } : PropType) => {
  
    const [currentPage, setCurrentPage]  = useState(1);
    const [countryPerPage, setCountryPerPage] = useState(15);

    useEffect(() => {
      if(searchField !== ''){
        setCurrentPage(1);
        setCountryPerPage(15);
      }
    },[searchField])

    const handleClick = (event : any) => {
        setCurrentPage( Number(event.target.id))
    }

    // Logic for displaying countries
    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
    const currentCountries = data?.slice(indexOfFirstCountry, indexOfLastCountry);     

    const renderCountries = currentCountries?.map(({name, continents, flags} : any, index : string) => {
      return(
          <>
              <div className="flex flex-col space-y-1 mb-10" key={index}>
                  <div className="flex gap-2">
                      <img className="w-9" src={flags?.svg} alt={flags?.alt} />
                      <p className="text-lg">{name?.common}</p>
                  </div>
                  <p className="text-left">
                      Continent : <span>{continents[0]}</span>
                  </p>
                  <Disclosure as="div" className="mb-3">
                  {({ open }) => (
                      <>
                          <dt>
                          <Disclosure.Button>
                              <span
                                  className="text-xs bg-gray-900 text-gray-100 rounded p-2 px-5 mb-2">
                                      {
                                        open ? 'See less...' : 'See detail...'
                                      }
                              </span>
                          </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 p-3 rounded bg-slate-100">
                              <p>
                                  <span className='font-bold mr-1'>Official Name:</span>
                                  {name?.official}
                              </p>
                          </Disclosure.Panel>
                      </>
                  )}
                  </Disclosure>
              </div>
          </>
      )
    })
      
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data?.length / countryPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const renderPageNumbers = pageNumbers.map(number => {
      const targetNumber = number.toString();
      return (
        <li
          key={number}
          id={targetNumber}
          onClick={handleClick}
          className={classNames( number === currentPage ? "bg-gray-500 text-white" : "", 'border rounded p-2 text-center, cursor-pointer text-center')}
        >
          {number}
        </li>
      );
    });

    return (
    <div>
        <ul className="max-w-sm p-6">
          {renderCountries}
        </ul>
        <ul id="page-numbers" className={'mx-3 mb-5 grid grid-cols-10 gap-2 shadow-sm'}>
        {renderPageNumbers}
        </ul>
    </div>
    );
}

export default Pagination;
  