import React, { useState } from "react"
import { navigate } from "gatsby-link"
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"

import { TextField, Button, Switch } from "@mui/material"

// Form Helpers
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const Contact = () => {
  const [checked, setChecked] = useState(true)
  const [fullName, setFullName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Contact",
        fullName,
        company,
        email,
        message,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => console.log(error))
  }

  const switchHandler = event => {
    setChecked(event.target.checked)
  }
  return (
    <Layout>
      <div>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.formControl}>
        <form
          name="Contact"
          method="post"
          data-netlify="true"
          action="/success"
          data-netlify-honeypot="bot-field"
          // onSubmit="submit"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="Contact"></input>
          <div className="flex flex-col md:flex-row my-5 gap-5">
            <TextField
              id="full-name"
              name="full-name"
              type="text"
              label="Full Name"
              required
              variant="outlined"
              className="w-full"
              sx={{
                backgroundColor: "white",
              }}
              onChange={e => setFullName(e.target.value)}
            />
            <TextField
              id="company"
              name="company"
              type="text"
              label="Company"
              required
              variant="outlined"
              className="w-full"
              sx={{
                backgroundColor: "white",
              }}
              onChange={e => setCompany(e.target.value)}
            />
          </div>

          <div className="my-5">
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email Address"
              required
              variant="outlined"
              className="w-full"
              sx={{
                backgroundColor: "white",
              }}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="my-5 ">
            <TextField
              id="message"
              name="message"
              type="text"
              label="Your Message"
              required
              multiline
              rows={4}
              className="w-full"
              sx={{
                backgroundColor: "white",
              }}
              onChange={e => setMessage(e.target.value)}
            />
          </div>

          {/* Switch */}
          <div className="flex my-5 gap-2 items-center">
            <Switch defaultChecked color="primary" onChange={switchHandler} />
            <p className="text-sm">I agree to the terms and conditions</p>
          </div>

          <Button
            disabled={!checked}
            type="submit"
            variant="contained"
            className="w-full bg-[#085879] hover:bg-[#0878a8] disabled:bg-slate-400"
          >
            Send Message
          </Button>
          {/* <div className="flex justify-center">
            <SocialMediaLinks />
          </div> */}
        </form>
      </div>
    </Layout>
  )
}

export default Contact
