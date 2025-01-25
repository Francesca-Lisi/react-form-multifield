import { useState } from 'react';


const ArticleList = () => {


  const [articles, setArticles] = useState([]);


  //inserisco una funzione che mi permette di gestire il submit del form
  const handlerRemovePost = (id) => {
    console.log(id);
    setArticles(articles.filter(article => article.id !== id))
  }

  return (
    <div className="card my-3 p-4">
      <h3>Elenco Articoli</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Immagine</th>
            <th scope="col">Titolo</th>
            <th scope="col">Contenuto</th>
            <th scope="col">Categoria</th>
            <th scope="col">Tags</th>
            <th scope="col">Stato</th>
            <th scope="col">Azioni</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article.id}>
              <td>
                <img src={article.urlImage} alt={article.title} width="100" />
              </td>
              <td>{article.title}</td>
              <td>{article.content}</td>
              <td>{article.category}</td>
              <td>{article.tags.join(', ')}</td>
              <td>{article.published ? 'Sì' : 'No'}</td>
              <td>
                {/* <i
                  className="fa-solid fa-pencil me-3"
                onClick={() => handlerSetEditTask(task.id)}
                ></i> */}
                <i
                  className="fa-solid fa-trash-can trash"
                  onClick={() => handlerRemovePost(post.id)}
                ></i>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default ArticleList