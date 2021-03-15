import {useState} from 'react';
import HeadingComponent from './Heading.js';
import HeroListComponent from './HeroList.js';
import HeroFormComponent from './HeroForm.js'
import './App.css';
// let heroes=['Goku','Ash Ketchum','Sailor Moon','EliZBest',];

let heroesData=[
  {
    id: 1,
    name: 'Goku',
    universe: 'Dragon Ball Z',
    power: 'Sayan',
    coolNessRating: 10,
  },
  {
    id: 2,
    name: 'Ash Ketchum',
    universe: 'Pokemon',
    power: 'Persistent',
    coolNessRating: 6,
  },
  {
    id: 3,
    name: 'Sailor Moon',
    universe: 'Sailor Moon',
    power: 'Silver Crystal',
    coolNessRating: 8,
  },
  {
    id: 4,
    name: 'ElizaBest',
    universe: 'Alkali',
    power: 'Knows All Things',
    coolNessRating: 15,
  },

];
const App =() => {
  const [heroes,setHeroes]=useState(heroesData);
  const [success,setSucess]=useState(true);
  //initialize variable
  let title="Welcome to Hero list!";
  let subTitle= "The Place where hero lives";
  let addNewHero=(hero)=>{
    // ****Three lines of code below does same as setHeroes *****///
    // let heroesCopy=[...heroes];
    // heroesCopy.push(hero);
    // serHeroes(heroesCopy);
    setHeroes([...heroes,hero]);
    // alert in browser
    // alert(`Your Hero ${hero.name} was added` );
    // console.log(addNewHero);
    setSucess(true);
    setTimeout(()=>{

    setSucess(false);
    },2000);
  }
  return (
    <div className="container">
      { success ? (
      <div className='row'>
        <div className="col-6 offset-3">
          <div className='alert alert-success' role='alert'>
          You Have successfully added Hero!
          </div>
        </div>
      </div>) :("  ")}
      <HeadingComponent title={title} subTitle={subTitle}/>
      <HeroFormComponent addNewHero={addNewHero}/>
      <HeroListComponent heroes={heroes}/>
    </div>
  );
};

export default App;
