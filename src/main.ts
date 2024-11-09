import './style.css'
import viteLogo from '/pushups.webp'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </div>
`

