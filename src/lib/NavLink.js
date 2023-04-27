import Link from 'next/link';

export default function NavLink({
  to,
  text,
  children,
  className,
  title,
  newtab,
  onClick,
  keepClick,
  icon,
  hidden,
}) {
  if (hidden) return null;
  if (newtab) {
    return (
      <Link href={to ? to : '/'}>
        <a
          className={className}
          title={title ? title : text ? text : ''}
          target='_blank'
          rel='noopener noreferrer'
        >
          {icon}
          {!!text && <span>{text}</span>}
          {children}
        </a>
      </Link>
    );
  }
  return (
    <Link
      href={to ? to : '/'}
    >
      <a onClick={(e) => {
        if (onClick) {
          if (e) {
            e.stopPropagation();
          }

          onClick();
        } else {
          if (keepClick) {
            if (e) {
              e.stopPropagation();
            }
          }
        }
      }}
        className={className} title={title ? title : text ? text : ''}>
        {icon}
        {!!text && <span>{text}</span>}
        {children}
      </a>
    </Link>
  );
}
