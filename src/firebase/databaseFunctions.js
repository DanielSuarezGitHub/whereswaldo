import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "./firebase";

const getLevelInfo = async (levelName) => {
    const q = query(collection(db, "Levels"), where("levelName", "==", levelName));
    const snapShot = await getDocs(q);
    let info = {

    }
    snapShot.forEach((doc) => {
      info = doc.data()
    });
    return info
 };

 const getLevelInfoById = async (id) => {
  const q = query(collection(db, "Levels"), where("levelid", "==", id));
  const snapShot = await getDocs(q);
  let info = {

  }
  snapShot.forEach((doc) => {
    info = doc.data()
  });
  return info
};



 
 const getAllInfo = async () => {
  const q = query(collection(db, 'Levels'))
  const snapShot = await getDocs(q)
  const allMaps = []
  snapShot.forEach((doc) => {
    allMaps.push(doc.data())
  })
  return allMaps
 }

 const sendScore = async (name, time, level) => {
  await updateDoc(doc(db, 'Times', level), {
    times: arrayUnion({name: name, time: time})
  })
 }

 const getTopScores = async (level) => {
  const docRef = doc(db, 'Times', level)
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().times
  } else {
    return []
  }
 }

 

 export { getLevelInfo, getAllInfo, getLevelInfoById, sendScore, getTopScores }