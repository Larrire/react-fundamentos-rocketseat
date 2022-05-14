import { useState, useEffect } from "react";
import { RepositoryPaginationType } from './types'

export function RepositoryPagination({
  getRepositories, 
  repos_per_page, 
  activePage, 
  setActivePage
}: RepositoryPaginationType) {

  const [buttons, setButtons] = useState<number[]>([]);

  const totalButtons = (totalRepos:number) => {
    if( totalRepos % repos_per_page === 0 ){
      return totalRepos/repos_per_page
    }
    return Math.round(totalRepos/repos_per_page) + 1
  }

  const createButtons = (totalRepos: number) => {
    const buttonsArray: number[] = []
    for (let index = 1; index <= totalButtons(totalRepos); index++) {
      buttonsArray.push(index)
    }
    setButtons(buttonsArray)
  }

  useEffect(() => {
    fetch('https://api.github.com/users/larrire')
      .then( response => response.json() )
      .then( data => createButtons(data.public_repos) )
  },[])

  const handlePaginate = (page: number) => {
    getRepositories(page)
    setActivePage(page)
  }

  return (
    <>
      {buttons.map( (value, index) => <button 
          className={`repository-list__paginate-button ${activePage === value ? 'repository-list__paginate-button--active' : ''}`}
          key={index}
          onClick={() => handlePaginate(value)}
        >
        {value}
      </button>)}
    </>
  )
}