import articles from '../data/data.json'; 
const LOAD_ARTICLES = 'article/loadArticles';

export const loadArticle = () => {
    return {
        type: LOAD_ARTICLES,
        articles
    };
};

const initialState = {entries: [], isLoading: true}; 

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES: 
        return {...state, entries: [...action.articles]}; 
        default: 
        return state; 
    }
};

export default articleReducer; 