
export const closeModalWindow = () =>
    {
        document.querySelector('.modal-window').classList.remove('modal-window-show');
        document.querySelector('.textarea').value=""
    }


export const showModalWindow =() =>document.querySelector('.modal-window').classList.add('modal-window-show')

export let propsId;
export const editItems = (title,id) =>
    {
        showModalWindow()
        document.querySelector('.textarea').value=title  //textArea.value=title  -- TypeError: textArea is null ???
        propsId = id;
        
    }
    
