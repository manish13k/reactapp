import React, { memo } from "react";

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Image</th>
                <th>Title</th>
            </tr>
        </thead>
    )
}

export default memo(TableHead);

