import logo from "../logo.svg"
export default function HomePage () {
    return (
        <div className="home-page">
          <h1>Welcome to our site!</h1>
         <img className="logo" src={logo} alt="logo" />
        </div>
    )
}
