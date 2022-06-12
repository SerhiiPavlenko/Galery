import axios from "axios";



const fetchArticlesWitchQuery = (searchArticle,page) => {
    return axios.get(`https://pixabay.com/api/?q=${searchArticle}&page=${page}&key=22594216-1a021111ca7cba0c4b2e7faee&image_type=photo&orientation=horizontal&per_page=15`)
    .then(response => response.data.hits)
}

export default {
    fetchArticlesWitchQuery
};