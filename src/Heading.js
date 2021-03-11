


const HeadingComponent=({title,subTitle})=>{
    console.log(title,subTitle);
  return (
  <div className="row text-center">
    <div className="col">
      <h1 className="my-5"> {title}</h1>
      <h3>{subTitle}</h3>
    </div>
  </div>);
};

export default HeadingComponent;

