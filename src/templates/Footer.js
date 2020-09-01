import getData from "../utils/getData"
import getHash from "../utils/getHash"

const Footer = async () => {
  const data = await getData()
  const hash = await getHash()
  const page = hash.includes('page')

  let links = []
  for (let i = 1; i <= data.info.pages; i++) {
    links.push(i)
  }

  const view = `
    <footer class=${hash === '/' || page ? '' : 'hidden'}>
        <ul class="footer-pages">
            ${links.map((id) => `
            <li>
              <a href="#/?page=${id}/">${id}</a>
            </li>
            `).join("")}
        </ul>
    </footer>
    `
  return view
}

export default Footer
