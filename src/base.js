import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGHnPtV86mFLNgYQaGfZD7Kz5fLGzJdeo",
    authDomain: "chatbox-app-3a128.firebaseapp.com",
    databaseURL: "https://chatbox-app-3a128.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base