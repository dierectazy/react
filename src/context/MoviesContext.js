import { createContext } from "react";
import { useState } from "react";
import MoviesData from "../components/data/MoviesData";
const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(MoviesData);

  const handleAdd = (titulo, rate, link) => {
    const rand = 1000 + Math.random() * (99999 - 1000);
    const registro = {
      id: rand,
      title: titulo,
      rate: rate,
      thumb: link,
      maxRate: 10,
    };
    setMovies([registro, ...movies]);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        handleAdd,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
