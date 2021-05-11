import { Route, Switch, useRouteMatch, useParams } from 'react-router';

function Card() {
  const { slug } = useParams<{ slug: string }>();
  return <h2>Card {slug}</h2>;
}

function CardsPage() {
  const match = useRouteMatch();

  console.log(match);

  return (
    <div>
      <h1>Cards Page</h1>
      <Switch>
        <Route path={`${match.path}/:slug`}>
          <Card />
        </Route>
        <Route path={match.path}>
          <h2>Hello ! it is Cards Page without slug</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default CardsPage;
