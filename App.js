
import './App.css';
import React,{ Component } from 'react';
import Games from './games';

class App extends Component{
constructor(props){
  super(props);
  this.state={
    games: [],
    sort:'',
    genres: '',
    error: null
  }
}

setSort(sort){
  this.setState({
    sort: this.state.sort
  })
}

setGenres(genres){
  this.setState({
    genres: this.state.genres
  })
}

handleSubmit(e){
  e.preventDefault();
  const baseUrl='http://localhost:8000/apps';
  const params=[];

  if(this.state.sort){
    params.push(`sort=${this.state.sort}`);
  }
  if(this.state.genres){
    params.push(`genres=${this.state.genres}`)
  }
  const query=params.join('&');
  const url=`${baseUrl}?${query}`;

  fetch(url)
    .then(res => {
      if(res.ok){
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data =>{
      this.setState({
        games: data,
        error: null
      });
    })
    .catch(err =>{
      this.setState({
        error: 'Sorry couldnt get any games rigth now'
      })
    })
}



  render(){
    //map over games
    const games=this.state.games.map((game, i) => {
      return <Games {...game} key={i}/>
    })
    return(
      <main>
      <div>
        <h1>Google Play Apps</h1>
        <div className="sort">
          <form>
          <label htmlFor="sort">Sort:</label>
          <select id="sort" name="sort" onChange={e=>this.setSort(e.target.value)}>
            <option value="">None</option>
            <option value="App">app</option>
            <option value="Rating">rating</option>
          </select>

          <label htmlFor="Genres">Genres:</label>
          <select id="Genres" name="Genres" onChange={e=>this.setGenres(e.target.value)}>
            <option value="Action">Action</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Strategy">Strategy</option>
            <option value="Casual">Casual</option>
            <option value="Arcade">Arcade</option>
            <option value="Card">Card</option>
          </select>
          <button type="submit">Find App</button>
          </form>
        </div>
        <div className="App_error">{this.state.error}</div>

      </div>
      {games}
      </main>

    )
  }

}
export default App;