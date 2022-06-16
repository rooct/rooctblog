import React from 'react';
import Link from '@docusaurus/Link';

export default (props) => {
    return (
        <>
            <Link to={props.href}>
                <div className=' border text-center py-6 rounded-lg shadow hover:shadow-md cursor-pointer'>
                    {props.children}
                </div>
            </Link>
        </>
    )
}