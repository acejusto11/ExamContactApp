import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'

import ContactList from './ContactList';

const fakeProps = {
    contacts: [{
        "title": "Mr.",
        "firstName": "Sanemi ",
        "lastName": "Shinazugawa",
        "gender": "Male",
        "emailAddress": "sanemi@delmonte.com",
        "mobileNumber": "6767676",
        "address": "",
        "companyName": "Del Monte Philippines",
        "position": "CFO",
        "id": 1
      },
      {
        "title": "Mr.",
        "firstName": "Giyu",
        "lastName": "Tomioka",
        "gender": "Male",
        "emailAddress": "tomioka@pandg.com",
        "mobileNumber": "7676 767676",
        "address": "",
        "companyName": "Procter and Gamble",
        "position": "HR Director",
        "id": 2
      },]
};

let component;
beforeEach(() => {
    component = render(<ContactList contacts={fakeProps.contacts}/>);
});
afterEach(cleanup);

test('renders contact card', () => {  
  fakeProps.contacts.forEach(contact => {
    const contactCard = component.container.querySelector(`#contact-${contact.id}`);
    expect(contactCard).toBeInTheDocument();
  })
});

test('should invoke a method if edit button is clicked ', () => {  
    const onEdit = jest.fn();
    component = render(<ContactList contacts={fakeProps.contacts} onEditContact={onEdit}/>);
    const editButton = component.container.querySelector(`#edit-1`);
    fireEvent.click(editButton);

    expect(onEdit).toHaveBeenCalledTimes(1);
});

test('should invoke a method if delete button is clicked ', () => {  
    const onDelete = jest.fn();
    component = render(<ContactList contacts={fakeProps.contacts} onDeleteContact={onDelete}/>);
    const deleteButton = component.container.querySelector(`#delete-1`);
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledTimes(1);
});

test('should not render contact card if contacts is null', () => {  
    component = render(<ContactList contacts={null}/>);
    const card = component.container.querySelector(`#contact-1`);

    expect(card).not.toBeInTheDocument();
});