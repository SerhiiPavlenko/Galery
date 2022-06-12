import React,{Component} from "react";
import Loading from "./Loading";
import Error from "./Error";
import Layout from "../../servicess/Layout";
import ImageGallery from "./ImageGallery";
import ArticleApi from "./utils/ArticleApi";
import SearchBar from "./SearchBar";
import Button from "./Button";

export default class Main extends Component {

    state ={
        articles: [],
        loadind: true,
        error:null,
        searchQuery: '',
        page:1,
    }




    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;
        if(prevQuery !== nextQuery) {
            this.fetchArticles()
            
        }
    }


 
    fetchArticles = () => { 
        const {page,searchQuery} = this.state
        ArticleApi.fetchArticlesWitchQuery(searchQuery,page)
        .then(articles => this.setState(prevState => ({articles:[...prevState.articles, ...articles],page: prevState.page + 1})))
        .catch(error => this.setState({error}))
        .finally(() => this.setState({loadind:false}))
    }

    handleSearchFormSubmit = query => {
        this.setState({searchQuery:query,page:1,articles:[]})
    }


    render() {
        const {articles,loadind,error} = this.state;
        return (
            <>
                 <SearchBar onSubmit={this.handleSearchFormSubmit}/>
                {/* {loadind && <Loading/>} */}
               
                {error && (<Error/>)}
                {articles.length > 0 && <ImageGallery articles={articles}/>}
                <br/>
                {articles.length > 0 && <Button handleClick={this.fetchArticles}/>}
                
            </>
        )
    }
}