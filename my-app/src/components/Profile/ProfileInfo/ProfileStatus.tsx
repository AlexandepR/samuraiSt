import React from "react";
import s from './ProfileInfo.module.css'

interface IRecipeProps {
    status: string;
}

interface IRecipeState {
}

class ProfileStatus extends React.Component <IRecipeProps, IRecipeState>{
    state = {
        editMode: false
    }
    activateEditMode = () => {
        debugger
        this.setState( {
            editMode: true
        })
    }
    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick= { this.activateEditMode } >{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
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