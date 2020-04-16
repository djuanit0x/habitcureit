import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "../styles/index.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import Habit from '../components/habit'

export default () => {
  const [habits, setHabits] = useState(null)
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    if (status !== "loading") return

    axios(`/.netlify/functions/get-all-habits`).then(result => {
      console.log(result)
      if (result.status !== 200) {
        console.error("Unable to load the habits")
        return
      }

      setHabits(result.data.habits)
      setStatus("loaded")
    })

    return () => {
      setStatus(false)
    }
  }, [status])

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div
        style={{
          fontStyle: "normal",
          fontWeight: "bold",
          color: "#000000",
        }}
      >
        Popular this week
      </div>

      {habits ? (
        <div className={styles.habits}>
          {habits.map(habit => (
            <div key={habit._id} className={styles.habit}>
              <Image />
              <Habit name={habit.name} link={habit.link} date={habit.date} />>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.loading}>loading habits...</p>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            borderLeft: "brown",
            borderLeftStyle: "dashed",
            paddingLeft: "3rem",
          }}
        >
          <p>Now go build something great.</p>
          <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
            <Image />
          </div>
        </div>
      </div>
    </Layout>
  )
}
