# Generate Schema Of JavaScript Objects

## * Get Object Types
## * Array To Object Conversion (key-value) pairs
## * Convert to JavaScript Objects to JavaScript Array
## * Add [] to JavaScript Objects
## * Generate Array Schema
## * Generate Object Schema

### Java Script Types:

# VALUE        TYPEOF
## null         object
## object       object
## array        object
## undefined    undefined
## string       string
## number       number
## boolean      boolean

# Get the object types

## getType(variable);

console.log(getType(null)); // null
console.log(getType(undefined)); // undefined
console.log(getType('')); //string
console.log(getType("sfj")); //string
console.log(getType(`null`)); //string
console.log(getType('')); //string
console.log(getType(45)); //number
console.log(getType({ hello: 'hi' })); //object
console.log(getType({ 'hello': 'hi' })); //object
console.log(getType(`{'hello':'hi'}`)); //string
console.log(getType([null, undefined])); //array
console.log(getType(['sd', '67'])); // array
console.log(getType(`['sd','67']`)); //string
console.log(getType('[5,6,7]')); //string
console.log(getType(true)); //boolean
console.log(getType(false)); //boolean

# converting to key-value pairs

## convertToObject(keys, values);
### keys => Array of Keys
### values => Array of values

### const keys = ['name', 'age', 'gender'];
### const values = ['Rob', '22', 'Male'];
### const obj = convertToObject(keys, values);
### console.log(obj);

### output:
### { name: 'Rob', age: '22', gender: 'Male' }

# Converting to JavaScript Array

## ObjectToArray(obj);

### ObjectToArray(4);   // [ 4 ]
### ObjectToArray('hello'); // [ 'hello' ]
### ObjectToArray(2,3); // [ 2, 3 ]
### ObjectToArray({name:'Rob'},{name:'John'});  // [ { name: 'Rob' }, { name: 'John' } ]


# Add [] to JavaScript Objects

## convertToArray(obj)

### console.log(convertToArray(4)); // [ 4 ]
### console.log(convertToArray('hello'));   // [ 'hello' ]
### console.log(convertToArray({ name: 'Rob' }));   // [ { name: 'Rob' } ]

# Generate Array Schema

## getArraySchema(array);

### Examples:

### array :

 ### 1.

 [{
    name: 'sfldkf',
    class: 7,
    subjects: [undefined, undefined, undefined],
    referer: {
        name: 'sfldkf',
        class: 7,
        subjects: [null, null, null],
        diff: {
            name: 'sfldkf',
            class: 7,
            subjects: ['dsf', 'sfdf', 'sdfsdf']
        }
    }
}]

### 2.

[
    [
        [
            [{
                name: 'sfldkf',
                class: 7,
                subjects: ['dsf', 'sfdf', 'sdfsdf']
            }]
        ]
    ]
]

### Schema : 

### 1.

[
  {
    "name": "string",
    "class": "number",
    "subjects": "Array<undefined>",
    "referer": {
      "name": "string",
      "class": "number",
      "subjects": "Array<null>",
      "diff": [Object]
    }
  }
]

### 2.

[ [ [ [Array] ] ] ]


### JSON.stringify(Schema);

### 1.

[
  {
    "name": "string",
    "class": "number",
    "subjects": "Array<undefined>",
    "referer": {
      "name": "string",
      "class": "number",
      "subjects": "Array<null>",
      "diff": {
        "name": "string",
        "class": "number",
        "subjects": "Array<string>"
      }
    }
  }
]

### 2.

[[[[{ "name": "string", "class": "number", "subjects": "Array<string>" }]]]]


# Generate Object Schema

## getObjectSchema(obj);

### Examples:

### Object :

{
    name: 'ksdjfk',
    class: 6,
    subjects: [
        ['dslf', 'slkfj', 'sldfj', 'sdfkjl'],
        ['dslf', 'slkfj', 'sldfj', 'sdfkjl']
    ],
    referer: {
        name: 'sfldkf',
        class: 7,
        subjects: {
            name: 'sfldkf',
            cors: {
                name: 'sfldkf',
                class: 7,
                diff: {
                    name: 'sfldkf',
                    class: 7,
                    subjects: [
                        [
                            [{
                                name: 'sfldkf',
                                class: 7,
                                subjects: [{
                                    name: 'sfldkf',
                                    class: 7,
                                    subjects: ['dsf', 'sfdf', 'sdfsdf']
                                }]
                            }],
                            [{
                                name: 'sfldkf',
                                class: 7,
                                subjects: [{
                                    name: 'sfldkf',
                                    class: 7,
                                    subjects: ['dsf', 'sfdf', 'sdfsdf']
                                }]
                            }]
                        ],
                        [
                            [{
                                name: 'sfldkf',
                                class: 7,
                                subjects: [{
                                    name: 'sfldkf',
                                    class: 7,
                                    subjects: ['dsf', 'sfdf', 'sdfsdf']
                                }]
                            }],
                            [{
                                name: 'sfldkf',
                                class: 7,
                                subjects: [{
                                    name: 'sfldkf',
                                    class: 7,
                                    subjects: ['dsf', 'sfdf', 'sdfsdf']
                                }]
                            }]
                        ]
                    ]
                }
            },
            class: 7,
            subjects: ['dsf', 'sfdf', 'sdfsdf']
        }
    },
    array: [{
        name: 'sfldkf',
        class: 7,
        subjects: [undefined, undefined, undefined],
        referer: {
            name: 'sfldkf',
            class: 7,
            subjects: [null, null, null],
            diff: {
                name: 'sfldkf',
                class: 7,
                subjects: ['dsf', 'sfdf', 'sdfsdf']
            }
        }
    }],
    'hello': {
        fine: 34,
        dal: 'slkf',
        subjects: {
            name: 'sfldkf',
            class: 7,
            subjects: ['dsf', 'sfdf', 'sdfsdf']
        }
    }
}

### Schema:

{
  "name": "string",
  "class": "number",
  "subjects": ["Array<string>"],
  "referer": {
    "name": "string",
    "class": "number",
    "subjects": {
      "name": "string",
      "cors": [Object],
      "class": "number",
      "subjects": "Array<string>"
    }
  },
  "array": [
    {
      "name": "string",
      "class": "number",
      "subjects": "Array<undefined>",
      "referer": [Object]
    }
  ],
  "hello": {
    "fine": "number",
    "dal": "string",
    "subjects": {
      "name": "string",
      "class": "number",
      "subjects": "Array<string>"
    }
  }
}

### JSON.stringify(Schema);

{
  "name": "string",
  "class": "number",
  "subjects": ["Array<string>"],
  "referer": {
    "name": "string",
    "class": "number",
    "subjects": {
      "name": "string",
      "cors": {
        "name": "string",
        "class": "number",
        "diff": {
          "name": "string",
          "class": "number",
          "subjects": [
            [
              [
                {
                  "name": "string",
                  "class": "number",
                  "subjects": [
                    {
                      "name": "string",
                      "class": "number",
                      "subjects": "Array<string>"
                    }
                  ]
                }
              ]
            ]
          ]
        }
      },
      "class": "number",
      "subjects": "Array<string>"
    }
  },
  "array": [
    {
      "name": "string",
      "class": "number",
      "subjects": "Array<undefined>",
      "referer": {
        "name": "string",
        "class": "number",
        "subjects": "Array<null>",
        "diff": {
          "name": "string",
          "class": "number",
          "subjects": "Array<string>"
        }
      }
    }
  ],
  "hello": {
    "fine": "number",
    "dal": "string",
    "subjects": {
      "name": "string",
      "class": "number",
      "subjects": "Array<string>"
    }
  }
}







