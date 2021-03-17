import React, { useState } from 'react'
import { Box } from 'reflexbox'
import { Input } from '@rebass/forms/styled-components'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { GET_ALL_COUNTRIES } from '../graphql/queries/countryQueries'
import Select from 'react-select'

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
        onChange={(e) => (window.location.href = `/countries/${e.value}`)}
        onBlur={() => console.log('blur')}
        placeholder="Buscar país"
      />
    </Box>
  )
}

const SInput = styled(Input)`
  border: unset;
  padding: 0;

  &:focus {
    outline-width: 0;
    outline: none;
  }
`

export default Search
