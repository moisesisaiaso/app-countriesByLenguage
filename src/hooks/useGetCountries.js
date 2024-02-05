import axios from "axios";
import { useState } from "react";

export const useGetCountries = () => {
    const [countries, setCountries] = useState();

    const getData = async (language) => {
        const url = `https://restcountries.com/v3.1/lang/${language}`;

        let exist = true;
        await axios
            .get(url)
            .then(({ data }) => {
                setCountries(data);
            })
            .catch((err) => {
                console.log(err);
                exist = false;
            });

        const isLoading = false;
        return { isLoading, exist };
    };

    return [countries, getData];
};
