import { Link } from 'react-router-dom';
import articles from '../data/articles';
import '../styles/Article.css'

const ArticleList = () => {
  return (
    <>
      <div className="ArtList">
      <h1>Список статей</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id} className='ArticleLi'>
            <Link to={`/article/${article.id}`}>
            #{article.id} - {article.title}<span>{article.date}</span>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default ArticleList;