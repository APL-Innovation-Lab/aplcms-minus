<?php

/**
 * @file
 * Preprocess function for this hook.
 */

/**
 * Implements hook_preprocess_form_element().
 */
function uswds_preprocess_form_element(&$variables) {
  if (!array_key_exists('class', $variables['attributes'])) {
    // ensure that $variables['class'] exists
    $variables['attributes']['class'] = [];
  }
  if (!is_array($variables['attributes']['class'])) {
    // ensure that $variables['class'] is an array
    $variables['attributes']['class'] = [$variables['attributes']['class']];
  }

  switch ($variables['type']) {
    case 'checkbox':
      $variables['attributes']['class'][] = 'usa-checkbox';
      $variables['label']['#attributes']['class'][] = 'usa-checkbox__label';
      break;

    case 'radio':
      $variables['attributes']['class'][] = 'usa-radio';
      $variables['label']['#attributes']['class'][] = 'usa-radio__label';
      break;

    default:
      $variables['attributes']['class'][] = 'usa-form-group';
      break;
  }

  if (!empty($variables['errors'])) {
    if (!empty($variables['element']['#attributes']) && isset($variables['element']['#attributes']['id'])) {
      $variables['error_id'] = $variables['element']['#attributes']['id'];
    }
    elseif (!empty($variables['element']['#id'])) {
      $variables['error_id'] = $variables['element']['#id'];
    }

    $variables['attributes']['class'][] = 'usa-form-group--error';
  }
}
