// import { async } from "@firebase/util"; pending to check
import { useEffect, useState } from "react";
import { projectFirestore, projectStorage, timeStamp } from "../firebase/config";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')
        //storageRef.put(file) bellow will put the file inside the previous ref which is (file.name)
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timeStamp()
            collectionRef.add({ url, createdAt })
            setUrl(url)
        })
    },[file])   // It will run once everytime it fires (file)

    return { progress, url, error }
}
 
export default useStorage;