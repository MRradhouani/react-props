import React from 'react'
import PropTypes from 'prop-types';

function component(props) {
    function handelClick(e) {
        e.preventDefault();
        alert("im a alert cheking");
    }
    const divStyle = {
        color: 'blue',
        background:'red'
        
      };
      
    return (
        <div>
            <h1 style={divStyle}>hello&nbsp;&nbsp; </h1>

            <table >
                <tr>
                    <td> <h1>  {props.name} &nbsp;&nbsp;</h1></td>
                    <td> <h1>  {props.bio} &nbsp;&nbsp;</h1></td>
                    <td><h1>  {props.profession} &nbsp;&nbsp;</h1> </td>
                    <td> <div><img src={'http://via.placeholder.com/200x100'} />{props.children}</div></td>
                </tr>

            </table>
            <div>
            <a href="/" onClick={handelClick} > click me to checking</a>
        </div>
        </div>
    )
}
component.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
   requiredNumber: PropTypes.number.isRequired,
   optionalBoolean: PropTypes.bool,
   optionalString: PropTypes.string,
   optionalNumber: PropTypes.number,
};
export default component;