import { createContext, useState, useReducer, useContext } from "react";
import { database, app,storage } from '../firebase.config'
import { getAuth } from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'


import usersContext from "./users";
const dataContext = createContext()


const DataProvider = ({ children }) => {
    const { user } = useContext(usersContext);
    const auth = getAuth();
    const [data, setData] = useState({
        userId: '',
        imageUrl: "", 
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        workExperience: [
            {
                companyName: '',
                from: '',
                to: '',
            },
            {
                companyName: '',
                from: '',
                to: '',
            }
        ],
        education: [
            {
                learnSubject: '',
                from: '',
                to: '',
            },
            {
                learnSubject: '',
                from: '',
                to: '',
            }
        ]
    })
    const collectionRef = collection(database, 'resumes');
    const getCvs = async () => {
        console.log(user);
        const q = query(collection(database, "resumes"), where("userId", "==",user.uid));

        const querySnapshot = await getDocs(q);
        const resultArray = [];

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            resultArray.push(doc.data());
            console.log(doc.id, " => ", doc.data());
        });

        return resultArray;

    }
const getAllCvs=async()=>{

const querySnapshot = await getDocs(collectionRef);
const resultArray = [];
 querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  resultArray.push(doc.data());
});
return resultArray;
}
    const addCv = () => {

        //data.userId = auth.currentUser.uid;
        data.userId=user.uid;
        data.profilePicture=null
        


        addDoc(collectionRef, data)
            .then(() => {
                alert('data added')
            })
            .catch((err) => {
                console.log(err);
            })

        }
    
    
    const shared = { data, setData, addCv, getCvs ,getAllCvs}
    return (
        <dataContext.Provider value={shared}>
            {children}
        </dataContext.Provider>
    )
}

export { DataProvider }
export default dataContext