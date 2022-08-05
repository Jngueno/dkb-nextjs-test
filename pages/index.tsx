import { fetchAPI, baseUrl } from "../utils/fetchAPI";
import { Result } from "../typings";
import Row from "../components/Row";

interface Props {
  results: Result;
}

const Home = ({ results }: Props) => {
  const { movies } = results;

  const drama = movies.filter((movie) => movie.genres.includes("Drama"));
  const adventure = movies.filter((movie) =>
    movie.genres.includes("Adventure")
  );
  const action = movies.filter((movie) => movie.genres.includes("Action"));
  const crime = movies.filter((movie) => movie.genres.includes("Crime"));
  const thriller = movies.filter((movie) => movie.genres.includes("Thriller"));
  const biography = movies.filter((movie) =>
    movie.genres.includes("Biography")
  );
  const history = movies.filter((movie) => movie.genres.includes("History"));
  const scifi = movies.filter((movie) => movie.genres.includes("Sci-Fi"));
  const war = movies.filter((movie) => movie.genres.includes("War"));
  const mystery = movies.filter((movie) => movie.genres.includes("Mystery"));
  const romance = movies.filter((movie) => movie.genres.includes("Romance"));

  return (
    <section>
      <Row title="Drama" categorie={drama} />
      <Row title="Adventure" categorie={adventure} />
      <Row title="Action" categorie={action} />
      <Row title="Crime" categorie={crime} />
      <Row title="Thriller" categorie={thriller} />
      <Row title="Biography" categorie={biography} />
      <Row title="History" categorie={history} />
      <Row title="Sci-Fi" categorie={scifi} />
      <Row title="War" categorie={war} />
      <Row title="Mystery" categorie={mystery} />
      <Row title="Romance" categorie={romance} />
    </section>
  );
};

export default Home;

export async function getStaticProps() {
  const results = await fetchAPI(baseUrl);

  return {
    props: {
      results,
    },
  };
}
