import React, { useState } from 'react';

const NewData = () => {
    const [title, setTitle] = useState('');
    const [datas, setDatas] = useState([]);
    const addDatas = () => {
        setDatas([...datas, title]);
    }
    return (
        <div>

            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit" value="Add" onClick={addDatas}> Add</button><br/>
            {datas.map(data => (
                
                    <label>{data}<br/></label>
                
            ))}

        </div>

    );
}
export default NewData;