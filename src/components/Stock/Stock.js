import React, { useEffect, useState } from 'react';
import MyDrawer from '../../components/common/drawer';
import 'devextreme/dist/css/dx.light.css';
import DevXDataGrid from '../../components/common/datagrid';

export default function Stock(props) {
    const [data, setData] = useState(props.data);

    useEffect(() => {
        setData(props.data);
    }, [props.data])
    
    return (
        <div >
            <MyDrawer />
            <div>
                <DevXDataGrid data={data} GroupPanel={true} SearchPanel={true} />
            </div>
        </div>
    );
}
