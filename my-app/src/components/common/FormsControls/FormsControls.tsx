import React from "react";
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import styles from './FormsControls.module.css'

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> =
    ({meta: {touched, error}, children}) => {
        const hasError = touched && error;
        return (
            <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
                {/*<div className={styles.error}>*/}
                <div>
                    {children}
                </div>
                { hasError && <span>{error}</span> }
            </div>
        )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea{...input}{...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    // let input = props.input
    // let meta = props.meta
    // const hasError = meta.touched && meta.error
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input{...input}{...restProps}/></FormControl>
}

// const FormControl: React.FC<FormControlPropsType> =
//     ({meta: {touched, error}, children}) => {
//         const hasError = touched && error;
//         return (
//             <div className={styles.formControl + '' + (hasError ? styles.error : "")}>
//                 <div>
//                     {children}
//                 </div>
//                 {hasError && <span>{error}</span>}
//             </div>
//
//         )
//     }

// export const Textarea = (props: any) => {
//     return <FormControl {...props}><textarea {...input} {...props}/></FormControl>
// }

// export const Textarea: React.FC<WrappedFieldProps> =
//     ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//         {/*<div className={styles.error}>*/}
//             <div>
//                 <textarea{...input} {...props} />
//             </div>
//             { hasError && <span>{meta.error}</span> }
//         </div>
//     )
// }

// export const Input: React.FC<WrappedFieldProps> =
//     ({input, meta, ...props}) => {
//         const hasError = meta.touched && meta.error;
//         return (
//             <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//                 {/*<div className={styles.error}>*/}
//                 <div>
//                     <input {...input} {...props} />
//                 </div>
//                 { hasError && <span>{meta.error}</span> }
//             </div>
//         )
//     }


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

