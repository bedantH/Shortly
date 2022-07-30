import axios from 'axios';

export const getShorty = ({ url }) => axios.get("https://api.shrtco.de/v2/shorten",
    {
        params: {
            url: url
        }
    })
