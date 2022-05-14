export interface Repository {
  name: String,
  description: String,
  html_url: string
}

export interface RepositoryPaginationType {
  getRepositories: (page: number) => void,
  repos_per_page: number,
  activePage: number,
  setActivePage: React.Dispatch<React.SetStateAction<number>>
}