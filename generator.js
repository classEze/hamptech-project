// image_scanner.js

const fs = require('fs');
const path = require('path');

// --- Configuration ---
// The directory you want to scan, relative to where you run this script.
// Ensure this path correctly points to your /assets/images/project_1 directory.
// For example, if your script is at the project root, and the images are in 'assets/images/project_1',
// then this path should be 'assets/images/project_1'.
const IMAGES_DIRECTORY = path.join(__dirname, 'assets', 'images', 'project_1');

// The output JSON file name.
const OUTPUT_FILE_NAME = 'images.js';

// The base path that will be prepended to each image name in the output JSON.
// This should match how you want to reference the images in your HTML/CSS.
const BASE_WEB_PATH = './assets/images/project_1/';

// Supported image file extensions (case-insensitive).
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff'];
// --- End Configuration ---

console.log(`Scanning directory: ${IMAGES_DIRECTORY}`);

fs.readdir(IMAGES_DIRECTORY, (err, files) => {
    if (err) {
        // Handle error if the directory cannot be read (e.g., doesn't exist or permissions issue)
        console.error(`Error reading directory "${IMAGES_DIRECTORY}":`, err);
        return; // Exit the script
    }

    const imagePaths = [];

    // Iterate over the files found in the directory
    files.forEach(file => {
        const fileExtension = path.extname(file).toLowerCase(); // Get extension and convert to lowercase
        
        // Check if the file has a supported image extension
        if (IMAGE_EXTENSIONS.includes(fileExtension)) {
            // Construct the full relative path for web use
            const fullWebPath = `${BASE_WEB_PATH}${file}`;
            imagePaths.push(fullWebPath);
        }
    });

    const jsonOutput = JSON.stringify(imagePaths, null, 2);

    // Convert the array of paths to a JSON string, formatted for readability

    // Define the path for the output JSON file
    // It will be created in the same directory as this script.
    const outputFilePath = path.join(__dirname, OUTPUT_FILE_NAME);

    // Write the JSON string to the specified output file
    fs.writeFile(outputFilePath, jsonOutput, 'utf8', (writeErr) => {
        if (writeErr) {
            console.error(`Error writing file "${outputFilePath}":`, writeErr);
            return;
        }
        console.log(`Successfully wrote image paths to "${outputFilePath}"`);
        console.log('You can now use this JSON file in your frontend to dynamically load images.');
    });
});
