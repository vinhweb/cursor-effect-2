const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', (e)=>{
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = (y-10) +'px'
  cursor.style.left = (x-10) +'px'
  cursor.style.display = 'block'
})

document.addEventListener('mouseout', ()=>{
  cursor.style.display = 'none'
})

document.addEventListener('click', ()=>{
  cursor.classList.add('expand')

  setTimeout(()=>{
    cursor.classList.remove('expand')
  }, 400)
})