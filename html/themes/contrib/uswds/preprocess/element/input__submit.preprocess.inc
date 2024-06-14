<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_input__textfield().
 */
function uswds_preprocess_input__submit(&$variables) {
  $variables['attributes']['class'][] = 'usa-button';
}
