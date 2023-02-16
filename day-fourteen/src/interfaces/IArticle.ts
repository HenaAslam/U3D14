export interface IArticle{
    id:          number;
    title:       string;
    url:         string;
    imageUrl:    string;
    newsSite:    string;
    summary:     string;
    publishedAt: string;
    updatedAt:   string;
    featured:    boolean;
    launches:    Launch[];
    events:      any[];
}


interface Launch {
    id:       string;
    provider: string;
}