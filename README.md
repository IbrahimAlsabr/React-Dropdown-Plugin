# React Dropdown Plugin

A reusable and customizable dropdown component for React applications.

## Installation

Install the plugin using npm:

```bash
npm install react-dropdown-plugin
```

## Usage

### Importing the Component

First, import the DropDown component into your React project:

```js
import React from "react";
```

```js
import DropDown from "react-dropdown-plugin";
```

### Basic Example

Here is a basic example of how to use the DropDown component:

```js
import React from "react";
import DropDown from "react-dropdown-plugin";

const App = () => {
    const data = [
        { name: "Apple", abbreviation: "APL" },
        { name: "Banana", abbreviation: "BNN" },
        { name: "Cherry", abbreviation: "CHY" },
    ];

    const handleSelect = (option) => {
        console.log("Selected option:", option);
    };

    return (
        <div>
            <h1>Fruit Selector</h1>
            <DropDown
                data={data}
                onSelect={handleSelect}
                ASC={true}
                initialOption="Banana"
            />
        </div>
    );
};

export default App;
```

### Props
The DropDown component accepts the following props:

**data: (required)** An array of objects representing the dropdown options. Each object should have a name property and can optionally have an abbreviation property.

**onSelect: (required)** A function to be called when an option is selected. The selected option is passed as an argument.

**ASC: (optional)** A boolean to indicate if the options should be sorted in ascending order by name. Defaults to false.

**initialOption: (optional)** The initial option to be selected. Should match one of the name properties in the data array.

### Styling

The DropDown component has basic styling which can be customized with CSS. Here's an example of how you can style the component:

```css
.dropdown {
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    background-color: #fff;
}

.dropdown-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.dropdown-icon {
    margin-left: 10px;
}

.dropdown-list {
    position: absolute;
    width: 100%;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 150px;
    overflow-y: auto;
    background-color: #fff;
}

.dropdown-item {
    padding: 10px;
}

.dropdown-item:hover {
    background-color: #d3cdcd;
}
```

Include this stylesheet in your project and import it in your component file:

```js
import "./styles.css";
```

## License

This project is licensed under the MIT License.
