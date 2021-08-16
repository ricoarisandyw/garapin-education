import { FormControl, FormGroup, FormHelperText, Input, InputLabel } from '@material-ui/core'
import React from 'react'

const CreateTeacher = () => {
    function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        const body = new FormData(e.target)
        const allInput = e.target.getElementsByTagName('input')

        let finalValue: any = {}
        for (let i = 0; i < allInput.length; i++) {
            const input = allInput.item(i)
            if (input && input.type === "checkbox") { // === Handle Checkbox
                if(input.checked){
                    if(finalValue[input.name] && finalValue[input.name].length > 0) finalValue[input.name].push(input.value)
                    else finalValue[input.name] = [input.value]
                } else if(finalValue[input.name] === null){
                    finalValue[input.name] = []
                }
            } else if (input && input.type == "radio"){ // === Handle Radio
                if(input.checked) finalValue[input.name] = input.value
            } else if (input && input.name !== "") { // === Handle Edit Text
                finalValue[input.name] = input.value
            }
        }
        // Checkbox cannot be get
        console.log(finalValue)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>H
                <FormGroup>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input name="firstName" id="my-input" aria-describedby="my-helper-text" />
\                </FormGroup>
                <input type="radio" name="gender" value="male" />Male
                <input type="radio" name="gender" value="female" />Female
                <input type="date" name="date" />
                <input type="datetime" name="datetime" />
                <input type="time" name="time" />
                <h3>ORDER</h3>
                <input type="checkbox" name="order" value="food" />Food
                <input type="checkbox" name="order" value="drink" />Drink
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default CreateTeacher