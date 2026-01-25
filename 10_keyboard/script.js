const result = document.querySelector('.main');

window.addEventListener('keydown',(e)=>{
    result.innerHTML = `
    <table style="width:100%">
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key == " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    
    `
})