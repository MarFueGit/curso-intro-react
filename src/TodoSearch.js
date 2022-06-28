import { render } from "@testing-library/react";
import React from "react";
import './TodoSearch.css'

// class Componente extends React.Component {
//     constructor(){
//         this.state = {
//             patito: 'mary'
//         }
//     }

//   render() {
//     return (
//         <div onClick={() => this.setState('Enrique')}>{this.state.patito}</div>
//     )
//   }
// };

function TodoSearch({searchValue, setSearchValue}){
     const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    };  
    return (
        <input 
        className="TodoSearch" 
        placeholder="Elige una opción" 
        value={searchValue}
        onChange={onSearchValueChange}
        />
       
    );
}
export {TodoSearch};