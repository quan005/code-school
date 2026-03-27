# Child Safety Account Model

## MVP Shape

- Adult account holders own learner profiles.
- Learner profiles do not have their own login or public page.
- Learner profiles store only the minimum fields needed for the MVP:
  - internal profile id
  - display name / learner label
  - optional grade level
  - progress, mastery, and submission records

## Data Model Decisions

- `User.role = ADULT_ACCOUNT_HOLDER` is the default account type.
- `StudentProfile.accountHolderId` ties each learner to an adult-managed account.
- `StudentProfile.isPublic = false` keeps learner profiles private by default.
- `TeacherStudentAssignment` reserves room for future teacher-managed classroom access without changing the learner identity model.

## Privacy Assumptions

- Learner profiles should prefer aliases or first-name-style labels rather than full legal names.
- No public learner directory exists.
- No messaging or user-to-user contact is part of the MVP.
- Lesson content stays in the repo. Student state stays in DB or local cookie fallback.

## Future Compatibility

- Parent and guardian features can continue to attach to the adult `User`.
- Teacher access can expand through assignment records instead of exposing learner accounts directly.
- COPPA-oriented consent and policy workflows will need a later auth and compliance epic.
