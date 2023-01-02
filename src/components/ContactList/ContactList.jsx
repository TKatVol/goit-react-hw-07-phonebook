import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors";
import { Contact } from "components/Contact/Contact";
import { StyledList, StyledItem } from "../ContactList/ContactList.styled";

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
                    <StyledItem key={id}>
                        <Contact id={id} name={name} phone={phone} />
                    </StyledItem>
                );
            })}
        </StyledList >
    )
};
