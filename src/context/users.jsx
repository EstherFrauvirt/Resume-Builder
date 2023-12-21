import { createContext, useState ,useEffect} from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const usersContext = createContext()

const UserProvider = ({ children }) => {

 const auth = getAuth();
 const [user,setUser]=useState();
    useEffect(() => {
        onAuthStateChanged(auth, (Auser) => {
            if (Auser) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = Auser.uid;
              console.log(Auser);
              setUser(Auser)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    
      return () => {
        
      }
    }, [])
    
    
   
    


    const shared = {user }
    return (
        <usersContext.Provider value={shared}>
            {children}
        </usersContext.Provider>
    )



}
export { UserProvider }
export default usersContext