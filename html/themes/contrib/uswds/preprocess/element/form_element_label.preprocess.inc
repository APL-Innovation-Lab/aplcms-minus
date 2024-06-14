<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_form_element_label().
 */
function uswds_preprocess_form_element_label(&$variables) {
  $variables['attributes']['class'][] = 'usa-label';

  if (!empty($variables['required'])) {
    $variables['attributes']['class'][] = 'usa-input--required';
  }
  $form_optional_label = theme_get_setting('uswds_form_optional_label');
  $variables['form_optional_label'] = $form_optional_label === NULL ? TRUE : $form_optional_label;
}
