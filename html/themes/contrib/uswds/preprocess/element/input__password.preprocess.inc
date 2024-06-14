<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_input__password().
 */
function uswds_preprocess_input__password(&$variables) {
  $variables['attributes']['class'][] = 'usa-input';
}
