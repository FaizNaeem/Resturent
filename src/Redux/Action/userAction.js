import firebase from '../../fire'

export const LoginAction = (email, password) => {
    return function (dispatch) {
        dispatch({ type: "LOGIN_PROCESSING" })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                firebase.firestore().collection('users').where( "uid", "==", res.user.uid).get()
                .then(useobj => {
                    console.log(useobj, "database")
                    useobj.forEach((resule) => {
                        var data = resule.data()
                        console.log("useobj", data)
                        dispatch({ type: "LOGIN_PROCESSED", payload: data })
                        alert("Login Succesfully")
                    })
                })
                .catch((Err)=>{
                    console.log(Err ,'databa')
                })
            })
            .catch((Err) => {
                dispatch({type: "ERROR"})
            })
    }
}

export const SingupAction = (email, password ,name, phone, username) => {
    return function (dispatch) {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                var obj = {
                    uid: res.user.uid,
                    email: res.user.email,
                    phone: phone,
                    name: name,
                    username: username
                }
                console.log(obj)
                firebase.firestore().collection('users').add(obj)
                .then((databaseRes) => {
                    console.log("databaseRes",databaseRes)
                })
                alert("Signup Succesfully")
                resolve({status: true})
                // history.push("/home")

            })
            .catch((err) => {
                console.log("error", err)
                alert(err.message)
                reject({status: false})
            })
        })
    }
}

export const Menu = (menuName,user) => {
    
    return function (dispatch) {
        
        return new Promise((resolve, reject) =>{
            const obj = {
                menuName : menuName,
                uid : user.uid
            }
            firebase.firestore().collection('menu').add(obj)
            .then((databaseRes) => {
                console.log("databaseRes",databaseRes)
            })
            alert("Menu Add Succesfully")
            resolve({status: true})

            .catch((err) => {
                console.log("error", err)
                alert(err.message)
                reject({status: false})
            })          
    })   
    }
}
export const Category = (Category) =>{
    return function (dispatch){
        return new Promise((resolve, reject) =>{
            const obj = {
                Cotegoryname : Category
            }
            firebase.firestore().collection('cotegory').add(obj)
            .then((databaseRes) => {
                console.log("databaseRes",databaseRes)
            })
            alert("cotegory Succesfully")
            resolve({status: true})

            .catch((err) => {
                console.log("error", err)
                alert(err.message)
                reject({status: false})
            })

    })
}
}



export const Getmenu = (user) =>{
    return function (dispatch){
       
        firebase.firestore().collection('menu').where( "uid", "==", user.uid).get()
        .then(useobj => {
            console.log(useobj, "database")
            var dat = []
            useobj.forEach((resule) => {
                var data = resule.data()
               data.menuid = resule.id
                
                dat.push(data)
                console.log("dattata",dat)
                console.log("useobj", data)
                dispatch({ type: "MENU_PROCESSED", payload: dat })
                
                
                
                
            })
        })

        .catch((Err)=>{
            console.log(Err ,'databa')
        })
    
    
        
    }
}



export const Getcatogry= (user) =>{
    return function (dispatch){
       
        firebase.firestore().collection('cotegory').where( "uid", "==", user.uid).get()
        .then(useobj => {
            console.log(useobj, "category database", useobj.empty)
            var dat = []
            useobj.forEach((resule) => {
                var data = resule.data()
                data.cotegoryid = resule.id
                
                dat.push(data)
                console.log("category dattata",dat)
                console.log("category useobj", data)
                
                
                
            })
            
            dispatch({ type: "CATOGRY_PROCESSED", payload: dat })
        })

        .catch((Err)=>{
            console.log(Err ,'databa')
        })
    
    
        
    }
}