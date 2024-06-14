<?php

namespace Drupal\hi_how_are_you\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal;

class HiHowAreYouController extends ControllerBase {

  public function content() {
    // Dynamically get the path to the current module
    $module_path = Drupal::moduleHandler()->getModule('hi_how_are_you')->getPath();

    // Construct the path to testText.php within the module directory
    $file_path = $module_path . '/includes/testText.php';

    // Start output buffering to capture the output of testText.php
    ob_start();
    include_once $file_path; // Use the dynamically constructed path
    $testTextOutput = ob_get_clean(); // Capture the output

    // Return a render array with the captured content inside the <h2> tag
    return [
      '#type' => 'markup',
      '#markup' => $this->t('<h2>' . $testTextOutput . '</h2>'),
    ];
  }
  
}
