# Git Observation Log

| Command | Purpose | Expected observation |
| --- | --- | --- |
| `git config --global user.name "Your Name"` | Configure the Git author name | Name is stored globally |
| `git config --global user.email "your-email@example.com"` | Configure the Git author email | Email is stored globally |
| `git init` | Create a local repository | Git creates a `.git` directory |
| `git status` | Check changed and untracked files | New scripts and documentation appear as untracked |
| `git add .` | Stage all repository files | Files are ready for commit |
| `git commit -m "Add initial AttendX automation tests"` | Save the first version | Initial commit is created |
| `git remote add origin <GitHub-URL>` | Connect local and GitHub repositories | `origin` remote is configured |
| `git push -u origin main` | Upload local commits to GitHub | `main` branch is published remotely |
| `git add attendance_marking_test.js` | Stage a script modification | Modified script is staged |
| `git commit -m "Update attendance marking test"` | Save the script change | Second commit is created |
| `git push` | Upload the second commit | GitHub receives the change |
| `git pull origin main` | Download and merge GitHub changes | Local files include the latest remote edit |
| `git log --oneline --decorate --all` | Display commit history | Both commits and their messages are listed |

## Actual observed outputs

```text
git config --global user.name; git config --global user.email
Dhruv Bhagat
23cs005@charusat.edu.in

git status --short --branch
## main...origin/main

git push -u origin main
To https://github.com/Dhruvbhagat24/AttendX-Test-Scripts.git
* [new branch] main -> main

git push
To https://github.com/Dhruvbhagat24/AttendX-Test-Scripts.git
6c12133..7936f4f main -> main

git pull origin main
Updating 7936f4f..588e086
Fast-forward
 README.md | 4 +++-
1 file changed, 3 insertions(+), 1 deletion(-)

git log --oneline --decorate --all
588e086 (HEAD -> main, origin/main) Update README with pull testing note
7936f4f Update attendance marking test
6c12133 Add initial AttendX automation tests

git status
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

## Commit explanation

- **Add initial AttendX automation tests**: adds the login test, attendance-marking test, README, and this observation log.
- **Update attendance marking test**: records the later change made to the attendance test.
- **Update README on GitHub**: records the direct edit made on GitHub and pulled into the local repository.