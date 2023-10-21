import express from 'express'; 
export const app = express();
import axios from 'axios';

const port = 3000


app.get('/api/data',(req,res) => {
    const searchTerm = req.query.searchTerm
    const apiUrl = `http://www.omdbapi.com/?apikey=7a708271&s=${searchTerm}`;
    axios.get(apiUrl)
    .then(response => {
        res.send(response.data)
    }).catch(err => {
        console.error('Error fetching data: ',err);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})