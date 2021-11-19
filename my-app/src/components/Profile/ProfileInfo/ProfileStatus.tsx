import React from "react";
import s from './ProfileInfo.module.css'

interface IRecipeProps {
    updateStatus:(status:string) => void
    status: string;
}

interface IRecipeState {
}

class ProfileStatus extends React.Component <IRecipeProps, IRecipeState>{
    // statusInputRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        debugger
        this.setState( {
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e:React.FormEvent<HTMLInputElement>) => {
        this.setState({
            stauts: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps:IRecipeProps,presState:IRecipeState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        // this.state
        // this.props
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick= { this.activateEditMode } >{this.props.status || 'no status'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;



// type ProfileType = {
//     status: string
// }

// const ProfileStatus = (props: ProfileType) => {
//
//     return (
//         <div>
//             <div>
//                 <span>{props.status}</span>
//             </div>
//             <div>
//                 <input value={props.status}/>
//             </div>
//         </div>
//
//
//     )
// }
//
// export default ProfileStatus;







{/*<div>*/
}
{/*    <img*/
}
{/*        alt=''*/
}
{/*        src="https://www.digiseller.ru/preview/917746/p1_2822191_baa2d3c2.jpg"/>*/
}
{/*</div>*/
}