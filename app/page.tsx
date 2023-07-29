import Upvote from "@/components/Upvote"
import { Password } from "../components/Password"


const Home = () => {
  return (
    <section className="cipher_container">
      <h1 className="heading">CipherX</h1>
      <p className="description"><span className="cipher_guard">Cipher Guardian</span>: I&apos;ll show your key strength!</p>
      <Password></Password>
      <Upvote color="#26ff17" upvoteHeading="Exo-Upvote"></Upvote>
    </section>
  )
}

export default Home