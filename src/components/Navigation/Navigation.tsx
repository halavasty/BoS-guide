import React from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { cn } from '@bem-react/classname';
import './Navigation.scss';

const cnNavigation = cn('Navigation');

interface PageSchema {
  name: string;
  link: string;
}
interface PagesData {
  pages: PageSchema[];
}

const EXCHANGE_RATES = gql`
  {
    pages(where: { inMenu: true }) {
      name
      link
    }
  }
`;

export const Navigation: React.FC = () => {
  const { loading, error, data } = useQuery<PagesData>(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <nav className={cnNavigation()}>
      <ul className={cnNavigation('List')}>
        {data &&
          data.pages.map((nav: PageSchema) => (
            <NavLink
              className={cnNavigation('Item')}
              activeClassName={cnNavigation('Item', { active: true })}
              key={nav.name}
              exact
              to={nav.link}
            >
              {nav.name}
            </NavLink>
          ))}
      </ul>
    </nav>
  );
};
