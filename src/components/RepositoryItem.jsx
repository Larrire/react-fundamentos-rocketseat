export function RepositoryItem({
    name = 'Undefined repository',
    description = '',
    html_url = ''
  }) {
  return (
    <li>
      <section>
        <strong>{name}</strong>
        <p>{description}</p>
      </section>

      <a target='_blank' href={html_url}>
        Acessar repositório
      </a>
    </li>
  );
}