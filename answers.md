1. What is the purpose of using _sessions_?

    used to allow a server to store information about a client. Used to persist authentication information so there is no need to re-enter credentials on every new request the client makes to the server

1. What does bcrypt do to help us store passwords in a secure manner.

    password hashing function.

1. What does bcrypt do to slow down attackers?

   Implements an algorithm that hashes the information multiple times.

1. What are the three parts of the JSON Web Token?

   The header. The header will contain the algorithm with the token type.
   The payload.  information or any other data we’d like to store in the token,
   The signature.