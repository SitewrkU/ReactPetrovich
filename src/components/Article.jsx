//ЦЕ сторінка самої статті
import { useParams } from 'react-router-dom';
import articles from '../data/articles';
import '../styles/Article.css'

const Article = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) return <div>Статтю не знайдено</div>;

  const formatText = (text) => {
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/__(.*?)__/g, '<u>$1</u>');
    text = text.replace(/\n/g, '<br />');
    text = text.replace(/\*ii(.*?)\*ii/g, '<i>$1</i>');
    text = text.replace(/\*!!(.*?)\*!!/g, '<div class="attention">$1</div>');
    text = text.replace(/\*bb(.*?)\*bb/g, '<div class="bluebox">$1</div>');
    return text;
  };

  return (
    <div className='ArticleContainer'>
      <h2>
        {article.title}
        {article.tag && article.tag.length > 0 && (
          article.tag.map((hashtag, index) => (
            <span key={index} className="hashtag"> {hashtag}</span>
          ))
        )}
      </h2>

      <p className='date'>{article.date}</p>
      
      <div className='content'>
        {article.content.map((line, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: formatText(line) }} />
        ))}
      </div>
    </div>
  );
};

export default Article;