import axios from "axios";
import { useState } from "react";

export const useGetCountries = () => {
    const [countries, setCountries] = useState();

    const getData = async (language) => {
        const url = `https://restcountries.com/v3.1/lang/${language}`;

        let isLoading = true;
        let exist = true;
        await axios
            .get(url)
            .then(({ data }) => {
                setCountries(data);
                isLoading = false;
            })
            .catch((err) => {
                console.log(err);
                exist = false;
            });
        return { isLoading, exist };
    };

    return [countries, getData];
};
