import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.nal.usda.gov/fdc/v1/foods',
    headers: {
        Authorization: 'Bearer 4745ryZOUpkjufOEPrASN4kU95sMMLgmOkK36ba4'
    }
});

//fPrLFeOrawu2ylt6TNBNaGiby6OqKdjNz3l5gQe1