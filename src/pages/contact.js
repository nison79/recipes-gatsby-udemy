import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
              <p>
              Food truck glossier cardigan pok pok migas. Cold-pressed iPhone trust fund, wolf migas cornhole keytar fashion axe celiac polaroid 3 wolf moon photo booth beard portland. Ramps kickstarter raw denim brooklyn s
              </p>

              <p>
              Fam 90's selfies, +1 man braid leggings heirloom kale chips cray 3 wolf moon. Bushwick pok pok hot chicken trust fund polaroid organic vexillologist austin semiotics DIY intelligentsia unicorn. 8-bit thundercats normcore blo.
              </p>

              <p>
              Trust fund selfies air plant asymmetrical VHS. PBR&B mixtape organic 8-bit small batch kitsch. Literally hoodie kale chips, ugh scenester put a bird on it fanny pack lomo tousled. Bespoke copper mug truffaut freegan umami pabst cornhole bushwick bitters tacos tattooed DIY fam hammock.
              </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name"/>
              </div>

              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email"/>
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" ></textarea>
              </div>
              <button type="submit" className="btn block">Submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
