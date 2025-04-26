<?php

// Configuration
$componentsDirectory = 'C:\xampp\htdocs\subdomain-blueJean\js';
//$componentsDirectory = '';

$outputFile = 'Components_content.txt';

// Get all Vue files in the directory
//$componentPaths = glob($componentsDirectory . '/*.vue');
//$componentPaths = glob($componentsDirectory . '/*.html');
$componentPaths = glob($componentsDirectory . '/*.js');

// Add additional files manually
$additionalFiles = [
//    'C:\xampp\htdocs\subdomain-blueJean\products.html',
//    'C:\xampp\htdocs\subdomain-blueJean\product.html',
//    'C:\xampp\htdocs\subdomain-blueJean\js\products-page.js',
//    'C:\xampp\htdocs\subdomain-blueJean\js\product-page.js',
//    'C:\xampp\htdocs\subdomain-blueJean\js\app.js',
];

// Merge Vue files and additional files into one array
$allFiles = array_merge($componentPaths, $additionalFiles);

// Initialize content string
$finalContent = '';

// Process each file
foreach ($allFiles as $index => $targetFile) {
    // Read the content of the target file
    $content = file_get_contents($targetFile);

    if ($content === false) {
        echo "Error: Unable to read the file {$targetFile}\n";
        continue;
    }

    // Add file path header
    $fileContent = "File Path: {$targetFile}\n\n" . $content;

    // Add to final content with separator (except for the first file)
    if ($index > 0) {
        $finalContent .= "\n\n\n\n\n\n"; // 6 new lines as separator
    }

    $finalContent .= $fileContent;
}

// Write the combined content to the output file
if (!empty($finalContent)) {
    $result = file_put_contents($outputFile, $finalContent);

    if ($result === false) {
        echo "Error: Unable to write to the file {$outputFile}\n";
    } else {
        echo "Successfully copied the content of " . count($allFiles) . " files to {$outputFile}\n";
    }
} else {
    echo "Error: No content was retrieved from the files\n";
}
