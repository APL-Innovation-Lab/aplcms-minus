<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_textarea().
 */
function uswds_preprocess_textarea(&$variables) {
  $variables['attributes']['class'][] = 'usa-textarea';
}
