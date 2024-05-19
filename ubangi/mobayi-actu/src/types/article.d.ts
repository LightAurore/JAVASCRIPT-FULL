

export type Article {
    id: string;
    article: string;
}

export type ArticleData ! Omit<Article, 'id'>;