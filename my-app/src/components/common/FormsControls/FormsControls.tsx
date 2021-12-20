import React from "react";
import {WrappedFieldProps} from "redux-form";
import styles from './FormsControls.module.css'

export const Textarea: React.FC<WrappedFieldProps> =
    ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
        {/*<div className={styles.error}>*/}
            <div>
                <textarea{...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> =
    ({input, meta, ...props}) => {
        const hasError = meta.touched && meta.error;
        return (
            <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
                {/*<div className={styles.error}>*/}
                <div>
                    <input {...input} {...props} />
                </div>
                { hasError && <span>{meta.error}</span> }
            </div>
        )
    }


// export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
//     return <textarea{...input}{...props}/>
// }


// type FormControlPropsType = {
//     meta: WrappedFieldMetaProps
// }

// export const Textarea: React.FC<WrappedFieldProps> =
//     ({input,
//     meta,
//     ...props}) => {
//     return (
//         <div className={styles.formControl + ' ' + styles.error}>
//             <textarea {...input} {...props} />
//         </div>
//     )
// }

// export const Textarea = (props: any) => {
//     return (
//         <div className={styles.formControl}>
//             <textarea{...props} />
//         </div>
//     )
// }

