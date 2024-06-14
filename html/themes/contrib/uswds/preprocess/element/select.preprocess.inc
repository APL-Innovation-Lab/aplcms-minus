<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_select().
 */
function uswds_preprocess_select(&$variables) {
  // Add the usa-select class to select form elements.
  $variables['attributes']['class'][] = 'usa-select';
}
