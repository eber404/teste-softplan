import { gql } from '@apollo/client'

export const UPDATE_COUNTRY = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`
