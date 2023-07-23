import { Password } from "../components/Password"


const Home = () => {
  return (
    <section className="cipher_container">
      <h1 className="heading">CipherX</h1>
      <p className="description"><span className="cipher_guard">Cipher Guardian</span>: I&apos;ll show you your strength!</p>
      <Password></Password>
    </section>
  )
}

export default Home