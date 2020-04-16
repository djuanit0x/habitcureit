import React from "react"
import { Link, navigate } from "gatsby"
import Image from '../components/image'

export default ({name, link, date}) => {
  return (
    <>
      <span>{name}</span>
      <span>{link}</span>
      <span>{date}</span>
    </>
  )
}
