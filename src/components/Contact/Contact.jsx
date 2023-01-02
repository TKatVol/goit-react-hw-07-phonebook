import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import toast from "react-hot-toast";
import { StyledContact, StyledButton } from "./Contact.styled";

export const Contact = ({ id, name, phone }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        toast.success("Deleted", { duration: 3000, position: 'top-center', icon: '✔️' });
        dispatch(deleteContact(id));
    };

    return (
        <>
            <StyledContact>{name}: {phone}</StyledContact>
            <StyledButton type="button" onClick={handleClick}>Delete</StyledButton>
        </>
    )
};