import { useEffect, useState } from "react";
import "./App.css";
import { useGetCountries } from "./hooks/useGetCountries";
import { SearchByCountry } from "./components/SearchByCountry";
import { CountryCard } from "./components/CountryCard";

function App() {
    const [countries, setCountries] = useGetCountries();
    const [search, setSearch] = useState("spanish");

    const [isloading, setIsLoading] = useState(true);
    const [exist, setExist] = useState(true);

    const accessHandler = async () => {
        const access = await setCountries(search);
        const { isloading, exist } = access;
        setIsLoading(isloading);
        setExist(exist);
        console.log(access);
    };

    useEffect(() => {
        accessHandler();
    }, [search]);

    console.log(countries);

    return (
        <>
            <section className="container">
                {isloading ? (
                    <h2>Cargando...</h2>
                ) : (
                    <>
                        <header className="headerPrincipal">
                            <h1 className="title">API DE PAÍSES</h1>
                            <SearchByCountry setSearch={setSearch} />
                        </header>
                        {exist ? (
                            <main>
                                {countries.map((country) => (
                                    <CountryCard key={country.cca2} country={country} />
                                ))}
                            </main>
                        ) : (
                            <h3>"{search}" No es un lenguaje existente</h3>
                        )}
                    </>
                )}
                <footer>
                    <p>&copy; DESARROLLADO POR MOISES ORTIZ GRACIA</p>
                </footer>
            </section>
        </>
    );
}

export default App;
