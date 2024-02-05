import { useRef } from "react";

export const SearchByCountry = ({ setLanguaje }) => {
    const textInpunt = useRef();

    const handleSubmit = () => {
        const inputValue = textInpunt.current.value;
        const lenguage = inputValue.trim();
        setLanguaje(lenguage.toLowerCase());
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
