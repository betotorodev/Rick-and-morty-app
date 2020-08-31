import getData from "../utils/getData"

const Footer = async () => {
  const data = await getData()

  let ancles = []
  for (let i = 1; i <= data.info.pages; i++) {
    ancles.push(i)
  }

  let a = 0
  const view = `
    <footer>
        <ul class="footer-pages">
            ${ancles.map(() => `
            <li>
              <a href="#/?page=${++a}/">${a}</a>
            </li>
            `).join("")}
        </ul>
    </footer>
    `
  return view
}

export default Footer
