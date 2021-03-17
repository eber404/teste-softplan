import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'
import { Box } from 'reflexbox'
import styled from 'styled-components'
import { GET_ALL_COUNTRIES } from '../graphql/queries/countryQueries'

const Search = (props) => {
  const [options, setOptions] = useState({
    label: 'Selecione um país',
    value: -1,
  })

  useQuery(GET_ALL_COUNTRIES, {
    onCompleted: (data) => {
      const newOptions = data.Country.map((c) => {
        return { label: c.name, value: c._id }
      })

      setOptions(newOptions)
    },
  })

  const handleSelect = (id) => props.history.push(`/countries/${id}`)

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      maxWidth="380px"
      height="42px"
    >
      <Select
        options={options}
        components={{ Input: SInput }}
        onChange={(e) => handleSelect(e.value)}
        placeholder="Buscar país"
      />
    </Box>
  )
}

const SInput = styled.input`
  border: unset;
  padding: 0;

  &:focus {
    outline-width: 0;
    outline: none;
  }
`

export default withRouter(Search)
