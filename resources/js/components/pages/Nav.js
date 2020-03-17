import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav>
                <ul>  <Link to='/'>
                    <li>Home</li>
                    </Link>
                      <Link to='/About'>
                    <li>About</li>
                      </Link>
                     <Link to='/List'>
                        <li> List</li>
                     </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;