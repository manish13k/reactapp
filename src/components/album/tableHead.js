import React, { memo } from "react";

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Username</th>
            </tr>
        </thead>
    )
}

export default memo(TableHead);

