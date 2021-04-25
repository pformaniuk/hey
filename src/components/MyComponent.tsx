import { gql, useMutation, useQuery } from "@apollo/client";

const CHANGE_VISIBILITY = gql`
  mutation UpdateVisibilityFilter($value: String!) {
    updateVisibilityFilter(value: $value) @client
  }
`;

const GET_TODOS = gql`
  query GetTodos {
    todos @client {
      id
      completed
      text
    }
    visibilityFilter
  }
`;

export const Component1 = () => {
    const [ changeVisibility] = useMutation( CHANGE_VISIBILITY);

    const { data } = useQuery(GET_TODOS);
        
    return (<div>{data?.visibilityFilter}
    <button onClick={() => changeVisibility({variables: { value: 'sdfd1111' } })}>
        Click me
      </button>
    </div>)
}