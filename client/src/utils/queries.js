import { gql } from '@apollo/client';

export const QUERY_DONATIONS = gql `
query donations{
    donations {
        _id
        amount
        donor
        date
    }
}
`