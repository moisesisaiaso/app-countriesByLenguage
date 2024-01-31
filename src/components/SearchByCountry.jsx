import { useRef } from "react";

export const SearchByCountry = ({ setSearch }) => {
    const textInpunt = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputValue = textInpunt.current.value;
        const lenguage = inputValue.trim();
        setSearch(lenguage.toLowerCase());
    };
    return (
        <>
            <form onChange={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingresa el lenguaje"
                    className="search"
                    ref={textInpunt}
                />
            </form>
        </>
    );
};
