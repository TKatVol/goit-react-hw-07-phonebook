import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors";
import { Contact } from "components/Contact/Contact";
import { StyledList } from "../ContactList/ContactList.styled";

export const ContactList = () => {
    const filter = useSelector(selectFilter);
    const contacts = useSelector(selectContacts);
    
    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <StyledList>
            {visibleContacts.map(({ id, name, phone }) => {
                return (
                    <Contact id={id} name={name} phone={phone} key={id} />
                );
            })}
        </StyledList >
    )
};
