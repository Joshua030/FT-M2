const selectButton = document.getElementById('boton');
const idButton = document.getElementById('search');
const deleteButton = document.getElementById('delete');

selectButton.addEventListener("click", searchFriends);
idButton.addEventListener("click", searchId);
deleteButton.addEventListener('click', deleteId);

function searchFriends() {
    let list = document.getElementById('lista');
    list.innerHTML = '';
    $.get(`http://localhost:5000/amigos`, function(data){
       const names = data.map(({name})=>{
        let li = document.createElement("li");
        li.innerText = name;
        list.appendChild(li);
      });
      });
    }

    function searchId() {
        $.get(`http://localhost:5000/amigos`, function(data){
           let idNumber = document.getElementById('input').value;
           const friend = document.getElementById("amigo")
           const name = data.find(({id})=>id==idNumber).name;
           friend.innerText=name; 
        
            // let li = document.createElement("li");
            // li.innerText = name;
            // list.appendChild(li);
          });
        }
        function deleteId() {
            $.get(`http://localhost:5000/amigos`, function(data){
                    const nameToDelete = data.find(({id})=>id==idNumber).name;
                    list.parentNode.removeChild(list[`${Number(id)}`]);
                  });   
            }
        
    
