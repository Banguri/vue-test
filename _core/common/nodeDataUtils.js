


/**
 *테이블컬럼 키값 반환
 * @param columns
 * @returns {[]}
 */
export function getKeyColumns(columns){
    const keys = [];
    for(let i in columns){
        keys.push(columns[i]['field']);
    }
    return keys;
}

/**
 * 테이블컬림 키,value 반환.
 * @param columns
 * @param items
 * @returns {[]}
 */
export function getListDataMake(columns,items){
    const keys = getKeyColumns(columns);
    let itemData = [];
    for(let i in items) {
        let data = {};
        let item = items[i];
        data['id'] = item['id'];
        for (let j in keys) {
            let key = keys[j];
            if("id" == key) continue;
            let keyValue = item[key];
            let value = "";
            if(_.isObject(keyValue)){
                value = keyValue['value'];
            }else{
                value = keyValue;
            }
            data[key] = value;
        }
        itemData.push(data);
    }
    return itemData;
}