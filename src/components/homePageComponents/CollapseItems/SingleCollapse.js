import React from 'react';

const SingleCollapse = ({ item }) => {
    return (
        <div>
            <div className="collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-black   peer-checked">
                    {item.title}
                </div>
                <div className="collapse-content font-thin  peer-checked">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum distinctio exercitationem officiis consequuntur, sint, eius, facere praesentium dolorem assumenda eum laudantium porro magnam hic. Repellendus dolorum eligendi pariatur facere, consequatur assumenda itaque blanditiis.</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCollapse;

