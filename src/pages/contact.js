import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"

const Contact = () => {
  return (
    <Layout>
      <div>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.formControl}>
        <form
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact-form"></input>
          <label>
            Name
            <input type="text" name="name" id="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" required />
          </label>
          <label>
            Subject
            <input type="text" name="subject" id="subject" required />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
