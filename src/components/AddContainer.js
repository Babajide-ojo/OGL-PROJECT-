import '../App.css';

function AddContainer() {
  return (
    <div className="add-container">
      <form>
        <div className="form-title">
          <div className="rope">
            <div className="col indicator"><button class="button1" id="button1">1</button></div>
            <div className="col indicator"><button class="button1">2</button></div>
            <div className="col indicator"><button class="button1">3</button></div>
            <div className="col indicator"><button class="button1">4</button></div>
          </div>
        <h3>Tracking ID Creation</h3>
        <hr></hr>
        </div>
        <br></br>
      
        <div class="row mb-3">
         <label>Name of Escort</label> 
          <div class="col-sm-12">
          <select class="form-select col-sm-12" aria-label="Default select example">
            <option selected>Escort</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
        </div>
        <div class="row mb-3">
        <label>Name of Driver</label> 
          <div class="col-sm-12">
          <select class="form-select col-sm-12" aria-label="Default select example">
            <option selected>Driver</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
        </div>
        <div class="row mb-3">
        <label>Entry Date</label> 
          <div class="col-sm-12">
            <input type="date" class="form-control" name="date" id="entryDate" />
          </div>
        </div>
       
     
        <button type="submit" class="btn tracking-btn">Submit</button>
      </form>
    </div>
  );
}

export default AddContainer