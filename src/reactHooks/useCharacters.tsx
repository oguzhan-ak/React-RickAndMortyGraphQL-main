import { useQuery, gql } from "@apollo/client";
const GET_RICK_AND_MORTY_CHARACTERS = gql`
  query GetCharacters($page: Int!, $filter: FilterCharacter!) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        location {
          name
        }
        image
      }
    }
  }
`;

export default function useCharacters(page : any, selectedValue : any) {
  var { data, loading } = useQuery(GET_RICK_AND_MORTY_CHARACTERS, {
    variables: {
      page,
      filter: { name: selectedValue },
    },
  });
  return { data, loading };
}
