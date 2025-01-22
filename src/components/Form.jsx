// creo gli array che mi servono per mappare il form
const categories = [
  'Frontend',
  'Backend',
  'Fullstack',
  'DevOps',
  'Mobile'
]
const tags = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'React' }
]

//importo useState
import { useState } from 'react';



const Form = () => {
  // Definisco l'oggetto vuoto che andrò a compilare con il form
  const initialformData = {
    title: '',
    urlImage: '',
    content: '',
    category: '',
    tags: [], // array di stringhe
    published: false
  }

  //inserisco le costanti di stato:
  const [articleList, setArticleList] = useState(initialformData);
  const [newListItem, setNewListItem] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    //creo un clone dell'array e aggiungo il nuovo elemento
    setArticleList([newListItem, ...articleList])
  }



  return (
    <div className="card p-4">
      <h3 className='mb-4'>Inserisci un nuovo articolo</h3>
      <form action="#">
        <div className="row mb-3">
          <label for="title" className="col-sm-2 col-form-label fw-semibold">Titolo</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="title" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="url" className="col-sm-2 col-form-label fw-semibold">URL immagine</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="url" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="content" className="col-sm-2 col-form-label fw-semibold">Contenuto</label>
          <div className="col-sm-10">
            <textarea type="text" className="form-control" id="content" ></textarea>
          </div>
        </div>
        <div className="row mb-4">
          <label for="content" className="col-sm-2 col-form-label fw-semibold">Categoria</label>
          <div className="col-sm-10">
            <select
              className="form-select"

              name="category"
              defaultValue=""
            >
              <option selected>Seleziona una categoria</option>
              {categories.map((category, index) => (
                <option key={index} value={index}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0 fw-semibold">Tags</legend>
          <div className="col-sm-10">
            {tags.map(tag => (
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`tag${tag.id}`}
                  value={tag.name}
                />
                <label className="form-check-label" htmlFor={`tag${tag.id}`}>
                  {tag.name}
                </label>
              </div>
            ))}


          </div>
        </fieldset>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0 fw-semibold">Stato</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="published"
                id="published"
              // checked={}
              />
              <label className="form-check-label" for="gridRadios1">
                Pubblicato
              </label>
            </div>
          </div>
        </fieldset>
        <div className="d-flex justify-content-center">
          <button type="submit" onSubmit={handlerSubmit} className="btn btn-outline-primary px-4">Invio</button>
        </div>
      </form>
    </div>
  )
}

export default Form