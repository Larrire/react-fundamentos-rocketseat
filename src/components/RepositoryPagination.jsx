import { useState, useEffect } from "react";

export function RepositoryPagination({getRepositories, repos_per_page, activePage, setActivePage}) {

  const [buttons, setButtons] = useState([]);

  const totalButtons = (totalRepos) => {
    if( totalRepos % repos_per_page === 0 ){
      return parseInt(totalRepos/repos_per_page)
    }
    return parseInt(totalRepos/repos_per_page) + 1
  }

  const createButtons = (totalRepos) => {
    const buttonsArray = []
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

  const handlePaginate = (page) => {
    getRepositories(page)
    setActivePage(page)
  }

  return (
    buttons.map( value => <button 
        className={`repository-list__paginate-button ${activePage === value ? 'repository-list__paginate-button--active' : ''}`}
        key={value}
        onClick={() => handlePaginate(value)}
      >
      {value}
    </button>)
  )
}