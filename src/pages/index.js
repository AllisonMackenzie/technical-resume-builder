import React, { useContext } from "react"
import { css } from "@emotion/react"
import { useTheme } from "@emotion/react"
import Context from "../store/context"
import Layout from "../components/Layout"
import Toggle from "../components/Toggle"

const IndexPage = () => {
  const { state } = useContext(Context)

  const theme = useTheme()

  return (
    <React.Fragment>
      <Layout>
        <Toggle />
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
