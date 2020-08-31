const basename =
  process.env.NODE_ENV === "development" ? "/" : "/Rick-and-morty-app/"

const Header = () => {
  const view = `
  <div class="header-main">
    <div class="logo">
    <h1>
      <a href=${basename}>
        <img class="header-logo" src="https://lh3.googleusercontent.com/proxy/7PvltShE0ByR1LAIrDBoxZ3hPO0TpMsL6sYOTKiznmjyy1NzOKVHcBpywfUYZXvV01ZUJHyFoFDkklQajVn-AN56mGGMAbYT8Lc3raNRZ4mKja-mEUA" alt="Rick and Morty logo"/>
      </a>
    </h1>
    </div>
  </div>
  `
  return view
}

export default Header