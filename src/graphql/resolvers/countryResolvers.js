import { FIND_COUNTRY_BY_ID } from '../queries/countryQueries'

export const CountryResolvers = {
  updateCountry: (_, variables, { cache }) => {
    const id = variables.id

    const data = cache.readQuery({
      query: FIND_COUNTRY_BY_ID,
      variables: { id },
    })

    const updatedCountry = { ...data.Country[0], ...variables }

    cache.writeQuery({
      query: FIND_COUNTRY_BY_ID,
      variables: { id },
      data: { Country: [updatedCountry] },
    })

    return null
  },
}
