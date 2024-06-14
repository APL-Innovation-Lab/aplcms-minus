<?php

namespace Drupal\migrate_users\Plugin\migrate\process;

use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;

/**
 * Merges new roles with existing roles.
 *
 * @MigrateProcessPlugin(
 *   id = "merge_roles"
 * )
 */
class MergeRoles extends ProcessPluginBase {

  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    $uid = $row->getSourceProperty('uid');
    $user = \Drupal::entityTypeManager()->getStorage('user')->load($uid);
    if ($user) {
      $existing_roles = $user->getRoles();
      // Remove the 'authenticated' role that all users get by default.
      $existing_roles = array_diff($existing_roles, ['authenticated']);
      $value = array_unique(array_merge($existing_roles, $value));
    }
    return $value;
  }
}

