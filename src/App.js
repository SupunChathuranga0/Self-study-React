import { Fragment } from "react";
import "./App.css";
import Main from './Components/Main';

import { mydata } from "./Data/MyData";
import { mydata2 } from "./Data/MyData";

const MainBlock = () => {
  return(
//     <Fragment >
//     {mydata2?.map(({ Country, age, Mobile},index) =>{
//       return <Main key={index} Country={Country} age = {age} Mobile = {Mobile} />;

//     })}
//     </Fragment>
//   );
// };
        <Fragment >
        {mydata?.map(({name, city, position, id})=>{
           return <Main key={id} name = {name} city = {city} position = {position}/>;
          })}
        </Fragment>
        );
        };




function App() {
  // const MainBlock =  mydata?.map(({name, city, position, id})=>{
  //   return <Main key={id} name = {name} city = {city} position = {position}/>;
  // });

  // const SecondBlock = mydata2?.map(({country, age, mobile}) =>{
  //   return <Main country={country} age = {age} mobile = {mobile} />;
    
  // });
  return (
    <Fragment>
    <div>
      <h1>Hello World</h1>
      </div>
      <p>My Name is Supun Chathuranga This is the React Practise Code</p>
      {/* <Main name="chathuranga" city="Kurunegala" position="UI Developer">
        <h5>Checking new react App</h5>
      </Main>
      <Main name="Supun" city="Kurunegala" position="flutter Developer" />
      <Main name="Ravindu" city="Kurunegala" position="Python Developer" />
      <Main name="Kasun" city="Kurunegala" position="Devops Engineer" />
      //old Day part */}


      {/* {MainBlock} */}
      <MainBlock/>
      {/* <SecodBlock/> */}

      </Fragment>
  ); 
}
//shit+Alt+arrowkey can paste lot o copies one by one
export default App;
