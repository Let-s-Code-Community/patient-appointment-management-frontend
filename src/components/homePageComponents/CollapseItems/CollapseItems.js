import React from 'react';
import SingleCollapse from './SingleCollapse';
const CollapseItems = () => {

    const collapseData = [
        {
            "id": 1,
            "title": "How is MindBeacon different from other online therapy providers"
        },
        {
            "id": 2,
            "title": "How is MindBeacon different from other online therapy providers"
        },
        {
            "id": 3,
            "title": "How is MindBeacon different from other online therapy providers"
        },
        {
            "id": 4,
            "title": "How is MindBeacon different from other online therapy providers"
        },
    ];
    return (

        <div className=" md:px-32 my-14 mx-8">
            <div className="text-4xl font-black">
                🙋 Hi,How can I help you?
            </div>
            <div>
                {collapseData.map(item => (<SingleCollapse key={item.id} item={item} />))}
            </div>
            <div className="mt-7">
                <button className="px-6 py-1.5 btn-accent rounded-full">More questions? Visit our full FAQ section.</button>
            </div>
        </div>

    );
};

export default CollapseItems;
