import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";

const maxLength50 = maxLengthCreator(50)

let AddMessageForm = (props:any) => {         // пофиксить типизацию
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       placeholder='Enter your message' name='newMessageBody'
                       />
            </div>
            <div>
                <button>Send2</button>
            </div>
        </form>
    )
}
// AddMessageFormRedux =
export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm)