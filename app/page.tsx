import Upvote from "@/components/Upvote"
import Nav from "@/components/Nav"


const Home = () => {
  return (
    <>
      <Nav launchedApp={false} />
      <section className="cipher_container">
        <h1 className="heading">CipherX</h1>
        <div className="chat_desc">
          <div className="character_chat">
            <span className="character cipher_guard">Auth Guardian</span>
            <span>:&nbsp;&nbsp;</span>
            <span>I&apos;ll show your key strength!</span>
          </div>
        </div>
        <Upvote color="#26ff17" upvoteHeading="Exo-Upvote"></Upvote>
      </section>
    </>
  )
}

export default Home