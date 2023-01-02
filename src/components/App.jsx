import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { fetchContacts } from "redux/operations";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { selectIsLoading, selectError } from "redux/selectors";
import { StyledContainer, StyledTitleH1, StyledTitleH2 } from "../components/App.styled";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledContainer>
      
      <StyledTitleH1>Phonebook</StyledTitleH1>
      <ContactForm />
    
      <StyledTitleH2>Contacts</StyledTitleH2>
      <Filter />
      {isLoading && !error && <p>"Loading...🚀"</p>}
      <ContactList />
      <Toaster /> 
    </StyledContainer>
  );
};

