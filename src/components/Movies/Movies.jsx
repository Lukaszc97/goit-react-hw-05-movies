useEffect(() => {
    if (searchTerm === '') {
      setSearchResults([]);
      return;
    }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=6259da9bc5df5d51756d5e5542429946&query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.results))
      .catch((error) => console.error(error));
  }, [searchTerm]);
  