import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import { RepositoryPagination } from "./RepositoryPagination";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const repos_per_page = 5

  const getRepositories = (page = 1, per_page = repos_per_page) => {
    fetch(`https://api.github.com/users/larrire/repos?page=${page}&per_page=${per_page}`)
    .then( response => response.json() )
    .then( data => {
      setRepositories(data);
    })
  }

  useEffect(() => {
    const first_page = 1;
    getRepositories(first_page)
  },[])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        { repositories.map(
          (repository, index) => <RepositoryItem {...repository} key={index}/>
        )}
      </ul>
      <RepositoryPagination 
        getRepositories={getRepositories} 
        repos_per_page={repos_per_page}
        activePage={activePage} setActivePage={setActivePage}
      />
    </section>
  )
}