<?php

/**
 * @file
 * Alterations for this form.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_FORM_ID_alter().
 */
function uswds_form_user_login_form_alter(&$form, FormStateInterface $form_state, $form_id) {

  // Remove unnecessary help text.
  unset($form['name']['#description']);
  unset($form['pass']['#description']);

  // Allow logging in with username.
  $form['name']['#title'] = t('Username');
}
