import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.nal.usda.gov/fdc/v1/foods',
    headers: {
        Authorization: 
            'Bearer fPrLFeOrawu2ylt6TNBNaGiby6OqKdjNz3l5gQe1 '
    }
});

//4745ryZOUpkjufOEPrASN4kU95sMMLgmOkK36ba4