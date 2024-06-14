<?php

/**
 * @file
 * Utility code related to search block.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Helper function to see if we should alter the search.
 *
 * @return bool
 */
function _uswds_process_search() {
  $search_bypass = theme_get_setting('uswds_search_bypass');

  return (!empty($search_bypass));
}

/**
 * Implements hook_form_FORM_ID_alter().
 */
function uswds_form_search_block_form_alter(&$form, FormStateInterface $form_state, $form_id) {
  $bypass = _uswds_process_search();
  if (!$bypass) {
    $search_setting = theme_get_setting('uswds_search_style') ?? 'small';
    // No need to control the size.
    unset($form['keys']['#size']);
    $form['keys']['#label_attributes']['class'][] = 'usa-sr-only';
    // Add a unique ID for the search input.
    $form['keys']['#attributes']['id'] = "edit-search-keys";
    // Add add SR label and aria-label.
    $form['actions']['submit']['#prefix'] = '<span class="usa-sr-only">Search</span>';
    $form['actions']['submit']['#attributes']['aria-label'] = 'Submit Search';
    // Unique ID for actions.
    $form['actions']['#attributes']['id'] = "search-actions";
    // Unique ID for search form submit.
    $form['actions']['submit']['#id'] = 'search-form--submit';
    if ($search_setting === 'small') {
      $form['actions']['submit']['#value'] = '';
    }
  }
}

function uswds_preprocess_form(&$vars) {
  $bypass = _uswds_process_search();
  if (!$bypass && $vars['element']['#form_id'] == 'search_block_form') {
    $search_setting = theme_get_setting('uswds_search_style') ?? 'small';
    if ($search_setting !== 'default') {
      $vars['attributes']['class'][] = 'usa-search--' . $search_setting;
    }
    $vars['attributes']['class'][] = 'usa-search';
    $vars['attributes']['role'][] = 'search';
  }
}
