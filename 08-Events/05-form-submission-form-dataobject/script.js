const form = document.querySelector('#form');

const onSubmit = (e) => {
    e.preventDefault();
    const textInput = document.querySelector('#textInput').value;
    const selectInput = document.querySelector('#priority-input').value;

    console.log(textInput,selectInput)
}

const onSubmit2 = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(formData);

    //get()
    const item = formData.get('item');
    const selectItem = formData.get('priority');
    console.log(item, selectItem);

    // entries()
    const entries = formData.entries();
    for (const entry of entries) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}

form.addEventListener('submit', onSubmit2);