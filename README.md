# AttendX Test Scripts

AttendX is a student attendance application. This repository contains sample automation tests maintained with Git and GitHub by the QA team.

## Test scripts

- `login_test.js`: verifies that a student with valid credentials can log in successfully.
- `attendance_marking_test.js`: verifies that attendance can be saved as `Present` for a student, course, and date.

## Run the tests

Install Node.js, open this repository in a terminal, and run:

```powershell
node login_test.js
node attendance_marking_test.js
```

Each script prints a `PASS` message when its checks succeed.

## Git workflow

The scripts are version-controlled so the QA team can collaborate without overwriting each other's work. Changes are staged, committed with meaningful messages, pushed to GitHub, and pulled when remote updates are available.

This line was added directly on GitHub to demonstrate pulling remote changes into the local repository.
