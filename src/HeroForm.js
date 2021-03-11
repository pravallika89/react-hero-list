import {useState} from 'react';

const HeroFormComponent=()=>{
  //Initialize variables and state hooks
  const [heroName,setHeroName]=useState('');
  
  //Initialize my functions


  const handleChange=(event)=>{
    event.preventDefault();
    console.log(event.target.value);
  }
 return (
  <div className="row mb-5">
    <div className='col-6 offset-3'>
      <form action='submit' id='hero-form'>
        <div className='form-group'>
          <label htmlFor='heroName'>Hero name</label>
          <input type='text'
          className='form-control'
          id='heroName'
          value={heroName}
          onChange={(event)=>{setHeroName(event.target.value)}}
          />
        </div>

        <div className='form-group'>
          <label htmlFor="heroPower"> Hero Power</label>
            <input 
            type='text' 
            className='form-control'
            id='heroPower'
            value=""
            />
        </div>
        <div className="row">
          <div className='form-group col'>
            <label htmlFor="heroUniverse"> Hero Universe</label>
              <input 
              type='text' 
              className='form-control'
              id='heroUniverse'
              value=""
              />
          </div>

          <div className='form-group col'>
            <label htmlFor="heroCoolnessRating"> Coolness</label>
              <input 
              type='text' 
              className='form-control'
              id='heroCoolnessRating'
              value=""
              />
          </div>
        </div>
          <button className="btn btn-primary btn-block"> Save</button>
      </form>
      
    </div>
  </div>
 );
};

export default HeroFormComponent;