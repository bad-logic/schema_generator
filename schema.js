// VALUE        TYPEOF
// null         object
// object       object
// array        object
// undefined    undefined
// string       string
// number       number
// boolean      boolean
//


/**
 * GET THE DATA TYPE OF ANY JAVASCRIPT OBJECT
 *
 * @param   {object}  x  ANY JAVASCRIPT OBJECT
 *
 * @return  {type}     TYPE OF THE JAVASCRIPT OBJECT
 */
function getType(x) {
    return typeof(x) !== "object" ? typeof(x) : ((x === null) ? null : (Array.isArray(x) === true ? "Array" : "object"));
}

/**
 * GET THE SCHEMA FOR ANY JAVASCRIPT ARRAY OBJECT
 *
 * @param   {Array}  array  ANY JAVASCRIPT ARRAY
 *
 * @return  {Schema}         RETURNS THE SCHEMA FOR GIVEN ARRAY
 */
function getArraySchema(array) {
    if (getType(array[0]) === "Array") {
        return convertToArray(getArraySchema(array[0]));
    }
    return getType(array[0]) !== "object" ? "Array<" + getType(array[0]) + ">" : convertToArray(getObjectSchema(array[0]));
}


/**
 * GET THE SCHEMA FOR ANY JAVASCRIPT OBJECT (KEY-VALUE) PAIRS
 *
 * @param   {object}  obj  JAVASCRIPT OBJECT (KEY,VALUE) PAIRS
 *
 * @return  {Schema}       RETURNS THE SCHEMA FOR GIVEN JS OBJECT
 */
function getObjectSchema(obj) {
    const keys = Object.keys(obj);
    const values = keys.map(key => {
        if (getType(obj[key]) === "Array") {
            return getArraySchema(obj[key]);
        }
        return getType(obj[key]) !== "object" ? getType(obj[key]) : getObjectSchema(obj[key]);
    });
    return convertToObject(keys, values);
}

/**
 * ADDS [] AT THE BEGINING AND END
 *
 * @param   {object}  obj  ANY JAVASCRIPT OBJECT
 *
 * @return  {Array}       RETURNS JAVASRIPT ARRAY
 */
function convertToArray(obj) {
    let arr = [];
    arr.push(obj);
    return arr;
}

/**
 *  CONVERT ANY JAVASCRIPT OBJECT TO ARRAY.
 *
 * @param   {object}  ...obj  ANY JAVASCRIPT OBJECT
 *
 * @return  {Array}          RETURNS JAVASRIPT ARRAY
 */
function ObjectToArray(...obj) {
    return obj;
}



/**
 * RETURNS A JAVASCRIPT OBJECT (KEY-VALUE) PAIRS
 *
 * @param   {Array}  keys    ARRAY OF KEYS
 * @param   {Array}  values  ARRAY OF VALUES
 *
 * @return  {object}         RETURNS JAVASCRIPT OBJECT (KEY-VALUE) PAIRS
 */
function convertToObject(keys, values) {
    let obj = {};
    for (const [index, key] of keys.entries()) {
        obj[key] = values[index];
    }
    return obj;
}


// ##########################################################################