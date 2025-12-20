interface CardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
}

export default function Card({ title, description, icon, href }: CardProps) {
  const content = (
    <>
      {icon && <span className="text-3xl mb-2">{icon}</span>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </>
  );

  const className = 'p-6 border rounded-lg hover:border-blue-500 transition-colors cursor-pointer';

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
