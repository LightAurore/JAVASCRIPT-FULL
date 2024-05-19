import { useState,useCallback, useRef, useId } from 'react';
import { ArticleData } from '../../types/article';


type FormSearchArticleProps = {
    onSearch: (article: ArticleData) => void
}

const SearchBar = ({onSearch}: FormSearchArticleProps) => {
    //? Génération d'un identifier pour l'accessibilité du formulaire
    const articleId: string = useId();

    const [article, setArticle] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        onSearch(article);

        handleReset();

    }, [article, onSearch]);

    const handleReset = () => {
        setArticle('');

        inputRef.current?.focus();
    }
    
    return(
        <form onSubmit={handleSubmit} onReset={handleReset}>

            <input 
                type="text" 
                id={articleId}
                value={article} 
                onChange={(e) => { setArticle(e.target.value) }} 
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;