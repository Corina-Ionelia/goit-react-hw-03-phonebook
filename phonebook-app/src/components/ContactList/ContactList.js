// src/components/ContactList/ContactList.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul `
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li `
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button `
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff4c4c;
  }
`;

function ContactList({ contacts, onDeleteContact }) {
    return ( <
        List > {
            contacts.map(({ id, name, number }) => ( <
                ListItem key = { id } > { name }: { number } <
                Button onClick = {
                    () => onDeleteContact(id) } > Delete < /Button> <
                /ListItem>
            ))
        } <
        /List>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;