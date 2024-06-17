-- Remove comment display names and emails
UPDATE comment_field_data SET name = CONCAT('Anonymous', cid), mail = CONCAT('anonymous', cid, '@example.com');

-- Truncate sessions table
TRUNCATE TABLE sessions;

-- Sanitize user passwords
UPDATE users_field_data SET pass = CONCAT('dummy_pass', uid);

-- Sanitize user emails
UPDATE users_field_data SET mail = CONCAT('dummy', uid, '@example.com');

-- Sanitize user names
UPDATE users_field_data SET name = CONCAT('User', uid);

-- Sanitize user fields
UPDATE users_field_data SET init = mail, timezone = '', created = 0;

-- Additional sanitizations from the uploaded file
UPDATE node__field_ahc_protest_email_address SET field_ahc_protest_email_address_value = CONCAT('dummy', entity_id, '@example.com');
UPDATE node__field_ahc_d_email_address SET field_ahc_d_email_address_value = CONCAT('dummy', entity_id, '@example.com');
UPDATE node__field_email SET field_email_value = CONCAT('dummy', entity_id, '@example.com');
UPDATE node__field_group_rep_email SET field_group_rep_email_value = CONCAT('dummy', entity_id, '@example.com');
UPDATE node__field_ppp_email SET field_ppp_email_value = CONCAT('dummy', entity_id, '@example.com');
UPDATE node_revision__field_zine_email_address SET field_zine_email_address_value = CONCAT('dummy', entity_id, '@example.com');

-- Sanitize name fields
UPDATE node__field_group_rep_full_name SET field_group_rep_full_name_value = CONCAT('User', entity_id);
UPDATE node__field_name_archival_and_communit SET field_name_archival_and_communit_value = CONCAT('User', entity_id);
UPDATE node__field_firstname SET field_firstname_value = CONCAT('User', entity_id);

-- Sanitize phone fields
UPDATE node__field_group_rep_phone SET field_group_rep_phone_value = '123-456-7890';
UPDATE node__field_ppp_phone SET field_ppp_phone_value = '123-456-7890';
UPDATE node__field_jp_phone SET field_jp_phone_value = '123-456-7890';


-- Sanitize fields in the meeting_room_reservation_request webform
UPDATE webform_submission_data SET value = 'Dummy Group' WHERE name = 'group_name' AND webform_id = 'meeting_room_reservation_request';
UPDATE webform_submission_data SET value = 'Group purpose sanitized' WHERE name = 'purpose_of_group' AND webform_id = 'meeting_room_reservation_request';
UPDATE webform_submission_data SET value = 'https://example.com' WHERE name = 'website' AND webform_id = 'meeting_room_reservation_request';
UPDATE webform_submission_data SET value = CONCAT('User', sid) WHERE name = 'group_representative_full_name' AND webform_id = 'meeting_room_reservation_request';
UPDATE webform_submission_data SET value = '123-456-7890' WHERE name = 'group_representative_phone_number' AND webform_id = 'meeting_room_reservation_request';
UPDATE webform_submission_data SET value = CONCAT('dummy', sid, '@example.com') WHERE name = 'group_representative_email_address' AND webform_id = 'meeting_room_reservation_request';
UPDATE webform_submission_data SET value = 'Sanitized topic' WHERE name = 'topic' AND webform_id = 'meeting_room_reservation_request';

-- Sanitize fields in the shared_learning_room_reservation webform
UPDATE webform_submission_data SET value = 'Sanitized topic' WHERE name = 'meeting_topic' AND webform_id = 'shared_learning_room_reservation';
UPDATE webform_submission_data SET value = CONCAT('User', sid) WHERE name = 'full_name' AND webform_id = 'shared_learning_room_reservation';
UPDATE webform_submission_data SET value = CONCAT('dummy', sid, '@example.com') WHERE name = 'email' AND webform_id = 'shared_learning_room_reservation';
