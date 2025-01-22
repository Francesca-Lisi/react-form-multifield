

const Form = () => {
  return (
    <div className="card p-4">
      <form action="#">
        <div class="row mb-3">
          <label for="title" className="col-sm-2 col-form-label">Titolo</label>
          <div class="col-sm-10">
            <input type="text" className="form-control" id="title" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="url" className="col-sm-2 col-form-label">URL immagine</label>
          <div class="col-sm-10">
            <input type="text" className="form-control" id="url" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="content" className="col-sm-2 col-form-label">Contenuto</label>
          <div class="col-sm-10">
            <textarea type="text" className="form-control" id="content" ></textarea>
          </div>
        </div>
        <div class="row mb-4">
          <label for="content" className="col-sm-2 col-form-label">Categoria</label>
          <div class="col-sm-10">
            <select type="form-select" className="form-control" id="content" >
              <option selected>Seleziona una categoria</option>
              <option value="1">Fullstack</option>
              <option value="2">Frontend</option>
              <option value="3">Backend</option>
              <option value="4">Mobile</option>
            </select>
          </div>
        </div>
        <fieldset class="row mb-3">
          <legend class="col-form-label col-sm-2 pt-0">Tags</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="option1" />
              <label class="form-check-label" for="gridRadios1">
                HTML
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2" />
              <label class="form-check-label" for="gridRadios2">
                CSS
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios2" value="option2" />
              <label class="form-check-label" for="gridRadios2">
                React
              </label>
            </div>
            <div class="form-check disabled">
              <input class="form-check-input success" type="checkbox" name="gridRadios" id="gridRadios3" value="option3" />
              <label class="form-check-label" for="gridRadios3">
                JavaScript
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset class="row mb-3">
          <legend class="col-form-label col-sm-2 pt-0">Stato</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="option1" />
              <label class="form-check-label" for="gridRadios1">
                Pubblicato
              </label>
            </div>
          </div>
        </fieldset>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-primary px-4">Invio</button>
        </div>
      </form>
    </div>
  )
}

export default Form