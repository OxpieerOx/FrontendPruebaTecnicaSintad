function accountActive() {

  let entidad = document.getElementById('entidad')
  if (entidad) {
    entidad.addEventListener('click' , () => {
      entidad.parentElement.classList.toggle('active')
    })
  }
}

// $(function() {
//   alert('Hello, custom js');
// });
