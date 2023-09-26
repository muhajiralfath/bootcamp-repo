import { useDispatch } from "react-redux";
import { showError, showLoading } from "../../store/AppAction";

const ToDo = (service) => {
    const dispatch = useDispatch();
    const { getTodoService } = service();
    
    const onLoadTodo = async () => {
        try {
            
            dispatch(showLoading(true));
            let todo = await getTodoService();            
            return todo;
        } catch (error) {
            dispatch(showError(error));
        } finally {
            dispatch(showLoading(false));
        }
    };

    return { onLoadTodo };
};

export default ToDo;
