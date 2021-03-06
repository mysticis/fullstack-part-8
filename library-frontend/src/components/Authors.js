import React from "react"
import { useQuery } from "@apollo/client"
import { ALL_AUTHORS } from "../queries"
const Authors = ({ show, setError }) => {
  const result = useQuery(ALL_AUTHORS)

  let authors
  if (!show) {
    return null
  }
  if (result.loading) {
    return <div>loading...</div>
  }

  authors = result.data.allAuthors

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th>Authors</th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.books.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Authors
