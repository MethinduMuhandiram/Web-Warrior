import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"

import { TextField, Button } from "@mui/material"

const Contact = () => {
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
          onSubmit="submit"
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
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            className="w-full bg-[#085879] hover:bg-[#0878a8] disabled:bg-slate-400"
          >
            Send Message
          </Button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
