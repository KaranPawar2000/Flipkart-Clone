import {createContext,useState } from "react";


export const DataContext = createContext(null);


const DataProvider = ({children}) => {          //this childrens from App.js beacuse we pass childens in Dataprovider  
 const [account,setAccount] =useState('');
return(
    <DataContext.Provider value ={{
      account,
      setAccount
    }}>
      {children}
     </DataContext.Provider>
   )
}

export default DataProvider;
