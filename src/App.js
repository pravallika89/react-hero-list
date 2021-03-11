import HeadingComponent from './Heading.js';
import HeroListComponent from './HeroList.js';
import HeroFormComponent from './HeroForm.js'
import './App.css';
// let heroes=['Goku','Ash Ketchum','Sailor Moon','EliZBest',];

let heroes=[
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
  //initialize variable
  let title="Welcome to Hero list!";
  let subTitle= "The Place where hero lives";
  return (
    <div className="container">
      <HeadingComponent title={title} subTitle={subTitle}/>
      <HeroFormComponent/>
      <HeroListComponent heroes={heroes}/>
    </div>
  );
};

export default App;
