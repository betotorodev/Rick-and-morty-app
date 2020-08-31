const basename =
  process.env.NODE_ENV === "development" ? "/" : "/Rick-and-morty-app/"

const Header = () => {
  const view = `
  <div class="header-main">
    <div class="logo">
    <h1>
      <a href=${basename}>
        <img class="header-logo" src="../src/static/rickAndMorty.png" alt="Rick and Morty logo"/>
      </a>
    </h1>
    </div>
    <div class="header-nav">
      <a href="#/about">About</a>
    </div>
  </div>
  `
  return view
}

export default Header