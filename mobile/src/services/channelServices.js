import axios from 'axios';

export default () => {
    
    async function getChannel(url){
        const res = axios.get(url);
        console.log(res.body);
    };
};