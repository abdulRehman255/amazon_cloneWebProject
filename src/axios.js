import axios from 'axios';
const instance=axios.create({
    baseUrl:'http://localhost:5001/challenge-3009d/us-central1/api'//The API(cloud)function URL
});
export default instance;