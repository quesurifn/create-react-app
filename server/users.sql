CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    addr1 VARCHAR,
    addr2 VARCHAR,
    state VARCHAR,
    zipcode VARCHAR,
    has_ordered BOOLEAN, 
    timestamp timestamp default current_timestamp
); 