import { gql } from "@apollo/client"

export const CURRENT_USER_QUERY = gql`
query Me {
  me {
    id
    username
    devices {
      id
      name
      type
      description
      signalPower
      connection
      status
      alerts
    }
  }
}
`