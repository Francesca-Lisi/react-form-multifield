

const ArticleList = () => {
  return (
    <div className="card my-3 p-4">
      <h3>Elenco Articoli</h3>
      <table class="table">
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
          <tr>
            <th scope="row">1</th>
            <td>titolo</td>
            <td>contenuto</td>
            <td>cat</td>
            <td>tags</td>
            <td>pubblicato</td>
            <td>
              <i
                className="fa-solid fa-pencil me-3"
              //onClick={() => handlerSetEditTask(task.id)}
              ></i>
              <i
                className="fa-solid fa-trash-can trash"
              //onClick={() => hadlerRemoveTask(task.id)}
              ></i>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default ArticleList