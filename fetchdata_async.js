const url = 'https://coderbyte.com/api/challenges/json/rest-get-simple'
  // console.log(resp);
const fetchData = async () => {
  const resp = await axios.get(url);
  const hobbies = resp.data.hobbies;

  console.log(hobbies.join(','));
}
fetchData();

async function fetchMoviesAndCategories() {
    const [moviesResponse, categoriesResponse] = await Promise.all([
      fetch('/movies'),
      fetch('/categories')
    ]);
  
    const movies = await moviesResponse.json();
    const categories = await categoriesResponse.json();
  
    return [movies, categories];
  }
  
  fetchMoviesAndCategories().then(([movies, categories]) => {
    movies;     // fetched movies
    categories; // fetched categories
  }).catch(error => {
    // /movies or /categories request failed
  });

  async function fetchMoviesBadStatus() {
    const response = await fetch('/oops');
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    const movies = await response.json();
    return movies;
  }

  async function fetchAsync () {
    // await response of fetch call
    let response = await fetch('https://api.github.com');
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;
  }
  
  // trigger async function
  // log response or catch error of fetch promise
  fetchAsync()
      .then(data => console.log(data))


//useeffect with axios


function App() {
const [data, setData] = useState({ hits: [] });

useEffect(async () => {
    const result = await axios(
    'https://hn.algolia.com/api/v1/search?query=redux',
    );

    setData(result.data);
}, []);

return (
    <ul>
    {data.hits.map(item => (
        <li key={item.objectID}>
        <a href={item.url}>{item.title}</a>
        </li>
    ))}
    </ul>
);
}

//another app

const App = () => {

    const url = 'someurl';
    const [stuff, setStuf] = React.useState([]);

    React.useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setStuf(data) // if data is array
    }
    return (
        <div>
            {stuff.map((a, id) => (
                <div key={id}>{a.name}</div>
            ))}
        </div>
    )
}