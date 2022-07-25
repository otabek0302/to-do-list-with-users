function startLoader () {
     const loader = document.querySelector(".loader");
     const load_box = document.querySelector(".load_box");

     setTimeout(function () {
          loader.classList.add('hide');
          load_box.classList.add('hide');
     }, 2000);
}    
     startLoader()
     
     window.addEventListener("DOMContentLoaded", function () {
          let users = [
               {
                    id: Math.random(),
                    age: 20,
                    fullName: 'Otabek Amonov',
               },
               {
                    id: Math.random(),
                    age: 21,
                    fullName: 'Amir Baxronov',
               },
          ]

          let box = document.querySelector('.box');
          //Modal
          let modal = document.querySelector('.modal');
          let modal_form = modal.firstElementChild;
          function reload (arr) {
               box.innerHTML = "";
               for (let item of arr) {
                    let item_box = document.createElement('tr'),
                         id = document.createElement('td'),
                         fullName = document.createElement('td'),
                         birthYear = document.createElement('td'),
                         action = document.createElement('td'),
                         edit = document.createElement('span'),
                         remove = document.createElement('span');

                    item_box.classList.add('item_box');
                    id.classList.add('id');
                    fullName.classList.add('fullName');
                    birthYear.classList.add('birthYear');
                    action.classList.add('action');
                    edit.classList.add('edit');
                    remove.classList.add('remove');

                    id.innerHTML = arr.indexOf(item) + 1;
                    birthYear.innerHTML = new Date().getFullYear() - item.age;
                    fullName.innerHTML = item.fullName;
                    edit.innerHTML = '&#128395;';
                    remove.innerHTML = '&#128465;';

                    action.append(edit, remove);
                    item_box.append(id, fullName, birthYear, action)
                    box.append(item_box)

                    edit.onclick = () => {

                         modal.classList.remove('hide')
                         modal_form.classList.remove('hide')

                         let name = modal.querySelector('.text');
                         let birth = modal.querySelector('.birth');
                         
                         name.setAttribute('value', item.fullName)
                         birth.setAttribute('value', item.age)

                         let modal_formm = document.forms.modal_add;
                         modal_formm.onsubmit = (e) => {
                              modal.classList.add('hide')
                              modal_form.classList.add('hide')
                              e.preventDefault()

                              let finded = arr.find(elem => elem.id === item.id)
                             
                              finded.fullName = name.value;
                              finded.age = birth.value;

                              console.log(finded);
                              reload(users);
                         }
                         
                    };

                    remove.onclick = () => {
                         let idx = arr.indexOf(item)

                         arr.splice(idx, 1)

                         reload(arr)
                         console.log(users);
                    };
               }
          }
          reload(users)
          let  form = this.document.forms.add;
               
               form.onsubmit = (e) => {
                    e.preventDefault()

                    let newObj = {
                         id: Math.random(),
                    };

                    let fm = new FormData(form);
                    fm.forEach((value, key) => {
                         newObj[key] = value;
                    })
                    users.push(newObj);
                    reload(users)
               }
          console.log(users);
          // Close Modal
          let close = this.document.querySelector('.close');
          close.onclick = () => {
               modal.classList.add('hide');
               modal_form.classList.add('hide');
          }
})