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
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact

const handleSubmit = event => {
  event.preventDefault()

  const myForm = event.target
  const formData = new FormData(myForm)

  fetch("/contact", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch(error => alert(error))
}

document.querySelector("form").addEventListener("submit", handleSubmit)
