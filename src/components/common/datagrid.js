import React, { useEffect, useState } from 'react';
import DataGrid, { Grouping, GroupPanel, Pager, Paging, SearchPanel, } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';

export default function DevXDataGrid(props) {
    const [collapsed, setCollapsed] = useState(false);
    const [data, setData] = useState(props.data);
    const pageSizes = [10, 25, 50, 100];

    const onContentReady = (e) => {
        if (!collapsed) {
            e.component.expandRow(['EnviroCare']);
            setCollapsed(true)
        }
    }

    useEffect(() => {
        setData(props.data);
    }, [props.data]);

    return (
        <DataGrid
            dataSource={data}
            allowColumnReordering={true}
            rowAlternationEnabled={true}
            showBorders={true}
            onContentReady={onContentReady}
        >
            <GroupPanel visible={props.GroupPanel} />
            <SearchPanel visible={props.SearchPanel} highlightCaseSensitive={true} />
            <Grouping autoExpandAll={false} />
            <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
            <Paging defaultPageSize={10} />
        </DataGrid>
    );
}
