export function RepositoryItem({
    name = 'Undefined repository',
    description = '',
    link = ''
  }) {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>

      <a href={link}>
        Acessar repositório
      </a>
    </li>
  );
}