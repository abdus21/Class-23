
import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

//get elements
const staff_form = document.getElementById('staff-form');
const showData = document.getElementById('show-data');

//staff submit data
staff_form.addEventListener('submit',function(e){
    e.preventDefault();

    const msg = document.querySelector('.msg')
    let form_data = new FormData(e.target);
    let form_entries = Object.fromEntries(form_data.entries());

    let {name,cell,photo,location} = form_entries;

    if(name == '' || cell == '' || location == ''){
        msg.innerHTML = Alert.danger('All fiels are required')
    }else{
        msg.innerHTML = Alert.success('Data stable !')
        Storage.set('staff',form_entries);
        staff_form.reset()
        show_data()
    }

});

console.log();
show_data()
 function show_data(){
   let allData =  Storage.get('staff');
   let list = '';
   allData.map((data,index)=>{
       let {name,cell,location,photo} = data;
    list += `
               <tr>
                     <td>${index + 1}</td>
                     <td>${name}</td>
                     <td>${cell}</td>
                     <td>${location}</td>
                     <td><img style="whidt:50px;height:50px;object-fit:cover" src="${photo ? photo : 'assets/img/avatar.png'}" alt=""></td>
                     <td><button class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button></td>
                     <td><button onclick="delete_data(${index})" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i></button></td>
               </tr>
    `
   });
   showData.innerHTML = list;
}

show_data();

function delete_data(id){
    alert(id)
}