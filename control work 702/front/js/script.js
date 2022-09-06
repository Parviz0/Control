let url = 'http://localhost:3001'

function getData(params){
    axios.get(url + '/users')
        .then(res => {
            if(res.status === 200 || res.status === 201){
                reload(res.data)
                console.log(res.data);
            }
        })
}
getData()

let form = document.forms.form

let povish = [

]

form.onsubmit = (event) => {
    event.preventDefault()
 
    let get = {
     increase: false,
     rise: false
    }   
    let fm = new FormData(form) 
   fm.forEach((value, key) => {
    get[key] = value
   })

    axios.post(url + "/users", get)
    .then(res => {
        if(res.status === 200 || res.status === 201){
            getData()
        }
    })
 
 }
let search = document.querySelector('.search')



 let inMain = document.querySelector('.in_main')

 function reload(arr) {
    inMain.innerHTML = ""

    for(let info of arr){
        // a create
        let filt = document.querySelector('.filo')
        let user = document.createElement('div')
        let name = document.createElement('div')
        let span1 = document.createElement('span')
        let inp = document.createElement('input')
        let imgCookie = document.createElement('img')
        let imgTrash = document.createElement('img')
        let vse = document.querySelector('.vse')
        // b decor
        user.classList.add('user')
        name.classList.add('name')
        inp.classList.add('pri')
        imgCookie.classList.add('pech')            
        imgTrash.classList.add('trash')   
        imgCookie.src = './assets/icons/cookie_icon.svg'    
        imgTrash.src = './assets/icons/delete_ic_icon.svg'       
        span1.innerHTML = info.name
        inp.value = info.salary + '$'
        // c add
        inMain.append(user)
        user.append(name)
        name.append(span1)
        user.append(inp)
        user.append(imgCookie)            
        user.append(imgTrash)        
        // functions
        info.increase ? user.classList.add('item_d') : console.log()
        imgTrash.onclick = () => {
            let idx = arr.indexOf(info)
 
            arr.splice(idx, 1)
        }

        user.onclick = () => {
            if(info.increase){
                info.increase = false
            }else{
                info.increase = true
            }
            reload(arr)
        }
        search.onkeyup = () => {


            let filtered = arr.filter(info => {
                let title = info.name.toLowerCase()
                let value = search.value.toLowerCase().trim()
        
                if(title.includes(value)) {
                    return info
                }
            })
        
            reload(filtered)
        }
        filt.onclick = () => {
            console.log("hi");
            let filter =  arr.filter((product)=>product.salary>=1000)
            reload(filter)
        }
        vse.onclick = () => {
            location.reload()
        }
        info.ris ? user.classList.add('item_done') : console.log()
        imgCookie.onclick = () => {
            console.log('hi');
            if(info.ris){
                info.ris = false
            }else{
                info.ris = true
            }
            reload(arr)
        }
        let po = document.querySelector('.povisa')
        po.onclick = () =>{
            let filter =  arr.filter((product)=>product.ris===true)
            reload(filter)
        }
    } 
}
getData()