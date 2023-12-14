import {
  Description404,
  Poster404Styled,
} from 'components/not-found/not-found.styled';
import { Link, Outlet } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <Poster404Styled
        alt="cosmos"
        srcSet={`${process.env.PUBLIC_URL}/page404.jpg`}
      />
      <Description404>
        <p>
          404 <br /> <br />
          Houston, we have a problem
        </p>
        <Link to="/">Back Home</Link>
        <Outlet />
      </Description404>
    </>
  );
};
