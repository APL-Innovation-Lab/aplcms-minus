<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_input__email().
 */
function uswds_preprocess_input__email(&$variables) {
  $variables['attributes']['class'][] = 'usa-input';
}
