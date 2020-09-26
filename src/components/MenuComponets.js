
// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.
import Vue from 'vue'
import {split} from "ts-node";
import upperFist from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
// Look for files in the current directory
    '../pages/',
// Do not look in subdirectories
    true,
// Only include "_base-" prefixed .vue files
    /Default[\w-]+\.vue$/
)
// For each matching file name...
requireComponent.keys().forEach((fileName) => {

// Get the component config
    const componentConfig = requireComponent(fileName)
// Get the PascalCase version of the component name
    const fileNames = fileName.split("/");
    console.log("fileNames",fileNames.length);
    const componentName = fileNames[fileNames.length-1].split(".")[0];
    // const componentName = fileName
    //     // Remove the "./_" from the beginning
    //     .replace(/^\.\/_/, '')
    //     // Remove the file extension from the end
    //     .replace(/\.\w+$/, '')
    //     // Split up kebabs
    //     .split('/')
    //     // Upper case
    //     .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    //     // Concatenated
    //     .join('')
    console.log("fileName",fileName);
    console.log("componentName",componentName);
// Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig)
})