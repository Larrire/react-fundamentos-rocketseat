import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {

  const reposiriesArray = [
    {name: 'title', description: 'description', link: 'https://google.com'},
    {name: 'title 2', description: 'description 2', link: 'https://google.com'},
    { description: 'description 3', link: 'https://google.com'},
    {name: 'title 4', link: 'https://google.com'},
    {name: 'title 5', description: 'description 5', link: 'https://google.com'},
  ]

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        { reposiriesArray.map( (repository, index) => <RepositoryItem {...repository} key={index} /> ) }
      </ul>
    </section>
  )
}