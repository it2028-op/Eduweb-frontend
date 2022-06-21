import { gql } from "@apollo/client";

export const HEADER = gql`
  {
    header{
      data{
        attributes{
          name
          motto
          logo{
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const HOMEPAGE = gql `
  {
    homepage {
      data {
        id
        attributes {
          welcome
        }
      }
    }
  }
`;

export const CATEGORIES = gql`
  {
    realms(sort: "name:asc") {
      data {
        id
        attributes {
          name
          namelat
          pic {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

