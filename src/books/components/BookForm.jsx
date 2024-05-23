import { Form } from "react-router-dom"
import { useEffect } from "react"
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_REQUIRE, VALIDATOR_MIN } from "../../shared/util/validators.js";
import Input from '../../shared/components/FormElements/Input.jsx';

export default function BookForm({ book }) {
    const [formState, handleInput, setFormData] = useForm({
        title: {
            value: book ? book.title : '',
            isValid: !!book
        },
        description: {
            value: book ? book.description : '',
            isValid: !!book
        },
        pageCount: {
            value: book ? book.pageCount : 0,
            isValid: !!book
        },
        authors: {
            value: book ? book.authors : '',
            isValid: !!book
        },
        image: {
            value: book ? book.image : '',
            isValid: !!book
        },
    }, false
    );

    useEffect(() => {
        if (book) {
            setFormData({
                title: {
                    value: book.title,
                    isValid: true
                },
                description: {
                    value: book.description,
                    isValid: true
                },
                pageCount: {
                    value: book.pageCount,
                    isValid: true
                },
                authors: {
                    value: book.authors,
                    isValid: true
                },
                image: {
                    value: book.image,
                    isValid: true
                },
            },
                true
            );

        }
    }, [book, setFormData]);

    // console.log(`formState: ${JSON.stringify(formState)}`);
    // console.log(`formState.isValid: ${formState.isValid}`);


    return (
        <Form>
            <img src={formState.inputs.image.value}></img>
            <Input
                id='title'
                label='Title'
                type='text'
                element='input'
                validators={[VALIDATOR_REQUIRE()]}
                onInput={handleInput}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id='description'
                label='Description'
                type='text'
                element='textarea'
                validators={[VALIDATOR_REQUIRE()]}
                onInput={handleInput}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Input
                id='pageCount'
                label='Page Count'
                type='text'
                element='input'
                validators={[VALIDATOR_MIN(1)]}
                onInput={handleInput}
                initialValue={formState.inputs.pageCount.value}
                initialValid={formState.inputs.pageCount.isValid}
            />

            <label>Authors</label>
            <ul>
                {
                    formState.inputs.authors.value.map(author => <li key={author}>{author}</li> )
                }
            </ul>
            <button type='submit' disabled={!formState.isValid}>
                Save
            </button>
        </Form>
    )
}