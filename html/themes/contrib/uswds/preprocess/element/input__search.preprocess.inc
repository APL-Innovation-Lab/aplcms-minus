<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_input__search().
 */
function uswds_preprocess_input__search(&$variables) {
  $variables['attributes']['class'][] = 'usa-input';
}
