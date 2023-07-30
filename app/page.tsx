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
            <span className="character cipher_guard">Cipher Guardian</span>
            <span>:&nbsp;&nbsp;</span>
            <span>I can show you your key strength!</span>
          </div>
          <div className="character_chat">
              <span className="character coordinator">Coordinator</span>
              <span>:&nbsp;&nbsp;</span>
              <span>Launch the App and meet us on the other side</span>
            </div>
        </div>
        <Upvote color="#26ff17" upvoteHeading="Exo-Upvote"></Upvote>
      </section>
    </>
  )
}

export default Home