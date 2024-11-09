import './style.css'
import image from '/pushups.webp'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <img src="${image}" class="image" alt="Vite logo" />
  </div>
`

